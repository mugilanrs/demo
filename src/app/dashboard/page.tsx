import { auth, currentUser } from '@clerk/nextjs';
import React from 'react'

async function DashboardPage() {
    const { userId } = auth();
    console.log(userId)

    if(!userId) {
        return <div>You Are Not Logged IN!</div>
    }

    const user = await currentUser();
    console.log(user)
  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage