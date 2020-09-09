'use strict';

module.exports = () => {

  const io = require('socket.io')(strapi.server);
  const admin = require('firebase-admin').default;


  const serviceAccount = require('./serviceapp.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  const firebaseDB = admin.firestore();

  io.on('connection', function (socket) {

    socket.emit('hello', JSON.stringify({
      message: 'Hello data lover'
    }));

    socket.on('disconnect', () => console.log('a user disconnected'));
  });

  strapi.io = io;
  strapi.firebaseDB = firebaseDB;

};
