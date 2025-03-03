import Input from "./Input";
import { useState } from "react";
import Button from "./Button.jsx";
import {useDispatch} from "react-redux";
import {setFormInputData} from "./utility/formSlice.js";
import Table from "./Table.jsx";


const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");

  const data = {name, email, password, contact, address, birthday};
  // console.log(data);

  const dispatch = useDispatch();
  // const selector = useSelector((state) => state.form.formInputData)

  const inputNameChange = (event) =>
    setName(event.target.value)
  ;
  const inputEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const inputContactChange = (event) => {
    setContact(event.target.value);
  };
  const inputAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const inputBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };
  const inputPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const submitButton = () => {
    dispatch(setFormInputData(data))
    setName("");
    setEmail("");
    setPassword("");
    setContact("");
    setBirthday("");
    setAddress("");
  };
  const setFormInputEmpty = () => {
    setName("");
    setEmail("");
    setPassword("");
    setContact("");
    setBirthday("");
    setAddress("");
  };
  return (
    <>
      <form action="">
        <div
          style={{
            padding: "20px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Input
            labelName="Enter your name"
            inputType="text"
            initialValue={name}
            onChange={inputNameChange}
          />
          <br />
          <br />
          <Input
            labelName="Enter your email"
            inputType="email"
            onChange={inputEmailChange}
            initialValue={email}
          />
          <br />
          <br />
          <Input
            labelName="Enter your contact number"
            inputType="text"
            onChange={inputContactChange}
            initialValue={contact}
          />
          <br />
          <br />
          <Input
            labelName="Enter your Address"
            inputType="text"
            onChange={inputAddressChange}
            initialValue={address}
          />
          <br />
          <br />
          <Input
            labelName="Enter your birthday"
            inputType="date"
            onChange={inputBirthdayChange}
            initialValue={birthday}
          />
          <br />
          <br />
          <Input
            labelName="Enter your password"
            inputType="password"
            onChange={inputPasswordChange}
            initialValue={password}
          />
          <span style={{display: "flex", justifyContent: "space-around"}}>
          <Button
              btnName="submit"
              onClick={submitButton}
          />
          <Button
              btnName="Clear Form"
              onClick={setFormInputEmpty}
          />
            </span>
        </div>
      </form>
      <div>
        <Table />
      </div>
    </>
  );
};
export default Form;
