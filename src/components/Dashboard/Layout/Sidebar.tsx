import React, { useContext, useState, useEffect, useRef } from 'react';
import { useAuth } from '../../../context/Context';
import { auth } from '../../../database/firebase';
import { Link } from 'react-router-dom';

import { signOut } from 'firebase/auth';

export interface IHomePage {}

export const Sidebar = (props: any) => {
  const user: any = useAuth();

  const [isActive, setActive] = useState(false);
  const [hidden, setHidden] = useState('hidden');

  const toggleMenu = () => {
    setHidden('');
    setActive(!isActive);
  };

  const sideNavRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside);
    setActive(true);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, []);

  function handleClickOutside(e: any) {
    e.preventDefault();
    if (sideNavRef.current && !sideNavRef.current.contains(e.target)) {
      setActive(!isActive);
    }
  }

  return (
    <>
      <button
        data-drawer-target='default-sidebar'
        data-drawer-toggle='default-sidebar'
        aria-controls='default-sidebar'
        type='button'
        onClick={toggleMenu}
        className='inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  '
      >
        <span className='sr-only'>Open sidebar</span>
        <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button>

      <aside
        ref={sideNavRef}
        id='default-sidebar'
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${hidden} sm:block ${isActive ? '-translate-x-full' : null} sm:translate-x-0`}
        onClick={handleClickOutside}
        aria-label='Sidebar'
      >
        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 '>
          <ul className='space-y-2'>
            <li>
              <Link to='/dashboard' className='flex flex-col items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 '>
                <img className='h-8 w-8 rounded-full  ' src={user.auth.currentUser?.photoURL} alt='user_profile' />
                <span className='ml-3'>Bonjour {user.auth.currentUser?.displayName}</span>
              </Link>
            </li>

            <li>
              <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 '>
                <svg aria-hidden='true' className='w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 ' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                  <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
                </svg>
                <span className='ml-3'>Dashboard</span>
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 '>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 '
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
                </svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Kanban</span>
                <span className='inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full '>Pro</span>
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 '>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 '
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z'></path>
                  <path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'></path>
                </svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Inbox</span>
                <span className='inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full '>3</span>
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 '>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 '
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd'></path>
                </svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Users</span>
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 '>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 '
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Products</span>
              </a>
            </li>
            <li>
              <a href='/' onClick={() => signOut(auth)} className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 '>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 '
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
