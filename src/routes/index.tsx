import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Preenchedor de Deck Scryfall — Magic: The Gathering" },
      {
        name: "description",
        content:
          "Preencha automaticamente os dados das cartas do seu deck de Magic: The Gathering usando a API Scryfall e baixe a planilha em Excel.",
      },
      { property: "og:title", content: "Preenchedor de Deck Scryfall" },
      {
        property: "og:description",
        content:
          "Preencha automaticamente os dados das cartas do seu deck de Magic: The Gathering usando a API Scryfall e baixe a planilha em Excel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/deck-filler.html"
      title="Preenchedor de Deck Scryfall"
      className="h-screen w-screen border-0"
    />
  );
}
