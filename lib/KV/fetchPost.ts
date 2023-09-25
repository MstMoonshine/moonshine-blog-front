import env from '../../.env.json';
import PostEntry from '../PostEntry/PostEntry';

async function fetchPostList() {
    const url = env['post-worker'] + 'posts';
    const res = await fetch(url, { next: { revalidate: 600 } });
    const post_list_json = await res.json();
    return post_list_json;
}

async function getPostMeta(key: string) {
    const url = env['post-worker'] + 'post/' + key;
    const res = await fetch(url, { next: { revalidate: 600 } });
    const post_meta = await res.json();

    return post_meta;
}

export async function getPostContent(key: string) {
    const url = env['post-worker'] + 'content/' + key + '/index.md';
    const md_res = await fetch(url, { next: { revalidate: 600 } });
    const res = md_res.status === 200 ? md_res : await fetch(url + 'x', { next: { revalidate: 600 } }); // mdx file
    const post_content = await res.text();

    return post_content;
}

export default async function AllPosts(): Promise<PostEntry[]> {
    const key_list = await fetchPostList();
    const post_list: PostEntry[]= await Promise.all(key_list.map(async (key: string) => {
        const post_meta_json = await getPostMeta(key);
        var post_meta: PostEntry = JSON.parse(post_meta_json);
        post_meta.key = key;
        return post_meta;
    }));

    return post_list;
}
