<template>
  <div class="v-chat">
    <div class="top">
      <i class="material-icons" @click="this.goBack">arrow_back</i>
      <p>{{ this.receiverName }}</p>
    </div>
    <div class="chat">
      <v-message
          v-for="message in this.messages"
          :key="message.id"
          :message_data="message"
      />
    </div>
    <form action="" class="bottom" @submit.prevent="sendMessage" @keypress.enter="sendMessage">
      <textarea v-model="text"></textarea>
      <button >
        <i class="material-icons">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
import VMessage from "@/components/chat/v-message";

export default {
  name: 'v-chat',
  components: {VMessage},
  props: {
    id: {
      type: Number,
      default: () => {
      }
    }
  },
  data() {
    return {
      user_id: this.$route.query.user_id,
      text: ''
    }
  },
  computed: {
    ...mapState([
      'messages',
      'receiverName'
    ])
  },
  methods: {
    ...mapActions([
      'SEND_MESSAGE_TO_CHAT',
    ]),
    goBack() {
      this.$router.go(-1)
    },
    sendMessage() {
      this.SEND_MESSAGE_TO_CHAT({text: this.text, id: this.user_id})
      this.text = '';
    }
  }
}

</script>

<style scoped lang="scss">
::-webkit-scrollbar {;
  margin-right: 5px;
  width: 10px; /* ширина для вертикального скролла */
  height: 8px; /* высота для горизонтального скролла */
  background-color: #FFF;
}

/* ползунок скроллбара */
::-webkit-scrollbar-thumb {
  background-color: #C1C1C1;
  border-radius: 9em;
}

.v-chat {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0;
  padding: 0;
  height: 80vh;

  .top {
    position: relative;
    flex: 0 0 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 5px 5px 0px 0px;
    padding: 10px;
    width: 100%;
    background: #94918F;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    i {
      position: absolute;
      left: 10px;
      display: flex;
      align-items: center;
      border-radius: 56px;
      padding: 5px;
      font-size: 24px;
      line-height: 14px;
      color: #FFFFFF;
      text-decoration: none;
    }

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      height: 42px;
      width: 282px;
      font-size: 20px;
      color: #FFF;
    }
  }

  .chat {
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 1 1 80%;
    padding: 10px 5px;
    width: 473px;
    overflow: auto;
  }

  .bottom {
    align-self: flex-end;
    flex: 0 0 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0 0 5px 5px;
    padding: 10px;
    width: 465px;
    background: #FFFFFF;
    box-shadow: -1px -1px 10px -2px rgba(0, 0, 0, 0.49);

    textarea {
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      padding: 5px 5px;
      width: 380px;
      height: 60px;
      resize: none;
      outline: none;

      &::-webkit-scrollbar {
        opacity: 0;
      }
    }

    button {
      border: none;
      border-radius: 50px;
      height: 40px;
      width: 40px;
      background: #94918F;
      color: #FFF;
      cursor: pointer;

      i {
        margin-left: 3px;
      }
    }
  }
}
</style>