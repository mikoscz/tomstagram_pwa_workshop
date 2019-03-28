import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { empty } from '@ember/object/computed';
import Compressor from 'compressor';

export default Component.extend({
  tagName: '',

  posts: service(),
  session: service(),
  router: service(),

  imageMissing: empty('image'),

  actions: {
    async loadImage(event) {
      const [file] = event.target.files
      const setImage = (img) => this.set('image', img)

      new Compressor(file, {
        quality: 0.2,
        maxWidth: 500,
        success(blob) {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = function() {
            const base64data = reader.result;
            setImage(base64data)
          }
        }
      });
    },

    async addImage() {
      let post = this.posts.create({
        author: this.session.currentUser,
        image: this.image,
        likes: [],
        comments: []
      });

      if (this.description) {
        post.set('comments', [{
          user: this.session.currentUser,
          content: this.description
        }])
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
