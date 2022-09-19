import { useState, useEffect, createContext } from "react";
import instance from "../api/axiosInstance";
const TaskContext = createContext();
const TaskProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  // const loadTodos = () => {
  //   instance
  //     .get("/todos")
  //     .then((res) => {
  //       setItems(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const retrieveTodos = async () => {
    try {
      const res = await instance.get("/todos");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // const loadTodos = async () => {
    //   try {
    //     const res = await instance.get("/todos");
    //     setItems(res.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    const loadTodos = async () => {
      const allTodos = await retrieveTodos();
      setItems(allTodos);
    };
    loadTodos();
  }, []);

  const getItemById = (id) => {
    const item = items.find((item) => item.id === id);
    return item;
  };

  const addItem = async (request) => {
    console.log("request: ", request)
    request.id = Date.now();
    setItems((items) => [...items, request]);
    try {
      await instance.post("/todos", request);
      // const res = await instance.post("/todos", request);
      // setItems((items) => [...items, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = async (id) => {
    setItems((items) => [...items.filter((ele) => ele.id !== id)]);
    try {
      await instance.delete(`/todos/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
  const editItem = async (request) => {
    setItems((items) =>
      items.map((ele) => (ele.id === request.id ? { ...request } : ele))
    );
    try {
      await instance.put(`/todos/${request.id}`, request);
      // const res = await instance.put(`/todos/${request.id}`, request);
      // setItems((items) =>
      //     items.map((ele) => (ele.id === res.data.id ? { ...res.data } : ele))
      //   );
    } catch (err) {
      console.log(err);
    }
  };

  const completeItem = async (it) => {
    setItems((items) =>
      items.map((ele) => (ele.id === it.id ? { ...it } : ele))
    );
    try {
      await instance.put(`/todos/${it.id}`, it);
    } catch (err) {
      console.log(err);
    }
  };
  const value = {
    items,
    setItems,
    addItem,
    deleteItem,
    editItem,
    completeItem,
    getItemById,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
export { TaskContext, TaskProvider };
