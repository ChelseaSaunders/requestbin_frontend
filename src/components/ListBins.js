import React from "react";
import { Link } from "react-router-dom";

const ListBins = ({ bins }) => {
  return (
    <div>
      <h2>Existing Bins:</h2>
      <ul>
        <l>{JSON.stringify(bins)}</l>
      </ul>
    </div>
  );
};

export default ListBins;
