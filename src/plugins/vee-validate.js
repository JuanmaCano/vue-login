import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'

Vue.use(VeeValidate, {
  fieldsBagName: 'veeFields'
})

Validator.extend('strength_password', {
  getMessage: field => `The field ${field} must contain at least: 1 capital letter, 1 lower letter, 1 number and 1 special character
`,
  validate: value => {
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return strongRegex.test(value);
  }
});