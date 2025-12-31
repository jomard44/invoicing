import { useEffect, useState, type FormEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Delete = () => {
  const [data, setData] = useState({
    title: "",
    clientEmail: "",
    status: "",
    date: "",
    amount: "",
  });
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      console.error("No ID provided");
      navigate("/"); 
      return;
    }
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/invoices/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch invoice");
        }
        const fetchedData = await res.json();
        setData(fetchedData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id, navigate]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id) {
      console.error("No ID provided");
      return;
    }
    try {
      const fetchDelete = await fetch(`http://localhost:3000/api/invoices/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!fetchDelete.ok) {
        throw new Error("Error occurred while deleting the invoice");
      }
      console.log("Invoice deleted");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white/10 backdrop-blur rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-6 text-white">
          Delete this Invoice
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">Title</label>
            <input
              type="text"
              name="title"
              className="bg-white/40 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={data.title}
              readOnly
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">Email</label>
            <input
              type="email"
              name="clientEmail"
              className="bg-white/40 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={data.clientEmail}
              readOnly
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">Amount</label>
            <input
              type="number"
              name="amount"
              min={0}
              className="bg-white/40 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={data.amount}
              readOnly
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">Status</label>
            <input
              type="text"
              name="status"
              className="bg-white/40 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={data.status}
              readOnly
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">Date</label>
            <input
              type="date"
              name="date"
              className="bg-white/40 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={data.date}
              readOnly
            />
          </div>

          <button className="mt-4 bg-blue-600 hover:bg-blue-700 transition text-white rounded py-2 font-medium">
            Delete
          </button>
        </form>
      </div>
    </>
  );
};

export default Delete;