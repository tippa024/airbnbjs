import Image from "next/image";
import {MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserIcon, UserCircleIcon   } from '@heroicons/react/24/solid'

function MyHeader() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-lg p-5 md:p-7">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image src="https://links.papareact.com/qd3" width={150} height={10} style={{ objectPosition: 'left' }} alt="Airbnb logo" />
      </div>

      {/* Middle - Search */}
      <div className="relative flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500 placeholder-gray-300" type="text" placeholder="Bring it on 🔥" />
        <MagnifyingGlassIcon className=" hidden  md:inline-flex h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
      </div>

      {/* Right */}
      <div className="relative flex items-center justify-end space-x-3">
        <p className="hidden cursor-pointer md:inline">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer"/>
        <div className="flex items center space-x-2 border-2 rounded-full p-2 shadow-2xl">
          <Bars3Icon className="h-6 cursor-pointer"/>
          <UserIcon className="h-6 cursor-pointer"/>
        </div>
      </div>
    </header>
  );
}

export default MyHeader;
