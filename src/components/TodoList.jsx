import { TodoItem } from "./TodoItem";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
export const TodoList = () => {
  const { items } = useContext(TaskContext);
  return (
    <div>
      <h1 className="my-5 text-center">Manage Todos</h1>

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
              {items.map((item) => (
                <TodoItem key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="text-center">No todos</h3>
      )}
    </div>
  );
};
