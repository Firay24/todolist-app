/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { getActivityGroups } from 'utils/api';
import Button from 'components/button';
import EmptyPage from 'components/404Page';
import EmptyImage from 'assets/activity-empty-state.png';
import Item from './item';

function Dashboard() {
  const [activities, setActivity] = useState({ error: false, data: [] });

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

  return (
    <div className="mx-20 mt-10">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">
            Activity
          </h2>
        </div>
        <div>
          <Button onLink text="Tambah" />
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
    </div>
  );
}

export default Dashboard;
