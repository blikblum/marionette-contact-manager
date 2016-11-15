import { createRouter, middleware} from 'marionette.routing';
import ApplicationRoute from './application/route';
import ContactsRoute from './contacts/route';
import ContactDetailRoute from './contactdetail/route';
import Mn from 'backbone.marionette';
import Radio from 'backbone.radio';

let router = createRouter({log: true, logError: true});

router.map(function (route) {
  route('application', {path: '/', routeClass: ApplicationRoute}, function () {
    route('contacts', {routeClass: ContactsRoute}, function () {
      route('contactdetail', {path: ':contactid', routeClass: ContactDetailRoute})
    })
  })
});

router.rootRegion = new Mn.Region({el: '#app'});

router.use(middleware);

Radio.channel('router').on('before:transition', function (transition) {
  if (transition.path === '/') {
    transition.redirectTo('contacts')
  }
});

router.listen();