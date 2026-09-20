import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function StoryCard({ story, index, onOpen }) {
  return (
    <button className={`story-card story-tone-${index % 4}`} onClick={() => onOpen(story)}>
      <div className="story-card-top"><span><Sparkles size={14} /> THREAD 0{index + 1}</span><ArrowUpRight size={17} /></div>
      <div className="story-period">{story.period}</div>
      <h3>{story.title}</h3>
      <p className="story-subtitle">{story.subtitle}</p>
      <p className="story-summary">{story.summary}</p>
      <div className="story-card-bottom"><span>{story.receiptIds.length} connected receipts</span><span className="text-link">Follow thread ↗</span></div>
    </button>
  );
}
