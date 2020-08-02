import Vue from "vue";

export async function signin(context, user) {
  try {
    context.commit("setLoading", true, { root: true });
    await Vue.axios({
      method: "POST",
      url: "/login",
      data: user,
    });
    context.commit("setUser", user);
  } catch (e) {
    context.commit("authError", e.message);
  } finally {
    context.commit("setLoading", false, { root: true });
  }
}
