const Nothing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">This page does not exist</h2>
      <p className="text-lg text-gray-400">
        Please go back to the previous page and try again.
      </p>
    </div>
  );
};

export default Nothing;
