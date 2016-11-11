import { createRouter, middleware} from 'marionette.routing';
import ApplicationRoute from './application/route';
import ContactsRoute from './contacts/route';

let router = createRouter({log: true, logError: true});

router.map(function (route) {
  route('application', {path: '/', abstract: true, routeClass: ApplicationRoute}, function () {
    route('contacts', {routeClass: ContactsRoute}, function () {
      route('contactdetail', {path: ':contactid'})
    })
  })
});

router.use(middleware);

router.listen();