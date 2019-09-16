import React from 'react'

const TableRow = ({ name, age, country, team, poles, wins, championships }) => (
  <tr>
    <td>{name}</td>
    <td>{age}</td>
    <td>{country}</td>
    <td>{team}</td>
    <td>{poles}</td>
    <td>{wins}</td>
    <td>{championships}</td>
  </tr>
)

export default TableRow
