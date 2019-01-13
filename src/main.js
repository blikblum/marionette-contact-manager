import './setup';
import { Router } from 'marionette.routing';
import ApplicationRoute from './application/route';
import ContactsRoute from './contacts/route';
import ContactDetailRoute from './contactdetail/route';
import ContactNoSelectionView from './noselection/view';
import { Application } from 'backbone.marionette';
import Radio from 'backbone.radio';


const app = new Application({
  region: '#app'
});

const router = new Router({log: true, logError: true}, app.getRegion());

router.map(function (route) {
  route('application', {path: '/', routeClass: ApplicationRoute}, function () {
    route('contacts', {routeClass: ContactsRoute, abstract: true}, function () {
      route('contacts.default', {path: '', viewClass: ContactNoSelectionView,
        viewOptions: {message: 'Please Select a Contact.'}})
      route('contactdetail', {path: ':contactid', routeClass: ContactDetailRoute})
    })
  })
});

Radio.channel('router').on('before:transition', function (transition) {
  if (transition.path === '/') {
    transition.redirectTo('contacts.default')
  }
});

router.listen();