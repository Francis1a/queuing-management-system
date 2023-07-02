import {useContext, useState} from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);

  const handleLogin = (e) => {
      e.preventDefault();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          dispatch({type:"LOGIN", payload:user})
          navigate("/")
        })
        .catch((error) => {
          setError(true);
        });

  }

  return (
    <div className="container">
      <div className="login" onSubmit={handleLogin}>
        <form >
          <input type="email" name="Email" id="Email" placeholder="email"  onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" name="Password" id="Password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
          {error && <span>Wring Email or Password!</span>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login