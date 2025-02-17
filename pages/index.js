import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";
import BoatBoard from "../components/BoatBoard";

const Home = () => {
  const [session, setSession] = useState(null);
  const [role, setRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);

      if (session) {
        const { data, error } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", session.user.id)
          .single();

        if (!error) setRole(data.role);
      }
    };
    fetchSession();
  }, []);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setRole(null);
  };

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
