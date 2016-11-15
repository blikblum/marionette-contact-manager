import {Route} from 'marionette.routing';
import Radio from 'backbone.radio';
import {Contacts} from '../entities';
import ContactsView from './view';

export default Route.extend({
  activate(){
    this.listenTo(Radio.channel('router'), 'before:activate', this.onChildActivate);
    let contactsPromise = Radio.channel('api').request('getContactList');
    return contactsPromise.then(contactsData => {
      this.contacts = new Contacts(contactsData)
    });
  },

  viewClass: ContactsView,

  viewOptions() {
    return {
      contacts: this.contacts
    }
  },

  contextRequests: {
    contacts: function () {
      return this.contacts
    }
  },

  onChildActivate(transition, route) {
    //call setSelected after transition finishes to ensure view is rendered
    transition.then(() => {
      this.view.setSelected(transition.params.contactid)
    })
  },

  deactivate() {
    this.stopListening(Radio.channel('router'), 'before:activate')
  }
})
