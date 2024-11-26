import { useState } from "react";

interface Props {
  getName: (name: string) => void;
}

const InputField: React.FC<Props> = (props) => {
  const [name, setName] = useState("");

  const { getName } = props;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    getName(name);
    setName("");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default InputField;
