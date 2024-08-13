import Header from "@/app/components/Header";
import { Tag } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";

async function getAllTags() {
  const query = `
    *[_type == "tag"] {
      name,
      slug,
      _id,
      "postCount": count(*[_type == "post" && references("tags", ^._id)])
    }
    `;
  const tags = client.fetch(query);
  return tags;
}
export const revalidate = 60;

const page = async () => {
    const tags: Tag[] = await getAllTags();
    return (
      <div>
        <Header title="Categorias" />
        <head> <meta name="google-site-verification" content="Wvz4f2fpr7DyWaqO4QyRvw5HhI5VkCmJoNffcLhY9t4" /></head>
        <div>
          {tags?.length > 0 &&
            tags?.map((tag) => (
              <Link key={tag?._id} href={`/tags/${tag.slug.current}`}>
                <div className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500">
                  {tag.name} ({tag?.postCount})
                </div>
              </Link>
            ))}
        </div>
      </div>
    );
  };

export default page;
