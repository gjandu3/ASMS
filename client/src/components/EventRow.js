import React, { useState, useEffect } from 'react' 
import { Table, Button, Checkbox } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'; 

import { updateVolunteersSigned } from '../actions/events'; 

const EventRow = ({ event, id }) => {
    const [eventData, setEventData] = useState({ Name: event.Name,  
    NumberVolunteersNeeded: event.NumberVolunteersNeeded, NumberVolunteersSigned: event.NumberVolunteersSigned, 
    Date: event.Date, StartTime: event.StartTime, EndTime: event.EndTime, Address: event.Address, City: event.City, Zip: event.Zip });
    const dispatch = useDispatch();
    /*const ogDate = event.Date;
    const month = ogDate.substring(5,7);
    const day = ogDate.substring(8, ogDate.length)
    const year = ogDate.substring(0,4);
    const correctedDate = month + '/' + day + '/' + year; */

    useEffect(() => {
        if (event) setEventData(event);
      }, [event])

    const changeEdit = () => {
        const sign = document.getElementById(event.Name);  
        if (sign.hasAttribute('readonly')) {
            sign.removeAttribute('readonly')
          } else {
            sign.setAttribute('readonly', 'readonly');
          }
    }
    
    const handleEdit = async (e) => {
        e.preventDefault(); 
        if (eventData.NumberVolunteersSigned > eventData.NumberVolunteersNeeded) {
            alert("Cannot have more volunteers signed up than what is needed")
        } else {
            dispatch(updateVolunteersSigned(id, eventData)); 
            window.location.reload(false); 
        }
    }

    return (
        <Table.Row>
                <Table.Cell>{event.Name}</Table.Cell>
                <Table.Cell>{event.NumberVolunteersNeeded}</Table.Cell>
                <Table.Cell><input id={event.Name} defaultValue={event.NumberVolunteersSigned} 
                onChange={(e) => setEventData({ ...eventData, NumberVolunteersSigned: e.target.value })} 
                readOnly style={{width: "40px", color: "teal", textAlign: "center"}}/></Table.Cell>
                <Table.Cell>{event.Date}</Table.Cell>
                <Table.Cell>{event.StartTime}</Table.Cell>
                <Table.Cell>{event.EndTime}</Table.Cell>
                <Table.Cell>{event.Address}</Table.Cell>
                <Table.Cell>{event.City}</Table.Cell>
                <Table.Cell>{event.Zip}</Table.Cell>
                <Table.Cell textAlign="center"><Checkbox onClick={changeEdit}></Checkbox></Table.Cell>
                <Table.Cell textAlign="center"><Button onClick={handleEdit}>Submit edit</Button></Table.Cell>
        </Table.Row>
    ); 
};

export default EventRow; 