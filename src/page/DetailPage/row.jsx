/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { GoDotFill } from 'react-icons/go';
import Button from 'components/button';

const priorityClasses = {
  'very-high': 'text-red-400',
  high: 'text-yellow-600',
  medium: 'text-green-500',
  low: 'text-blue-400',
  'very-low': 'text-gray-400',
};

function Row({ title, priority, is_active }) {
  return (
    <div className="flex items-center justify-between bg-white drop-shadow-md mt-10 p-4 rounded-md">
      <div className="flex items-center gap-x-3">
        <div>
          <input type="checkbox" checked={is_active ? true : null} />
        </div>
        <div className={priorityClasses[priority]}>
          <GoDotFill />
        </div>
        <div>
          <p className={`font-medium text-sm cursor-default ${is_active ? 'line-through' : null}`}>{ title }</p>
        </div>
        <div>
          <Button onEdit />
        </div>
      </div>
      <div>
        <Button onDelete />
      </div>
    </div>
  );
}

export default Row;