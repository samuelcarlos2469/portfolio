const nav = () => {
  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div>
          <a
            href="#"
            className="text-white font-mono tracking-wider text-3xl flex items-center"
          >
            LOGO
          </a>
        </div>
        <div className="space-x-4">
          <a
            href="#"
            className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
          >
            Info
          </a>
        </div>
      </div>
    </>
  );
};

export default nav;
