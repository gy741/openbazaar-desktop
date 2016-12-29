import loadTemplate from '../../../utils/loadTemplate';
import baseVw from '../../baseVw';

export default class extends baseVw {
  constructor(options = {}) {
    super(options);

    if (!this.model) {
      throw new Error('Please provide a model.');
    }
  }

  className() {
    return 'newConfiguration';
  }

  events() {
    return {
      'click .js-cancel': 'onCancelClick',
    };
  }

  onCancelClick() {
    this.trigger('cancel');
  }

  render() {
    loadTemplate('modals/connectionManagement/configurationForm.html', (t) => {
      this.$el.html(t({
        ...this.model.toJSON(),
        errors: this.model.validationError || {},
      }));

      if (!this.rendered) {
        this.render = true;
        setTimeout(() => this.$('.js-inputName').focus());
      }
    });

    return this;
  }
}
