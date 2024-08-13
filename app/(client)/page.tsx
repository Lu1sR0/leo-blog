import { client } from "@/sanity/lib/client";
import Header from "../components/Header";
import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";

async function getPosts() {
  const query = `
  *[_type == "post"]{
  title,
  slug,
  publishedAt,
  excerpt,
  tags[]-> {
    _id,
    slug,
    name
  }
}
`;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();
  return (
    <div>
      <head> <meta name="google-site-verification" content="Wvz4f2fpr7DyWaqO4QyRvw5HhI5VkCmJoNffcLhY9t4" /></head>
     
      <Header title="Todos os Posts" />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
}
