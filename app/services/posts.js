import Service from '@ember/service';
import Post from 'tomstagram/models/post';

export default Service.extend({
  create(attrs = {}) {
    const model = new Post();

    for (const attr in attrs) {
      model.set(attr, attrs[attr])
    }

    return model;
  }
});
