/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import Button from 'components/button';

const priorityClasses = {
  'very-high': 'text-red-400',
  high: 'text-yellow-600',
  normal: 'text-green-500',
  low: 'text-blue-400',
  'very-low': 'text-gray-400',
};

function Row({
  id, title, priority, is_active, deleteItemHandler,
}) {
  const [isChecked, setIsChecked] = useState(is_active);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handleDelete = (id) => {
    deleteItemHandler(id);
  };

  return (
    <div className="flex items-center justify-between bg-white drop-shadow-md mt-3 p-4 rounded-md">
      <div className="flex items-center gap-x-3">
        <div>
          <input type="checkbox" checked={isChecked} onChange={handleCheckBox} />
        </div>
        <div className={priorityClasses[priority]}>
          <GoDotFill />
        </div>
        <div>
          <p className={`font-medium text-sm cursor-default ${isChecked ? 'line-through' : null}`}>{ title }</p>
        </div>
        <div>
          <Button onEdit />
        </div>
      </div>
      <div>
        <Button onDelete onHandler={() => handleDelete(id)} />
      </div>
    </div>
  );
}

export default Row;
