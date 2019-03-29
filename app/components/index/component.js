import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: '',

  session: service(),

  actions: {
    signOut() {
      this.session.signOut();
    }
  }
});
