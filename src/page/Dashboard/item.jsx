/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import DeleteButton from 'components/button';
import { Link } from 'react-router-dom';
import ParseDateFunc from 'utils/parseDate';

function Items({ id, title, created_at }) {
  return (
    <div className="flex flex-col cursor-default mt-10 justify-between rounded-md p-4 bg-white min-w-fit w-1/5 max-w-xs aspect-square drop-shadow-md">
      <div>
        <h4 className="font-semibold">
          <Link to={`/activity/${id}`}>{title}</Link>
        </h4>
      </div>
      <div className="flex items-center justify-between text-gray-400 text-xs font-medium">
        <p>{ ParseDateFunc(created_at) }</p>
        <DeleteButton onDelete />
      </div>
    </div>
  );
}

export default Items;
