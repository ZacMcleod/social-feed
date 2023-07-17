import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';


function App() {

const [entries, setEntries] = useState([{userName: "Fred", body: "I already told you tommorrow! I'll have my project done by last week!", likedStatus: false}])

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
