import React from 'react';
import './style.css';

const Move = ({ type, name, power }) => {
  return (
    <tr>
      <td>{type}</td>
      <td><strong>{name}</strong></td>
      <td>Power: {power}</td>
    </tr>
  );
}

export default Move;