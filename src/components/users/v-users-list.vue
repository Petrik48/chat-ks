<template>
  <div class="v-users-list">
    <v-users-list-header
        :current_user="this.activeUserName"
    />
    <ul class="v-users">
      <p class="v-user"
         v-for="user in users.filter(user => {
           return user.id !== this.activeUserId
         })"
         :key="user.id"
         @click="toChat(user)"
      >{{ user.name + ' ' + user.second_name }}</p>
    </ul>
    <v-users-footer/>
  </div>
</template>

<script>
import VUsersListHeader from "@/components/users/v-users-header";
import VUsersFooter from "@/components/users/v-users-footer";

import {mapActions, mapState} from "vuex";

export default {
  name: 'v-users-list',
  components: {VUsersFooter, VUsersListHeader},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState([
      'dialogs',
      'users',
      'activeUserId',
      'activeUserName'
    ])
  },
  methods: {
    ...mapActions([
      // 'FETCH_DIALOGS',
      'FETCH_MESSAGES',
      'FETCH_RECEIVER_NAME'
    ]),
    toChat(user) {
      this.$router.push({
        name: 'chat',
        query: {'user_id': user.id},
        params: {'id': user.id},
      })
      this.FETCH_MESSAGES(user.id);
      this.FETCH_RECEIVER_NAME(user.name + ' ' + user.second_name)
    }
  },
  mounted() {
    // this.FETCH_DIALOGS();
  },
}
</script>

<style scoped lang="scss">
.v-users-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
  min-height: 80vh;

  .v-users {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 35px 10px;
    height: 90%;

    .v-user {
      border-radius: 20px;
      padding: 10px;
      min-width: 300px;
      background: #C2C2C2;
      font-weight: 400;
      font-size: 20px;
      line-height: 18px;
      text-align: center;
      color: #FFF;
      cursor: pointer;
    }
  }
}
</style>