import React from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
export const TodoItem = ({ item }) => {
  // console.log(item)
  const { id, name, isDone, level } = item;
  const { deleteItem, completeItem } = useContext(TaskContext);
  const navigate = useNavigate();

  return (
    <tr className="table-secondary">
      <td>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={() => completeItem({ ...item, isDone: !item.isDone })}
            checked={isDone}
          />
        </div>
      </td>
      <td
        style={{
          textDecoration: item.isDone ? "line-through" : null,
          fontStyle: item.isDone ? "italic" : null,
        }}
      >
        {name}
      </td>
      <td>
        {(level === "1" && (
          <div className="badge bg-danger">Phải làm ngay</div>
        )) ||
          (level === "2" && (
            <div className="badge bg-warning">Làm sau cũng được</div>
          )) ||
          (level === "3" && (
            <div className="badge bg-info">Không làm không sao</div>
          ))}
      </td>
      <td>
        <div className="d-flex gap-3">
          <span
            type="button"
            className="badge bg-success"
            onClick={() => {
              navigate(`/edit-item/${id}`);
            }}
          >
            Edit
          </span>
          <span
            type="button"
            className="badge bg-primary"
            onClick={() => deleteItem(id)}
          >
            Delete
          </span>
        </div>
      </td>
    </tr>
  );
};
