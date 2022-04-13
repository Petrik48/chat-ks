<template>
  <form class="v-auth" @submit.prevent="login">
    <h5 class="v-auth__title">Тут могла быть ваша реклама</h5>
    <input type="text" placeholder="Логин" class="v-auth__input" v-model="userLogin">
    <input type="password" placeholder="Пароль" class="v-auth__input" v-model="userPassword">
    <router-link :to="{name: 'registration'}" class="v-auth__link">Регистрация</router-link>
    <button class="v-auth__button">Войти</button>
  </form>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {

  name: 'v-login',
  props: {},
  data() {
    return {
      userLogin: '',
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
      'LOGIN_USER',
    ]),
    login() {
      this.users.find((user) => {
        if (user.login === this.userLogin && user.password === this.userPassword) {
          this.$router.push({
            name: 'users',
          });
          this.LOGIN_USER(user);
        }
      })
    }
  }
}
</script>

<style lang="scss">
.v-auth {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  border-radius: 5px;
  padding: 50px 100px;
  background: #FFF;

  &__title {
    margin-bottom: 20px;
    font-family: 'Play', sans-serif;
    font-size: 18px;
    color: #565656;
  }

  &__input {
    border: 0;
    border-radius: 20px;
    padding: 10px 0 10px 15px;
    width: 280px;
    background: #C2C2C2;

    &::placeholder,
    & {
      color: #FFF;
      font-size: 16px;
    }
  }

  &__link {
    margin-top: -5px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #565656;
    font-weight: 700;
  }

  &__button {
    border: 0;
    border-radius: 20px;
    padding: 10px 0;
    width: 120px;
    background: #565656;
    font-size: 18px;
    color: #FFF;
    cursor: pointer;
  }
}
</style>