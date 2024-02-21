import React from "react";
import {Header} from '../components/header'
import {Subheader} from '../components/subheader'
import {Input} from '../components/input'
import {Button} from '../components/button'
import {Bottomwarning} from '../components/bottomwarning'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// export const Signin =  ()=>{
//   const[username , setuserName] = useState('');
//   const [password , setpassword] = useState('');
//   const nevigate = useNavigate();
//     return(
//         <div className="bg-emerald-400 flex items-center justify-center h-screen">
//             <div className=" bg-white p-14 ">
//         <Header className lable ={'Signin'}> hi </Header>
//         <Subheader lable= {'Enter Your Credebtial to log in  '}/>
//         <Input onChange={(e)=>{setuserName(e.target.value)}} placeholder= "demo@email.com" lable={'E-mail'}></Input>
//         <Input onChange={(e)=>{setpassword(e.target.value)}} placeholder="" lable={'Password'}></Input>
//         <Button onPress={async()=>{
//             try{

//                 const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
//                     username , 
//                 password
//             })
//             if(response){
//                 nevigate('/allpeople'); 
//             }
//         } catch(error){
//             alert("plese enter correct credentials to log in ")
//         }
//             localStorage.setItem("token" , response.data.token);
//         } } props = "Signin"/>
//         <Bottomwarning lable={`don't have an account?`} link={'signup'} to={'/Signup'}></Bottomwarning>
//             </div>
//         </div>
//     )
// }


export const Signin = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    return (
      <div className="bg-emerald-400 flex items-center justify-center h-screen">
        <div className="bg-white p-14">
          <Header className lable={'Signin'}> hi </Header>
          <Subheader lable={'Enter Your Credebtial to log in  '} />
          <Input onChange={(e) => { setUserName(e.target.value) }} placeholder="demo@email.com" lable={'E-mail'}></Input>
          <Input onChange={(e) => { setPassword(e.target.value) }} placeholder="" lable={'Password'}></Input>
          <Button onPress={async () => {
            try {
              const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password
              });
  
              // Save token to local storage after successful login
              localStorage.setItem("token", response.data.token);
  
              // Redirect to '/allpeople' after successful login
              navigate('/allpeople');
            } catch (error) {
              alert("Please enter correct credentials to log in");
            }
          }} props="Signin" />
          <Bottomwarning lable={`Don't have an account?`} link={'signup'} to={'/Signup'}></Bottomwarning>
        </div>
      </div>
    )
  }
  