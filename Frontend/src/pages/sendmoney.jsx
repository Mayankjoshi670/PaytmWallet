import { useNavigate, useSearchParams } from "react-router-dom"
import  axios  from "axios";
import { useState } from "react";

export const Sendmoney = ()=>{
 const nevigate = useNavigate();
    const[searchParams] = useSearchParams();
    const[money , setmoney] = useState(0)
  const id = searchParams.get('id');
  const name = searchParams.get('name');
    return(
        <div className="bg-emerald-400  h-full flex  items-center justify-center">
            <div className="p-14">

        <div>
            <h2 className="text-2xl  ">Send Money</h2>
        </div>
            <div className=" flex   items-center  space-x-4">
                <div className=" h-12 w-12  rounded-full bg-green-500 flex items-center justify-center ">
                    <span>{(name[0]).toUpperCase()}</span>
                </div>
               <h2 className="text-xl">{name}</h2> 
            </div>
            <div>Amount (in RS)</div>
            <div className=" flex flex-col">
                <input onChange={(e)=>{
                    setmoney(e.target.value)
                }} type="number" className="border border-red-500" />
                <button onClick={ async ()=>{
                   { if(money.trim === '' || parseFloat(money)<= 0){    
                    console.log("please enter correct amount ");
                    alert("please enter correct amount ")
                   }
                
                }
              try{

               const result =     await axios.post(' http://localhost:3000/api/v1/account/transfer',{
                        amount:money ,
                        to :id
                    },{
                        headers:{
                            Authorization:"Bearer "+localStorage.getItem('token')
                        }
                    })
                 nevigate('/allpeople');
                }catch(error){     
                        console.log("please sign up ");
                        // write to nevigate to another page 
                        nevigate('/signup')
                       
                    }
                }} className="m-2 border bg-black text-white border-black"> Initiate Transfer </button>
            </div>
            </div>
        </div>
    )
}