import React, {useState} from "react";
import { Button,  Form } from 'semantic-ui-react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create(){

    let navi = useNavigate();
const[fname, setFname] = useState("");
const[lname, setLname] = useState("");

const sendDataToApi = () =>{
axios.post("https://640234e1302b5d671c35b40b.mockapi.io/crud", {
    fname,
    lname
}).then(()=> {navi("/read")});
}

    return(
        <div>
            <h4>
            Create operations
            </h4>
            <Form>
                <Form.Field>
                <label>First Name</label>
                <input name="fname" onChange={(e)=>setFname(e.target.value)} placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                <label>Last Name</label>
                <input name="lname" onChange={(e)=>setLname(e.target.value)} placeholder='Last Name' />
                </Form.Field>
                
                <Button type='submit' onClick={sendDataToApi}>Submit</Button>
            </Form>
            
        </div>
    )
}

