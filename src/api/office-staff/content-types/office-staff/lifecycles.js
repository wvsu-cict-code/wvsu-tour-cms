'use strict';

const { syncEntryToFirestore, deleteEntryFromFirestore } = require('../../../../utils/firestore-sync');

module.exports = {
  async afterCreate(event) {
    await syncEntryToFirestore(event, 'office_staff');
  },

  async afterUpdate(event) {
    await syncEntryToFirestore(event, 'office_staff');
  },

  async afterDelete(event) {
    await deleteEntryFromFirestore(event, 'office_staff');
  },
};
