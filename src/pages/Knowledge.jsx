import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useKnowledge } from "../knowledge/KnowledgeContext";
import { Pencil, Trash2 } from "lucide-react";
import "../styles/knowledge.css";

export default function Knowledge() {
  const { knowledgeList, deleteKnowledge } = useKnowledge();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = knowledgeList.filter((item) => {
    const matchSearch = item.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "all" ? true : item.category === category;

    return matchSearch && matchCategory;
  });

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);

    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        {/* ================= HEADER ================= */}
        <div className="knowledge-header">
          {/* LEFT */}
          <div className="knowledge-header-left">
            <h1 className="knowledge-title">Postingan</h1>
          </div>

          {/* RIGHT CONTROLS */}
          <div className="knowledge-header-right">
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

            <div className="knowledge-total-badge">
              Total: <b>{filtered.length}</b>
            </div>

            <input
              className="knowledge-search"
              type="text"
              placeholder="Telusuri..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <Link to="/knowledge/add" className="knowledge-btn-add">
              + Posting Baru
            </Link>
          </div>
        </div>

        {/* ================= LIST ================= */}
        <div className="knowledge-blog-list">
          {filtered.length === 0 ? (
            <div className="knowledge-empty">
              <h3>Belum ada postingan</h3>
              <p>
                Silakan tambah postingan baru untuk mulai mengisi knowledge.
              </p>

              <Link to="/knowledge/add" className="knowledge-btn-add">
                + Tambah Postingan
              </Link>
            </div>
          ) : (
            filtered.map((item) => {
              const isPublished =
                item.status?.toLowerCase() === "published" ||
                item.status?.toLowerCase() === "dipublikasikan";

              const statusText = isPublished ? "Dipublikasikan" : "Draf";

              const dateText = formatDate(item.createdAt);

              return (
                <div key={item.id} className="knowledge-blog-item">
                  {/* THUMBNAIL */}
                  <div className="knowledge-blog-thumb">
                    {item.thumbnail ? (
                      <img src={item.thumbnail} alt="thumbnail" />
                    ) : (
                      <div className="knowledge-thumb-placeholder">
                        {item.title?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="knowledge-blog-content">
                    <h3 className="knowledge-blog-title">
                      {item.title || "(Tanpa judul)"}
                    </h3>

                    <p className="knowledge-blog-meta">
                      <span
                        className={`status-text ${
                          isPublished ? "published" : "draft"
                        }`}
                      >
                        {statusText}
                      </span>

                      <span className="dot">•</span>

                      <span className="date-text">{dateText}</span>
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div className="knowledge-blog-actions">
                    <Link
                      to={`/knowledge/edit/${item.id}`}
                      className="icon-btn edit"
                      title="Edit"
                    >
                      <Pencil size={18} />
                    </Link>

                    <button
                      className="icon-btn delete"
                      title="Hapus"
                      onClick={() => deleteKnowledge(item.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
