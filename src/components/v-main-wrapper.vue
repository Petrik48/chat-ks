<template>
  <div class="v-main-wrapper">
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'v-main-wrapper',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    ...mapActions([
      'FETCH_USERS'
    ])
  },
  mounted() {
    this.FETCH_USERS()
  }
}
</script>

<style scoped>
.v-main-wrapper {
  border-radius: 5px;
  width: 485px;
  background: #FFF;
}
</style>