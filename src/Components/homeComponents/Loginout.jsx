import { useState } from "react";
import { Suspense } from "react";
// import {MdArrowDropDownCircle} from 'react-icons/fa'
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
// import reactLogo from './assets/react.svg'
// import "./App.css";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { login as userLogin, logout as userLogout } from "../redux/userSlice";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Loginout() {
  const dispatch = useDispatch();
  const [verfiy, Setverfiy] = useState(false);
  const user = useSelector((state) => state.user.user);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const handleLogout = () => {
    Setverfiy(false);
    dispatch(userLogout());
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );
        Setverfiy(true);
        dispatch(userLogin(res.data));

// sending user data to db
        const userData = {
          name: res.data.name,
          email: res.data.email,
          picture: res.data.picture,
          given_name: res.data.given_name,
          email_verified: res.data.email_verified,
          sub: res.data.sub,
        };
        axios
          .post("http://localhost:8000/api/users/", userData)
          .then((res) => console.log(res.data))
          .catch((error) => console.error(error));
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div>
      {!isLoggedIn ? (
        <span
          id="sign"
          className="button"
          onClick={googleLogin}
        >
          Sign In
        </span>
      ) : (
        <div className=" log-dropdown">
          <div className="log-container">
            <span>
              <img
                className="google-profile-image"
                src={user.picture}
                alt=""
              />
            </span>

            <span style={{ color: "wheat" }}>
              {user.name} <ArrowDropDownCircleIcon />
            </span>
          </div>
          <div className="log-dropdown-content">
            <p
              onClick={handleLogout}
              className="button"
            >
              Sign Out
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Loginout;

// function Loginout() {
//   const [detial, setDetail] = useState([]);
//   const [verfiy, Setverfiy] = useState(false);
//   const handleLogout = () => {
//     console.clear();
//     setDetail("");
//   };
//   const login = useGoogleLogin({
//     onSuccess: async (respose) => {
//       try {
//         const res = await axios.get(
//           "https://www.googleapis.com/oauth2/v3/userinfo",
//           {
//             headers: {
//               Authorization: `Bearer ${respose.access_token}`,
//             },
//           }
//         );
//         Setverfiy(true);
//         setDetail([...detial, res.data]); // conversion in array
//       } catch (err) {
//         console.log(err);
//       }
//     },
//   });
//   console.log(detial, "show me");
//   // const logout
//   return (
//     <div >
//       {detial.length === 0 ? (
//         <button id="sign"
//         className="button" onClick={login}>Sign In</button>
//       ) : (
//         detial.map((e) => (
//           <div className=" log-dropdown">
//             {/* {e.picture} */}
//             <div className="log-container">

//            <span>
//             <img className="google-profile-image"
//               src={e.picture}
//               alt=""
//             />
//             </span>

//             <span style={{ color: "wheat" }}>{e.name} </span>
//             <span><ArrowDropDownCircleIcon/></span>
//             {/* <p>{e.email}</p> */}
//             {/* <p>{e.given_name}</p> */}
//             </div>
//             <div className="log-dropdown-content" >

//             <p
//               onClick={handleLogout}
//               className="button"
//             >
//               Sign Out
//             </p>
//             </div>
//           </div>
//         ))
//       )}

//     </div>
//   );
// }

// export default Loginout;
