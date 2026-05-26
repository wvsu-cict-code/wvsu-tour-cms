'use strict';

const { syncEntryToFirestore, deleteEntryFromFirestore } = require('../../../../utils/firestore-sync');

module.exports = {
  async afterCreate(event) {
    await syncEntryToFirestore(event, 'school_organization');
  },

  async afterUpdate(event) {
    await syncEntryToFirestore(event, 'school_organization');
  },

  async afterDelete(event) {
    await deleteEntryFromFirestore(event, 'school_organization');
  },
};
