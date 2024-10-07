import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";
import SignIn from "./routes/sign-in/sign-in.component.jsx";

const Shop = function () {
  return <h3>I am the shop component</h3>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
