<template>
  <div class="v-users-list-header">
    <p class="header__name">{{ current_user }}</p>
    <button class="header__exit-button" @click="this.logout">
      <i class="material-icons" style="color:white">logout</i>
    </button>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'v-users-list-header',
  props: {
    current_user: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    ...mapActions([
        'LOGOUT_USER'
    ]),
    logout() {
      this.LOGOUT_USER();
      this.$router.push({
        name: 'login',
      });
    }
  }
}
</script>

<style scoped lang="scss">
.v-users-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px 5px 0 0;
  padding: 17px 23px;
  background: #94918F;

  p {
    font-size: 18px;
    color: #FFF;
  }

  button {
    border: none;
    border-radius: 50%;
    padding: 5px;
    background: transparent;
    cursor: pointer;
  }
}
</style>