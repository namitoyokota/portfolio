import { Tool } from './tool';

export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  url: string;
  majorTools: Tool[];
  minorTools: Tool[];
  contributions: string[];
}
