import React from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 p-8 flex justify-center">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-3xl font-extrabold text-white text-center">User Management System</h1>
        <AddUser />
        <UserList />
      </div>
    </div>
  );
};

export default App;