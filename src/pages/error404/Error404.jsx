import { Link } from "react-router-dom";
import "./error404.scss";



const Error404 = () => {
    return (
      <div className="error404">
        <Link to="/" style={{ textDecoration: "none" }}>
            <h3>Seems That your lost Uli sa inyo oy! </h3>
        </Link>
      </div>
    );
  };
  
  export default Error404;


