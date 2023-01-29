import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [name , setname] = useState();
  function demo()
  {

    axios.post('http://localhost/php_react_simple/insert.php' ,{
      name:'ravi',
      email:'ravi@gmail.com',
      password:'1234567890'
    })
  .then(function (response) {
    // handle success
    // console.log(response); 
    setname(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  }
  return (
    <div className="App">
      {/* <input type="text" > */}
        <input type="button" value="submit" onClick={demo} />
    </div>
  );
}

export default App;
