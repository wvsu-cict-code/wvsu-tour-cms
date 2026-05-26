'use strict';

const OMIT_KEYS = new Set([
  '_id',
  '__v',
  'id',
  'documentId',
  'created_by',
  'updated_by',
  'createdBy',
  'updatedBy',
  'createdAt',
  'updatedAt',
  'publishedAt',
  'related',
]);

const sanitizeForFirestore = (value) => {
  if (Array.isArray(value)) {
    return value.map(sanitizeForFirestore);
  }

  if (value && typeof value === 'object') {
    const out = {};

    for (const [key, nested] of Object.entries(value)) {
      if (OMIT_KEYS.has(key)) continue;
      out[key] = sanitizeForFirestore(nested);
    }

    return out;
  }

  return value;
};

const resolveDocumentId = (result) => {
  return result?.documentId || result?.id || result?._id || null;
};

const syncEntryToFirestore = async (event, collectionName) => {
  if (!strapi.firebaseDB) return;

  const documentId = resolveDocumentId(event?.result);
  if (!documentId) return;

  const sanitized = sanitizeForFirestore(event.result);
  await strapi.firebaseDB.collection(collectionName).doc(String(documentId)).set(sanitized);
};

const deleteEntryFromFirestore = async (event, collectionName) => {
  if (!strapi.firebaseDB) return;

  const documentId = resolveDocumentId(event?.result);
  if (!documentId) return;

  await strapi.firebaseDB.collection(collectionName).doc(String(documentId)).delete();
};

module.exports = {
  syncEntryToFirestore,
  deleteEntryFromFirestore,
};
