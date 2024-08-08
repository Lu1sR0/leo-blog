import { Rule } from "sanity";

export const post = {
  name: "post",
  title: "Post",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Ei vai criar um post sem Título?😐"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: Rule) => Rule.required().error("Obrigatório"),
    },
    {
      name: "publishedAt",
      title: "Publicado em",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
        name: "excerpt",
        title: "Resumo",
        type: "text",
        validation: (Rule: Rule) => Rule.max(500).error("Limite de 500 caracteres"),
      },
      {
        name: "body",
        title: "Crie seu Post",
        type: "array",
        of: [
          { type: "block" },
          {
            type: "image",
            fields: [{ type: "text", name: "alt", title: "Alt" }],
          },
        ],
      },
      {
        name: "tags",
        title: "Tags",
        type: "array",
        of: [{ type: "reference", to: [{ type: "tag" }] }],
      },
  ],
};