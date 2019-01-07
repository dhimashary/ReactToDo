import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCx5VZBDk85dtPu_2fg8iVOBQmECWfCc6o",
  authDomain: "todotapireact.firebaseapp.com",
  databaseURL: "https://todotapireact.firebaseio.com",
  projectId: "todotapireact",
  storageBucket: "todotapireact.appspot.com",
  messagingSenderId: "171262630995"
};
firebase.initializeApp(config)
const database = firebase.database()

export default database