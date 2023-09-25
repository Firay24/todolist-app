/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
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
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [filterOption, setFilterOption] = useState(null);
  const { id } = useParams();

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

  const handleDropdownFilter = (selectedOption) => {
    setFilterOption(selectedOption);
  };

  const sortByNameAZ = () => {
    const sortedData = [...items.data.todo_items].sort((a, b) => a.title.localeCompare(b.title));
    setItems((prevItems) => ({
      ...prevItems,
      data: {
        ...prevItems.data,
        todo_items: sortedData,
      },
    }));
  };

  const sortByNameZA = () => {
    const sortedData = [...items.data.todo_items].sort((a, b) => b.title.localeCompare(a.title));
    setItems((prevItems) => ({
      ...prevItems,
      data: {
        ...prevItems.data,
        todo_items: sortedData,
      },
    }));
  };

  const sortUnfinished = () => {
    const sortedData = [...items.data.todo_items].sort((a, b) => a.is_active - b.is_active || a.title.localeCompare(b.title));
    setItems((prevItems) => ({
      ...prevItems,
      data: {
        ...prevItems.data,
        todo_items: sortedData,
      },
    }));
  };

  const filtering = () => {
    if (filterOption === 'A-Z') {
      sortByNameAZ();
    } else if (filterOption === 'Z-A') {
      sortByNameZA();
    } else if (filterOption === 'Belum Selesai') {
      sortUnfinished();
    }
  };

  useEffect(() => {
    filtering();
  }, [filterOption]);

  return (
    <div className="mx-20 mt-10">
      <div>
        <Navigation
          title={items && items.data && items.data.title && items.data.title}
          updateTitle={updateTitle}
          openPopup={openPopup}
          onSelect={handleDropdownFilter}
        />
      </div>
      <div className="mt-10">
        {items?.data?.todo_items?.length > 0 ? (
          items.data.todo_items.map((item, index) => (
            <Row key={index} {...item} deleteItemHandler={deleteItemHandler} updateItemHandler={updateItemHandler} />
          ))
        ) : (
          <div>
            <EmptyPage path={EmptyImage} />
          </div>
        )}
      </div>
      {
        isPopupOpen && (<Create createTodolist={onCreateItems} closePopup={closePopup} />)
      }
    </div>
  );
}

export default DetailPage;
