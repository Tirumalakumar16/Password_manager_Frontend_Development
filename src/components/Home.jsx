import React from 'react'
import NavBar from './NavBar'

function Home() {
  return (
    <div >
        <div className='sticky top-0 '>
        <NavBar/>
        </div>
     
      <div className='ml-5 font-sans'>
        <h1 className='mt-8 font-bold text-5xl'>The Best Password Manager to Secure Your Digital Life</h1>
        <p className='font-bold mt-2 text-xl'>Keep your logins locked down with our favorite password management apps for PC, Mac, Android, iPhone, and web browsers.</p>
        <img src="https://media.wired.com/photos/641e1a1b43ffd37beea02cdf/master/w_1920,c_limit/Best%20Password%20Managers%20Gear%20GettyImages-1408198405.png" alt="lock" 
        className='w-[60rem] m-8' />
      </div>
      <div>
        <p className='w-[60rem] m-11 text-xl'><strong>PASSWORD MANAGERS ARE</strong> the vegetables of the internet. We know they’re good for us, but most of us are happier snacking on the password equivalent of junk food. 
            For nearly a decade, that’s been “123456” and “password”—the two most commonly used passwords on the web. The problem is,
             most of us don’t know what makes a good password and aren’t able to remember hundreds of them anyway.</p>
      </div>
      <div className='m-11'>
        <h1 className='font-bold text-2xl'>Why Not Use Your Browser?</h1>
        <p className='w-[60rem] mt-5 text-xl'>Most web browsers offer at least a rudimentary password manager.
             (This is where your passwords are stored when Google Chrome or Mozilla Firefox ask if you’d like to save a password.)
              This is better than reusing the same password everywhere, but browser-based password managers are limited. In recent years, Google has improved the password manager built into Chrome, and it's better than the rest,
             but it<sup>'</sup>s still not as full-featured or widely supported as a dedicated password manager like those below.</p>
        <p className='w-[60rem] mt-5 text-xl'>
        WIRED readers have also asked about Apple’s macOS password manager, 
        
        which syncs through iCloud and has some nice integrations with Apple’s Safari web browser.
         There’s nothing wrong with Apple’s system. In fact, I have used Keychain Access on Macs in the past, 
         and it works great. It doesn’t have some of the nice extras you get with dedicated services,
          but it handles securing your passwords and syncing them between Apple devices. 
          The main problem is that if you have any non-Apple devices, you won’t be able to sync your passwords to them.
         All in on Apple? Then this is a viable, free, built-in option worth considering.
        </p>
      </div>
    </div>
  )
}

export default Home
