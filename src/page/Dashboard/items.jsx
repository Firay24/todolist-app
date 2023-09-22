/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import DeleteButton from 'components/button';

function Items() {
  return (
    <div className="flex flex-col cursor-default mt-10 justify-between rounded-md p-4 bg-white w-1/5 aspect-square drop-shadow-md">
      <div>
        <h4 className="font-semibold">
          Daftar Belanja Bulanan
        </h4>
      </div>
      <div className="flex items-center justify-between text-gray-400 text-xs font-medium">
        <p>1 Oktober 2021</p>
        <DeleteButton deleteButton />
      </div>
    </div>
  );
}

export default Items;
