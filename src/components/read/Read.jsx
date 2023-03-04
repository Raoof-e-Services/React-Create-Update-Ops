import React, {useEffect, useState} from "react";
import {Table, Button } from 'semantic-ui-react';
import axios from "axios";
import { Link } from 'react-router-dom';


export default function Read(){
    const [apiData, setApiData] = useState([]);
    useEffect(()=>{
      axios.get("https://640234e1302b5d671c35b40b.mockapi.io/crud")
      .then((getData) => {
         setApiData(getData.data)
      })
    })
    
    return(
        <div>
            <h4>Read Operations</h4>
            
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>id</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {apiData.map((a)=>{
        return(
            <Table.Row>
                
            <Table.Cell>{a.id}</Table.Cell>
            <Table.Cell>{a.fname}</Table.Cell>
            <Table.Cell>{a.lname}</Table.Cell>

            <Table.Cell>

              <Button color="green">Update</Button>
              </Table.Cell>
            <Table.Cell>
            
              <Button color="red">
                Delete
              {/* <Link to = "/delete">  Delete</Link> */}
              </Button>
              
              </Table.Cell>
            
            </Table.Row>
        )
        })}
      

    </Table.Body>

    
  </Table>
        </div>
    )
}