import Home from '../src/pages/blog/Home'
import Blog from './pages/blog/Blog';
import { BrowserRouter as Router ,Route, Routes  } from 'react-router-dom'
import './App.css'
function App() {
  return (
 <>
 <div className="container">


<Routes>
  <Route path='/' exact Component={Home}/>
  <Route path='/blog/:id' Component={Blog}/>
</Routes>
      
 </div>
 </>
      
   
  );
}

export default App;
