import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Facebook, Twitter, Mail, GitHub } from "react-feather";
import InputPasswordToggle from "src/@core/components/input-password-toggle";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Button,
} from "reactstrap";
import Select from "react-select";
import Image from "next/image";

const LoginFormOne = () => {
  const selectOptions = [{ value: "kalbe.dom", label: "kalbe.dom" }];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dom, setDom] = useState(selectOptions[0]);
  const [error, setError] = useState(""); 
  const {data: session} = useSession();

   // Redirect to home page if user is already authenticated
   if (session) {
     window.location.href = "/home";
     return null;
   }
 
   const handleSubmit = async (event) => {
     event.preventDefault();
     try {
       const response = await fetch("https://dev-api-openinnovation.kalbe.co.id/Users/authenticate", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           username,
           password,
           dom: dom.value,
         }),
       });
       if (response.ok) {
         const data = await response.json();
         if (data) {
           window.location.href = "/home";
         } else {
           setError("Invalid username or password");
         }
       } else {
         setError("Failed to authenticate");
       }
     } catch (error) {
       console.log(error);
       setError("Failed to authenticate");
     }
   };

  return (
    <Card className="mb-0">
      <CardBody>
        <Link href="/">
          <a className="brand-logo">
            <Image src="/images/logo/kalbe-logo.png" width={113} height={51} />
          </a>
        </Link>
        <Form
          className="auth-login-form mt-2"
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <Label className="form-label" for="login-username">
              Username
            </Label>
            <Input
              type="text"
              id="login-username"
              placeholder="john.doe"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <div className="d-flex justify-content-between">
              <Label className="form-label" for="login-password">
                Password
              </Label>
              <Link href="/authentication/forgot_password">
                <a>
                  <small>Forgot Password?</small>
                </a>
              </Link>
            </div>
            <InputPasswordToggle
              className="input-group-merge"
              id="login-password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="login-dom">
              DOM
            </Label>
            <Select
              theme="primary"
              className="react-select"
              classNamePrefix="select"
              defaultValue={selectOptions[0]}
              options={selectOptions}
              isClearable={false}
            />
          </FormGroup>
          <Button.Ripple color="primary" block className="mt-3" onClick={(e)=>handleSubmit(e)}>
            Login
          </Button.Ripple>
        </Form>
        <hr className="mt-5" />
        <div className="auth-footer-btn d-flex flex-column justify-content-center align-items-center">
          <p className="text-dark m-0">[Application Name] Version 1.0</p>
          <p className="text-dark m-0">&#169;2021 - PT. Kalbe Farma Tbk.</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default LoginFormOne;
