import { UserButton, auth } from "@clerk/nextjs"
import Link from "next/link"


async function Header() {
    const{ userId} = auth()
  return (
    <div className="bg-violet-300 text-xl text-black" >
        <div className="container mx-auto flex items-center justify-between p-4">
            <Link href="/">
                Home
            </Link>
            <div>
                {userId ? (
                    <div>
                        <UserButton/>
                    </div>
                ):(
                    <div className="flex g-4 items-center">
                <Link className="mr-4" href="/sign-up">Sign Up</Link>
                <Link href="/sign-in">Sign In</Link>

            </div>
                )}
            
            </div>

        </div>
        </div>
  )
}

export default Header