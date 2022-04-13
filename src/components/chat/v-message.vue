<template>
  <div class="v-message">
    <p :class="className">
      {{ this.message_data.text }}
    </p>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
  name: 'v-message',
  props: {
    message_data: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState([
        'activeUserId'
    ]),
    className() {
      return {
        'from': this.message_data.sender_id !== this.activeUserId,
      }
    }
  }
}
</script>

<style scoped lang="scss">
.v-message {
  p {
    border-radius: 20px;
    margin-right: 35px;
    padding: 10px;
    text-align: left;
    background: #94918F;

    &.from {
      margin: 5px 0 5px 35px;
      background: #C2C2C2;
    }
  }
}
</style>