import { Link } from "wouter";
import { Compass, Globe, Mail, Unplug } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="page">
      <header className="page-intro">
        <p className="kicker">A note from me</p>
        <h1>What I can still check for you</h1>
      </header>
      <article className="letter">
        <div className="story-row">
          <span className="story-icon" aria-hidden="true">
            <Mail size={16} />
          </span>
          <p>
            I used to send you plagiarism reports by email, free of cost, from my Turnitin class. My Turnitin class
            subscription has ended, so I can’t do that anymore.
          </p>
        </div>
        <div className="story-row">
          <span className="story-icon" aria-hidden="true">
            <Unplug size={16} />
          </span>
          <p>
            Turnitin’s old endpoints were removed or fixed by their team, so this project can’t produce exact Turnitin
            reports anymore.
          </p>
        </div>
        <div className="story-row">
          <span className="story-icon" aria-hidden="true">
            <Globe size={16} />
          </span>
          <p>
            What runs here now is a basic check against public web pages. I no longer have access to research-paper or
            IEEE databases. The percentage only covers passages I compared. A low score is not proof your writing is
            original, and it is not a Turnitin similarity index.
          </p>
        </div>
        <div className="story-row">
          <span className="story-icon" aria-hidden="true">
            <Compass size={16} />
          </span>
          <p>
            I’m looking for a better way to get you free Turnitin-style reports again. If I get access back, I’ll update
            this.
          </p>
        </div>
        <p>
          Your text is compared on this server with public pages. If you keep a result, it stays in this browser. I
          don’t add a new analytics service.
        </p>
        <p>
          <Link href="/tools">Other free checkers</Link>
          {" · "}
          <Link href="/">Back to your document</Link>
        </p>
      </article>
    </div>
  );
}
