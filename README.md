# firebase-emulator-setup

POC showing a Firestore Emulator working in conjunction with Firebase Functions.

1. Install the deps: `npm i && cd functions && npm i`
1. Run the emulators: `npm run serve`
1. Go to `http://localhost:5001/firestore-test-project/<region>/helloWorld` to call the function
1. Check the firestore content at `http://localhost:4000/firestore`
