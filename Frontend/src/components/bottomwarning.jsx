import { Link } from "react-router-dom" 
export const Bottomwarning = ({lable , link , to })=>{
    return (
    <div className="flex">
    <div>
        {lable}
    </div>
    <Link className="cursor-pointer underline pl-4 "  to={to}  > {link}  </Link>
    </div>
    )
}