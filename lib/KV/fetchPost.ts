import env from '../../.env.json';
import Post from '../Post/Post';

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
    console.log("key", key);

    const url = env['post-worker'] + 'content/' + key + '/index.md';
    const res = await fetch(url, { next: { revalidate: 600 } });
    const post_content = await res.text();

    return post_content;
}

export default async function AllPosts(): Promise<Post[]> {
    const key_list = await fetchPostList();
    const post_list: Post[]= await Promise.all(key_list.map(async (key: string) => {
        const post_meta_json = await getPostMeta(key);
        var post_meta: Post = JSON.parse(post_meta_json);
        post_meta.key = key;
        return post_meta;
    }));

    return post_list;
}
