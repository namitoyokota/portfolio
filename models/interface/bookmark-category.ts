import { Bookmark } from './bookmark';

/**
 * Represents a bookmark category from https://api.namitoyokota.com/bookmarks.json
 */
export interface BookmarkGroup {
    /** Name of the category */
    category: string;

    /** List of bookmarks within the category */
    list: Bookmark[];
}
