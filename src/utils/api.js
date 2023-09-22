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
    alert('not found');
    return { error: true };
  }

  return { error: false };
}

export {
  getActivityGroups,
  getActivityGroupsById,
  createActivity,
};
