import { Button, Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";

const SignupForm = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const onSubmitFun = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nameInputRef.current)
      console.log("name : ", nameInputRef.current.value);

    if (emailInputRef.current)
      console.log("email : ", emailInputRef.current.value);

    if (passwordInputRef.current)
      console.log("password : ", passwordInputRef.current.value);
  };

  return (
    <form onSubmit={(event) => onSubmitFun(event)}>
      <InputGroup>
        <Input ref={nameInputRef} placeholder="Enter your Name..." />
        <Input ref={emailInputRef} placeholder="Enter your Email Address..." />
        <Input ref={passwordInputRef} placeholder="Enter your Password..." />
        <Button type="submit">Submit</Button>
      </InputGroup>
    </form>
  );
};

export default SignupForm;
