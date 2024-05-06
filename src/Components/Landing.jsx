import { useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import "./style/landing.css";
import TextInput from "./TextInput";

export default function Landing({ setRender }) {
  const [value, setValue] = useState(0);
  
  
  function handleChange(e) {
    setValue(e.target.value);
  }
  
  const [userDetails, setUserDetails] = useState({
    name: "your name",
    description: "your description",
    interests: ["int1", "int2", "int3"],
    handles: [
      { platform: "Instagram", url: "https://www.instagram.com" },
      { platform: "Twitter", url: "https://twitter.com" },
      { platform: "Github", url: "https://github.com/" },
    ],
  });
  const [preview, setPreview] = useState({...userDetails});
  
  // console.log(preview)
  function createTextInput(label, name) {
    return (
      <TextInput
        userDetails={userDetails}
        label={label}
        name={name}
        setUserDetails={setUserDetails}
      />
    );
  }
  console.log(value);

  function createDropdownMenu() {
    return (
      <div className="input-container">
        <select
          className="InterestMenu"
          id="InterestNum"
          defaultValue=""
          required
          onChange={(e) => handleChange(e)}
        >
          <option value="" disabled></option>
          <option value="0">3</option>
          <option value="1">4</option>
          <option value="2">5</option>
          <option value="3">6</option>
        </select>
        <label htmlFor={`id="InterestNum"`} className={value && "filled"}>
          Number of Interests
        </label>
      </div>
    );
  }

  return (
    <div className="login-box">
      <h2>E-Cards</h2>
      <form 
        onSubmit={() => setRender(<Card {...userDetails} />)}
     >
      {createTextInput("Name", "name")}
      <br /><br />
      <div className="container">
                    <div className="section-container">
                        <h3>Interests</h3>
      
      {createDropdownMenu()}
      <div className="Interests">
      <div className="interests-list">
      {[...Array(Number(value) + 3)].map((_, i) => {
        const interestNumber = i + 1;
        return createTextInput(
          "Interest " + interestNumber,
          "interest." + interestNumber
        );
      })}
      </div>
      </div>
      </div>
      <div className="section-container">
                        <h3>Socials</h3>
        <label htmlFor="Socials" className="SocialLabel">Fill the username</label>
      <div className="Socials">
      {createTextInput("Instagram", "handles.instagram")}
      {createTextInput("Twitter", "handles.twitter")}
      {createTextInput("Github", "handles.github")}
      </div>
      </div>
      </div>
      {createTextInput("Description", "description")}
      <div className="form-button-wrapper">

      <button
        className="PreviewCard"
        onClick={() => setRender(<Card {...preview} />)}
        >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Preview Sample
      </button>

      <button
      type="submit"
        className="CreateCard"
        // disabled={true}
        >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Create Card
      </button>
      </div>
      </form>
    </div>
  );
}

Landing.propTypes = {
  setRender: PropTypes.func.isRequired,
};
