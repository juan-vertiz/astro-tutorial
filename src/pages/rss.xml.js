import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'Juan Vertiz | Blog',
    description: 'My journey learning backend development',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/astro-tutorial/blog/${post.id}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
