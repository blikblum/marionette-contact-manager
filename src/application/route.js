import {Route} from 'marionette.routing';
import {WebAPI} from '../web-api';

export default Route.extend({
  activate(){
    this.api = this.api || new WebAPI();
  },

  channelName: 'api',

  radioRequests: {
    'getContactList': function () {
      return this.api.getContactList()
    }
  }
})
