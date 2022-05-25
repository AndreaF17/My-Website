import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
export default function Footer() {
  return (
      <footer className="bg-neutral-700 text-white flex flex-col justify-center items-center">
          <div className='my-10 flex flex-col justify-center items-center'>
              <div className='flex items-center my-5'>
                <FaFacebook className='w-10 h-auto mx-5 hover:text-green-600' />
                <FaLinkedin className='w-10 h-auto mx-5 hover:text-green-600' />
                <FaInstagram className='w-10 h-auto mx-5 hover:text-green-600' />
              </div>
              <a href='mailto:info@ferrario.dev' rel='noreferrer' className='text-sm hover:text-green-600 hover:underline' >info@ferrario.dev</a>
               <p className='text-xs text-gray-100 mt-5'>Andrea Ferrario ©{ new Date().getFullYear()}, All Rights Reserved.</p>
          </div>
       
          
         

          
    </footer>
  )
}