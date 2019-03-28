import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
  session: service(),

  beforeModel() {
    if (!this.session.currentUser) {
      this.transitionTo('auth');
    }
  }
});
