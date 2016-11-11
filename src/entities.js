import Backbone from 'backbone';

export const Contact = Backbone.Model.extend({
  defaults: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  }
});

export const Contacts = Backbone.Collection.extend({
  model: Contact
});