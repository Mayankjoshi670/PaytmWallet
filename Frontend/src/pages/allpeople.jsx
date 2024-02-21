import { Header } from "../components/header"
import { useState } from "react"
import{Users} from "../components/users"
import { Balance } from "../components/balance"
import { Name } from "../components/fetchname"
export const Allpeople = ()=>{
    // const [input , setInput] = useState("")
    return (
        <div className="flex p-12 min-h-screen w-full h-full bg-emerald-500 items-center justify-center ">
            <div className="bg-white p-14 ">
            <div className="flex items-center ">
             <Header lable={"Payments App "}></Header>
                <div className="flex  items-center  pl-12 "> 
                <h2 className="pr-2 items-center">   <Name></Name></h2> 
                <div className="flex w-12 h-12 rounded-full bg-emerald-600 items-center justify-center cursor-pointer"><span>U</span></div>
                </div>
            </div>
                <div className="flex items-center ">
                    <h1 className="text-2xl font-bold ">Your balance is  </h1>
                    <div className="pl-8 font-semibold text-xl">
                    ₹ <Balance  > </Balance>
                    </div>
                </div>
                <div>
                    <Users></Users>
                </div>
                <div>                    
                </div>
            </div>
        </div>
    )
}