"use client";

import { useState, useEffect } from "react";

const OUTCOME_CARDS = [
  { id: "a1", emoji: "📊", eBg: "#EDF6FF", accent: "#0770E3", label: "P&L Scenario Model", value: "Ready for CFO review", sub: "Completed in 4 min · 3 scenarios modelled" },
  { id: "a2", emoji: "📈", eBg: "#FEF3C7", accent: "#D97706", label: "Budget vs. Actuals", value: "+$1.2M variance in Q2 OpEx", sub: "3 cost centres require attention" },
  { id: "a3", emoji: "📝", eBg: "#EDF6FF", accent: "#0770E3", label: "Earnings Preparation", value: "Draft delivered to IR team", sub: "Q1 2026 · Reviewed & formatted" },
  { id: "b1", emoji: "✓", eBg: "#D1FAE5", accent: "#059669", label: "Month-End Close", value: "Reconciliation complete", sub: "0 discrepancies · Audit-ready" },
  { id: "b2", emoji: "⚠️", eBg: "#FEF3C7", accent: "#D97706", label: "GL Anomaly Detected", value: "$42K unreconciled in COGS", sub: "Q3 · Flagged for review" },
  { id: "b3", emoji: "🔒", eBg: "#EDF6FF", accent: "#0770E3", label: "Audit Trail Generated", value: "Full traceability · SOX-ready", sub: "Every step logged & explainable" },
  { id: "c1", emoji: "⚠️", eBg: "#FEF3C7", accent: "#D97706", label: "COGS Variance", value: "–$240K vs. plan", sub: "3 line items flagged · Q1 2026" },
  { id: "c2", emoji: "🧾", eBg: "#FEF3C7", accent: "#D97706", label: "T&E Policy Exceptions", value: "3 violations flagged · $8.4K", sub: "Auto-routed to Finance for review" },
  { id: "c3", emoji: "📉", eBg: "#EDF6FF", accent: "#0770E3", label: "Flux Analysis", value: "5 variance drivers explained", sub: "Revenue, COGS, OpEx · Q1 close" },
  { id: "d1", emoji: "🛡️", eBg: "#D1FAE5", accent: "#059669", label: "Credit Portfolio Review", value: "No anomalies detected", sub: "847 accounts reviewed · 2 flagged" },
  { id: "d2", emoji: "🚨", eBg: "#FEE2E2", accent: "#DC2626", label: "Fraud Signal", value: "Anomaly in payment batch", sub: "$126K · Escalated to Risk team" },
  { id: "e1", emoji: "🏪", eBg: "#EDF6FF", accent: "#0770E3", label: "Merchant Health Alerts", value: "12 alerts · 3 require action", sub: "Account managers notified" },
  { id: "e2", emoji: "📣", eBg: "#D1FAE5", accent: "#059669", label: "Campaign ROI", value: "+18% above benchmark", sub: "Q1 paid campaigns · 4 markets" },
];

// Fixed positions for the 3 cards (top offset in px)
const CARD_POSITIONS = [
  { top: 80 },
  { top: 195 },
  { top: 310 },
];

export default function OutcomeCards() {
  const [selectedCards, setSelectedCards] = useState<typeof OUTCOME_CARDS | null>(null);

  useEffect(() => {
    // Shuffle and pick 3 random cards
    const shuffled = [...OUTCOME_CARDS].sort(() => Math.random() - 0.5);
    setSelectedCards(shuffled.slice(0, 3));
  }, []);

  if (!selectedCards) return null;

  return (
    <div className="hidden lg:block absolute top-0 right-[12%] w-[280px] pointer-events-none z-20">
      <div className="flex flex-col gap-4 pt-20">
        {selectedCards.map((card) => (
          <div
            key={card.id}
            className="pointer-events-auto"
            style={{
              background: "rgba(255,255,255,0.96)",
              backdropFilter: "blur(8px)",
              borderRadius: "14px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.08), 0 12px 28px rgba(0,0,0,0.10)",
              border: "1px solid rgba(229,231,235,0.85)",
              padding: "13px 15px",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  background: card.eBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  flexShrink: 0,
                }}
              >
                {card.emoji}
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                  <span
                    style={{
                      color: "#6B7280",
                      fontSize: "10.5px",
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {card.label}
                  </span>
                  <span
                    style={{
                      background: card.eBg,
                      color: card.accent,
                      borderRadius: "999px",
                      padding: "1px 7px",
                      fontSize: "10px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Cimba
                  </span>
                </div>
                <div
                  style={{
                    color: "#111827",
                    fontSize: "13px",
                    fontWeight: 700,
                    marginTop: "2px",
                  }}
                >
                  {card.value}
                </div>
                <div
                  style={{
                    color: "#9CA3AF",
                    fontSize: "10.5px",
                    marginTop: "1.5px",
                  }}
                >
                  {card.sub}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
