import React, { useState } from "react";
import villa from "../asset/villa.jpg";
import { loginWeb } from "../services/authService";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://monitoring-kir-production.up.railway.app/user/login-web",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login gagal");
      }

      const user = await response.json();
      console.log("Login berhasil:", user);
      alert("Login berhasil!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={villa} alt="Villa" />
      </div>

      <div className="flex flex-col justify-center">
        <form
          onSubmit={handleLogin}
          className="max-w-[400px] rounded-lg w-full mx-auto bg-slate-200 p-4"
        >
          <h2 className="text-3xl font-semibold text-center py-6">LATENG.</h2>

          <div className="flex flex-col py-2">
            <label>Username</label>
            <input
              className="border p-1 rounded-sm"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border p-1 rounded-sm"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="border w-full my-2 py-2 bg-blue-600 rounded-xl font-bold hover:bg-blue-400 text-white"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div className="justify-items-end text-center pt-2">
            <p className="text-sm text-gray-700">Create an Account</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
