import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from ".toaster";
import Navbar from ".Navbar";
import Footer from ".Footer";
import Home from ".Home";
import Videos from ".Videos";
import AdminList from ".AdminList";
import Downloads from ".Downloads";
import Partners from ".Partners";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/admin-list" element={<AdminList />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
