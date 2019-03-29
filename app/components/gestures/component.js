import Component from '@ember/component';
import Hammer from 'hammer';

export default Component.extend({
  didInsertElement() {
    const hammertime = new Hammer(this.element);

    hammertime
      .get( 'pan' )
      .set({
        direction: Hammer.DIRECTION_HORIZONTAL,
        threshold: 300
      })

    hammertime.on(this.gesture, () => {
      if (this.action) {
        this.action();
      }
    });

    this.set('hammertime', hammertime);
  },

  willDestroy() {
    if (this.hammertime) {
      this.hammertime.destroy();
    }
  }
});
