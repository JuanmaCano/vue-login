import Vue from "vue";

export async function signIn(context, user) {

  context.commit("setLoading", true, { root: true });
  if (user.email === "admin@vue.com" && user.password === "@Password1") context.commit("setUser", user)
  else context.commit("authError", "invalid credentials");
  context.commit("setLoading", false, { root: true });
}



// OPTION using FAKE API with json-server
// reading json-server/login.js
export async function signInAPI(context, user) {
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

