import { Button, Input, InputGroup } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post("/add-user", { name, email, password });
      alert("User added successfully");
    } catch (error) {
      console.error("Error adding user: ", error);
      alert("Failed to add user");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Name..."
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email Address..."
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password..."
        />
        <Button type="submit">Submit</Button>
      </InputGroup>
    </form>
  );
};

export default SignupForm;
