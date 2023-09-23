/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

function CustomDropdown({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('Pilih'); // Menyimpan selected label

  const options = [
    { label: 'Very High', value: 'very-high', color: 'bg-red-500' },
    { label: 'High', value: 'high', color: 'bg-orange-500' },
    { label: 'Medium', value: 'normal', color: 'bg-green-500' },
    { label: 'Low', value: 'low', color: 'bg-blue-500' },
    { label: 'Very Low', value: 'very-low', color: 'bg-purple-500' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedLabel(option.label);
    onSelect(option.value); // Mengirim nilai (value) ke bagian backend
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="flex items-center justify-between w-1/2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {selectedLabel !== 'Pilih' && (
            <span className={`w-3 h-3 rounded-full mr-2 ${options.find((opt) => opt.label === selectedLabel).color}`} />
          )}
          {selectedLabel}
          <svg
            className={`w-8 h-5 ml-2 -mr-1 text-gray-400 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="z-10 absolute mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg outline-none" aria-labelledby="options-menu">
          <div className="py-1">
            {options.map((option) => (
              <a
                key={option.label}
                onClick={() => selectOption(option)}
                href="#"
                className={`flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white ${
                  selectedLabel === option.label ? 'bg-indigo-200' : ''
                }`}
              >
                <span className={`w-2 h-2 rounded-full mr-2 ${option.color}`} />
                {option.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomDropdown;
