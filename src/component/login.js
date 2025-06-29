import React, { useState } from "react";
import logoKemenhub from "../asset/LOGO KEMENHUB.png";

function LoginBoyolali() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

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

      const data = await response.json();
      console.log("📦 Response dari server:", data);

      const userName = data?.data?.user?.username;

      if (userName) {
        alert(`✅ Login berhasil!\nSelamat datang, ${userName}`);
      } else {
        alert("⚠️ Login berhasil, tapi data user tidak ditemukan.");
        console.warn("Data login:", data);
      }

      // Contoh: Simpan token jika perlu
      // localStorage.setItem("token", data.token);
    } catch (err) {
      console.error("Login error:", err);
      alert(
        "❌ Login gagal: harap melakukan monitoring ke semua alat terlebih dahulu" +
          err.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#eaeaea] flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-[#001e75] py-2 text-center text-white font-semibold text-lg">
        LOGIN APLIKASI PENGUJIAN
      </div>

      {/* Form */}
      <div className="flex-grow flex items-center justify-center w-full">
        <form
          onSubmit={handleLogin}
          className="bg-[#d2ebfa] border border-blue-500 px-8 py-6 mt-8 rounded shadow-md text-center w-[300px]"
        >
          <img
            src={logoKemenhub}
            alt="Logo Kemenhub"
            className="w-16 mx-auto mb-3"
          />
          <h3 className="text-sm font-semibold mb-1 leading-tight">
            DINAS PERHUBUNGAN
            <br />
            KABUPATEN BOYOLALI
          </h3>

          <div className="mb-3 text-left">
            <label className="text-sm">Nama User</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-400 rounded-sm p-1 text-sm"
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label className="text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-400 rounded-sm p-1 text-sm"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-gray-300 hover:bg-gray-400 text-sm px-6 py-1 rounded-sm border border-gray-500 shadow w-full"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginBoyolali;
