/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Button({
  addButton, text, onSubmit, path, deleteButton, onDelete,
}) {
  return (
    <div>
      { addButton ? (
        <Link to={path} className="flex items-center py-2 px-3 text-xs gap-x-2 bg-basic-blue w-fit text-white rounded-full hover:bg-blue-dark">
          <AiOutlinePlus />
          { text }
        </Link>
      ) : deleteButton ? (
        <button onClick={onDelete} className="text-gray-400 hover:text-red-500">
          <FaTrashAlt />
        </button>
      ) : (
        <button type="submit" onClick={onSubmit} className="bg-basic-blue w-fit text-white rounded-full hover:bg-blue-dark">
          { text }
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
