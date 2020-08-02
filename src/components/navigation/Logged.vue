<template>
  <b-nav tabs>
    <b-nav-item exact to="/secret">
      Private page
    </b-nav-item>
    <b-nav-item exact to="/secret/notes">
      Private Notes
    </b-nav-item>
    <b-nav-item @click="_logout">
      Logout
    </b-nav-item>
  </b-nav>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("auth", ["logout"]),
    _logout() {
      this.logout();
      this.$router.push("login");
    },
  },
};
</script>
