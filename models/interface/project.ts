/**
 * Represents information on a side project I've completed
 */
export interface Project {
    /** Name of the project */
    title: string;

    /** Description of what the project does */
    description: string;

    /** Story of how this project came to be */
    story: string;

    /** What I learned from this project */
    lesson: string;

    /** Main screenshot from the project */
    thumbnail: string;

    /** List of image paths for screenshots from the project */
    images: string[];

    /** Path of the icon in the assets directory */
    iconPath: string;

    /** Home page of the project */
    url: string;

    /** List of resources I used for this project */
    resources: string[];

    /** List of technologies used */
    cards: string[];
}
