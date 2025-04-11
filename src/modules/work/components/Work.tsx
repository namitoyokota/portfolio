export const Work = () => {
  return (
    <>
      {/* Page Title */}
      <h1 className="mb-2 text-2xl font-bold">Employment History</h1>

      {/* Subtitle */}
      <p>Nice things to say about companies I&apos;ve worked for mainly large and medium size with SaaS.</p>

      {/* Experience List */}
      <div className="flex flex-col gap-2">
        {/* Ncontracts */}
        <div className="flex flex-col gap-2">
          <span>Location</span>
          <span>Date</span>
          <h3>Senior Software Engineer at Ncontracts</h3>
          <p>Responsibilities</p>

          {/* Major Tools */}
          <div className="flex flex-row gap-2">
            <a href="https://www.datadoghq.com" target="_blank" rel="noopener noreferrer">
              DataDog
            </a>
          </div>

          {/* Minor Tools */}
          <div className="flex flex-row gap-2">
            <a href="https://zustand.docs.pmnd.rs" target="_blank" rel="noopener noreferrer">
              Zustand
            </a>
          </div>

          {/* Contributions */}
          <details>
            <summary>Contributions</summary>
            <ul>
              <li>Initiative 1</li>
              <li>Initiative 2</li>
            </ul>
          </details>
        </div>
      </div>
    </>
  );
};
