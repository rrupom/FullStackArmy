import { useEffect, useState } from "react";

const cachedData = {};
const maxId = 10;
const minId = 1;

const AppHook = () => {
  const [user, setUser] = useState(null);
  const [currentId, setCurrentId] = useState(minId);

  useEffect(() => {
    if (cachedData[`user-${currentId}`]) {
      setUser(cachedData[`user-${currentId}`]);
      return;
    }
    fetchUser(currentId).then((data) => {
      setUser(data);
    });
  }, [currentId]);

  // fetch next user when viewing the current user

  useEffect(() => {
    if (!cachedData[`user-${currentId + 1}`] && currentId < maxId) {
      fetchUser(currentId + 1);
    }
  }, [currentId]);

  const fetchUser = (currentId) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${currentId}`)
      .then((response) => response.json())
      .then((data) => {
        cachedData[`user-${currentId}`] = data;
        return data;
      });
  };

  const nextHandler = () => {
    if (currentId < maxId) {
      setCurrentId(currentId + 1);
    }
  };

  const prevHandler = () => {
    if (currentId > minId) {
      setCurrentId(currentId - 1);
    }
  };

  return {
    user,
    currentId,
    maxId,
    minId,
    prevHandler,
    nextHandler,
  };
};

export default AppHook;
