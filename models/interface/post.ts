/**
 * Represents a blog post from Hashnode
 * API documentation: https://gql.hashnode.com/?source=legacy-api-page#
 */
export interface Post {
    /** The ID of the post. Used to uniquely identify the post. */
    id: string;

    /** Complete URL of the post including the domain name. Example - https://johndoe.com/my-post-slug */
    url: string;

    /** The title of the post. */
    title: string;

    /** The date and time the post was published. */
    publishedAt: string;

    /** The subtitle of the post. Subtitle is a short description of the post which is also used in SEO if meta tags are not provided. */
    subtitle: string;

    /** The number of hearts on the post. Shows how many users liked the post. */
    reactionCount: number;

    /** Page identifier for blog URL */
    slug: string;

    /** HTML string to display the blog on page */
    content: {
        html: string;
    };
}
