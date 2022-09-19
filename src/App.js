import { TodoList } from "./components/TodoList.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { TodoForm } from "./components/TodoForm.jsx";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/create-item" element={<TodoForm />} />
          <Route path="/edit-item/:id" element={<TodoForm />} />
        </Routes>
      </div>
    </div>
  );
};
