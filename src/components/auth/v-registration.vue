<template>
  <form class="v-auth" @submit.prevent="registerUser">
    <h5 class="v-auth__title">Тут могла быть ваша реклама</h5>
    <input type="text" placeholder="Придумайте логин" class="v-auth__input" v-model="userLogin">
    <input type="text" placeholder="Введите ваше имя" class="v-auth__input" v-model="userName">
    <input type="text" placeholder="Введите вашу фамилию" class="v-auth__input" v-model="userSecondName">
    <input type="password" placeholder="Придумайте пароль" class="v-auth__input" v-model="userPassword">
    <button class="v-auth__button">Регистрация</button>
  </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: 'v-registration',
  props: {},
  data() {
    return {
      userLogin: '',
      userName: '',
      userSecondName: '',
      userPassword: ''
    }
  },
  computed: {
    ...mapState([
      'users'
    ])
  },
  methods: {
    ...mapActions([
      'REGISTER_USER',
      'FETCH_USERS'
    ]),
    registerUser() {
      let user = {
        id: this.users.length + 1,
        login: this.userLogin,
        name: this.userName,
        second_name: this.userSecondName,
        password: this.userPassword
      }
      this.REGISTER_USER(user)
          .then(() => {
            this.$router.push({
              name: 'login',
            });
            this.FETCH_USERS();
          })
    }
  }
}
</script>

<style scoped lang="scss">
.v-auth {
  &__button {
    margin-top: 25px;
  }
}
</style>
