import React from "react";
import { Link } from "react-router-dom";

const ListBins = ({ bins, paths }) => {
  return (
    <div>
      <h2>Existing Bins:</h2>
      <ul>
        {bins.map( (bin) => {
          // should change key to not reveal data structure
          return (
            <li key={bin.id} id={bin.id}>
              <Link to={`/bin/${bin.id}`}> bin: {bin.id} </Link>
              username: {bin.username}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default ListBins;
