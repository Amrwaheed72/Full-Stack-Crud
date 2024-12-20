function Navbar({ onClick }) {
  return (
    <div className="navbar bg-base-100 border-b-2 border-[#db924b]">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Amr Waheed</a>
      </div>
      <div className="navbar-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-48 md:w-80"
          />
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary" onClick={onClick}>
          Add Client
        </button>
      </div>
    </div>
  );
}

export default Navbar;
