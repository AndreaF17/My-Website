import Footer from './components/Footer'
import NavBar from './components/Navbar'
import {UserIcon} from '@heroicons/react/solid'

function App() {
  const img = <UserIcon className='w-full h-auto ' />
  return (
    <>
      <NavBar />
      <div className='bg-neutral-50-50 h-fit px-[10%] py-10 flex flex-col justify-start items-center text-neutral-700'>
        <div className='flex justify-center border-2 border-neutral-500 rounded-xl  shadow-lg  w-full p-12 flex-wrap max-w-[1250px]'>
          <div className='flex justify-center items-center max-w-sm mx-4 border-2 p-5 rounded-full border-gray-900 mb-4'>
           {img}
          </div>
          <div className='mx-4'>
            <h1 className='text-4xl text-center font-bold text-green-600 mb-5'>Welcome to my website</h1>
            <p className='max-w-md pl-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, eveniet aliquid culpa officia aut!
            </p>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
