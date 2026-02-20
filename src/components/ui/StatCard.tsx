interface StatCardProps {
  label: string;
  value: string;
  accent?: "green" | "gold" | "mint";
}

export function StatCard({ label, value, accent = "green" }: StatCardProps) {
  return (
    <article className={`stat-card stat-${accent}`}>
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
    </article>
  );
}
