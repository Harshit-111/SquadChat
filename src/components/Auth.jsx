import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookie = new Cookies();
const Auth = (props) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookie.set("authToken", result.user.refreshToken);
      props.setIsAuth(cookie.get("authToken"));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <center>
      <p>Sign in with google to continue</p>
      <button onClick={signInWithGoogle}>sign with google</button>
    </center>
  );
};

export default Auth;
