import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import { Header } from "./components/Header";
import { NoPage } from "./components/NoPage";
import { Portfolio } from "./components/Portfolio";
import { Contacts } from "./components/Contacts";
import { RandomNumberFact } from "./components/RandomNumberFact";

const App:React.FunctionComponent = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Header />}>
                  <Route index element={<Portfolio />} />
                  <Route path="contacts" element={<Contacts />} />
                  <Route path="fact" element={<RandomNumberFact />} />
                  <Route path="*" element={<NoPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
