import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Work = () => {
  return (
    <>
      {/* Page Title */}
      <h1 className="mb-2 text-2xl font-bold text-black">Employment History</h1>

      {/* Subtitle */}
      <p>
        I have been blessed to work for <b>great companies and teams</b>. Here is a brief history of my employment
        history and the contributions I made.
      </p>

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
          <p className="text-[1rem] text-gray-600">
            Responsibilities: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime dignissimos
            veritatis error rem necessitatibus quaerat, dolore soluta, beatae quisquam consequatur voluptatem dolores
            accusamus expedita at a, sit repellat voluptatibus.
          </p>

          {/* Major Tools */}
          <div className="flex flex-row gap-2">
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-1 border-black bg-black px-3 py-0.5 text-sm text-white"
            >
              React
            </a>
            <a
              href="https://dotnet.microsoft.com/en-us/languages/csharp"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-1 border-black bg-black px-3 py-0.5 text-sm text-white"
            >
              C#
            </a>
            <a
              href="https://www.python.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-1 border-black bg-black px-3 py-0.5 text-sm text-white"
            >
              Python
            </a>
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-1 border-black bg-black px-3 py-0.5 text-sm text-white"
            >
              AWS
            </a>
            <a
              href="https://azure.microsoft.com/en-us/products/devops/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-1 border-black bg-black px-3 py-0.5 text-sm text-white"
            >
              Azure DevOps
            </a>
            <a
              href="https://redis.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-1 border-black bg-black px-3 py-0.5 text-sm text-white"
            >
              Redis
            </a>
            <a
              href="https://www.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-1 border-black bg-black px-3 py-0.5 text-sm text-white"
            >
              Docker
            </a>
          </div>

          {/* Minor Tools */}
          <div className="flex flex-row gap-2">
            <a
              href="https://www.datadoghq.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-1 border-black px-3 py-0.5 text-sm"
            >
              DataDog
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-1 border-black px-3 py-0.5 text-sm"
            >
              Tailwind
            </a>
            <a
              href="https://tanstack.com/query/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-1 border-black px-3 py-0.5 text-sm"
            >
              React Query
            </a>
            <a
              href="https://zustand.docs.pmnd.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-1 border-black px-3 py-0.5 text-sm"
            >
              Zustand
            </a>
            <a
              href="https://www.chartjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-1 border-black px-3 py-0.5 text-sm"
            >
              Chart.js
            </a>
          </div>

          {/* Contributions */}
          <details className="question">
            <summary className="flex w-full flex-row items-center justify-center gap-3 rounded-md bg-gray-100 px-3 py-1.5 text-[1rem] text-gray-700 hover:cursor-pointer">
              <span>Show Detailed Contributions</span>
              <FontAwesomeIcon icon={faChevronRight} size="xs" />
            </summary>

            <p className="py-2 text-[1rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iusto culpa autem odit magni, suscipit non
              velit iure quam voluptate! Suscipit nisi at corrupti voluptatem dolore rerum voluptatum, voluptatibus
              veniam.
            </p>
          </details>
        </div>
      </div>
    </>
  );
};
