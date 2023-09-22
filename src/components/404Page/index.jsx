/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function emptyPage({ path }) {
  return (
    <div className="flex justify-center mt-10">
      <img src={path} alt="image-emptyContent" className="w-1/2" />
    </div>
  );
}

export default emptyPage;
