import { TodoItem } from "./TodoItem";
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
export const TodoList = () => {
  const { items } = useContext(TaskContext);
  const [statusSearch, setStatusSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [listSearched, setListSearched] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setStatusSearch(true);
    setListSearched(() => {
      return items.filter((value) => {
        return value.name.includes(inputSearch);
      });
    });

    setInputSearch("");
  }
  return (
    <div>
      <h1 className="my-5 text-center">Manage Todos</h1>
      <div className="form-group p-3">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={(e) => setInputSearch(e.target.value)}
              value={inputSearch}
            />
            <button
              className="btn btn-primary"
              type="submit"
              id="button-addon2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {items.length > 0 ? (
        <div className="card bg-secondary p-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Done</th>
                <th scope="col">Name</th>
                <th scope="col">Level</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {statusSearch
                ? listSearched.map((item) => (
                    <TodoItem key={item.id} item={item} />
                  ))
                : items.map((item) => <TodoItem key={item.id} item={item} />)}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="text-center">No todos</h3>
      )}
      {statusSearch ? (
        <div className="my-4">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={(e) => setStatusSearch(false)}
          >
            Back
          </button>
        </div>
      ) : null}
    </div>
  );
};
