import React, { useState } from 'react'
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Tasks } from './components/tasks/Tasks';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/TaskSlice'

function App({ inputvalue }) {

  const [value, setValue] = useState();

  const dispatch = useDispatch(0);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({ 
          title: value,
      })
    );
  }


  const getValue = (gettext) => {
    setValue(gettext);
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <Header gettext={getValue}/>
        <Footer type="submit"/>
      </form>
      <div>
        <Tasks/>  
      </div>  
    </div>
  );
}

export default App;
