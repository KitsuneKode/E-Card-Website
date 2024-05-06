import {  useState } from "react";
import PropTypes from "prop-types";

export default function TextInput({
  userDetails,
  label,
  name,
  type = "text",
  setUserDetails,
}) {
  const [value, setValue] = useState("");

  const urls=["https://www.instagram.com/", "https://twitter.com/", "https://github.com/"]
  
  const handleChange = (e, field) => {
    setValue(e.target.value);
    const fieldParts = field.split(".");
    if (fieldParts[0] === "name" || fieldParts[0] === "description") {
      setUserDetails({ ...userDetails, [fieldParts[0]]: e.target.value });
    } else if (fieldParts[0] === "interest") {
      const newInterests = [...userDetails.interests];
      newInterests[fieldParts[1]-1] = e.target.value;
      setUserDetails({ ...userDetails, interests: newInterests });
    } else if (fieldParts[0] === "handles") {
      let index = 0;
      if (fieldParts[1] === "github") {
        index = 2;
      } else if (fieldParts[1] === "twitter") {
        index = 1;
      } else if (fieldParts[1] === "instagram") {
        index = 0;
      }

      const newHandles = [...userDetails.handles];
      newHandles[index].url = urls[index] + e.target.value;
      setUserDetails({ ...userDetails, handles: newHandles });
      console.log(userDetails)
    }
  };

  return (
    <div className="input-container">
      {name !== "description" ? (
        <InputBox
          type={type}
          name={name}
          value={value}
          label={label}
          handleChange={handleChange}
        />
      ) : (
        <TextAreaBox
          type={type}
          name={name}
          value={value}
          label={label}
          handleChange={handleChange}
        />
      )}
    </div>
  );
}

function InputBox({ type, name, value, label, handleChange }) {
  return (
    <>
      <input
        id={name}
        type={type}
        value={value}
        required
        onChange={(e) => handleChange(e, name)}
      />
      <label htmlFor={`input=${name}`} className={value && "filled"}>
        {label}
      </label>
    </>
  );
}

function TextAreaBox({ name, value, label, handleChange }) {
  return (
    <>
      <textarea
        id={name}
        type="text"
        value={value}
        required
        onChange={(e) => handleChange(e, name)}
      />
      <label htmlFor={`input=${name}`} className={value && "filled"}>
        {label}
      </label>
    </>
  );
}

InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

TextAreaBox.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

TextInput.propTypes = {
  userDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    interests: PropTypes.arrayOf(PropTypes.string).isRequired,
    handles: PropTypes.arrayOf(
      PropTypes.shape({
        platform: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  setUserDetails: PropTypes.func.isRequired,
};
