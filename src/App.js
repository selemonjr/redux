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
  return (
    <>
    <h1>Hello React + Redux</h1>
    <p>{counter}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )
};
export default App;