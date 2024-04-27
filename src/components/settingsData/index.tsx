const Settings = () => {
  return (
    <section className="flex flex-col justify-between h-[95%]">
      <section className="flex flex-col pt-5 gap-7">
        <div className="flex justify-between">
          <span className="flex flex-col gap-3">
            <h3 className="p-o m-0 flex justify-start">Product Key</h3>
            <input
              className="appearance-none border-none bg-transparent p-0 m-0 outline-none"
              value="asdf345gsadfbjhg"
            />
          </span>
          <button className="w-[120px] h-[40px] flex justify-center items-center p-o m-0 bg-gray-800 ">
            Change
          </button>
        </div>

        <div className="flex justify-between">
          <span className="flex flex-col gap-3">
            <h3 className="p-o m-0 flex justify-start">Organization Name</h3>
            <input
              className="appearance-none border-none bg-transparent p-0 m-0 outline-none"
              value="Raisoni Group"
            />
          </span>
          <button className="w-[120px] h-[40px] flex justify-center items-center p-o m-0 bg-gray-800 ">
            Change
          </button>
        </div>

        <div className="flex justify-between">
          <span className="flex flex-col gap-3">
            <h3 className="p-o m-0 flex justify-start">
              Organization Eamil Address
            </h3>
            <input
              className="appearance-none border-none bg-transparent p-0 m-0 outline-none"
              value="ghraisoni.net@gamail.com"
            />
          </span>
          <button className="w-[120px] h-[40px] flex justify-center items-center p-o m-0 bg-gray-800 ">
            Change
          </button>
        </div>
      </section>

      <div className="bottom-savebar">
        <button className="bg-green-400 w-[100px] h-[35px] flex items-center justify-center">
          Save
        </button>
        <button className="bg-red-400 w-[100px] h-[35px] flex items-center justify-center">
          {" "}
          Cancel
        </button>
      </div>
    </section>
  );
};

export default Settings;
