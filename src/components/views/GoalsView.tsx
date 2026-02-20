"use client";

import { FormEvent, useState } from "react";
import { t } from "@/i18n/copy";
import { GoalItem, Locale } from "@/types/planner";

interface GoalsViewProps {
  locale: Locale;
  beforeGoals: GoalItem[];
  duringGoals: GoalItem[];
  onToggleGoal: (which: "beforeRamadanGoals" | "duringRamadanGoals", id: string) => void;
  onAddGoal: (which: "beforeRamadanGoals" | "duringRamadanGoals", text: string) => void;
}

interface GoalPanelProps {
  title: string;
  locale: Locale;
  goals: GoalItem[];
  panelType: "beforeRamadanGoals" | "duringRamadanGoals";
  onToggleGoal: (which: "beforeRamadanGoals" | "duringRamadanGoals", id: string) => void;
  onAddGoal: (which: "beforeRamadanGoals" | "duringRamadanGoals", text: string) => void;
}

function GoalPanel({ title, locale, goals, panelType, onToggleGoal, onAddGoal }: GoalPanelProps) {
  const [draft, setDraft] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!draft.trim()) {
      return;
    }
    onAddGoal(panelType, draft);
    setDraft("");
  }

  return (
    <article className="panel">
      <h3>{title}</h3>
      <form className="goal-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={draft}
          placeholder={t(locale, "addGoalPlaceholder")}
          onChange={(event) => setDraft(event.target.value)}
        />
        <button type="submit">{t(locale, "add")}</button>
      </form>
      <div className="goal-list">
        {goals.map((goal) => (
          <label key={goal.id} className={`goal-item ${goal.done ? "goal-done" : ""}`}>
            <input type="checkbox" checked={goal.done} onChange={() => onToggleGoal(panelType, goal.id)} />
            <span>{goal.text}</span>
          </label>
        ))}
      </div>
    </article>
  );
}

export function GoalsView({ locale, beforeGoals, duringGoals, onToggleGoal, onAddGoal }: GoalsViewProps) {
  return (
    <section className="view-shell two-col">
      <GoalPanel
        title={t(locale, "beforeRamadan")}
        locale={locale}
        goals={beforeGoals}
        panelType="beforeRamadanGoals"
        onToggleGoal={onToggleGoal}
        onAddGoal={onAddGoal}
      />
      <GoalPanel
        title={t(locale, "duringRamadan")}
        locale={locale}
        goals={duringGoals}
        panelType="duringRamadanGoals"
        onToggleGoal={onToggleGoal}
        onAddGoal={onAddGoal}
      />
    </section>
  );
}
