import React, { useState } from "react";
import FileBase from 'react-file-base64';
import { Form, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux'

import "./Home.css";
import { createAnimal } from '../actions/animals';

export default function Home() {
  return(
        <div id='body'>
            <Header/>
            <h1>Add an animal here: </h1>
            <AnimalForm/>
        </div>
    );
}

const AnimalForm = () => {
    const [animalData, setAnimalData] = useState({ Name: '', Species: '', Breed: '', Age: 0, 
    Status: "Under Evaluation", IntakeReason: '', selectedFile: ''});
    const dispatch = useDispatch(); 

    const clear = () => {
        setAnimalData({ Name: '', Species: '', Breed: '', Age: 0, 
        Status: '', IntakeReason: '', selectedFile: ''});
      };

    const sub = async (e) => {
        dispatch(createAnimal(animalData)); 
        clear(); 
    }

    return (
        <Form style={{
            textAlign:"center"
            }}>
            <Form.Field>
            <label>Name</label>
            <input placeholder="Name" required value={animalData.Name} onChange={(e) => setAnimalData({ ...animalData, Name: e.target.value })}/>
            </Form.Field>
            <Form.Field>
            <label>Species</label>
            <select name="Species" required value={animalData.Species} onChange={(e) => 
            setAnimalData({ ...animalData, Species: e.target.value })}>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Other">Other</option>
            </select>
            </Form.Field>
            <Form.Field>
            <label>Breed</label>
            <input placeholder="Breed" required value={animalData.Breed} onChange={(e) => 
            setAnimalData({ ...animalData, Breed: e.target.value })}/>
            </Form.Field>
            <Form.Field>
            <label>Age (In Human Years)</label>
            <input placeholder="Age" required type="number" 
            value={animalData.Age} onChange={(e) => setAnimalData({ ...animalData, Age: e.target.value })}/>
            </Form.Field>
            <Form.Field>
            <label>Intake Reason</label>
            <select name="IntakeReason" required value={animalData.IntakeReason} onChange={(e) => 
            setAnimalData({ ...animalData, IntakeReason: e.target.value })}>
                <option value="Stray">Stray</option>
                <option value="Surrendered">Surrendered</option>
                <option value="Siezed">Siezed</option>
            </select>
            </Form.Field>
            <Form.Field>
            <label>Upload a photo of the animal</label>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setAnimalData({ ...animalData, selectedFile: base64 })}/>
            </Form.Field>
            <Button color="teal" type='submit'  onClick={sub}>Submit</Button>
        </Form>
    ); 
};

const Header = () =>{
    return(
        <div className='header'>
            <span className='header-title'>
                Animal Shelter Management System
            </span>
            <br/>
            <br/>
            <span className="header-text">
                Where you can manage your Animal Shelter
            </span>
        </div>
    );
}