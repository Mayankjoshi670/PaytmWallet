import React from 'react'
import {Header} from '../components/header'
import {Subheader} from '../components/subheader'
import {Input} from '../components/input'
import {Button} from '../components/button'
import {Bottomwarning} from '../components/bottomwarning'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
 export const Signup = ()=>{
   const  nevigate = useNavigate();
    const [firstName , setfirstName] =  useState(' ');
    const [lastName , setlastName] = useState(' ')
    const [username , setuserName] = useState("");
    const [password , setpassword] = useState("")
    return (
        <div className="bg-emerald-400 flex items-center justify-center h-screen">
        <div className=" bg-white p-14 ">
            <Header lable = {'SignUp'}>  </Header>
            <Subheader lable= {'Enter Your information to create an  account '}/>
            <Input onChange={(e)=>{setfirstName(e.target.value)}} placeholder="jhon" lable={'FirstName '}/>
            <Input onChange={(e)=>{setlastName(e.target.value)}} placeholder="Doe" lable={'Last Name '}></Input>
            <Input onChange={(e)=>{setuserName(e.target.value)}} placeholder= "demo@email.com" lable={'E-mail'}></Input>
            <Input onChange={(e)=>{setpassword(e.target.value)}} placeholder="" lable={'Password'}></Input>
           <div >
           <Button onPress={ async()=>{
            try{

                const response =   await  axios.post("http://localhost:3000/api/v1/user/signup",{
                    // userName:userName
                // if we know that the key and the value pair are same the we can send only one value 
                username,
            firstName,
            lastName,
            password
        }) 
        if(response.data.token){
            nevigate("/allpeople");
            localStorage.setItem("token" ,response.data.token);


        }
    } catch(error){
        alert("please enter input correctly ")
    }
           }} className='wl-12 justify-center'  props = "Signup"/>
           </div>
            <Bottomwarning  lable ={ "already have an account ? "} link={'Sign in'} to ={'/Signin'}></Bottomwarning>
        </div>
        </div>
    )
 }