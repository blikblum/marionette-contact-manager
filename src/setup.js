import Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import 'rivets';
import 'rivets-backbone-adapter';
import renderer from 'marionette.renderers/rivets';

Marionette.View.setRenderer(renderer);

// Marionette Inspector
if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}

// Backbone Debugger
if (window.__backboneAgent) {
  window.__backboneAgent.handleBackbone(Backbone);
}
