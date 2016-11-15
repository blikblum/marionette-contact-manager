import {Route} from 'marionette.routing';
import _ from 'underscore';
import ContactDetailView from './view';

export default Route.extend({
  activate(transition){
    let contacts = this.getContext().request('contacts');
    this.contact = contacts.findWhere({id: +transition.params.contactid});
    if (!this.contact) {
      throw new Error('Unable to resolve contact with id', transition.params.contactid);
    }
  },

  viewClass: ContactDetailView,

  viewOptions() {
    return {
      model: this.contact.clone()
    }
  },

  viewEvents: {
    'save:model': 'onSaveModel'
  },

  onSaveModel(view) {
    let attributes = _.clone(view.model.attributes);
    this.contact.clear({silent:true}).set(attributes);
  }

})
