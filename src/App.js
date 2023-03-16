import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Main from "./components/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
