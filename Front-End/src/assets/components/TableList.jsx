import React from "react";
import TableRow from "./TableRow";
import { useClients } from "./useClients";
import Spinner from "./Spinner";

function TableList({ onUpdate }) {
  const { clients, isPending, error } = useClients();

  if (isPending) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Rate</th>
            <th>Stats</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <TableRow
              client={client}
              key={client.id}
              onUpdate={() => onUpdate(client)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableList;
