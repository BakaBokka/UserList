import data from "../db";

export const getUsers = () => {
    return [];
  };

  export const getTableData =  async () => {
    const res = await fetch("http://localhost:4000/users");

    if(!res.ok) {
      throw new Error(`Could not fetch data, received ${res.status}`);
    }

    const data = await res.json();
    return data;
  }

  export const postRow =  async (newUser ) => {
    const res = await fetch("http://localhost:4000/users",{ method: "POST", headers: {"Content-Type": "application/json"},  body: JSON.stringify({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      gender: newUser.gebder
    })});


    if(!res.ok) {
      throw new Error(`Could not post data, received ${res.status}`);
    }

    const data = await res.json();
    return data;
  }
