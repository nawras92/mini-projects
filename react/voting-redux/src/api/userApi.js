const getUsers = () => {
  const URL = "https://jsonplaceholder.typicode.com/users";

  const fetchUsers = async () => {
    const res = await fetch(URL);
    const data = res.json();
    return data;
  };
  return fetchUsers();
};

export default getUsers;
