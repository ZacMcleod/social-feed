import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntry from './Components/AddEntry/AddEntry';


function App() {

const [entries, setEntries] = useState([{userName: "Fred", text: "I already told you tommorrow! I'll have my project done by last week!", likedStatus: false}])

  function addNewEntry(entry){
    let tempEntries=[...entries, entry]
    setEntries(tempEntries)
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntry addNewEntryProperty={addNewEntry} />
    </div>
  );
}

export default App;
