import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

export default function AddUser() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) return;
    
    dispatch(addUser(formData));
    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4 mb-6">
      <h3 className="text-xl font-bold text-white">Add New User</h3>
      <div>
        <label className="block text-xs uppercase text-slate-400 mb-1">Username</label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
        />
      </div>
      <div>
        <label className="block text-xs uppercase text-slate-400 mb-1">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
        />
      </div>
      <div>
        <label className="block text-xs uppercase text-slate-400 mb-1">Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
        />
      </div>
      <button type="submit" className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg">
        Add User
      </button>
    </form>
  );
}