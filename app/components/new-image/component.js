import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  posts: service(),
  session: service(),
  router: service(),

  actions: {
    async loadImage(event) {
      const [file] = event.target.files
      const image = await this._getBase64FromFile(file)

      this.set('image', image);
    },

    async addImage() {
      let post = this.posts.create({
        author: this.session.currentUser,
        image: this.image,
        likes: [],
        comments: []
      });

      if (this.description) {
        post.comments.push({
          user: this.session.currentUser,
          content: this.description
        });
      }

      await post.save();

      this.router.transitionTo('index');
    }
  },

  _getBase64FromFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
});
