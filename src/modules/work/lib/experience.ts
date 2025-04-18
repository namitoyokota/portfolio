import { Statistic } from './statistic';
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
  descriptions: string[];
  url: string;
  statistics: Statistic[];
  majorTools: Tool[];
  minorTools: Tool[];
  contributions: string[];
}
