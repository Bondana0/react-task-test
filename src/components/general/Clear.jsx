import React from 'react';

export const Clear = ({ clearFilter }) => {
  return (
    <div>
      <button onClick={clearFilter}>Clear</button>
    </div>
  );
};

export default Clear;
