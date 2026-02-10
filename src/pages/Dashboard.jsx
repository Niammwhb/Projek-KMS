import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import { useKnowledge } from "../knowledge/KnowledgeContext";

import "../styles/dashboard.css";

export default function Dashboard() {
  const { knowledgeList } = useKnowledge();

  const published = knowledgeList.filter((k) => k.status === "Published");

  const countByCategory = (category) =>
    published.filter((k) => k.category === category).length;

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main dashboard-page">
        {/* HEADER */}
        <DashboardHeader />

        {/* CONTENT */}
        <main className="dashboard-content dashboard-content-modern">
          <div className="dashboard-stats-grid">
            <div className="dashboard-stat-card">
              <div className="stat-number">{countByCategory("SOP")}</div>
              <div className="stat-label">SOP</div>
            </div>

            <div className="dashboard-stat-card">
              <div className="stat-number">
                {countByCategory("Lesson Learned")}
              </div>
              <div className="stat-label">Lesson Learned</div>
            </div>

            <div className="dashboard-stat-card">
              <div className="stat-number">{countByCategory("Teknis")}</div>
              <div className="stat-label">Teknis</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
