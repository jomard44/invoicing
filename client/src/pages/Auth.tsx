import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const endpoint = isRegistering
        ? "http://localhost:3000/api/auth/register"
        : "http://localhost:3000/api/auth/login";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", 
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      console.log(
        isRegistering ? "Registration successful" : "Login successful"
      );
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        credentials: "include", 
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Logout failed");
      }

      console.log("Logout successful");
      navigate("/login");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white/10 backdrop-blur rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-6 text-white">
        {isRegistering ? "Register" : "Sign In"}
      </h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-white/80">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/40 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-white/80">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/40 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="mt-4 bg-blue-600 hover:bg-blue-700 transition text-white rounded py-2 font-medium">
          {isRegistering ? "Register" : "Sign In"}
        </button>
      </form>

      <button
        className="mt-4 text-blue-400 hover:underline"
        onClick={() => setIsRegistering(!isRegistering)}
      >
        {isRegistering
          ? "Already have an account? Sign In"
          : "Don't have an account? Register"}
      </button>

      <button
        className="mt-4 bg-red-600 hover:bg-red-700 transition text-white rounded py-2 font-medium"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Auth;
