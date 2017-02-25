import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}
