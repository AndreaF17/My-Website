import { MenuIcon, XIcon, HomeIcon, CodeIcon, ClipboardListIcon, ChatIcon } from '@heroicons/react/solid'
import { Transition } from '@headlessui/react'
import { useState, useLayoutEffect } from 'react'
const navigation = [
  { name: 'Home', href: '#home', current: true, icon: <HomeIcon className='w-10 h-auto text-gray-100' />},
  { name: 'Portfolio', href: '#portfolio', current: false, icon: <CodeIcon className='w-8 h-auto text-gray-100' /> },
  { name: 'About me', href: '#about', current: false, icon: <ClipboardListIcon className='w-8 h-auto text-gray-100' /> },
]
const buttonText = 'Contact me'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
    if(isOpen && window.innerWidth>768) setIsOpen(false)
  return size;
  }

  function ShowWindowDimensions(props) {
  const [width, height] = useWindowSize();
  return <span>Window size: {width} x {height}</span>;
}

  return (
    <>
    <nav className="sticky top-0 z-10 px-[10%] flex justify-between items-center h-24 bg-neutral-800 text-white">
        <div className="flex justify-center items-center">
            <h1 className="text-5xl font-medium">AF</h1>
        
          <div className=" justify-center items-center ml-16 hidden md:flex">
          {
           navigation.map((navItem, index) => {
             return <a key={index} onClick={() => null} className={classNames(
               navItem.current ? 'text-green-600'
                 : 'text-white',
             'mx-4 hover:text-green-600 font-medium text-lg')} href={navItem.href} >
              {navItem.name}
            </a>
          })}
          </div>
         
      </div>
      <div>
          <button className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl hidden md:flex justify-center items-center"><ChatIcon className='w-8 h-auto mr-1' />{buttonText}</button>
            <Transition
            show={!isOpen}
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
            leaveTo="opacity-0">
            
            {!isOpen && <MenuIcon onClick={() => setIsOpen(true)} className='block md:hidden w-12 h-auto cursor-pointer' />}
            </Transition>

          <Transition
          show={isOpen}
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            
            {isOpen && <XIcon className='block md:hidden w-12 h-auto cursor-pointer' onClick={() => setIsOpen(false)} />}
            
          </Transition>
        
      </div>
      </nav>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className='fixed bg-black opacity-50 w-full h-full'>

        </div>
        <div className='z-10 fixed right-[5px] top-[100px] rounded-2xl bg-neutral-800 w-80 h-fit md:hidden py-5 text-xl'>
          {navigation.map((navItem, index) => {
            return <div key={index} className='flex items-center hover:cursor-pointer hover:text-green-600 hover:bg-neutral-900 p-5'>
              {navItem.icon}
              <a className={classNames(
               navItem.current ? 'text-green-600'
                 : 'text-white',
             'mx-5 font-medium')} href={navItem.href} >
              {navItem.name}
            </a>
            </div>
          })
          }
          <div className='flex justify-center mt-8 mb-2'>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 flex justify-center items-center"><ChatIcon className='w-8 h-auto mr-1' />{ buttonText }</button>
          </div>
          
        </div>
      </Transition>

      <div className='hidden'>{ShowWindowDimensions()}</div>
      
    </>
    
  )
}
