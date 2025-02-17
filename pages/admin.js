import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

const AdminPanel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterUser = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (!error) {
      await supabase.from("profiles").insert([{ id: data.user.id, role: "user" }]);
      alert("Utilisateur inscrit avec succès");
    } else {
      alert("Erreur : " + error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <div className="mt-4">
        <input type="email" placeholder="Email utilisateur" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border rounded mr-2" />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border rounded mr-2" />
        <button onClick={handleRegisterUser} className="bg-blue-500 text-white px-4 py-2 rounded">Ajouter Utilisateur</button>
      </div>
    </div>
  );
};

export default AdminPanel;
