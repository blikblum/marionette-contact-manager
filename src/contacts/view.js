import { View, CollectionView } from 'backbone.marionette';
import {RouterLink} from 'marionette.routing';

const itemHtml = `          
        <a>
          <h4 class="list-group-item-heading">{model:firstName} {model:lastName}</h4>
          <p class="list-group-item-text">{model:email}</p>
        </a>`;

const ContactItemView = View.extend({  
  tagName: 'li',
  className: 'list-group-item',
  attributes: {
    route: 'contactdetail',
    'rv-param-contactid': 'model:id'
  },
  template: itemHtml
});

const ContactListView = CollectionView.extend({
  tagName: 'ul',
  className: 'list-group',
  childView: ContactItemView,
  behaviors: [RouterLink]
});

export default View.extend({
  template: require('./template.html'),  
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


