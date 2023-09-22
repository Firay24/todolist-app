/* eslint-disable react/no-unknown-property */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import Button from 'components/button';

function create({ closePopup, createActivity }) {
  const [data, setData] = useState({
    title: '',
    email: '',
    comment: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  console.log(data);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    createActivity(data);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="flex items-center justify-between my-2">
          <h2 className="flex text-xl font-bold">Tambah Activity</h2>
          <button className="text-gray-400 hover:text-gray-500 text-lg" onClick={closePopup}>
            <AiFillCloseCircle />
          </button>
        </div>
        <form onSubmit={onSubmitHandler}>
          <input
            name="email"
            id="email"
            type="email"
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full border rounded p-2 mb-2"
          />
          <input
            name="title"
            id="title"
            type="text"
            placeholder="Nama Activity"
            onChange={handleInputChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            name="comment"
            id="comment"
            type="text"
            placeholder="Comment"
            className="w-full border rounded p-2 mb-2"
          />
          <div className="mt-5 flex justify-end">
            <Button onButton text="simpan" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default create;
