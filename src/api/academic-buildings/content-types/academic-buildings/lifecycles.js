'use strict';

const { syncEntryToFirestore, deleteEntryFromFirestore } = require('../../../../utils/firestore-sync');

module.exports = {
  async afterCreate(event) {
    await syncEntryToFirestore(event, 'academic_buildings');
  },

  async afterUpdate(event) {
    await syncEntryToFirestore(event, 'academic_buildings');
  },

  async afterDelete(event) {
    await deleteEntryFromFirestore(event, 'academic_buildings');
  },
};
