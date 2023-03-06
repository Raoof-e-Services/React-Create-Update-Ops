import React, {useEffect, useState} from "react";
import {Table, Button } from 'semantic-ui-react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function Read(){
  const navi = useNavigate();
    const [apiData, setApiData] = useState([]);
  
    axios.get('https://640234e1302b5d671c35b40b.mockapi.io/crud')
    .catch(function (error) {

      if (error.response) {
        
      } else if (error.request) {
        window.alert("server is down1")
      } else {
        
      }
    });
    useEffect(()=>{

      axios.get("https://640234e1302b5d671c35b40b.mockapi.io/crud")
      .then((getData) => {
         setApiData(getData.data)
      })
    },[])
  
    
    const setID = (id, fname, lname) =>{
      localStorage.setItem('id',id)
      localStorage.setItem('fname',fname)
      localStorage.setItem('lname',lname)
      
    }
    
const getData = () =>{
  axios.get("https://640234e1302b5d671c35b40b.mockapi.io/crud")
      .then((getData) => {
         setApiData(getData.data)
         
      })
}

const onDelete = (id) => {
  axios.delete(`https://640234e1302b5d671c35b40b.mockapi.io/crud/${id}`)
   .then(() =>{
    getData();
   })
}


    return(
        <div>
            <h4>Read Operations</h4>
            <Button onClick={()=>navi("/")}>Home</Button>
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
    {apiData.map((data)=>{
        return(
            <Table.Row>
                
            <Table.Cell>{data.id}</Table.Cell>
            <Table.Cell>{data.fname}</Table.Cell>
            <Table.Cell>{data.lname}</Table.Cell>

            <Table.Cell>
              <Link to="/update">
              <Button color="green" onClick = { () => setID (data.id, data.fname, data.lname) }>Update</Button>
              </Link>
              </Table.Cell>
            <Table.Cell>
            
            
              
              <Button color="red" onClick={ () => onDelete (data.id)}>
                Delete
              </Button>
              
               
               {/* <Button color="red">delete</Button> */}
               
              </Table.Cell>
            
            </Table.Row>
        )
        })}
      

    </Table.Body>

    
  </Table>
        </div>
    )
}