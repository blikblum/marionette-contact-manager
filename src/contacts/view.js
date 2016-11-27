import Mn from 'backbone.marionette';
import DataBinding from '../databinding';
import {RouterLink} from 'marionette.routing';

const itemHtml = `          
        <a>
          <h4 class="list-group-item-heading">{model:firstName} {model:lastName}</h4>
          <p class="list-group-item-text">{model:email}</p>
        </a>`;

const ContactItemView = Mn.View.extend({
  behaviors: [DataBinding],
  tagName: 'li',
  className: 'list-group-item',
  attributes: {
    route: 'contactdetail',
    'rv-param-contactid': 'model:id'
  },
  html: itemHtml
});

const ContactListView = Mn.CollectionView.extend({
  tagName: 'ul',
  className: 'list-group',
  childView: ContactItemView,
  behaviors: [RouterLink]
});

export default Mn.View.extend({
  html: require('./template.html'),
  behaviors: [DataBinding],
  regions: {
    contactlist: '.contact-list',
    outlet: '.contact-outlet'
  },
  initialize(options) {
    this.contacts = options.contacts
  },
  onRender() {
    this.showChildView('contactlist', new ContactListView({collection: this.contacts}))
  }
})


