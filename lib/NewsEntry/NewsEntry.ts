export default interface NewsEntry {
    title: string,
    date: string,
    key: string,
    url: string,

    // optional
    tags?: string[],
    category?: string[],
    summary?: string,
    comment?: string,

    hnUrl?: string,
    figureUrl?: string,
}