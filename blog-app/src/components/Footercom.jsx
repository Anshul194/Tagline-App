import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
export default function Footercom() {
  return (
    <Footer className='border-b-t-8 boorder-teal-500'>
      <div className=''>
        <div className=''>
          <div className=''>
          <Link to="/ " className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Tagline</span>
        Blog
      </Link>
          </div>
          <div className='grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
    <Footer.Title title='About'/>
    <Footer.LinkGroup col>
      <Footer.Link href='/'>
        Node projects
      </Footer.Link>
      <Footer.Link href='/'>
        Tagline blogs
      </Footer.Link>
    </Footer.LinkGroup>
          </div>
          
          <div className='grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
    <Footer.Title title='Follow Us'/>
    <Footer.LinkGroup col>
      <Footer.Link href='/'>
        Github
      </Footer.Link>
      <Footer.Link href='/'>
        linkedIn
      </Footer.Link>
    </Footer.LinkGroup>
    </div>
   
    <div className='grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6'>

    <Footer.Title title='Legal'/>
    <Footer.LinkGroup col>
      <Footer.Link href='/'>
        Privcy policy
      </Footer.Link>
      <Footer.Link href='/'>
        Terms $ Conditions
      </Footer.Link>
    </Footer.LinkGroup>
          </div>
          </div>
          </div>
        </div>
      </div>
</Footer>)


  }