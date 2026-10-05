import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../redux/userSlice";

export default function UserList() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <div className="text-slate-400 text-center py-4">Loading users...[cite: 12]</div>;
  if (error) return <div className="text-rose-400 text-center py-4">Error: {error}[cite: 12]</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-4">User Management List[cite: 12]</h3>
      {users.length === 0 ? (
        <p className="text-slate-500 text-center">No users found[cite: 12].</p>
      ) : (
        <ul className="space-y-3">
          {users.map((user) => (
            <li key={user._id || user.id} className="flex justify-between items-center p-3 bg-slate-950 border border-slate-800 rounded-lg">
              <div>
                <p className="text-white font-medium">{user.username || user.name}</p>
                <p className="text-xs text-slate-400">{user.email}</p>
              </div>
              <button
                onClick={() => dispatch(deleteUser(user._id || user.id))}
                className="px-3 py-1 bg-rose-600/20 text-rose-400 hover:bg-rose-600 hover:text-white text-xs font-semibold rounded transition-all cursor-pointer"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}