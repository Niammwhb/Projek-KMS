import { createContext, useContext, useEffect, useState } from "react";

const KnowledgeContext = createContext();

export function KnowledgeProvider({ children }) {
  const [knowledgeList, setKnowledgeList] = useState(() => {
    const saved = localStorage.getItem("knowledge");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("knowledge", JSON.stringify(knowledgeList));
  }, [knowledgeList]);

  const addKnowledge = (data) => {
    const newItem = {
      id: Date.now(),
      title: data.title,
      content: data.content,
      category: data.category,
      status: data.status, // draft | published
      thumbnail: data.thumbnail || null, // ✅ TAMBAH INI
      createdAt: data.createdAt || new Date().toISOString(),
    };

    setKnowledgeList((prev) => [newItem, ...prev]);
  };

  const deleteKnowledge = (id) => {
    setKnowledgeList((prev) => prev.filter((k) => k.id !== id));
  };

  return (
    <KnowledgeContext.Provider
      value={{ knowledgeList, addKnowledge, deleteKnowledge }}
    >
      {children}
    </KnowledgeContext.Provider>
  );
}

export const useKnowledge = () => useContext(KnowledgeContext);
