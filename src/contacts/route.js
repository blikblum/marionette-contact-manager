import {Route} from 'marionette.routing';
import Radio from 'backbone.radio';
import {Contacts} from '../entities';

export default Route.extend({
  activate(){
    let contactsPromise = Radio.channel('api').request('getContactList');
    return contactsPromise.then(contactsData => {
      this.contacts = new Contacts(contactsData)
    })
  }
})
