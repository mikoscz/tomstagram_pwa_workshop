import Service from '@ember/service';
import ENV from 'tomstagram/config/environment';
import Parse from 'parse';
import Post from 'tomstagram/models/post';

export default Service.extend({
  init() {
    this._super(...arguments);

    const { serverURL, appId, appKey } = ENV.parse;

    Parse.serverURL = serverURL;
    Parse.initialize(
      appId,
      appKey
    );
  },

  create(attrs = {}) {
    const model = new Post();

    for (const attr in attrs) {
      model.set(attr, attrs[attr])
    }

    return model;
  },

  async findAll() {
    const response =  await new Parse.Query(Post)
      .descending("createdAt")
      .find();
    return response.map(object => object.attributes);
  }
});
