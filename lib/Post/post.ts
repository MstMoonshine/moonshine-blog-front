export default interface Post {
    title: string,
    date: string,
    key: string,
    content: string,

    // optional
    draft?: boolean,
    tags?: string[],
    category?: string[],
    summary?: string,
}