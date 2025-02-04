import { useDeleteClient } from "./useDeleteClient";

function TableRow({ client, onUpdate, onDelete }) {
  const { id, name, job, favoriteColor, rate, isactive } = client;
  const { isDeleting, deletingClient } = useDeleteClient();
  return (
    <tr>
      <th>{id}</th>
      <td>{name}</td>
      <td>{job}</td>
      <td>{favoriteColor}</td>
      <td>{rate}</td>
      <td>
        <button
          className={`${
            isactive
              ? "btn btn-active btn-primary rounded-full w-24 "
              : "btn btn-outline btn-primary rounded-full w-24"
          }`}
        >
          {isactive ? "Active" : "Inactive"}
        </button>
      </td>
      <td>
        <button
          onClick={onUpdate}
          className=" btn btn-secondary rounded-full bg"
        >
          Update
        </button>
      </td>
      <td>
        <button
          disabled={isDeleting}
          onClick={() => deletingClient(id)}
          className="btn btn-error rounded-full bg"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
