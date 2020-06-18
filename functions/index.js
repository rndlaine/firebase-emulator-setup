const functions = require('firebase-functions');
const { db } = require('../index');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((request, response) => {
    let docRef = db.collection("records")
    .add({ hello: "world" })
    .then(() => response.send("Hello from Firebase!"))
    .catch(() => response.status(500).send("Something went wrong!"))
});
