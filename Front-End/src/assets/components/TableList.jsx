import TableRow from "./TableRow";
import {useClients} from "./useClients";


function TableList({ onUpdate }) {
  const {clients,ispending,error}=useClients();
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
          </tr>
        </thead>
        <tbody>
          {useClients.map((client) => (
            <TableRow onUpdate={onUpdate} client={client} key={client.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableList;
