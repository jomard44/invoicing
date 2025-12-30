import InvoiceCard from "../componenets/InvoiceCard";
import "../index.css";

const Home = () => {
  return (
    <>
      <h1 className="text-center m-5">your invoices</h1>
      <InvoiceCard
        title="invoice"
        clietEmail="email@gmail.com"
        status="pending"
        date="00/00/0000"
      />
    </>
  );
};

export default Home;
