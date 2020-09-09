'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */
function strip_id(data) {

  delete data._id

  delete data.id

  delete data.__v

  delete data.created_by

  delete data.updated_by

  Object.keys(data).map(i => {
    if (data[i]['_id']) {
      delete data[i]['_id']
      delete data[i]['created_by']
      delete data[i]['updated_by']
      delete data[i]['FeaturedImage']['_id']
      delete data[i]['Logo']['_id']
    }

    if (data['FeaturedImage']) {
      delete data['FeaturedImage']._id
      delete data['FeaturedImage'].related
      delete data['FeaturedImage'].created_by
      delete data['FeaturedImage'].updated_by
    }

    if (data['Logo']) {
      delete data['Logo']._id
      delete data['Logo'].related
      delete data['Logo'].created_by
      delete data['Logo'].updated_by
    }

    if (data['Photos']) {
      Object.keys(data['Photos']).map(j => {
        delete data['Photos'][j]._id
        delete data['Photos'][j].related
        delete data['Photos'][j].created_by
        delete data['Photos'][j].updated_by
      })
    }
  })
}
module.exports = {
  lifecycles: {
    async afterCreate(data) {
      const doc = data._id
      strip_id(data)
      const res = await strapi.firebaseDB.collection('colleges').doc(JSON.stringify(doc)).set(data);
    },
    async afterUpdate(data) {
      const doc = data._id
      strip_id(data)
      const res = await strapi.firebaseDB.collection('colleges').doc(JSON.stringify(doc)).set(data);
    },
    async afterDelete(data) {
      const doc = data._id
      const res = await strapi.firebaseDB.collection('colleges').doc(JSON.stringify(doc)).delete();
    },
  }
};
