/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { HiArrowsUpDown } from 'react-icons/hi2';
import { BiSortAZ, BiSortAlt2, BiSort } from 'react-icons/bi';
import { BsCheckLg } from 'react-icons/bs';

function filter({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setIsSelectedOption] = useState(null);

  const options = [
    { label: 'A-Z', icon: <BiSortAZ /> },
    { label: 'Z-A', icon: <BiSortAlt2 /> },
    { label: 'Belum Selesai', icon: <BiSort /> },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setIsSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="inline-block text-left w-full">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="flex items-center bg-white hover:bg-gray-200 p-3 rounded-full border"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <HiArrowsUpDown />
        </button>
      </div>
      { isOpen && (
        <div className="z-10 absolute mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg outline-none" aria-labelledby="options-menu">
          {
            options.map((option, index) => (
              <a
                key={index}
                onClick={() => selectOption(option.label)}
                href="#"
                className="flex justify-between items-center px-4 py-2 text-gray-700 text-sm"
              >
                <div className="flex gap-x-1">
                  <span className="text-basic-blue">
                    {option.icon}
                  </span>
                  {option.label}
                </div>
                <div>
                  <span>{selectedOption === option.label ? <BsCheckLg /> : null}</span>
                </div>
              </a>
            ))
          }
        </div>
      )}
    </div>
  );
}

export default filter;
