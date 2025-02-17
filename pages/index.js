import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";
import BoatBoard from "../components/BoatBoard";


const Home = () => {
  // Vérification des variables d'environnement en local
  useEffect(() => {
    console.log("🔍 Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log("🔍 Supabase Key:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  }, []);

  return (
    <div>
      <h1>Boat Race Board</h1>
    </div>
  );
};

export default Home;

  return (
    <div className="relative w-full h-screen bg-blue-100 p-4">
      {session ? (
        <div className="absolute top-4 right-4 flex space-x-2">
          {role === "admin" && (
            <button onClick={() => router.push("/admin")} className="bg-red-500 text-white px-4 py-2 rounded">
              Admin
            </button>
          )}
          <button onClick={handleLogout} className="bg-gray-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={handleLogin} className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
          Login
        </button>
      )}
      <BoatBoard />
    </div>
  );
};

export default Home;
