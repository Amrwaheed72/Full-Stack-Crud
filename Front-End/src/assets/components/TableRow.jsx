function TableRow({ client,onUpdate }) {
  const { id, name, job, favoriteColor, Rate } = client;
  return (
    <tr>
      <th>{id}</th>
      <td>{name}</td>
      <td>{job}</td>
      <td>{favoriteColor}</td>
      <td>{Rate}</td>
      <td>
        <button className="btn btn-outline btn-primary rounded-full bg">Active</button>
      </td>
      <td>
        <button onClick={onUpdate} className=" btn btn-secondary rounded-full bg">Update</button>
      </td>
      <td>
        <button className="btn btn-error rounded-full bg">Delete</button>
      </td>
    </tr>
  );
}

export default TableRow;
