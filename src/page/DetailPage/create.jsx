/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Button from 'components/button';
import { useParams } from 'react-router-dom';
import CustomDropdown from './dropdown';
// import { GoDotFill } from 'react-icons/go';

function create({ closePopup, createTodolist }) {
  const { id } = useParams();
  const [itemList, setItemList] = useState({
    title: '',
    activity_group_id: '',
    is_active: '',
    priority: '',
  });

  const idActivity = (id) => {
    setItemList({
      activity_group_id: id,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItemList((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setItemList((prevItem) => ({
      ...prevItem,
      is_active: 0,
    }));
    createTodolist(itemList);
  };

  useEffect(() => {
    if (id) {
      idActivity(id);
    }
  }, [id]);

  const handleDropdownSelect = (selectedOption) => {
    setItemList((prevItem) => ({
      ...prevItem,
      priority: selectedOption, // Menggunakan nilai option dari CustomDropdown
    }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 relative">
        <div className="flex items-center justify-between my-2">
          <h2 className="flex text-xl font-bold mb-">Tambah List Item</h2>
          <button className="text-gray-400 hover:text-gray-500 text-xl" onClick={closePopup}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="mt-5 mb-12">
          <div className="border-t border-1 border-gray-300 w-full" style={{ position: 'absolute', left: 0, right: 0 }} />
        </div>
        <form onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-y-2 mb-4">
            <label htmlFor="title" className="text-sm font-semibold">NAMA LIST ITEM</label>
            <input
              name="title"
              id="title"
              type="text"
              onChange={handleInputChange}
              placeholder="Judul item"
              className="w-full border rounded p-2 mb-2"
            />
          </div>
          <div className="flex flex-col gap-y-2 mb-8">
            <label className="text-sm font-semibold">Priority</label>
            <CustomDropdown onSelect={handleDropdownSelect} />
          </div>
          <div className="mt-5 mb-12">
            <div className="border-t border-1 border-gray-300 w-full" style={{ position: 'absolute', left: 0, right: 0 }} />
          </div>
          <div className="mt-5 flex justify-end">
            <Button onButton text="simpan" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default create;
