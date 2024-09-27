import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import EspacioList from './components/EspacioList';
import EspacioForm from './components/EspacioForm';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/espacios" element={<EspacioList />} />
                        <Route path="/espacios/nuevo" element={<EspacioForm />} />
                        <Route path="/espacios/editar/:id" element={<EspacioForm />} />
                    </Routes>
                </Container>
            </div>
        </Router>
    );
}

export default App;
