import { Link } from "wouter";

export default function AboutPage() {
  return (
    <div className="page">
      <header className="page-intro">
        <p className="kicker">About this project</p>
        <h1>What this checker can and cannot do</h1>
      </header>
      <div className="prose-stack">
        <article className="prose-card">
          <h2>Turnitin reports</h2>
          <p>
            Turnitin’s previous endpoints are no longer accessible. They were removed or fixed by the Turnitin team,
            so this project no longer supports exact Turnitin reports.
          </p>
        </article>
        <article className="prose-card">
          <h2>The old class route</h2>
          <p>
            The maintainer used to help students for free by emailing plagiarism reports from a Turnitin class. That
            class access has ended, so that route is gone too.
          </p>
        </article>
        <article className="prose-card">
          <h2>What still runs</h2>
          <p>
            This tool currently provides basic plagiarism checking from internet access. It searches public web pages
            and compares your text with what those pages actually contain. It can no longer check against research-paper
            or IEEE databases, because those endpoints are lost.
          </p>
          <p style={{ marginTop: "0.7rem" }}>
            A score describes only the passages that were compared. It is not a Turnitin similarity index, and a low
            score is not proof that a document is original.
          </p>
        </article>
        <article className="prose-card">
          <h2>What the maintainer is doing next</h2>
          <p>
            The maintainer is working on finding a better way to offer free Turnitin-style reports again, and will
            update the project if access returns.
          </p>
          <p style={{ marginTop: "0.7rem" }}>
            Your document is compared on this server with pages fetched from the public web. Checks you choose to keep
            stay in this browser’s history. The app does not add a new analytics service.
          </p>
          <p style={{ marginTop: "0.9rem" }}>
            <Link href="/tools">Other free checkers</Link>
            {" · "}
            <Link href="/">Back to the checker</Link>
          </p>
        </article>
      </div>
    </div>
  );
}
