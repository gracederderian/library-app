import Controller from '@ember/controller';
import {
  match,
  not,
  and,
  gte
} from '@ember/object/computed';

export default Controller.extend({

  emailAddress: '',
  message: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: gte('message.length', 5),
  isNotEmpty: and('isValid', 'isValidMessage'),
  isDisabled: not('isNotEmpty'),

  actions: {
    sendMessage() {
      alert(`Your E-mail: ${this.get('emailAddress')}\nYour Message: ${this.get('message')}`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});
