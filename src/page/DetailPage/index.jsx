/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { getActivityGroupsById } from 'utils/api';
import { useParams } from 'react-router-dom';
import EmptyPage from 'components/404Page';
import EmptyImage from 'assets/todo-empty-state.png';
import Navigation from './navigation';
import Row from './row';

function DetailPage() {
  const [items, setItems] = useState({ error: false, data: [] });
  const { id } = useParams();

  const getItemsHandler = async (id) => {
    try {
      if (id) { // Periksa apakah id telah didefinisikan
        const result = await getActivityGroupsById(id);
        setItems(result);
      }
    } catch (error) {
      setItems({ error: true, data: [] });
    }
  };

  useEffect(() => {
    if (id) {
      getItemsHandler(id);
    }
  }, [id]);

  return (
    <div className="mx-20 mt-10">
      <div>
        <Navigation />
      </div>
      <div>
        {
          items !== undefined && items.data !== undefined
          && items.data.todo_items !== undefined && items.data.todo_items.length > 0 ? (
              items !== undefined && items.data !== undefined
              && items.data.todo_items !== undefined && items.data.todo_items.map((item, index) => (
                <Row key={index} {...item} />
              ))
            ) : (
              <div>
                <EmptyPage path={EmptyImage} />
              </div>
            )
        }
      </div>
    </div>
  );
}

export default DetailPage;
