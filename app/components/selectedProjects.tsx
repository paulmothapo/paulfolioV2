export default function SelectedProjects() {
  return (
    <div className="p-6 space-y-4">
      <div>
        <h1 className="text-[24px] font-bold">
          Currently building at:{" "}
          <a
            href="https://aurumwealth.ai"
            className="text-indigo-600 border-b border-indigo-600"
          >
            Aurum Wealth
          </a>{" "}
        </h1>
      </div>
      <div className="">
        <h1 className="text-[24px]">Selected Projects</h1>
      </div>
      <div className="">
        <ul className="space-y-2 ml-4 text-indigo-600">
          <li>
            <a href="https://idealisticwolrd.com">Idealistic Group</a>
          </li>
          <li>
            <a href="https://cfc.com">Church App(CFC)</a>
          </li>
          <li>
            <a href="https://desk911.co.za">Desk911</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
