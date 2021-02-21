import React, { useState } from 'react'
import { Form, Table, Transition, Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'

import EventRow from './EventRow.js'; 
import { createEvent } from '../actions/events'; 

const Events = () => {
    const [eventData, setEventData] = useState({ Name: '', NumberVolunteersNeeded: 0, NumberVolunteersSigned: 0, Date: '', 
    StartTime: '', EndTime: '', Address: '', City: '', Zip: '' });
    const dispatch = useDispatch(); 
    const events = useSelector((state) => state.events);

    const clear = () => {
        setEventData({ Name: '', NumberVolunteersNeeded: 0, NumberVolunteersSigned: 0, Date: '', 
        StartTime: '', EndTime: '', Address: '', City: '', Zip: '' });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        var dtStart = new Date("1/1/2011 " + eventData.StartTime);
        var dtEnd = new Date("1/1/2011 " + eventData.EndTime);
        var difference_in_milliseconds = dtEnd - dtStart;
        if (difference_in_milliseconds < 0)
        {
            alert("End date is before start date!");
        } else {
            dispatch(createEvent(eventData)); 
            clear(); 
        }
    }; 

    return (
    <div>
    <h1 align="center">Here is a list of events, as more volunteers sign up for an event you may change
    the number of volunteers signed up for that event
    </h1>
    <Table color='teal' key='Teal' inverted> 
    <Table.Header>
    <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Volunteers Needed</Table.HeaderCell>
        <Table.HeaderCell>Volunteers Signed</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Start Time</Table.HeaderCell>
        <Table.HeaderCell>End Time</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>City</Table.HeaderCell>
        <Table.HeaderCell>Zip</Table.HeaderCell>
        <Table.HeaderCell>Make volunteers signed editable</Table.HeaderCell>
        <Table.HeaderCell>Submit edit for volunteers signed</Table.HeaderCell>
    </Table.Row>
    </Table.Header>
    <Table.Body>
        {events && (
        <>
            {events.map((event) => (
            <Transition.Group key={event._id}>
            <EventRow event={event} id={event._id}/>
            </Transition.Group>
            ))}
        </>
        )}
    </Table.Body>
    </Table>  
    <h1 align="center">Enter new Event here:</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Field>
            <label>Name</label>
            <input placeholder="Name" required value={eventData.Name} onChange={(e) => setEventData({ ...eventData, Name: e.target.value })}/>
        </Form.Field>
        <Form.Field>
            <label>Number of Volunteers Needed</label>
            <input type='number' value={eventData.NumberVolunteersNeeded} 
            onChange={(e) => setEventData({ ...eventData, NumberVolunteersNeeded: e.target.value })} required/>
        </Form.Field>
        <Form.Field>
            <label>Event Date</label>
            <input type='date' value={eventData.Date} onChange={(e) => setEventData({ ...eventData, Date: e.target.value })} required/>
        </Form.Field>
        <Form.Field>
            <label>Start Time</label>
            <input type="time" value={eventData.StartTime} onChange={(e) => setEventData({ ...eventData, StartTime: e.target.value })} required/>
        </Form.Field>
        <Form.Field>
            <label>End Time</label>
            <input type="time" value={eventData.EndTime} onChange={(e) => setEventData({ ...eventData, EndTime: e.target.value })} required/>
        </Form.Field>
        <Form.Field>
            <label>Address</label>
            <input placeholder="Address" value={eventData.Address} 
            onChange={(e) => setEventData({ ...eventData, Address: e.target.value })} required/>
        </Form.Field>
        <Form.Field>
            <label>City</label>
            <input placeholder="City" value={eventData.City} onChange={(e) => setEventData({ ...eventData, City: e.target.value })} required/>
        </Form.Field>
        <Form.Field>
            <label>Zip Code (Can only be 5 digits)</label>
            <input id="zip" name="zip" type="text" pattern="[0-9]{5}" value={eventData.Zip} 
            onChange={(e) => setEventData({ ...eventData, Zip: e.target.value })} required/>
        </Form.Field>
        <Button color="teal" type='submit'>Submit</Button>
    </Form>
    </div>
    ); 
};

export default Events; 