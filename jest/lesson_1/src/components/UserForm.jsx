import { useState } from "react";

const UserForm = (props) => {
  const { onUserAdd} = props;
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')


//   const [user, setUser] = useState({ name: '', email: '' });
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onUserAdd({name:name, email: email})
    // setUser({ name: '', email: '' }); 
    setEmail('')
    setName('')
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter name"
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          name="email"
          placeholder="Enter email"
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default UserForm;
