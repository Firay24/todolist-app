/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import EmptyImage from 'assets/activity-empty-state.png';

function emptyPage() {
  return (
    <div className="flex justify-center mt-10">
      <img src={EmptyImage} alt="image-emptyContent" className="w-1/2" />
    </div>
  );
}

export default emptyPage;
