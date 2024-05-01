import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MegaMenu = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <NavLink to="/" className="font-bold text-2xl text-gray-800">
              Logo
            </NavLink>
          </div>
          <div className="hidden md:block">
            <nav className="flex space-x-4">
              <NavLink to="/profile"className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Profile
              </NavLink>
              <NavLink to="/dashboard" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Dashboard
              </NavLink>
              <button onClick={() => setOpenDropdown(!openDropdown)} className="block w-full text-left">
                Dropdown
              </button>
              <div className={`${openDropdown ? '' : 'hidden'} bg-white rounded shadow-md mt-2 space-y-2`}>
                <NavLink to="/option1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  Option 1
                </NavLink>
                <NavLink to="/option2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  Option 2
                </NavLink>
                <NavLink to="/option3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  Option 3
                </NavLink>
              </div>
            </nav>
          </div>
          <div className="hidden md:block">
            <div onClick={() => setOpenAvatarDropdown(!openAvatarDropdown)} className="relative transition-all duration-500">
              <img src="https://via.placeholder.com/50" alt="Avatar" className="w-10 h-10 rounded-full" />
              <div className={`absolute ${openAvatarDropdown ? 'block' : 'hidden'} bg-white rounded shadow-md mt-2 space-y-2`}>
                <NavLink to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  Profile
                </NavLink>
                <NavLink to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  Settings
                </NavLink>
                <NavLink to="/signout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  Sign Out
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="block md:hidden border border-gray-600 p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${openMobileMenu ? '' : 'hidden'} mt-4 bg-slate-400 flex flex-col gap-4 p-6 rounded`}>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <button onClick={() => setOpenDropdown(!openDropdown)} className="block w-full text-left">
          Dropdown
        </button>
        <div className={`${openDropdown ? '' : 'hidden'} bg-white rounded shadow-md mt-2 space-y-2`}>
          <NavLink to="/option1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Option 1
          </NavLink>
          <NavLink to="/option2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Option 2
          </NavLink>
          <NavLink to="/option3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Option 3
          </NavLink>
        </div>
      </div>
      <div onClick={() => setOpenAvatarDropdown(!openAvatarDropdown)} className="relative transition-all duration-500">

  <img src="https://via.placeholder.com/50" alt="Avatar" className="w-10 h-10 rounded-full" />

  <div className={`absolute ${openAvatarDropdown ? 'block' : 'hidden'} bg-slate-300 rounded shadow-md mt-2 space-y-2`}>

    <NavLink to="/profile">Profile</NavLink>

    <NavLink to="/settings">Settings</NavLink>

    <NavLink to="/signout">Sign Out</NavLink>

  </div>

</div>

    </header>
  );
};

export default MegaMenu;