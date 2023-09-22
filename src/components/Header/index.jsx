import React from 'react';

function Header() {
  return (
    <div className="bg-basic-blue py-3 flex fixed top-0 left-0 w-full z-10">
      <h1 className="text-white ml-20 font-bold text-2xl cursor-default">
        Todo list
      </h1>
    </div>
  );
}

export default Header;
