import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: '',

  session: service(),
  router: service(),

  actions: {
    signIn(e) {
      e.preventDefault();

      this.session.authenticate(this.username);
      this.router.transitionTo('index');
    }
  }
});
