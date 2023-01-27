import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import EndpointForm from './endpointform'
import ListEndpoints from './ListEndpoints'

function BinPage({createEndpoint, endpoints}) {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { binNum } = useParams();
  // useEffect(() => {
  //   fetch(`http://localhost:4000/bin/1/endpoint/${path}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRequests(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       setLoading(false);
  //     });
  // }, [path]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <div>
      <h1>Dumpster of Disappointment</h1>
      <h2> Bin Number: {"FIX ME"} </h2>
      <EndpointForm createEndpoint={createEndpoint} />
      <ListEndpoints endpoints={endpoints} />
    </div>
  );

}

export default BinPage;
