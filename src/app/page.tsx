'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from "next/link";
import { useRouter } from 'next/navigation';


export default function Home() {

  const router = useRouter();


  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });

  
  return (
   
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <h2>Giphy Search App</h2>

            
   <button onClick={() => router.push('list')} className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
              Search GIF? 
            </button>
                  {/* <button className='text-white' onClick= {() => './list'}>Search GIFs?</button> */}

            <div className='text-white'>{session?.data?.user?.email }</div>

           <button className='text-white' onClick={() => signOut() }>Logout</button>
    </div>
    

          </div>
        </div>
      
    </>
  )
}

Home.requireAuth = true

