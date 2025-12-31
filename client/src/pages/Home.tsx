import { useState, useEffect } from "react";
import InvoiceCard from "../componenets/InvoiceCard";
import "../index.css";

const Home = () => {
  type Invoice = {
    _id: string;
    title: string;
    clientEmail: string;
    status: string;
    amount:number;
    date: string;
  };
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/invoices");
        if (!res) {
          console.error("no response from server");
        }
        const data = await res.json();

        setInvoices(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInvoices();
  }, []);

  return (
    <>
      <h1 className="text-center m-5">your invoices</h1>
      {invoices.map((invoice) => (
        <InvoiceCard
        key={invoice._id}
        _id={invoice._id}
          title={invoice.title}
          clientEmail={invoice.clientEmail}
          amount={invoice.amount}
          status={invoice.status}
          date={invoice.date}
        />
      ))}
    </>
  );
};

export default Home;
