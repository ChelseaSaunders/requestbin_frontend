import EndpointForm from './endpointform'
import ListEndpoints from './ListEndpoints'
import ListBins from './ListBins'

const Home = ({ createEndpoint, endpoints, createBin, bins }) => {
  return (
    <div>
      <h1>Dumpster of Disappointment</h1>
      <h2>Welcome To Our Request Bin, Wooooo!!!  GO TEAM 4!!!! WOOOO!!!</h2>
      <EndpointForm createEndpoint={createEndpoint} />
      <ListEndpoints endpoints={endpoints} />
      <ListBins bins={bins} />
  </div>
  )
};

export default Home;
