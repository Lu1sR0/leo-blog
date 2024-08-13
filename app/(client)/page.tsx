"use client"; // Certifique-se de que essa linha esteja presente no topo

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Header from "../components/Header";
import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

async function fetchPosts(page = 1, postsPerPage = 5) {
  const offset = (page - 1) * postsPerPage;
  const query = `
  *[_type == "post"] | order(publishedAt desc) [${offset}...${offset + postsPerPage}]{
    _id,
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

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMorePosts, setHasMorePosts] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const postsPerPage = 5;

  useEffect(() => {
    const page = parseInt(searchParams.get('page') || '1', 10);
    setCurrentPage(page);

    fetchPosts(page, postsPerPage).then((data) => {
      setPosts(data);
      setHasMorePosts(data.length === postsPerPage);
    });
  }, [searchParams]);

  const handleNextPage = () => {
    if (hasMorePosts) {
      router.push(`/?page=${currentPage + 1}`);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      router.push(`/?page=${currentPage - 1}`);
    }
  };

  return (
    <div>
      <Header title="Todos os Posts" />
      <div>
        {posts.length > 0 ? (
          posts.map((post) => <PostComponent key={post._id} post={post} />)
        ) : (
          <div className="empty-page">
            <p>Essa página está vazia</p>
            <div className="tumbleweed"></div>
          </div>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {currentPage > 1 && (
          <button 
            onClick={handlePreviousPage}
            style={{
              padding: "10px",
              marginRight: "10px",
              cursor: "pointer",
              backgroundColor: "var(--button-bg-light)", // Cor dinâmica
              color: "var(--button-icon-light)", // Cor dinâmica
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.3s ease"
            }}
          >
            <FaArrowLeft />
          </button>
        )}
        <span style={{ display: "flex", alignItems: "center", fontSize: "18px", fontWeight: "bold" }}>
          Página {currentPage}
        </span>
        {hasMorePosts && (
          <button 
            onClick={handleNextPage} 
            style={{
              padding: "10px",
              marginLeft: "10px",
              cursor: "pointer",
              backgroundColor: "var(--button-bg-light)", // Cor dinâmica
              color: "var(--button-icon-light)", // Cor dinâmica
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.3s ease"
            }}
          >
            <FaArrowRight />
          </button>
        )}
      </div>
      <style jsx global>{`
        :root {
          --button-bg-light: #000000;  /* Modo claro: botão preto */
          --button-icon-light: #ffffff;  /* Modo claro: ícone branco */
          --button-bg-dark: #ffffff;  /* Modo escuro: botão branco */
          --button-icon-dark: #000000;  /* Modo escuro: ícone preto */
        }
        [data-theme="dark"] {
          --button-bg-light: var(--button-bg-dark);  /* Alterna para o modo escuro */
          --button-icon-light: var(--button-icon-dark);  /* Alterna para o modo escuro */
        }
        button:hover:not(:disabled) {
          background-color: #6a0dad;  /* Hover roxo */
          color: #ffffff;  /* Texto branco no hover */
        }
        button {
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .empty-page {
          text-align: center;
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
}
