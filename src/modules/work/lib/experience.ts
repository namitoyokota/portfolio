import { Tool } from './tool';

/**
 * Represents a work experience card data.
 */
export interface Experience {
  company: string;
  position: string[];
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  url: string;
  majorTools: Tool[];
  minorTools: Tool[];
  contributions: string[];
}
