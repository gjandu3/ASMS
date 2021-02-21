import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import {useDispatch} from 'react-redux'

import { deleteAnimal } from '../actions/animals';

const Animal = ({ animal }) => {
    const dispatch = useDispatch();

    return (
      <>
        <Card height={5}> 
        <Card.Header style={{
            height: "10px",
            fontSize: "30px"
          }}> {animal.Name} </Card.Header>
        <img src={animal.selectedFile}
         alt='https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
         height={200}/>  
         <Card.Content>
          <Card.Description textAlign="center" style={{
            height: "30px",
            fontSize: "20px"
          }}>
            {animal.Breed}
          </Card.Description>
          <Card.Description textAlign="center" style={{
            height: "30px",
            fontSize: "20px"
          }}>
            {animal.Age + ' years old'} 
          </Card.Description>
          <Card.Description textAlign="center" style={{
            height: "30px",
            fontSize: "20px"
          }}>
            {animal.IntakeReason}
          </Card.Description>
        </Card.Content>
        <Button onClick={() => dispatch(deleteAnimal(animal._id))}>Delete</Button>
      </Card>
      </>
    )
}

export default Animal; 
