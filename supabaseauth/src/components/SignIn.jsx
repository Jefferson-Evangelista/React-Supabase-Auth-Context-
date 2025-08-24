import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { session, signInUser } = UserAuth();
  const navigate = useNavigate();
  console.log(session);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signInUser(email, password);
      if (result.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError("an error occured");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignIn} className="max-w-md m-auto pt-24">
      <h2 className="font-bold pb-2">Sign in today!</h2>
      <p>
        Dont have an account?
        <Link to="/signup" className="text-blue-600 underline ml-1">
          Sign up!
        </Link>
      </p>
      <div className="flex flex-col py-4 ">
        <input
          type="email"
          name=""
          className="p-3 mt-6 bg-gray-200 rounded-sm text-[#4c4c4c]"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name=""
          className="p-3 mt-6 bg-gray-200 rounded-sm text-[#4c4c4c]"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full px-4 py-2 bg-[#00BCFF] rounded-sm text-white"
        >
          Sign in
        </button>
        {error && <p className="text-red-600 text-center pt-4">{error}</p>}
      </div>
    </form>
  );
};

export default SignIn;
