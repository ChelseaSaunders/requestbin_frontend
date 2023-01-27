import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from './components/Home';
import RequestsPage from './components/viewrequests';
import BinPage from './components/binPage';
import requestService from './services/requestService';

const App = () => {
  const [endpoints, setEndpoints] = useState([]);
  const [bins, setBins] = useState([]);

  useEffect(() => {
    requestService
      .getAllEndpoints()
      .then(endpoints => {
        setEndpoints(endpoints);
      });
  }, []);

  useEffect(() => {
    requestService
      .getAllBins()
      .then(bins => {
        console.log("bins", bins)
        setBins(bins);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={<Home
            createEndpoint={requestService.createNewEndpoint}
            endpoints={endpoints}
            createBin={requestService.createNewBin}
            bins={bins}
          />}
        />
        <Route path="/bin/:binnum" element={<BinPage
          createEndpoint={requestService.createNewEndpoint}
          endpoints={endpoints}
        />} />
        <Route path="/:path" element={<RequestsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
