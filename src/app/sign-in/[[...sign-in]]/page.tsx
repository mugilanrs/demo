import { SignIn } from "@clerk/nextjs";
 
export default function Page() {

  return (
    <div className="flex items-center justify-center flex-col gap-10 ">
        <h1 className="text-xl font-bold mt-10">This is a   Sign In Page</h1>
        <SignIn/>
    </div>
  )
 
}