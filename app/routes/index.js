import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Restricted from 'tomstagram/mixins/restricted';
import ObjectProxy from '@ember/object/proxy';
import PromiseProxyMixin from '@ember/object/promise-proxy-mixin';

export default Route.extend(Restricted, {
  posts: service(),

  model() {
    const ObjectPromiseProxy = ObjectProxy.extend(PromiseProxyMixin);
    const proxy = ObjectPromiseProxy.create({
      promise: this.posts.findAll()
    });

    return {
      posts: proxy
    }
  }
});
