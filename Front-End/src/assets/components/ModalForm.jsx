function ModalForm({ isOpened, onClose, mode, onSubmit }) {
  return (
    <div>
      <dialog id="my_modal_3" className="modal " open={isOpened}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h3>
          <form  method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <label className=" my-4 input input-bordered flex items-center gap-2">
              Name
              <input type="text" className="grow" placeholder="Full Name" />
            </label>
            <label className="  my-4 input input-bordered flex items-center gap-2">
              Email
              <input type="text" className="grow" placeholder="Email Address" />
            </label>
            <label className="  my-4 input input-bordered flex items-center gap-2">
              Job
              <input type="text" className="grow" placeholder="Your Job" />
            </label>
            <div className="flex justify-between mb-4 ">
              <label className=" input input-bordered flex items-center gap-2">
                Rate
                <input type="number" className="grow" placeholder="Your Rate" />
              </label>
              <select className=" mx-2 select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Select Your Stats
                </option>
                <option>Active</option>
                <option>inactive</option>
              </select>
            </div>
            <button
              onClick={onClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <button className="btn btn-success">
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default ModalForm;
