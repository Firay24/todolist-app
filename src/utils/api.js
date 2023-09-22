/* eslint-disable camelcase */
/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */
const BASE_URL = 'https://todo.api.devcode.gethired.id';

async function getActivityGroups() {
  const response = await fetch(`${BASE_URL}/activity-groups`);
  const responseJson = await response.json();

  if (!responseJson.data) {
    alert('failed to get data');
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function getActivityGroupsById(id) {
  const response = await fetch(`${BASE_URL}/activity-groups/${id}`);
  const responseJson = await response.json();

  if (!responseJson) {
    alert('not found');
    return { error: true, data: null };
  }

  return { Error: false, data: responseJson };
}

async function createActivity({ title, email, comment }) {
  const response = await fetch(`${BASE_URL}/activity-groups`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title, email, comment,
    }),
  });

  const responseJson = await response.json();

  if (!responseJson) {
    alert('failed to create data');
    return { error: true };
  }

  return { error: false };
}

async function deleteActivity(id) {
  try {
    const response = await fetch(`${BASE_URL}/activity-groups/${id}`, {
      method: 'DELETE',
    });

    if (response.status === 200) {
      return { error: false };
    } else {
      return { error: true };
    }
  } catch (error) {
    console.error('Error while deleting activity:', error);
    return { error: true };
  }
}

async function updateActivity({ id, title }) {
  try {
    const response = await fetch(`${BASE_URL}/activity-groups/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
      }),
    });

    if (response.status === 200) {
      return { error: false };
    } else {
      return { error: true };
    }
  } catch (error) {
    console.error('Error while update activity:', error);
    return { error: true };
  }
}

async function createItem({
  title, activity_group_id, is_active = 0, priority,
}) {
  const response = await fetch(`${BASE_URL}/todo-items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title, activity_group_id, is_active, priority,
    }),
  });

  const responseJson = await response.json();

  if (!responseJson) {
    alert('failed to create data');
    return { error: true };
  }

  return { error: false };
}

async function deleteItem(id) {
  try {
    const response = await fetch(`${BASE_URL}/todo-items/${id}`, {
      method: 'DELETE',
    });

    if (response.status === 200) {
      return { error: false };
    } else {
      return { error: true };
    }
  } catch (error) {
    console.error('Error while deleting activity:', error);
    return { error: true };
  }
}

export {
  getActivityGroups,
  getActivityGroupsById,
  createActivity,
  deleteActivity,
  updateActivity,
  createItem,
  deleteItem,
};
