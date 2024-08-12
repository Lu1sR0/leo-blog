import Header from "@/app/components/Header";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <Header title="404 - Página não encontrada" />
      <div>
        <Link className="items-center" href="/">Voltar para o menu inicial</Link>
      </div>
    </div>
  );
};

export default NotFound;