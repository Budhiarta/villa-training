const API_URL = "http://localhost:8000";

export const loginWeb = async ({ username, password }) => {
  try {
    const response = await fetch(`http://localhost:8000/user/login-web`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      // Coba ambil pesan error dari response backend
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Login gagal");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);

    if (error.message === "Failed to fetch") {
      throw new Error(
        "Tidak bisa menjangkau server. Cek koneksi atau URL API."
      );
    } else {
      throw error;
    }
  }
};
