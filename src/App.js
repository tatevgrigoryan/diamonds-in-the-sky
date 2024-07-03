
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Home from "./pages/Home/Home";
import './styles/global.css';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
