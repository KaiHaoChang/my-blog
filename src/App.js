import {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import CreatePost from './pages/CreatePost'



function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))

  return (
    <BrowserRouter>
        <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path='/' element={ <Home isAuth={isAuth} /> } />
        <Route path='/createpost' element={ <CreatePost isAuth={isAuth} /> } />
        <Route path='/login' element={ <Login setIsAuth={setIsAuth} /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
