import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { increment ,decrement } from './js/action';

function App() {
  const  dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  return (
    <div className="App">
      <button onClick={()=> dispatch(increment(10))}>+</button>
      <span>{counter}</span>
      <button onClick={()=> dispatch(decrement(5))}>-</button>
    </div>
  );
}



export default App ;
