import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        Todo List
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto"></ul>

                        <div className="d-flex">
                            <button
                                className="btn btn-secondary my-2 my-sm-0"
                                type="submit"
                                onClick={() => navigate("/create-item")}
                            >
                                Create Task
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
