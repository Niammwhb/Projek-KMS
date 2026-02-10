import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useKnowledge } from "../knowledge/KnowledgeContext";
import KnowledgeEditor from "../components/KnowledgeEditor";
import { ArrowLeft, Eye, Send } from "lucide-react";
import "../styles/editor.css";

export default function AddKnowledge() {
  const navigate = useNavigate();
  const { addKnowledge } = useKnowledge();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("SOP");

  const [publishMode, setPublishMode] = useState("schedule");
  const [publishDate, setPublishDate] = useState("2026-02-04");
  const [publishTime, setPublishTime] = useState("12:49");

  const [isPreview, setIsPreview] = useState(false);

  const handlePublish = () => {
    if (!title.trim()) {
      alert("Judul wajib diisi");
      return;
    }

    addKnowledge({
      title,
      content,
      category,
      status: "published",
      createdAt:
        publishMode === "schedule"
          ? new Date(`${publishDate}T${publishTime}`).toISOString()
          : new Date().toISOString(),
    });

    navigate("/knowledge");
  };

  return (
    <div className="editor-page-full">
      {/* HEADER */}
      <div className="editor-header-simple">
        <button className="btn-back-modern" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
        </button>

        <div className="header-actions">
          <button
            className="btn-preview-modern"
            onClick={() => setIsPreview(!isPreview)}
            type="button"
          >
            <Eye size={16} />
            <span>{isPreview ? "Tutup" : "Pratinjau"}</span>
          </button>

          <button
            className="btn-publish-modern"
            onClick={handlePublish}
            type="button"
          >
            <Send size={16} />
            <span>Publikasikan</span>
          </button>
        </div>
      </div>

      {/* BODY */}
      <div className="editor-layout-full">
        {/* MAIN */}
        <div className="editor-main-full">
          {/* CARD NAVBAR (JUDUL + TOOLBAR) */}
          <div className="editor-top-card">
            <input
              className="editor-title-navbar"
              placeholder="Judul knowledge..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <div id="quill-toolbar" className="toolbar-holder">
              <span className="ql-formats">
                <select className="ql-font" defaultValue="sans-serif">
                  <option value="sans-serif">Sans Serif</option>
                  <option value="serif">Serif</option>
                  <option value="monospace">Monospace</option>
                  <option value="poppins">Poppins</option>
                  <option value="roboto">Roboto</option>
                  <option value="arial">Arial</option>
                  <option value="times-new-roman">Times New Roman</option>
                  <option value="courier-new">Courier New</option>
                  <option value="georgia">Georgia</option>
                  <option value="tahoma">Tahoma</option>
                  <option value="verdana">Verdana</option>
                </select>

                <select className="ql-size"></select>
              </span>

              <span className="ql-formats">
                <button className="ql-bold"></button>
                <button className="ql-italic"></button>
                <button className="ql-underline"></button>
                <button className="ql-strike"></button>
              </span>

              <span className="ql-formats">
                <button className="ql-list" value="ordered"></button>
                <button className="ql-list" value="bullet"></button>
                <button className="ql-indent" value="-1"></button>
                <button className="ql-indent" value="+1"></button>
              </span>

              <span className="ql-formats">
                <button className="ql-align" value=""></button>
                <button className="ql-align" value="center"></button>
                <button className="ql-align" value="right"></button>
                <button className="ql-align" value="justify"></button>
              </span>

              <span className="ql-formats">
                <button className="ql-link"></button>
                <button className="ql-image"></button>
                <button className="ql-video"></button>
              </span>

              <span className="ql-formats">
                <button className="ql-clean"></button>
              </span>
            </div>
          </div>

          {/* CARD WORD PAPER */}
          <div className="editor-paper-card">
            {isPreview ? (
              <div className="preview-box">
                <h2 className="preview-title">
                  {title || "Judul belum diisi"}
                </h2>

                <div
                  className="preview-content"
                  dangerouslySetInnerHTML={{
                    __html: content || "<p>Belum ada isi knowledge.</p>",
                  }}
                />
              </div>
            ) : (
              <KnowledgeEditor value={content} onChange={setContent} />
            )}
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="editor-sidebar">
          <h4 className="sidebar-title">Setelan Posting</h4>

          <div className="sidebar-group">
            <label>Kategori</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="SOP">SOP</option>
              <option value="Lesson Learned">Lesson Learned</option>
              <option value="Teknis">Teknis</option>
            </select>
          </div>

          <div className="sidebar-group">
            <label>Dipublikasikan pada</label>

            {/* AUTO */}
            <label
              className={`publish-box ${
                publishMode === "auto" ? "active" : ""
              }`}
            >
              <div className="publish-head">
                <span>Otomatis</span>

                <input
                  type="radio"
                  name="publishMode"
                  value="auto"
                  checked={publishMode === "auto"}
                  onChange={() => setPublishMode("auto")}
                  className="radio-hidden"
                />

                <span className="radio-custom"></span>
              </div>
            </label>

            {/* SCHEDULE */}
            <label
              className={`publish-box ${
                publishMode === "schedule" ? "active" : ""
              }`}
            >
              <div className="publish-head">
                <span>Setel tanggal dan waktu</span>

                <input
                  type="radio"
                  name="publishMode"
                  value="schedule"
                  checked={publishMode === "schedule"}
                  onChange={() => setPublishMode("schedule")}
                  className="radio-hidden"
                />

                <span className="radio-custom"></span>
              </div>

              {publishMode === "schedule" && (
                <div className="publish-body">
                  <div className="datetime-row">
                    <input
                      type="date"
                      value={publishDate}
                      onChange={(e) => setPublishDate(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <input
                      type="time"
                      value={publishTime}
                      onChange={(e) => setPublishTime(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
