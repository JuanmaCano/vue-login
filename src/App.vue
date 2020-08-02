<template>
  <div id="app">
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

export default {
  components: {
    NavigationLogged,
    NavigationGuest,
  },

  computed: {
    ...mapState("auth", ["isLogged"]),
  },
};
</script>
