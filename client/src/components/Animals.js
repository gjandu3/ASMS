import React from 'react'
import { Grid } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

import Animal from './Animal.js'

const Animals = ({ setCurrentId }) => {
    const animals = useSelector(state => {
      return state.animal;
    });

    return (
          <Grid>
            <Grid.Row>
            </Grid.Row>
            {animals.map((animal) => (
            <Grid.Column key={animal._id} width={4}>
              <Animal animal={animal} setCurrentId={setCurrentId} />
            </Grid.Column>
            ))}
          </Grid>
        )
}

export default Animals; 