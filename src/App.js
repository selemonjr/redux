import { useSelector,useDispatch } from "react-redux";
const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type:"increment"})
  };
  const decrement = () => {
    dispatch({type:"decrement"})
  }
  const incrementBy = () => {
    dispatch({type:"incrementBy", payload: 10})
  }
  return (
    <>
    <h1>Hello React + Redux</h1>
    <p>{counter}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={incrementBy}>Increment By 10</button>
    </>
  )
};
export default App;