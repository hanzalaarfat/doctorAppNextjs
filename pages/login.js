import logo from "../images/login.gif";
import Image from "next/image";

function Login() {
  return (
    <div>
      <h2>Login page</h2>
      <Image
        src={logo}
        layout="fill"
        objectFit="contain"
        objectPosition="left"
      />
    </div>
  );
}

export default Login;
