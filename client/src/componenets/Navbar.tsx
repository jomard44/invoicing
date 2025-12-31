import { Link } from "react-router-dom"
import {CirclePlus} from "lucide-react"
import "../index.css"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-700 text-white p-3">
        
        <Link to={"/"}><p className="ml-5 text-red-300 font-bold hover:text-white" >Invoicing-master</p></Link>
        <Link to={"/create"}><div className="flex"><CirclePlus className="mr-1"/><p className="text-red-300 font-bold hover:text-white">Create Invoice</p> </div></Link>
        <Link to={"/auth"}><p className="mr-5 text-red-300 font-bold hover:text-white">Signin</p> </Link>

    </div>
  )
}

export default Navbar
