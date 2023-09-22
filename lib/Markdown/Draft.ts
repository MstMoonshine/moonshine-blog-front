import fs from 'fs';
import { processContent } from '@/lib/Markdown/Processing';

export default async function ProcessDraft({ params }: { params: { slug: string[] } }) {
    const key = params.slug[0] + '/' + params.slug[1];

    const path = '/Users/monstrousmoonshine/workspace/moonshine-cms/moonshine-posts/' + key + '/';
    const mdx_file = fs.readdirSync(path).filter(fn => fn.endsWith('.mdx'))[0];
    const md_file = fs.readdirSync(path).filter(fn => fn.endsWith('.md'))[0];
    const file = path + (mdx_file ? mdx_file : md_file);

    const post_content = await fs.readFileSync(file, 'utf8');

    const source = await processContent(post_content, key);

    return source;
}