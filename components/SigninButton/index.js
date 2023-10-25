"use client";
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

function SigninButton() {
  const { data: session, status } = useSession()
  if (status === 'loading')
  {
    return <span>loading...</span>
  }
  if (session && session.user) {
    return (
      <div className='flex gap-2'>
        <span>
          {session?.user?.email}
        </span>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className='flex gap-2'>
      <button className="mx-auth" onClick={() => signIn('google')}>Sign in</button>
    </div>
  )
}

export default SigninButton