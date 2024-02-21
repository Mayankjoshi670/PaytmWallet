export const Input = ({ placeholder ,lable , onChange})=>{
    return(
        <div className="p-2 text-sm font-medium">
            <h1>{lable}</h1>
            <input onChange={onChange} type="text" placeholder={placeholder}/>
        </div>
    )
}