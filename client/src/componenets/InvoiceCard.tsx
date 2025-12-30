const InvoiceCard = ({
  title = "title of the invoice",
  clietEmail = "client email address e.g example@gmail.com ",
  status = "pending",
  date = "00/00/0000"
}) => {
  return (
    <div className="bg-gray-100/50 w-100 m-2 p-2 rounded border border-gray-400">
      <p>title: {title}</p>
      <p>client email: {clietEmail}</p>
      <p>status: {status}</p>
      <p>date: {date}</p>
    </div>
  );
};

export default InvoiceCard;
