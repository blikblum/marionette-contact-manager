import Mn from 'backbone.marionette';
import DataBinding from '../databinding';

export default Mn.View.extend({
  html: require('./template.html'),

  behaviors: [DataBinding],

  triggers: {
    'click #save-contact': 'save:model'
  }
});