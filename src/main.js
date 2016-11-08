import { createRouter, middleware} from 'marionette.routing';

let router = createRouter({log: true, logError: true});

router.map(function (route) {
  route('application', {path: '/', abstract: true}, function () {
    route('contacts', {}, function () {
      route('contactdetail', {path: ':contactid'})
    })
  })
});

router.use(middleware);

router.listen();