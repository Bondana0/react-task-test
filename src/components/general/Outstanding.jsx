import React from 'react';

export const Outstanding = ({ returnDateFilter }) => {
  return (
    <div>
          <button onClick={returnDateFilter}>Прострочені кредити</button>
    </div>
  );
};

export default Outstanding;
