import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./globals.css";
export interface AppProps {}

const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
