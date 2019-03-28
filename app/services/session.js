import Service from '@ember/service';

export default Service.extend({
  init() {
    this._super(...arguments);

    const cachedUser = localStorage.getItem('currentUser');
    const currentUser = cachedUser || null;

    this.set('currentUser', currentUser);
  },

  authenticate(username) {
    localStorage.setItem('currentUser', username);
    this.set('currentUser', username);
  },

  signOut() {
    localStorage.removeItem('currentUser');
    this.set('currentUser', null);
  }
});
