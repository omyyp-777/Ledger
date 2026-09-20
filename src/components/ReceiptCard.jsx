import React from "react";
import { ArrowUpRight, MapPin, Clock3, Music2, Film, ShoppingBag, Camera, MessageCircle, Search, CalendarDays, NotebookPen, ReceiptText } from "lucide-react";
import { formatDate, formatTime } from "../utils/format";

const icons = {
  "Music": Music2, "Movies & Entertainment": Film, "Places": MapPin,
  "Purchases": ShoppingBag, "Photos": Camera, "Messages": MessageCircle,
  "Searches": Search, "Events": CalendarDays, "Personal Notes": NotebookPen
};

export default function ReceiptCard({ receipt, onOpen, compact = false }) {
  const Icon = icons[receipt.type] || ReceiptText;
  return (
    <button className={`receipt-card ${compact ? "compact" : ""}`} onClick={() => onOpen(receipt)} aria-label={`Open receipt: ${receipt.title}`}>
      <div className="receipt-topline">
        <span className="receipt-kind"><Icon size={14} aria-hidden="true" />{receipt.type}</span>
        <ArrowUpRight size={15} className="receipt-arrow" aria-hidden="true" />
      </div>
      <h3>{receipt.title}</h3>
      {!compact && <p>{receipt.detail}</p>}
      <div className="receipt-meta">
        <span><Clock3 size={12} aria-hidden="true" />{formatDate(receipt.date)} · {formatTime(receipt.date)}</span>
        {receipt.location && <span><MapPin size={12} aria-hidden="true" />{receipt.location}</span>}
      </div>
      {!!receipt.tags?.length && <div className="tag-row">{receipt.tags.slice(0, 3).map(tag => <span className="tag" key={tag}>#{tag}</span>)}</div>}
    </button>
  );
}
