import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

// Marionette Inspector
if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}

// Backbone Debugger
if (window.__backboneAgent) {
  window.__backboneAgent.handleBackbone(Backbone);
}
