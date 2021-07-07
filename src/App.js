import './App.css';
import firedb from './firebase';
import React from 'react';
function App() {
  const firebaseRealtimeDb = firedb.database();
  const sendData = () => {
    var sampleData = {
      firstname: 'Java',
      lastname: 'Java',
      email: 'sample@gmail.com'
    }
    firebaseRealtimeDb.ref('sampleCollection').push(sampleData, (error) => {
      if (!error) {
        alert('data sent successfully');
      } else {
        alert('firebase connection failed');
        console.log(error);
      }
    });
  }
  const retrieveData = () => {
    firebaseRealtimeDb.ref('sampleCollection').on('value', snapchat => {
      console.log(snapchat.val());
      var duplicate = snapchat.val();
      var original = [];
      for (var id in duplicate) {
        original.push({
          id, ...duplicate[id]
        });
      }
      console.log(original);
      console.log(original[0].email);
    });
  }
  return (
    <div className="App">
      <h1>React-Firebase connection</h1>
      <button onClick={sendData}>SEND DATA</button>
      <button onClick={retrieveData}>RETRIEVE DATA</button>
    </div>
  );
}

export default App;
