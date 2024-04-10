/**
 * Represents a bookmark from https://api.namitoyokota.com/bookmarks.json
 */
export interface Bookmark {
    /** Name of the bookmark */
    title: string;

    /** Name of the landing page */
    website: string;

    /** Landing page for the bookmark */
    url: string;

    /** Topics associated with the bookmark */
    tags: string[];
}
