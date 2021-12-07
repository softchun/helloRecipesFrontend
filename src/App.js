import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Index from './pages/Index';
import Recipes from './pages/Recipes';

function App(){
    return(
        <div style={{justifyContent: 'center'}}>
            <NavBar />
            <Router>
                <Routes>
                    <Route exact path='/' element={<Index />} />
                    <Route exact path='/recipes' element={<Recipes />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;