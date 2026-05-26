'use strict';

const { syncEntryToFirestore, deleteEntryFromFirestore } = require('../../../../utils/firestore-sync');

module.exports = {
  async afterCreate(event) {
    await syncEntryToFirestore(event, 'facilities_amenities');
  },

  async afterUpdate(event) {
    await syncEntryToFirestore(event, 'facilities_amenities');
  },

  async afterDelete(event) {
    await deleteEntryFromFirestore(event, 'facilities_amenities');
  },
};
