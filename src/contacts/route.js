import {Route} from 'marionette.routing';
import Radio from 'backbone.radio';
import {Contacts} from '../entities';
import ContactsView from './view';

export default Route.extend({
  activate(){
    let contactsPromise = Radio.channel('api').request('getContactList');
    return contactsPromise.then(contactsData => {
      this.contacts = new Contacts(contactsData)
    })
  },
  viewClass: ContactsView,
  viewOptions() {
    return {
      contacts: this.contacts
    }
  }
})
