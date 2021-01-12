import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyC5tiD2izU7pLVvu6GIrokGw7-7efJIMRQ",
  authDomain: "fir-vue-auth-e0bb4.firebaseapp.com",
  projectId: "fir-vue-auth-e0bb4",
  storageBucket: "fir-vue-auth-e0bb4.appspot.com",
  messagingSenderId: "348677763693",
  appId: "1:348677763693:web:25d4456d310d62ddf08564",
  measurementId: "G-B4CGDTJSRP"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
