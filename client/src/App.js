import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { CreatePost } from "./pages/create-post";
import { PostsList } from "./pages/posts-list";
import { UsersList } from "./pages/users-list";
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/posts-list' element={<PostsList />} />
          <Route path='/users-list' element={<UsersList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
