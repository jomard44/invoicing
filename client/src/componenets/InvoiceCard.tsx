import { Trash, Pencil } from "lucide-react";
import { Link } from "react-router-dom";

const InvoiceCard = ({
  title = "title of the invoice",
  clientEmail = "client email address e.g example@gmail.com ",
  status = "pending",
  date = "00/00/0000",
}) => {
  return (
    <>
      <div className="m-5">
        <div className="bg-gray-100/50 w-100 ml-2 pl-2 rounded border border-gray-400">
          <p><strong>title:</strong> {title}</p>
          <p><strong>client email:</strong> {clientEmail}</p>
          <p><strong>status:</strong> {status}</p>
          <p><strong>date:</strong> {date}</p>
        </div>
        <div className="pl-2 flex  ">
            <Link to="/edit">
          <button className="bg-green-600/90 font-bold border w-50 rounded flex items-center gap-2  pl-20 py-1 hover:bg-gray-300/30">
            Edit
            <Pencil width={20} height={20} />
          </button>
          </Link>
          <Link to="/delete">
          <button className="bg-red-600/90 font-bold  border w-50 rounded flex items-center gap-2 pl-20 py-1 hover:bg-gray-300/30 ">
            Delete
            <Trash width={20} height={20} />
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default InvoiceCard;
