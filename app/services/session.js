import Service, { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default Service.extend({
  fastboot: service(),
  isFastBoot: reads('fastboot.isFastBoot'),

  init() {
    this._super(...arguments);

    if (this.isFastBoot) {
      this.set('currentUser', null);
    } else {
      const cachedUser = localStorage.getItem('currentUser');
      const currentUser = cachedUser || null;

      this.set('currentUser', currentUser);
    }
  },

  authenticate(username) {
    if (!this.isFastBoot) {
      localStorage.setItem('currentUser', username);
    }

    this.set('currentUser', username);
  },

  signOut() {
    if (!this.isFastBoot) {
      localStorage.removeItem('currentUser');
    }

    this.set('currentUser', null);
  }
});
