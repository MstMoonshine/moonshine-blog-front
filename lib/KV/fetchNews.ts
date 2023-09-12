import env from '../../.env.json';
import NewsEntry from '@/lib/NewsEntry/NewsEntry';

export default async function AllNews(): Promise<NewsEntry[]> {
    const url = env['news-worker'];
    const res = await fetch(url, { next: { revalidate: 600 } });
    const news_list_json = await res.json();
    const news_list: NewsEntry[] = news_list_json.map((news_entry_json: string) => {
        var news_entry: NewsEntry = JSON.parse(news_entry_json);
        return news_entry;
    });
    return news_list;
}
