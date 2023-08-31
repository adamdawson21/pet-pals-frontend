import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from '@material-tailwind/react';
import {
  UserIcon,
  PencilIcon,
  ChatIcon,
  LogoutIcon,
} from '@heroicons/react/solid';
import { signOut } from '../../services/users.js';

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleClick = () => {
    signOut();
    setUser(null);
    navigate('/');
  };

  return (
    <div className='App'>
      <nav className='nav-container'>
        <div className='header'>
          <Link to='/'>PetPals</Link>
        </div>
        <ul className='nav-list'>
          <li>
            <Link to='/alldogs' className='li-text'>
              Dogs
            </Link>
          </li>
          <li>
            <Link to='/allcats' className='li-text'>
              Cats
            </Link>
          </li>
          <li>
            <Link to='/about' className='li-text'>
              About
            </Link>
          </li>
        </ul>
        <div className='profile-icon'>
          <Menu>
            <MenuHandler>
              <UserIcon className='h-6 w-6 cursor-pointer' />
            </MenuHandler>
            <MenuList>
              <MenuItem className='flex items-center gap-2'>
                <Link
                  to={user ? '/profile' : '/signin'}
                  className='flex items-center'
                >
                  <UserIcon className='h-4 w-4 text-gray-500 mr-2' />
                  <Typography variant='small' className='font-normal'>
                    My Profile
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem className='flex items-center gap-2'>
                <Link
                  to={user ? '/comments' : '/signin'}
                  className='flex items-center'
                >
                  <ChatIcon className='h-4 w-4 text-gray-500 mr-2' />
                  <Typography variant='small' className='font-normal'>
                    My Comments
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem className='flex items-center gap-2'>
                <Link to='/signup' className='flex items-center'>
                  <PencilIcon className='h-4 w-4 text-gray-500 mr-2' />
                  <Typography variant='small' className='font-normal'>
                    Sign Up
                  </Typography>
                </Link>
              </MenuItem>
              <hr className='my-2 border-blue-gray-50' />
              <MenuItem className='flex items-center gap-2 '>
                {user ? (
                  <button
                    onClick={handleClick}
                    className='flex items-center text-red-500'
                  >
                    <LogoutIcon className='h-4 w-4 text-gray-500 mr-2' />
                    <Typography variant='small' className='font-normal'>
                      Sign Out
                    </Typography>
                  </button>
                ) : (
                  <Link to='/signin' className='flex items-center'>
                    <LogoutIcon className='h-4 w-4 text-gray-500 mr-2' />
                    <Typography variant='small' className='font-normal'>
                      Sign In
                    </Typography>
                  </Link>
                )}
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
