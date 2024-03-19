import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center h-[54px] w-full container  shadow'>
      <Link href={''}>
        LOGO
      </Link>
      <div className='flex flex-row '>
        <Link className='mx-2' href={'/'}>Home</Link>
        <Link className='mx-2' href={'#about'}>About</Link>
        <Link className='mx-2' href={'#projects'}>Projects</Link>
        <Link className='mx-2' href={'#contact'}>Contact</Link>
        <Link className='mx-2' href={'/translate'}>Google-translate</Link>
        <Link className='mx-2' href={'/social-download'}>Social media downloader</Link>
      </div>
      <div className='flex flex-row justify-between'>
      <Link className='mx-2' href={''}>Resume</Link>
      <div>Uzbek</div>
      </div>
    </div>
  )
}

export default Navbar