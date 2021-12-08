import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllTags from './pages/AllTags';
import Index from './pages/Index';
import Recipes from './pages/Recipes';
import RecipesTag from './pages/RecipesTag';
import SearchQuery from './pages/SearchQuery';
import ViewRecipe from './pages/ViewRecipe';
import './Style.css'

function App() {
    return (
        <div className='App' style={{ justifyContent: 'center' }}>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<Index />} />
                    <Route exact path='/recipes' element={<Recipes />} />
                    <Route exact path='/recipes/:id' element={<ViewRecipe />} />
                    <Route path='/search' element={<SearchQuery />} />
                    <Route path='/tag' element={<AllTags />} />
                    <Route path='/tag/:tags' element={<RecipesTag />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;