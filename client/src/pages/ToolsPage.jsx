import { aiTools, plagiarismTools, verifiedOn } from "@/data/free-tools";

function ToolCard({ tool }) {
  return (
    <article className="tool-card">
      <p className="kicker">{tool.kind}</p>
      <h2>
        <a href={tool.url} target="_blank" rel="noopener noreferrer">
          {tool.name}
        </a>
      </h2>
      <p>{tool.account}</p>
      <p className="meta" style={{ marginTop: "0.45rem" }}>
        {tool.limit}
      </p>
    </article>
  );
}

export default function ToolsPage() {
  return (
    <div className="page">
      <header className="page-intro">
        <p className="kicker">Free tools</p>
        <h1>Other checkers you can open yourself</h1>
        <p className="lede" style={{ maxWidth: "42rem", marginTop: "0.8rem" }}>
          These links leave this app. Nothing you paste here is sent to them. Limits below were read from each site’s
          public pages on {verifiedOn}. Where a site did not state a number, the gap is left as a gap.
        </p>
      </header>
      <h2 style={{ marginTop: "1.6rem", letterSpacing: "-0.03em" }}>Plagiarism</h2>
      <div className="tool-grid">
        {plagiarismTools.map((tool) => (
          <ToolCard key={tool.url} tool={tool} />
        ))}
      </div>
      <h2 style={{ marginTop: "1.8rem", letterSpacing: "-0.03em" }}>AI detection</h2>
      <div className="tool-grid">
        {aiTools.map((tool) => (
          <ToolCard key={tool.url} tool={tool} />
        ))}
      </div>
    </div>
  );
}
