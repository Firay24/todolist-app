/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import Button from 'components/button';
import FilterButton from './filter';

function navigation({
  title, updateTitle, openPopup, onSelect,
}) {
  const [activity, setActivity] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
    setActivity(title);
  };

  const handleSave = async () => {
    if (activity !== undefined || activity !== false) {
      updateTitle(activity);
      setIsEditing(false);
    }
  };

  const handleDropdownSelect = (selectedOption) => {
    onSelect(selectedOption);
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-x-2 text-xl">
        <div>
          <Button onLink onBack path="/" />
        </div>
        <div>
          {isEditing ? (
            <input
              type="text"
              value={activity !== undefined && activity !== false && activity}
              onChange={(e) => setActivity(e.target.value)}
              className="font-semibold cursor-default border border-gray-300 px-2 py-1 rounded"
            />
          ) : (
            <h3 className="font-semibold cursor-default">{ title }</h3>
          )}
        </div>
        <div>
          {
            isEditing ? (
              <Button onEdit onHandler={handleSave} />
            ) : (
              <Button onEdit onHandler={handleEditClick} />
            )
          }
        </div>
      </div>
      <div className="flex items-center gap-x-3 text-base text-gray-500">
        <FilterButton onSelect={handleDropdownSelect} />
        <Button onButton onAdd text="Tambah" onHandler={openPopup} />
      </div>
    </div>
  );
}

export default navigation;
