/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { getActivityGroups, createActivity } from 'utils/api';
import Button from 'components/button';
import EmptyPage from 'components/404Page';
import EmptyImage from 'assets/activity-empty-state.png';
import Item from './item';
import Create from './create';

function Dashboard() {
  const [activities, setActivity] = useState({ error: false, data: [] });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const getActivityHandler = async () => {
    try {
      const result = await getActivityGroups();
      setActivity(result);
    } catch (error) {
      setActivity({ error: true, data: [] });
    }
  };

  useEffect(() => {
    getActivityHandler();
  }, []);

  useEffect(() => {
    getActivityHandler();
  }, [isPopupOpen]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  console.log(isPopupOpen);

  async function onRegisterHandler(act) {
    try {
      const { error } = await createActivity(act);
      if (!error) {
        setIsPopupOpen(false);
      } else {
        alert('cannot create activity');
      }
    } catch (error) {
      console.log('Error while register in', error);
    }
  }

  return (
    <div className="mx-20 mt-10">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">
            Activity
          </h2>
        </div>
        <div>
          <Button onButton onAdd text="tambah" onHandler={openPopup} />
        </div>
      </div>
      {
        activities.data.length > 0 ? (
          <div className="relative z-0 flex flex-wrap justify-between gap-x-2">
            {
              activities.data.map((activity, index) => (
                <Item key={index} {...activity} />
              ))
            }
          </div>
        ) : (
          <div>
            <EmptyPage path={EmptyImage} />
          </div>
        )
      }
      {
        isPopupOpen && (<Create createActivity={onRegisterHandler} closePopup={closePopup} />)
      }
    </div>
  );
}

export default Dashboard;
