import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup'
import Blogs from './Components/Blogs'
import Blog from './Components/Blog'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;