import React, { useEffect, useState } from 'react';
import { Common } from './common/Common.jsx'
import { Actual } from './common/Actual.jsx';
import { Outstanding } from './common/Outstanding.jsx';
import { Clear } from './common/Clear.jsx';
import fetchData from './Api.js'; 

export const App = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilteredData] = useState([]);


  useEffect(() => {
    fetchData()
      .then(data => {
        setData(data);
        setFilteredData(data);
      });
  }, []);


    const issuanceDateFilter = (startDate, endDate) => {
    if (startDate && endDate) {
      const filtered = data.filter(loan => {
        const loanDate = new Date(loan.issuance_date);
        return loanDate >= startDate && loanDate <= endDate;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
    };
   const actualDateFilter = (startDate, endDate) => {
    if (startDate && endDate) {
      const filtered = data.filter(loan => {
        const loanDate = new Date(loan.actual_return_date);
        return loanDate >= startDate && loanDate <= endDate;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
   };
 const returnDateFilter = () => {
    const outstanding = data.filter(loan => {
      const returnDate = new Date(loan.return_date);
      const actualReturnDate = loan.actual_return_date ? new Date(loan.actual_return_date) : null;
      return actualReturnDate && (actualReturnDate > returnDate || (returnDate < new Date() && !loan.actual_return_date));
    });
    setFilteredData(outstanding);
 };
  
  const clearFilter = () => {
    setFilteredData(data);
}

  return (
  <div>
    <h1>Фінансовий дашборт</h1>
    <Common dateChange={issuanceDateFilter} />
    <Actual dateChange={actualDateFilter} />
    <Outstanding returnDateFilter={returnDateFilter} />
    <Clear clearFilter={clearFilter} />
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Користувач</th>
          <th>Дата отримання</th>
          <th>Дата повернення</th>
          <th>Фактична дата</th>
          <th>Сума</th>
          <th>Відсоток</th>
        </tr>
      </thead>
      <tbody>
      {filterData.map(loan => (
        <tr key={loan.id}>
          <td>{loan.id}</td>
          <td>{loan.user}</td>
          <td>{loan.issuance_date}</td>
          <td>{loan.return_date}</td>
          <td>{loan.actual_return_date}</td>
          <td>{loan.body}</td>
          <td>{loan.percent}</td>
        </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default App;



