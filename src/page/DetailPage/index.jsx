/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import {
  getActivityGroupsById, updateActivity, createItem, deleteItem, updateItem,
} from 'utils/api';
import { useParams } from 'react-router-dom';
import EmptyPage from 'components/404Page';
import EmptyImage from 'assets/todo-empty-state.png';
import Navigation from './navigation';
import Row from './row';
import Create from './create';

function DetailPage() {
  const [items, setItems] = useState({ error: false, data: [] });
  const { id } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const getItemsHandler = async (id) => {
    try {
      if (id) {
        const result = await getActivityGroupsById(id);
        if (result.data !== undefined && result.data !== false) {
          setItems(result);
        }
      }
    } catch (error) {
      setItems({ error: true, data: [] });
    }
  };

  const updateTitle = async (newTitle) => {
    try {
      if (id) {
        const { error } = await updateActivity({ id, title: newTitle });
        if (!error) {
          setItems((prevItems) => ({
            ...prevItems,
            data: {
              ...prevItems.data,
              title: newTitle,
            },
          }));
        } else {
          alert('Cannot update');
        }
      }
    } catch (error) {
      alert('Cannot update');
    }
  };

  const updateItemHandler = async ({ id, title, is_active }) => {
    try {
      const { error } = await updateItem({ id, title, is_active });
      if (!error) {
        getItemsHandler(items.data.id);
      } else {
        alert('cannot create items');
      }
    } catch (error) {
      alert('Cannot update');
    }
  };

  const deleteItemHandler = async (id) => {
    try {
      if (confirm('apakah anda yakin menghapusnya?')) {
        const { error } = await deleteItem(id);
        if (!error) {
          window.location.reload();
        }
      }
    } catch (error) {
      alert('Failed to delete activity');
    }
  };

  async function onCreateItems(act) {
    try {
      const { error } = await createItem(act);
      if (!error) {
        setIsPopupOpen(false);
        window.location.reload();
      } else {
        alert('cannot create items');
      }
    } catch (error) {
      console.log('Error while register in', error);
    }
  }

  useEffect(() => {
    if (id) {
      getItemsHandler(id);
    }
  }, [id, isPopupOpen]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="mx-20 mt-10">
      <div>
        <Navigation title={items && items.data && items.data.title && items.data.title} updateTitle={updateTitle} openPopup={openPopup} />
      </div>
      <div className="mt-10">
        {
          items !== undefined && items.data !== undefined
          && items.data.todo_items !== undefined && items.data.todo_items.length > 0 ? (
              items !== undefined && items.data !== undefined
              && items.data.todo_items !== undefined && items.data.todo_items.map((item, index) => (
                <Row key={index} {...item} deleteItemHandler={deleteItemHandler} updateItemHandler={updateItemHandler} />
              ))
            ) : (
              <div>
                <EmptyPage path={EmptyImage} />
              </div>
            )
        }
      </div>
      {
        isPopupOpen && (<Create createTodolist={onCreateItems} closePopup={closePopup} />)
      }
    </div>
  );
}

export default DetailPage;
