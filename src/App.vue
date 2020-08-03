<template>
  <div id="app">
    <loading :active.sync="loading" color="#0066A1"></loading>
    <b-container>
      <navigation-guest v-if="!isLogged"></navigation-guest>
      <navigation-logged v-else></navigation-logged>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import NavigationLogged from "@/components/navigation/Logged";
import NavigationGuest from "@/components/navigation/Guest";
import { mapState } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading";

export default {
  components: {
    NavigationLogged,
    NavigationGuest,
    Loading,
  },

  computed: {
    ...mapState("auth", ["isLogged"]),
    ...mapState(["loading"]),
  },
};
</script>
