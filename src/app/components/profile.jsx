"use client";
import { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/users/3");
      if (!response.ok) throw new Error("Failed to fetch user");
      const data = await response.json();
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!user) return <div>Error loading user profile.</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl">User Profile</h1>
      <p>
        Name: {user.name.firstname} {user.name.lastname}
      </p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
