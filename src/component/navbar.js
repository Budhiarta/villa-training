import React from "react";

const Navbar = () => {
  return(
    <header className="flex justify-between items-center
     text-black py-7 px-8 md:px-32 bg-white 
     drop-shadow-md">
      <a></a>
      <ul className="hidden xl:flex items-center gap-12 
      font-semibold text-base">
        <li className="p-3 hover:bg-sky-400
         hover:text-white rounded-md transition-all
         cursor-pointer">Dashboard</li>
        <li className="p-3 hover:bg-sky-400
         hover:text-white rounded-md transition-all
         cursor-pointer">Why us</li>
        <li className="p-3 hover:bg-sky-400
         hover:text-white rounded-md transition-all
         cursor-pointer">Services</li>
        <li className="p-3 hover:bg-sky-400
         hover:text-white rounded-md transition-all
         cursor-pointer">Testimoni</li>
      </ul>
      <div></div>
    </header>

  )
}

export default Navbar;