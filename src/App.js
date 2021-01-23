import React from 'react';
import './App.css';
import Question from './layouts/Questions';
import data from './layouts/Data';

function App() {

  

  const newdata = data.map((dat) => {

    const{id,title,info} = dat;
    return <Question key={id} title ={title} info ={info}/>
  })

  return (
    <>
  <main>
    <div className ="container">
      <h3>Question and Answers about login</h3>
      <section>{newdata}</section>
    </div>
  </main>
    </>
  );
}

export default App;
