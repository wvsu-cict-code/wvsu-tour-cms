'use strict';

const path = require('path');
const fs = require('fs');
const { Server } = require('socket.io');
const admin = require('firebase-admin');

module.exports = {
  register() {},

  bootstrap({ strapi }) {
    const serviceAccountPath = path.join(__dirname, '..', 'config', 'functions', 'serviceapp.json');

    if (fs.existsSync(serviceAccountPath)) {
      const serviceAccount = require(serviceAccountPath);
      if (!admin.apps.length) {
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
      }
      strapi.firebaseDB = admin.firestore();
    } else {
      strapi.log.warn('Firebase service account file not found at config/functions/serviceapp.json; Firestore sync is disabled.');
    }

    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: '*',
      },
    });

    io.on('connection', (socket) => {
      socket.emit('hello', JSON.stringify({ message: 'Hello data lover' }));
      socket.on('disconnect', () => strapi.log.info('a user disconnected'));
    });

    strapi.io = io;
  },

  destroy({ strapi }) {
    if (strapi.io) {
      strapi.io.close();
    }
  },
};
