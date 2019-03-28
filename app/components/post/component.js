import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: '',

  session: service(),

  liked: computed('post.attributes.likes', function() {
    return this.post.attributes.likes.includes(this.session.currentUser)
  }),

  likesCount: computed('post.attributes.likes', function() {
    return this.post.attributes.likes.length;
  }),

  actions: {
    like() {
      this.post.set('likes', [
        ...this.post.attributes.likes,
        this.session.currentUser
      ]);

      this.notifyPropertyChange('post.attributes.likes');
      this.post.save();
    },

    dislike() {
      const newLikes = this.post.attributes.likes
        .filter(user => user !== this.session.currentUser)
      this.post.set('likes', newLikes);

      this.notifyPropertyChange('post.attributes.likes');
      this.post.save();
    }
  }
})
