import React from 'react';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions}) => {
  return (
   <>
      <table class={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => {
            const { id, type, amount, currency } = transaction;
            return (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </> 
  )
};

export default TransactionHistory;