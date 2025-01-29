"use client"
import React, { Suspense, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import Header from './_components/Header'
import Footer from './_components/Footer'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { UserDetailContex } from './_context/UserDetailContext'

function Provider({ children }) {

  const { user } = useUser();
  const [userDetail, setUserDetail] = useState();
  const pathname = usePathname();

  useEffect(() => {
    user && CheckUserAuth();
  }, [user])

  //Save user data
  const CheckUserAuth = async () => {
    //Save User to Database
    const result = await axios.post('/api/users', {
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress?.emailAddress
    });
    console.log(result.data);
    setUserDetail(result.data);
  }

  return (
    <Suspense>
      <div>
        <UserDetailContex.Provider value={{ userDetail, setUserDetail }}>
          {pathname.startsWith('/admin') ? null : <Header />}
          <div>
            {children}
          </div>
          {/* <Footer /> */}
        </UserDetailContex.Provider>
      </div>
    </Suspense>
  )
}

export default Provider
