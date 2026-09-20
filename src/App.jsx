import React, { useMemo, useState } from "react";
import { ArrowDownRight, ArrowRight, BookOpen, ChevronDown, Compass, Filter, GitBranch, Layers3, Search, Sparkles, X } from "lucide-react";
import { receipts, receiptTypes, stories } from "./data/receipts";
import ReceiptCard from "./components/ReceiptCard";
import StoryCard from "./components/StoryCard";

const navItems = [
  { id: "story", label: "The story", icon: BookOpen },
  { id: "threads", label: "Find a thread", icon: GitBranch },
  { id: "ledger", label: "The ledger", icon: Layers3 }
];

export default function App() {
  const [activeView, setActiveView] = useState("story");
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All types");
  const [sort, setSort] = useState("oldest");
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [storyFilter, setStoryFilter] = useState("All threads");

  const filtered = useMemo(() => receipts
    .filter(r => type === "All types" || r.type === type)
    .filter(r => `${r.title} ${r.detail} ${r.type} ${(r.tags || []).join(" ")} ${r.location || ""}`.toLowerCase().includes(search.toLowerCase()))
    .sort((a,b) => sort === "newest" ? new Date(b.date)-new Date(a.date) : new Date(a.date)-new Date(b.date)), [search, type, sort]);

  const shownStories = useMemo(() => stories.filter(s => storyFilter === "All threads" || s.tags.includes(storyFilter)), [storyFilter]);

  const openStory = story => { setSelectedStory(story); setSelectedReceipt(null); };
  const closeModal = () => { setSelectedStory(null); setSelectedReceipt(null); };

  const scrollToLedger = () => {
    setActiveView("ledger");
    setTimeout(() => document.getElementById("ledger-section")?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <a href="#top" className="brand" onClick={() => setActiveView("story")} aria-label="After Hours home">
          <span className="brand-mark"><Layers3 size={19} /></span>
          <span>AFTER HOURS</span><i> / </i><span className="brand-soft">YOUR LIFE, IN RECEIPTS</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(({id,label}) => <button key={id} className={activeView === id ? "nav-active" : ""} onClick={() => {setActiveView(id); document.getElementById(id === "story" ? "top" : id === "threads" ? "threads-section" : "ledger-section")?.scrollIntoView({behavior:"smooth"});}}>{label}</button>)}
        </nav>
        <button className="header-cta" onClick={scrollToLedger}>Explore archive <ArrowRight size={15}/></button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot"></span> A PERSONAL DATA STORY · 2017</div>
            <h1>Your life,<br/><em>in receipts.</em></h1>
            <p className="hero-lede">Tiny moments. Unexpected connections. A year that starts to make sense when you follow the threads.</p>
            <div className="hero-actions">
              <button className="button-primary" onClick={() => {setActiveView("threads"); document.getElementById("threads-section")?.scrollIntoView({behavior:"smooth"});}}>Find a thread <ArrowDownRight size={16}/></button>
              <button className="button-text" onClick={scrollToLedger}>Browse the ledger <ArrowRight size={15}/></button>
            </div>
            <div className="hero-footnote"><Sparkles size={13}/> A fictional digital-life archive, interpreted through connected moments.</div>
          </div>
          <div className="hero-art" aria-label="Decorative receipt collage">
            <div className="orb orb-one"></div><div className="orb orb-two"></div>
            <div className="floating-receipt receipt-back"><span>RECEIPT NO. 014</span><b>02:10 AM</b><i>Night Drive</i><small>music / memory</small></div>
            <div className="floating-receipt receipt-front"><span>THREAD FOUND</span><b>the late-night<br/>ritual</b><i>6 moments · 4 types</i><div className="mini-line"></div><small>01.14.17 — 01.15.17</small></div>
            <div className="orbit-label label-a">MUSIC</div><div className="orbit-label label-b">PLACE</div><div className="orbit-label label-c">NOTE</div>
            <div className="hero-art-caption">THE SMALL THINGS ADD UP <span>✳</span></div>
          </div>
        </section>

        <section className="stats-strip section-wrap" aria-label="Archive overview">
          <div><strong>{receipts.length}</strong><span>sample receipts</span></div>
          <div><strong>09</strong><span>receipt categories</span></div>
          <div><strong>{stories.length}</strong><span>discovered threads</span></div>
          <div className="stats-note">A year is more than a timeline.<br/><b>Follow what connects.</b></div>
        </section>

        <section className="section-wrap section-block" id="story">
          <div className="section-heading">
            <div><div className="eyebrow">01 / THE BIG PICTURE</div><h2>A year, told in <em>chapters.</em></h2></div>
            <p>Not just what happened. A few clues about what it might have meant.</p>
          </div>
          <div className="chapter-grid">
            <button className="chapter-card chapter-1" onClick={() => openStory(stories[0])}><span>CHAPTER 01 · JAN–MAR</span><h3>Finding a<br/>quiet rhythm</h3><p>Late-night rituals and small resets.</p><b>Explore chapter ↗</b></button>
            <button className="chapter-card chapter-2" onClick={() => openStory(stories[2])}><span>CHAPTER 02 · APR–JUN</span><h3>Things that<br/>stay with you</h3><p>Culture turns into a personal soundtrack.</p><b>Explore chapter ↗</b></button>
            <button className="chapter-card chapter-3" onClick={() => openStory(stories[3])}><span>CHAPTER 03 · JUL–SEP</span><h3>Getting a little<br/>further out</h3><p>Shared days, saved places, open roads.</p><b>Explore chapter ↗</b></button>
            <button className="chapter-card chapter-4" onClick={() => openStory(stories[3])}><span>CHAPTER 04 · OCT–DEC</span><h3>Making room<br/>for the unknown</h3><p>A different kind of independence.</p><b>Explore chapter ↗</b></button>
          </div>
        </section>

        <section className="threads-section" id="threads-section">
          <div className="section-wrap section-block">
            <div className="section-heading">
              <div><div className="eyebrow">02 / CONNECTIONS & PATTERNS</div><h2>Follow a <em>thread.</em></h2></div>
              <p>Moments from different parts of life, connected by time, tags, and context.</p>
            </div>
            <div className="thread-toolbar">
              <div className="thread-intro"><GitBranch size={18}/><span>DISCOVERED CONNECTIONS</span></div>
              <div className="chip-scroll" aria-label="Filter story threads">
                {["All threads","late-night","reset","film","travel"].map(tag => <button key={tag} className={storyFilter === tag ? "chip selected" : "chip"} onClick={() => setStoryFilter(tag)}>{tag === "All threads" ? tag : `#${tag}`}</button>)}
              </div>
            </div>
            <div className="story-grid">
              {shownStories.map((story,i) => <StoryCard key={story.id} story={story} index={i} onOpen={openStory}/>)}
            </div>
            <div className="connection-note"><Sparkles size={16}/><span><b>How these threads are formed:</b> shared tags, temporal proximity, and recurring context. Interpretations are exploratory—not definitive claims about a person.</span></div>
          </div>
        </section>

        <section className="section-wrap section-block" id="ledger-section">
          <div className="section-heading">
            <div><div className="eyebrow">03 / THE RAW MATERIAL</div><h2>The <em>ledger.</em></h2></div>
            <p>Search the receipts behind each story. Every result opens into its own details.</p>
          </div>
          <div className="ledger-panel">
            <div className="ledger-controls">
              <label className="search-field"><Search size={17}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search receipts, places, tags…" aria-label="Search receipts"/></label>
              <label className="select-field"><Filter size={15}/><select value={type} onChange={e => setType(e.target.value)} aria-label="Filter by receipt category"><option>All types</option>{receiptTypes.map(t => <option key={t}>{t}</option>)}</select><ChevronDown size={14}/></label>
              <label className="select-field"><select value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort receipts"><option value="oldest">Oldest first</option><option value="newest">Newest first</option></select><ChevronDown size={14}/></label>
            </div>
            <div className="ledger-summary"><span>{filtered.length} receipts found</span><span>2017 · FICTIONAL ARCHIVE</span></div>
            {filtered.length ? <div className="receipt-grid">{filtered.map(r => <ReceiptCard key={r.id} receipt={r} onOpen={setSelectedReceipt}/>)}</div> : <div className="empty-state"><Search size={24}/><b>No receipts found</b><span>Try a different search or category.</span><button onClick={() => {setSearch("");setType("All types");}}>Clear filters</button></div>}
          </div>
        </section>

        <section className="closing-cta section-wrap">
          <div><div className="eyebrow">THE ARCHIVE IS NEVER JUST AN ARCHIVE</div><h2>Every receipt is<br/><em>part of something.</em></h2></div>
          <button className="button-primary" onClick={() => {setActiveView("threads");document.getElementById("threads-section")?.scrollIntoView({behavior:"smooth"});}}>Keep connecting <ArrowRight size={16}/></button>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a className="brand" href="#top"><span className="brand-mark"><Layers3 size={16}/></span> AFTER HOURS</a><span>MADE OF MOMENTS, HELD TOGETHER BY MEANING.</span><a href="#top">Back to top ↑</a></footer>

      {(selectedStory || selectedReceipt) && <div className="modal-backdrop" role="presentation" onMouseDown={e => {if(e.target === e.currentTarget) closeModal();}}>
        <section className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button className="modal-close" onClick={closeModal} aria-label="Close details"><X size={19}/></button>
          {selectedStory ? <StoryDetail story={selectedStory} onReceipt={setSelectedReceipt}/> : <ReceiptDetail receipt={selectedReceipt}/>}
        </section>
      </div>}
    </div>
  );
}

