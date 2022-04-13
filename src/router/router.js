import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import vUsersList from "@/components/users/v-users-list";
import vLogin from "@/components/auth/v-login";
import vRegistration from "@/components/auth/v-registration";
import vChat from "@/components/chat/v-chat";

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: vLogin
    },
    {
      path: '/users/',
      name: 'users',
      component: vUsersList
    },
    {
      path: '/registration/',
      name: 'registration',
      component: vRegistration
    },
    {
      path: '/chat/',
      name: 'chat',
      component: vChat,
      props: true
    }
  ]
});

export default router;