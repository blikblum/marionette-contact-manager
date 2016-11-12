import rivets from 'rivets';
import Marionette from 'backbone.marionette';
import 'rivets-backbone-adapter';

export default Marionette.Behavior.extend({
  initialize: function () {
    this.view.template = false;
  },
  onBeforeRender: function() {
    var view = this.view;
    if (this._rview) {
      this._rview.unbind();
      this._rview = null;
    }
    this.view.attachElContent(view.html);
    this._rview = rivets.bind(this.el, view, {
      handler: function handler(context, ev, binding) {
        this.call(view, ev, binding.view.models);
      }
    });
  },
  onDestroy: function() {
    if (this._rview) {
      this._rview.unbind();
      this._rview = null;
    }
  }
}
);