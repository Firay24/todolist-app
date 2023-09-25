/* eslint-disable object-shorthand */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
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
  id, title, priority, is_active, deleteItemHandler, updateItemHandler,
}) {
  const [isChecked, setIsChecked] = useState(is_active);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
    updateItemHandler({ id, title, is_active: isChecked ? 0 : 1 });
  };

  const handleDelete = () => {
    deleteItemHandler(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateItemHandler({ id, title: editedTitle, is_active });
    setIsEditing(false);
  };

  useEffect(() => {
    const updateFilter = () => {
      setEditedTitle(title);
      setIsChecked(is_active);
    };
    updateFilter();
  }, [title, is_active]);

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
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="font-medium text-sm"
            />
          ) : (
            <p className={`font-medium text-sm cursor-default ${isChecked ? 'line-through' : ''}`}>
              {editedTitle}
            </p>
          )}
        </div>
        <div>
          {isEditing ? (
            <Button onEdit onHandler={handleSave} />
          ) : (
            <Button onEdit onHandler={handleEdit} />
          )}
        </div>
      </div>
      <div>
        <Button onDelete onHandler={handleDelete} />
      </div>
    </div>
  );
}

export default Row;
