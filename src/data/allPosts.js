import { postsData as archivedPostsData } from './posts.js';
import { latestPostsData } from './latestPosts.js';

export const postsData = [...archivedPostsData, ...latestPostsData];
