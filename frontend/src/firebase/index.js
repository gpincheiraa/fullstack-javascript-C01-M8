import config from "./config";
import firebase from 'firebase/app';
require("firebase/auth");

const firebaseApp = firebase.initializeApp(config);
const Auth = firebaseApp.auth();

export { Auth }