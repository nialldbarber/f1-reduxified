import React from 'react'

const Form = ({ addDriverToDriverList, mapInputValuesToNewDriver }) => (
  <form action="POST" onSubmit={addDriverToDriverList}>
    <label>
      Name:
      <input type="text" name="name" onChange={mapInputValuesToNewDriver} />
    </label>
    <label>
      Age:
      <input type="text" name="age" onChange={mapInputValuesToNewDriver} />
    </label>
    <label>
      Country:
      <input type="text" name="country" onChange={mapInputValuesToNewDriver} />
    </label>
    <label>
      Team:
      <input type="text" name="team" onChange={mapInputValuesToNewDriver} />
    </label>
    <label>
      Poles:
      <input type="text" name="poles" onChange={mapInputValuesToNewDriver} />
    </label>
    <label>
      Wins:
      <input type="text" name="wins" onChange={mapInputValuesToNewDriver} />
    </label>
    <label>
      Championships:
      <input
        type="text"
        name="championships"
        onChange={mapInputValuesToNewDriver}
      />
    </label>
    <button type="submit">Add</button>
  </form>
)

export default Form
