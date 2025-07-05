import { MainLayout } from '@/layouts/MainLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PostHogProvider } from 'posthog-js/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'react-loading-skeleton/dist/skeleton.css';
import { BrowserRouter } from 'react-router';
import { Toaster } from 'sonner';
import './styles/global.css';
import './styles/tailwind.css';

const options = {
  api_host: import.meta.env.VITE_POSTHOG_HOST,
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * (60 * 1000),
    },
  },
});

createRoot(document.getElementById('root') as Element).render(
  <StrictMode>
    <PostHogProvider apiKey={import.meta.env.VITE_POSTHOG_KEY} options={options}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Toaster richColors />
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </QueryClientProvider>
    </PostHogProvider>
  </StrictMode>,
);
