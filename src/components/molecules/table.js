import React from 'react'
// Components
import TableRow from 'components/atoms/table-row'

const Table = ({ drivers }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Country</th>
        <th>Team</th>
        <th>Poles</th>
        <th>Wins</th>
        <th>Championships</th>
      </tr>
    </thead>
    <tbody>
      {drivers.map(
        ({ _id, name, age, country, team, poles, wins, championships }) => (
          <TableRow
            key={_id}
            id={_id}
            name={name}
            age={age}
            country={country}
            team={team}
            poles={poles}
            wins={wins}
            championships={championships}
          />
        )
      )}
    </tbody>
  </table>
)

export default Table
