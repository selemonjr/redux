import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Cart from "./pages/Cart";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  )
}
export default App;