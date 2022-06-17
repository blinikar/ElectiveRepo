import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import * as React from "react";
import { Header } from "./components/Header";
import { NoPage } from "./components/NoPage";
import { Portfolio } from "./components/Portfolio";
import { Contacts } from "./components/Contacts";
import { Weather } from "./components/Weather";

const App:React.FunctionComponent = () => {
  return (
      <HashRouter>
          <Routes>
              <Route path="/" element={<Header />}>
                  <Route index element={<Portfolio />} />
                  <Route path="contacts" element={<Contacts />} />
                  <Route path="weather" element={<Weather />} />
                  <Route path="*" element={<NoPage />} />
              </Route>
          </Routes>
      </HashRouter>
  );
}

export default App;
