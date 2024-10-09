import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigation } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

import { motion } from 'framer-motion';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import axios from 'axios';
function Header() {

  const user = JSON.parse(localStorage.getItem('user'));
  const [openDailog, setOpenDailog] = useState(false);

  useEffect(() => {
    console.log(user)
  }, [])

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  })

  const GetUserProfile = async(tokenInfo) => {
    console.log("HERE",tokenInfo)
     axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDailog(false);
      window.location.reload()
    })
  }

  return (
    <div>
     <div className="banner overflow-hidden whitespace-nowrap w-full bg-white text-black flex items-center relative ">
      <motion.div
        className="inline-block text-base"
        initial={{ x: '100%' }} // Start off-screen to the left
        animate={{ x: '-100%' }}  // Move to off-screen to the right
        transition={{ duration: 60, ease: 'linear', repeat: Infinity }}

      >
       Hey! My Google Cloud billing is paused, so everything’s running on localhost. The Places API is paid, so the project will resume once my wallet’s sorted!
      </motion.div>
    </div>
    <div className='p-3 shadow-sm flex justify-between items-center px-5 bg-zinc-900 ' >
     <a href='/' className='flex gap-2 justify-center items-center'>
      <img src="src\assets\logo.png" className='w-[12vw]' />
         </a>
      <div>
        {user ?
          <div className='flex items-center gap-3'>
            <a href='/create-trip'>
            <Button variant="outline" 
            className="rounded-full " style={{backgroundColor:"#212121", color:"white"}}>+ Create Trip</Button>
            </a>
            <a href='/my-trips'>
            <Button variant="outline" 
            className="rounded-full"style={{backgroundColor:"#212121", color:"white"}}>My Trips</Button>
            </a>
            <Popover>
            <PopoverTrigger>
            <img src={user?.picture} className='h-[35px] w-[35px] rounded-full'/>
            </PopoverTrigger>
            <PopoverContent>
              <h2 className='cursor-pointer' onClick={()=>{
                googleLogout();
                localStorage.clear();
                window.location.reload();
              }}>Logout</h2>
            </PopoverContent>
          </Popover>
          </div>
          :
          <Button onClick={()=>setOpenDailog(true)}>Sign In</Button>
        }
      </div>
      <Dialog open={openDailog}>

<DialogContent>
  <DialogHeader>

    <DialogDescription>
      <img src="/logoo.svg" className='w-[16vh]' />
      <h2 className='font-bold text-lg mt-7'>Sign In With Google</h2>
      <p>Sign in to the App with Google authentication securely</p>

      <Button

        onClick={login}
        className="w-full mt-5 flex gap-4 items-center">

        <FcGoogle className='h-7 w-7' />
        Sign In With Google

      </Button>

    </DialogDescription>
  </DialogHeader>
</DialogContent>
</Dialog>
    </div>
    </div>
  )
}

export default Header