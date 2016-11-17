import Mn from 'backbone.marionette';
import DataBinding from '../databinding';

const viewHtml = `
  <div class="no-selection text-center">
    <h2>{message}</h2>
  </div>`;

export default Mn.View.extend({
  behaviors: [DataBinding],
  html: viewHtml,
  initialize(options) {
    this.message = options.message
  }
});