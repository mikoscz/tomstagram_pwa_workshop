import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Restricted from 'tomstagram/mixins/restricted';

export default Route.extend(Restricted, {
  posts: service(),

  model() {
    return this.posts.findAll()
  }
});
