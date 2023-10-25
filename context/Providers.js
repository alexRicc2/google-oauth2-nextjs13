"use client";
import React, {ReactNode} from 'react'
import { SessionProvider } from 'next-auth/react'


function Providers({children}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Providers