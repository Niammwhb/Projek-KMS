import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useKnowledge } from "../knowledge/KnowledgeContext";
import "../styles/knowledge.css";

export default function Knowledge() {
  const { knowledgeList, deleteKnowledge } = useKnowledge();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // FILTER
  const filtered = knowledgeList.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "all" ? true : item.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        {/* HEADER TITLE */}
        <div className="knowledge-header-blogger">
          <h1>Postingan</h1>
        </div>

        {/* TOPBAR */}
        <div className="knowledge-topbar">
          <div className="knowledge-topbar-left">
            {/* SELECT */}
            <select
              className="knowledge-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">Semua ({filtered.length})</option>
              <option value="SOP">SOP</option>
              <option value="Lesson Learned">Lesson Learned</option>
              <option value="Teknis">Teknis</option>
            </select>

            {/* TOTAL */}
            <div className="knowledge-total">
              Total: <b>{filtered.length}</b>
            </div>

            {/* SEARCH */}
            <input
              className="knowledge-search-input"
              type="text"
              placeholder="Telusuri..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* BUTTON ADD */}
          <Link to="/knowledge/add" className="knowledge-btn-add">
            + Posting Baru
          </Link>
        </div>

        {/* LIST */}
        <div className="knowledge-post-list">
          {filtered.length === 0 ? (
            <div className="knowledge-empty">
              <h3>Belum ada postingan</h3>
              <p>
                Silakan tambah postingan baru untuk mulai mengisi knowledge.
              </p>
            </div>
          ) : (
            filtered.map((item) => (
              <div key={item.id} className="knowledge-post-item">
                <div className="knowledge-thumb">
                  {item.title.charAt(0).toUpperCase()}
                </div>

                <div className="knowledge-info">
                  <h3>{item.title}</h3>

                  <div className="knowledge-meta">
                    <span className="badge-status">
                      {item.status?.toLowerCase() === "published"
                        ? "published"
                        : item.status}
                    </span>

                    <span className="badge-category">{item.category}</span>

                    <span className="badge-date">—</span>
                  </div>
                </div>

                <div className="knowledge-actions">
                  <Link
                    to={`/knowledge/edit/${item.id}`}
                    className="knowledge-btn-edit"
                  >
                    Edit
                  </Link>

                  <button
                    className="knowledge-btn-delete"
                    onClick={() => deleteKnowledge(item.id)}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
