import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
export const TodoForm = () => {
  const { getItemById, editItem, addItem } = useContext(TaskContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const [showAlert, setshowAlert] = useState(false);
  const {
    inputValues,
    handleInputChange,
    resetForm,
    setForm,
    isValid,
    selectLevel,
    handleSelectLevel,
  } = useForm({
    name: "",
    level: "1",
  });

  useEffect(() => {
    if (id) {
      const item = getItemById(id);
      setForm(item);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      id ? editItem({ ...inputValues }) : addItem({ ...inputValues });
      id ? setForm({ ...inputValues }) : resetForm();
      setshowAlert(true);
      setTimeout(() => {
        setshowAlert(false);
      }, 2000);
    }
  };
 
  return (
    <div>
      <div className="d-flex my-5 justify-content-between">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <h1 className="text-center">{id ? "Edit" : "Add new"} Todo</h1>
        <div />
      </div>

      <div className="card border-primary p-5 m-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Name
            </label>
            <input
              name="name"
              type="text"
              value={inputValues.name}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
            />
            {!isValid && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                Không được để trống mục này
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="exampleSelect1" className="form-label mt-2">
              Level
            </label>
            <select
              className="form-select"
              id="exampleSelect1"
              defaultValue={`${selectLevel}`}
              onChange={handleSelectLevel}
            >
              <option value="1">Phải làm ngay</option>
              <option value="2">Làm sau cũng được</option>
              <option value="3">Không làm không sao</option>
            </select>
          </div>
          {isValid && (
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-outline-primary btn-block"
              >
                {id ? "Edit" : "Add"} Todo
              </button>
            </div>
          )}
        </form>
      </div>

      {showAlert && (
        <div className="px-5">
          <div className="alert alert-dismissible alert-success">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              onClick={() => {
                setshowAlert(false);
              }}
            ></button>
            <strong>Well done!</strong> You successfully
            {id ? " edit" : " added a new"} todo.
          </div>
        </div>
      )}
    </div>
  );
};
