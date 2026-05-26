'use strict';

const { syncEntryToFirestore, deleteEntryFromFirestore } = require('../../../../utils/firestore-sync');

module.exports = {
  async afterCreate(event) {
    await syncEntryToFirestore(event, 'privacy_policies');
  },

  async afterUpdate(event) {
    await syncEntryToFirestore(event, 'privacy_policies');
  },

  async afterDelete(event) {
    await deleteEntryFromFirestore(event, 'privacy_policies');
  },
};
