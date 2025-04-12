import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Work = () => {
  return (
    <>
      {/* Page Title */}
      <h1 className="mb-2 text-2xl font-bold text-black">Employment History</h1>

      {/* Subtitle */}
      <p>Nice things to say about companies I&apos;ve worked for mainly large and medium size with SaaS.</p>

      {/* Experience List */}
      <div className="flex flex-col gap-4">
        {/* Ncontracts */}
        <div className="flex flex-col gap-3 rounded-lg bg-gray-200 p-3 text-gray-800">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Brentwood, TN (Remote)</span>
            <span>September 2024 — Present</span>
          </div>
          <h3 className="font-semibold">
            Senior Software Engineer <span className="text-gray-400">at</span> Ncontracts
          </h3>
          <p className="text-[1rem] text-gray-600">Responsibilities</p>

          {/* Major Tools */}
          <div className="flex flex-row gap-2">
            <a
              href="https://aws.amazon.com/dynamodb/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-1 border-black bg-black px-3 py-0.5 text-sm text-white"
            >
              DynamoDB
            </a>
            <a
              href="https://www.datadoghq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-1 border-black bg-black px-3 py-0.5 text-sm text-white"
            >
              DataDog
            </a>
          </div>

          {/* Minor Tools */}
          <div className="flex flex-row gap-2">
            <a
              href="https://tanstack.com/query/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-1 border-black px-3 py-0.5 text-sm"
            >
              TanStack Query
            </a>
            <a
              href="https://zustand.docs.pmnd.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-1 border-black px-3 py-0.5 text-sm"
            >
              Zustand
            </a>
          </div>

          {/* Contributions */}
          <button className="flex w-full flex-row items-center justify-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-[1rem] text-gray-700 hover:cursor-pointer">
            <FontAwesomeIcon icon={faChevronDown} />
            <span>Show Detailed Contributions</span>
          </button>
        </div>
      </div>
    </>
  );
};
