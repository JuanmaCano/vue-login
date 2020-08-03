<template>
  <b-form @submit.prevent="$emit('login')">
    <b-form-group label="Email" description="Data are privated">
      <b-form-input
        type="email"
        autocomplete="off"
        v-model="user.email"
        v-validate="'required|email'"
        name="email"
        placeholder="Enter email admin@vue.com"
        :state="validateState('email')"
      ></b-form-input>
      <b-form-invalid-feedback>{{ errors.first('email')}}</b-form-invalid-feedback>
    </b-form-group>

    <b-form-group label="Password">
      <b-form-input
        type="password"
        autocomplete="off"
        v-model="user.password"
        v-validate="'required|min:6|strength_password'"
        name="password"
        placeholder="Enter password @Password1"
        :state="validateState('password')"
      ></b-form-input>
      <b-form-invalid-feedback>{{ errors.first('password')}}</b-form-invalid-feedback>
    </b-form-group>

    <b-button :disabled="errors.any() || !user.password" type="submit" variant="primary">Login</b-button>
  </b-form>
</template>

<script>
import validateMixin from "@/mixins/validation";
export default {
  mixins: [validateMixin],
  props: {
    user: {
      type: Object,
      required: true,
      validator: (user) => {
        if (!user.hasOwnProperty("email") || !user.hasOwnProperty("password")) {
          console.warn("Usuario no válido");
          return false;
        }
        return true;
      },
    },
  },
};
</script>

