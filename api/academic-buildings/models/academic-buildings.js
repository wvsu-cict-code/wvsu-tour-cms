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
    }
    if (data['FeaturedImage']) {
      delete data['FeaturedImage']._id
      delete data['FeaturedImage'].related
      delete data['FeaturedImage'].created_by
      delete data['FeaturedImage'].updated_by
    }
  })
}

module.exports = {
  lifecycles: {
    async afterCreate(data) {
      const doc = data._id
      strip_id(data)
      const res = await strapi.firebaseDB.collection('academic_buildings').doc(JSON.stringify(doc)).set(data);
    },
    async afterUpdate(data) {
      const doc = data._id
      strip_id(data)
      const res = await strapi.firebaseDB.collection('academic_buildings').doc(JSON.stringify(doc)).set(data);
    },
    async afterDelete(data) {
      const doc = data._id
      strip_id(data)
      const res = await strapi.firebaseDB.collection('academic_buildings').doc(JSON.stringify(doc)).remove();
    },
  }
};
