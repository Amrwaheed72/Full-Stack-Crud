import { useState } from "react";

function TableRow({ client, onUpdate }) {
  const { id, name, job, favoriteColor, Rate, isActive } = client;
  return (
    <tr>
      <th>{id}</th>
      <td>{name}</td>
      <td>{job}</td>
      <td>{favoriteColor}</td>
      <td>{Rate}</td>
      <td>
        <button
          className={`${
            isActive
              ? "btn btn-active btn-primary rounded-full w-24 "
              : "btn btn-outline btn-primary rounded-full w-24"
          }`}
        >
          {isActive ? "Active" : "Inactive"}
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
        <button className="btn btn-error rounded-full bg">Delete</button>
      </td>
    </tr>
  );
}

export default TableRow;
