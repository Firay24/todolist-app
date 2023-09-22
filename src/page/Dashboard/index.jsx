/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Button from 'components/button';
import Items from './items';

function Dashboard() {
  return (
    <div className="mx-20 mt-10">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">
            Activity
          </h2>
        </div>
        <div>
          <Button addButton text="Tambah" />
        </div>
      </div>
      <div>
        <Items />
      </div>
    </div>
  );
}

export default Dashboard;
