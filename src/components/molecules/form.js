import React, { useState } from 'react'

const Form = ({ handleAddDriver }) => {
  const [data, setData] = useState({
    name: '',
    age: '',
    country: '',
    team: '',
    poles: '',
    wins: '',
    championships: ''
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, age, country, team, poles, wins, championships } = data
    const newDriver = {
      name,
      age,
      country,
      team,
      poles,
      wins,
      championships
    }
    handleAddDriver(newDriver)
  }

  return (
    <form action="POST" onSubmit={handleSubmit}>
      {/* NAME */}
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      {/* AGE */}
      <label>
        Age:
        <input type="text" name="age" onChange={handleChange} />
      </label>
      {/* COUNTRY */}
      <label>
        Country:
        <input type="text" name="country" onChange={handleChange} />
      </label>
      {/* TEAM */}
      <label>
        Team:
        <input type="text" name="team" onChange={handleChange} />
      </label>
      {/* POLES */}
      <label>
        Poles:
        <input type="text" name="poles" onChange={handleChange} />
      </label>
      {/* WINS */}
      <label>
        Wins:
        <input type="text" name="wins" onChange={handleChange} />
      </label>
      {/* CHAMPIONSHIPS */}
      <label>
        Championships:
        <input type="text" name="championships" onChange={handleChange} />
      </label>
      <button type="submit">Add</button>
    </form>
  )
}

export default Form
