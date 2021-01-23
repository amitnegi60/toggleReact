import React, {useState} from 'react';


const Question = ({key, title, info}) => {

const [display, setDisplay] = useState(false);


  
const clickme = () =>{
  
  setDisplay(!display);
  
}
  

  return (
<article className="question" allkeys={key}>
<header>
  <h4>{title}</h4>

  <button className="btn" onClick={clickme}>{display ? <i class="fas fa-toggle-on"></i> : <i class="fas fa-toggle-off"></i>}</button>
</header>
<div>
{display ? <p>{info}</p> : ''}
</div>

</article>

  );
};

export default Question;