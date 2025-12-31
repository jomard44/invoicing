import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [data, setData] = useState({
    title: "",
    clientEmail: "",
    status: "",
    date: "",
    amount: 0,
  });

  const navigate = useNavigate();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: name === "amount"? Number(value): value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    try {
      const postData = await fetch("http://localhost:3000/api/invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await postData.json();
      console.log(response);
      if (!postData.ok) {
        throw new Error(response.message && "error posting data to the server");
      }

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white/10 backdrop-blur rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-6 text-white">
          Create New Invoice
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">Title</label>
            <input
              type="text"
              name="title"
              className="bg-white/40 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleOnChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">Email</label>
            <input
              type="email"
              name="clientEmail"
              className="bg-white/40 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleOnChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">Amount</label>
            <input
              type="number"
              name="amount"
              min={0}
              className="bg-white/40 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleOnChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">Status</label>
            <input
              type="text"
              list="options"
              name="status"
              className="bg-white/40 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleOnChange}
            />
            <datalist id="options">
              <option value="pending" />
              <option value="paid" />
              <option value="overdue" />
            </datalist>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">Date</label>
            <input
              type="date"
              name="date"
              className="bg-white/40 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleOnChange}
            />
          </div>

          <button className="mt-4 bg-blue-600 hover:bg-blue-700 transition text-white rounded py-2 font-medium">
            Create Invoice
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
