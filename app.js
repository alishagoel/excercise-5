const express = require("express");
const firebase = require("firebase/app");
const app = express();
const port = 3000;


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "exercise-5-f0511.firebaseapp.com",
  projectId: "exercise-5-f0511",
  storageBucket: "exercise-5-f0511.firebasestorage.app",
  messagingSenderId: "801000698818",
  appId: "1:801000698818:web:dacf18c2f53562fc65dc5b"
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require ("./routes/index.js");
const createPostRoute = require ("./routes/createPost.js");
const singlePostRoute = require ("./routes/singlePost.js");

app.use("/", indexRoute);
app.use("/create", createPostRoute);
app.use("/post", singlePostRoute);

app.listen(port,() => {
    console.log(`${port}`);
});