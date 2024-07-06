import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../service/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@NotasDaProfe:token", token);
      localStorage.setItem("@NotasDaProfe:user", JSON.stringify(user));

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert(error.response.data.message);
      } else {
        alert("Falha na autenticação");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@NotasDaProfe:token");
    localStorage.removeItem("@NotasDaProfe:user");
    setData({});
    api.defaults.headers.Authorization = "";
    window.location.href = "/";
  }

  async function updateUser({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const formData = new FormData();
        formData.append("avatar", avatarFile);
        const response = await api.patch("users/avatar", formData);
        user.avatar = response.data.avatar;
      }
      await api.put("/users", user);
      localStorage.setItem("@NotasDaProfe:user", JSON.stringify(user));

      setData({ user, token: data.token });
      alert("Usuário atualizado com sucesso!");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert(error.response.data.message);
      } else {
        alert("Falha na atualização do usuário");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@NotasDaProfe:token");
    const user = JSON.parse(localStorage.getItem("@NotasDaProfe:user"));

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });
    } else {
      localStorage.removeItem("@NotasDaProfe:token");
      localStorage.removeItem("@NotasDaProfe:user");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, updateUser, user: data.user, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
