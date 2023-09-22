/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlus, AiOutlineLeft } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BiPencil } from 'react-icons/bi';
import { HiArrowsUpDown } from 'react-icons/hi2';

function Button({
  onButton, onLink, onAdd, text, onHandler, path, onDelete, onBack, onSort,
}) {
  return (
    <div>
      { onButton ? (
        <button type="submit" onClick={onHandler} className="flex items-center py-2 px-3 text-xs gap-x-2 bg-basic-blue w-fit text-white rounded-full hover:bg-blue-dark">
          { onAdd ? <AiOutlinePlus /> : null}
          { text }
        </button>
      ) : onLink ? (
        <Link to={path} className={`flex items-center ${onBack ? 'text-gray-800' : 'py-2 px-3 text-xs gap-x-2 bg-basic-blue w-fit text-white rounded-full hover:bg-blue-dark'}`}>
          <AiOutlineLeft />
          {text}
        </Link>
      ) : (
        <button onClick={onHandler} className={`flex items-center ${onDelete ? 'text-gray-400 hover:text-red-500' : !onBack ? 'text-gray-400 hover:text-gray-500' : null}`}>
          { onDelete ? <FaTrashAlt /> : onSort ? <HiArrowsUpDown /> : <BiPencil /> }
        </button>
      )}
    </div>
  );
}

Button.defaultProps = {
  addButton: false,
};

Button.prototype = {
  addButton: PropTypes.bool,
  text: PropTypes.string,
  onSubmit: PropTypes.func,
  path: PropTypes.string,
};

export default Button;
