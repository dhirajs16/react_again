

const UserList = (props) => {
  const { users } = props;

  const renderRows = users.map((row, index) => (
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.email}</td>
    </tr>
  ));

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>{renderRows}</tbody>
      </table>
    </>
  );
};

export default UserList;
