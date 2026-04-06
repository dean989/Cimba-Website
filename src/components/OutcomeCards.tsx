"use client";

const CARDS = [
  {
    id: "a2",
    emoji: "📈",
    eBg: "#FEF3C7",
    accent: "#D97706",
    label: "Budget vs. Actuals",
    value: "+$1.2M variance in Q2 OpEx",
    sub: "3 cost centres require attention",
  },
  {
    id: "b1",
    emoji: "✓",
    eBg: "#D1FAE5",
    accent: "#059669",
    label: "Month-End Close",
    value: "Reconciliation complete",
    sub: "0 discrepancies · Audit-ready",
  },
  {
    id: "d2",
    emoji: "🚨",
    eBg: "#FEE2E2",
    accent: "#DC2626",
    label: "Fraud Signal",
    value: "Anomaly in payment batch",
    sub: "$126K · Escalated to Risk team",
  },
];

function Card({ card }: { card: typeof CARDS[number] }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(8px)",
        borderRadius: "14px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.08), 0 12px 28px rgba(0,0,0,0.10)",
        border: "1px solid rgba(229,231,235,0.85)",
        padding: "13px 15px",
        width: "272px",
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
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
            <span style={{ color: "#6B7280", fontSize: "10.5px", fontWeight: 600, letterSpacing: "0.5px" }}>
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
          <div style={{ color: "#111827", fontSize: "13px", fontWeight: 700, marginTop: "2px" }}>
            {card.value}
          </div>
          <div style={{ color: "#9CA3AF", fontSize: "10.5px", marginTop: "2px" }}>
            {card.sub}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OutcomeCards() {
  return (
    <div className="hidden lg:flex flex-col gap-4 absolute top-[80px] right-[5%] pointer-events-none z-20">
      {CARDS.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
