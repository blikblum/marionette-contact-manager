import { View } from 'backbone.marionette';

const viewHtml = `
  <div class="no-selection text-center">
    <h2>{message}</h2>
  </div>`;

export default View.extend({  
  template: viewHtml,
  initialize(options) {
    this.message = options.message
  }
});