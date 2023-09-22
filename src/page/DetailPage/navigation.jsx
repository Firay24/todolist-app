/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button from 'components/button';

function navigation() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-x-2 text-xl">
        <div>
          <Button onBack />
        </div>
        <div>
          <h3 className="font-semibold cursor-default">New Activity</h3>
        </div>
        <div>
          <Button onEdit />
        </div>
      </div>
      <div className="flex items-center gap-x-3 text-base text-gray-500">
        <Button onSort />
        <Button onLink text="Tambah" />
      </div>
    </div>
  );
}

export default navigation;
