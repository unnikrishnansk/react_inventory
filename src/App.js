
import './App.css';
import {useState} from 'react';
import Book from "./components/Book";
import Notebook from "./components/Notebooks";
import Pen from "./components/Pens";
import Total from "./components/Total";

function App() {

  let [count1,setCount1] = useState(0);
  let [count2,setCount2] = useState(0);
  let [count3,setCount3] = useState(0);
  let [totalcount,settotalCount] = useState(0);

  const addCount1 = () => {
    setCount1(count1+1);
    settotalCount(totalcount+1);
  }

  const addCount2 = () => {
    setCount2(count2+1);
    settotalCount(totalcount+1);
  }

  const addCount3 = () => {
    setCount3(count3+1);
    settotalCount(totalcount+1);
  }

  const subCount1 = () => {
    if(count1>=1){
      setCount1(count1-1);
      settotalCount(totalcount-1);
    }
  }

  const subCount2 = () => {
    if(count2>=1){
      setCount2(count2-1);
      settotalCount(totalcount-1);
    }
  }

  const subCount3 = () => {
    if(count3>=1){
      setCount3(count3-1);
      settotalCount(totalcount-1);
    }
  }

  return (
    <div>

    <div className="Sidemain">
      <Book count1={count1}/>
      <button className="Bttn" onClick={addCount1}>Add</button>
      <button className="Bttn" onClick={subCount1}>Subtract</button>
    </div>

    <div className="Sidemain">
    <Pen count2={count2}/>
    <button className="Bttn" onClick={addCount2}>Add</button>
    <button className="Bttn" onClick={subCount2}>Subtract</button>
    </div>

      <div className="Sidemain">
      <Notebook count3={count3}/>
      <button className="Bttn" onClick={addCount3}>Add</button>
      <button className="Bttn" onClick={subCount3}>Subtract</button>
      </div>

      <div className='Main'>
        <Total totalcount={totalcount}/>
      </div>

      </div>
  );
}

export default App;
