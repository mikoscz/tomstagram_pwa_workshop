import EmberObject from '@ember/object';
import RestrictedMixin from 'tomstagram/mixins/restricted';
import { module, test } from 'qunit';

module('Unit | Mixin | restricted', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let RestrictedObject = EmberObject.extend(RestrictedMixin);
    let subject = RestrictedObject.create();
    assert.ok(subject);
  });
});
