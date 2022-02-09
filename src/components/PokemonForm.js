import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleForm, handleName, handleHp, handleFront, handleBack}) {

  function submitter(e) {
    e.preventDefault()
    handleForm(e)
    e.target.reset()
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={submitter}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleName} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleHp} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input onChange={handleFront}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input onChange={handleBack}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
