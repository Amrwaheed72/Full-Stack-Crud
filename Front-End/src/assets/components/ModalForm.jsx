import { useState } from "react";

function ModalForm({ isOpened, onClose, mode, onSubmit }) {
  const [rate, setRate] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [status, setStatus] = useState(false);

  function handleStatus(e) {
    setStatus(e.target.value === "Active");
  }
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      rate,
      name,
      email,
      job,
      status,
    };
    onsubmit = { formData };
  }

  return (
    <div>
      <dialog id="my_modal_3" className="modal" open={isOpened}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h3>
          <form onSubmit={handleSubmit} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <label className="my-4 input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                className="grow"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="my-4 input input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="my-4 input input-bordered flex items-center gap-2">
              Job
              <input
                type="text"
                className="grow"
                placeholder="Your Job"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </label>
            <div className="flex justify-between mb-4">
              <label className="input input-bordered flex items-center gap-2">
                Rate
                <input
                  type="number"
                  className="grow"
                  placeholder="Your Rate"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </label>
              <select
                value={status ? "Active" : "Inactive"}
                className="mx-2 select select-bordered w-full max-w-xs"
                onChange={handleStatus}
              >
                <option disabled value="">
                  Select Your Status
                </option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button
              onClick={onClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <button type="submit" className="btn btn-success">
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default ModalForm;
