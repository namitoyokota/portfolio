export const Projects = () => (
  <>
    {/* Page Title */}
    <h1 className="mb-2 text-2xl font-bold">Projects</h1>

    {/* Subtitle */}
    <span className="text-gray-500">Talk about how I enjoy things and learning through creating.</span>

    {/* Projects */}
    <div className="flex flex-col gap-2">
      {/* ngx-notation-reveal */}
      <div className="flex flex-col gap-2">
        <img src="" alt="Logo" className="mb-4 h-32 w-32 rounded-full" />
        <h3>ngx-notation-reveal</h3>
        <span className="text-gray-500">description</span>

        {/* Statistics */}
        <div className="grid grid-cols-4 gap-2">
          <div className="flex flex-col gap-2">
            <span>Stars</span>
            <span>0</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>Stars</span>
            <span>0</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>Stars</span>
            <span>0</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>Stars</span>
            <span>0</span>
          </div>
        </div>

        {/* Thumbnail */}
        <img src="" alt="Thumbnail" className="mb-4 h-32 w-32 rounded-full" />

        {/* Tools */}
        <details>
          <summary>Tools</summary>
          <ul>
            <li>Angular</li>
            <li>Tool 2</li>
          </ul>
        </details>
      </div>
    </div>
  </>
);
