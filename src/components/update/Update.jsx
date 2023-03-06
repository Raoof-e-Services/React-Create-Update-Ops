import React, {useState, useEffect} from "react";
import { Button,  Form } from 'semantic-ui-react'
import axios from "axios";

export default function Update(){
    
const[fname, setFname] = useState("");
const[lname, setLname] = useState("");
const[ID, setID]=useState(null)

const sendDataToApi = () =>{
axios.put(`https://640234e1302b5d671c35b40b.mockapi.io/crud/${ID}`, {
    fname,
    lname
})

}

useEffect(() => {
    setFname(localStorage.getItem('fname'));
    setLname(localStorage.getItem('lname'));
    setID(localStorage.getItem('id'));
}, [])

    return(
        <div>
            <h4>
            Create operations
            </h4>
            <Form>
                <Form.Field>
                <label>First Name</label>
                <input value={fname} name="fname" onChange={(e)=>setFname(e.target.value)} placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                <label>Last Name</label>
                <input value={lname} name="lname" onChange={(e)=>setLname(e.target.value)} placeholder='Last Name' />
                </Form.Field>
                
                <Button type='submit' onClick={sendDataToApi}>Update</Button>
            </Form>
            
        </div>
    )
}

