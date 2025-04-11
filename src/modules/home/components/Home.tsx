export const Home = () => {
  return (
    <>
      <img src="" alt="Profile" className="mb-4 h-32 w-32 rounded-full" />
      <h1 className="mb-2 text-2xl font-bold">Hi, I&apos;m Namito 👋🏼</h1>
      <span className="text-gray-500">
        Senior Software Engineer at{' '}
        <a href="https://www.ncontracts.com/" target="_blank" rel="noreferrer">
          Ncontracts
        </a>
      </span>
      <p>5 years of experience, causally looking, my philosophy and Jesus.</p>
      <div className="flex flex-row gap-2">
        <a href="https://www.github.com/namitoyokota" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/namito" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="mailto:namitoyokota@icloud.com">Mail</a>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <h3>Sean Carnes</h3>
          <span className="text-gray-500">Engineering Manager at Venminder</span>
          <p>Recommendation letter.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Jess MePheron</h3>
          <span className="text-gray-500">Product Manager at Ncontracts</span>
          <p>Recommendation letter.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Hunter Simpson</h3>
          <span className="text-gray-500">Senior Software Engineer at Ncontracts</span>
          <p>Recommendation letter.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Patrick Towle</h3>
          <span className="text-gray-500">Senior Software Engineer at Ncontracts</span>
          <p>Recommendation letter.</p>
        </div>
      </div>
    </>
  );
};