function StoryDetail({ story, onReceipt }) {
  const connected = story.receiptIds.map(id => receipts.find(r => r.id === id)).filter(Boolean);
  return <div className="detail-content">
    <div className="eyebrow"><Compass size={14}/> THREAD DISCOVERY · {story.period}</div>
    <h2 id="modal-title">{story.title}</h2><p className="detail-subtitle">{story.subtitle}</p>
    <p className="detail-narrative">{story.summary}</p>
    <div className="insight-box"><Sparkles size={17}/><div><b>What connects these moments</b><p>{story.insight}</p></div></div>
    <h3 className="detail-section-title">Receipts in this thread <span>{connected.length}</span></h3>
    <div className="thread-receipts">{connected.map((r,i) => <React.Fragment key={r.id}><button className="thread-receipt" onClick={() => onReceipt(r)}><span className="thread-node">{String(i+1).padStart(2,"0")}</span><span><b>{r.title}</b><small>{r.type} · {new Date(r.date).toLocaleDateString("en",{month:"short",day:"numeric"})}</small></span><ArrowRight size={15}/></button>{i < connected.length-1 && <div className="thread-connector"/>}</React.Fragment>)}</div>
    <p className="disclaimer">This is an exploratory interpretation of fictional records, not a definitive profile of a real person.</p>
  </div>;
}

function ReceiptDetail({ receipt }) {
  if (!receipt) return null;
  return <div className="detail-content">
    <div className="eyebrow">RECEIPT DETAIL · {receipt.type.toUpperCase()}</div>
    <h2 id="modal-title">{receipt.title}</h2>
    <p className="detail-subtitle">{new Date(receipt.date).toLocaleString("en",{dateStyle:"full",timeStyle:"short"})}</p>
    <p className="detail-narrative">{receipt.detail}</p>
    <div className="receipt-detail-grid">
      {receipt.location && <div><small>PLACE</small><b>{receipt.location}</b></div>}
      {receipt.amount != null && <div><small>AMOUNT</small><b>${receipt.amount.toFixed(2)}</b></div>}
      {receipt.mood && <div><small>MOOD TAG</small><b>{receipt.mood}</b></div>}
      <div><small>RECEIPT ID</small><b>{receipt.id}</b></div>
    </div>
    <div className="tag-row detail-tags">{receipt.tags?.map(tag => <span className="tag" key={tag}>#{tag}</span>)}</div>
  </div>;
}
