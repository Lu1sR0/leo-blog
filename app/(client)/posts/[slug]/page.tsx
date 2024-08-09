import Header from "@/app/components/Header";
import { Post } from "@/app/utils/interface";
import { VT323 } from "next/font/google";
import { client } from "@/sanity/lib/client";
import React from "react";
import Link from "next/link";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const dateFont = VT323({ weight: "400", subsets: ["latin"] });

function dataAtualFormatada(dateString: string) {
  const data = new Date(dateString);
  const dia = data.getDate().toString();
  const diaF = dia.length === 1 ? "0" + dia : dia;
  const mes = (data.getMonth() + 1).toString(); // +1 pois no getMonth Janeiro começa com zero
  const mesF = mes.length === 1 ? "0" + mes : mes;
  const anoF = data.getFullYear();
  return `${diaF}/${mesF}/${anoF}`;
}

interface Params {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current == "${slug}"][0]{
  title,
  slug,
  publishedAt,
  excerpt,
  banner,
  body,
  tags[]-> {
    _id,
    slug,
    name
  }
}
    `;
  const post = await client.fetch(query);
  return post;
}

const page = async ({ params }: Params) => {
  const post: Post = await getPost(params?.slug);
  return (
    <div>
      <Header title={post?.title} />
      <div className="text-center">
        <span className={`${dateFont?.className} text-purple-500`}>
          {dataAtualFormatada(post?.publishedAt)}
        </span>
        <div className="mt-5">
          {post?.tags?.map((tag) => (
            <Link key={tag?._id} href={`/tags/${tag.slug.current}`}>
              <span className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900">
                #{tag.name}
              </span>
            </Link>
          ))}
        </div>
        <div className={richTextStyles}>
          <PortableText
            value={post.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </div>
  );
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlFor(value).url()}
        alt="Imagem do Post"
        width={700}
        height={700}
      />
    ),
  },
};

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
