import TableRow from "./TableRow";

const clients = [
  {
    id: 1,
    name: "Amr Waheed",
    job: "Quality Control Specialist",
    favoriteColor: "Blue",
    Rate: "53",
    isActive: true,
  },
  {
    id: 2,
    name: "Ahmed Waheed",
    job: "Desktop Support Technician",
    favoriteColor: "Purple",
    Rate: "48",
    isActive: true,
  },
  {
    id: 3,
    name: "Amira Waheed",
    job: "Tax Accountant",
    favoriteColor: "Red",
    Rate: "47",
    isActive: false,
  },
];
function TableList({ onUpdate }) {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
           
            <th>Stats</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <TableRow onUpdate={onUpdate} client={client} key={client.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableList;
