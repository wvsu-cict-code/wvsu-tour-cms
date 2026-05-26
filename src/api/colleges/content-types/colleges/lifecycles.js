'use strict';

const { syncEntryToFirestore, deleteEntryFromFirestore } = require('../../../../utils/firestore-sync');

module.exports = {
  async afterCreate(event) {
    await syncEntryToFirestore(event, 'colleges');
  },

  async afterUpdate(event) {
    await syncEntryToFirestore(event, 'colleges');
  },

  async afterDelete(event) {
    await deleteEntryFromFirestore(event, 'colleges');
  },
};
