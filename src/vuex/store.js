import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    users: [],
    dialogs: [],
    messages: [],
    activeUserId: 0,
    activeUserName: '',
    receiverName: '',
  },
  getters: {},
  mutations: {
    SET_USERS_TO_STORE(state, users) {
      state.users = users;
    },
    LOGIN_USER(state, user) {
      state.activeUserId = user.id;
      state.activeUserName = user.name + ' ' + user.second_name;
    },
    FETCH_DIALOGS(state, dialogs) {
      state.dialogs = dialogs;
    },
    LOGOUT_USER(state) {
      state = {
        users: [],
        // dialogs: [],
        messages: [],
        activeUserId: 0,
        activeUserName: '',
        receiverName: '',
      };
    },
    ADD_MESSAGES_TO_STATE(state, messages) {
      state.messages = messages;
      console.log(messages)
    },
    ADD_RECEIVER_NAME(state, name) {
      state.receiverName = name;
    },
    initialiseStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    }
  },
  actions: {
    FETCH_USERS({commit}) {
      return axios.get('http://localhost:3000/users')
        .then((users) => {
          commit('SET_USERS_TO_STORE', users.data);
        })
    },
    REGISTER_USER({dispatch, commit}, user) {
      axios.post('http://localhost:3000/users/', user);
      dispatch('FETCH_USERS');
    },
    LOGIN_USER({commit}, user) {
      commit('LOGIN_USER', user);
    },
    // FETCH_DIALOGS({commit}) {
    //   axios.get('http://localhost:3000/dialogs/')
    //     .then((dialogs) => {
    //       commit('FETCH_DIALOGS', dialogs.data.filter(dialog => {
    //         return (dialog.sender_id === this.state.activeUserId || dialog.recipient_id === this.state.activeUserId)
    //       }))
    //     })
    // },
    LOGOUT_USER({commit}) {
      commit('LOGOUT_USER');
      localStorage.clear();
    },
    FETCH_MESSAGES({commit}, user_id) {
      axios.get('http://localhost:3000/messages/')
        .then((messages) => {
          commit('ADD_MESSAGES_TO_STATE', messages.data.filter(message => {
            return ((message.sender_id === this.state.activeUserId && message.recipient_id === user_id) ||
              (message.sender_id === user_id && message.recipient_id === this.state.activeUserId))
          }))
        })
    },
    FETCH_RECEIVER_NAME({commit}, name) {
      commit('ADD_RECEIVER_NAME', name);
    },
    SEND_MESSAGE_TO_CHAT({dispatch, commit}, message_info) {
      axios.get('http://localhost:3000/messages/')
        .then((messages) => {
          let messages_len = messages.data.length + 1;
          let message = {
            id: messages_len,
            text: message_info.text,
            sender_id: this.state.activeUserId,
            recipient_id: Number(message_info.id),
            message_time: new Date().toLocaleTimeString('en-US', {
              hour12: false,
              hour: 'numeric',
              minute: 'numeric'
            }),
          }
          this.state.messages.push(message);
          return axios.post('http://localhost:3000/messages/', message)
        })
    }
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

export default store;