'use strict';

const { syncEntryToFirestore, deleteEntryFromFirestore } = require('../../../../utils/firestore-sync');

module.exports = {
  async afterCreate(event) {
    await syncEntryToFirestore(event, 'head_offices');
  },

  async afterUpdate(event) {
    await syncEntryToFirestore(event, 'head_offices');
  },

  async afterDelete(event) {
    await deleteEntryFromFirestore(event, 'head_offices');
  },
};
