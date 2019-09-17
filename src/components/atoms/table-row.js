import React from 'react'

const TableRow = ({
  id,
  name,
  age,
  country,
  team,
  poles,
  wins,
  championships,
  removeDriver
}) => (
  <tr onClick={() => removeDriver(id)}>
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
