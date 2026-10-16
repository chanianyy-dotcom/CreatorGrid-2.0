import { ArrowRight, Check, ChevronRight, PlayCircle, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { startLogin } from "@/const";

function Mark() {
  return <div className="brand-mark large"><span /><span /><span /><span /></div>;
}

export function Landing() {
  return <div className="landing-page">
    <header className="landing-nav">
      <Link href="/" className="landing-brand"><Mark /><span>creatorgrid</span></Link>
      <nav><a href="#workflow">How it works</a><a href="#teams">For teams</a><Link href="/pricing">Pricing</Link></nav>
      <div className="landing-actions"><Link href="/login" className="nav-login">Sign in</Link><Link href="/login" className="button button-primary">Start free <ArrowRight size={15} /></Link></div>
    </header>
    <main>
      <section className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> The operating desk for creators</div>
          <h1>Good ideas deserve a <em>clear way forward.</em></h1>
          <p className="hero-subtitle">CreatorGrid brings ideas, briefs, production, approvals and performance into one calm workspace — so your team can spend more time making and less time chasing.</p>
          <div className="hero-actions"><Link href="/login" className="button button-primary button-large">Build your next week <ArrowRight size={17} /></Link><a href="#workflow" className="watch-link"><span className="play-icon"><PlayCircle size={19} /></span> See how it works</a></div>
          <div className="hero-proof"><div className="proof-avatars"><span className="avatar avatar-orange">MC</span><span className="avatar avatar-lilac">NW</span><span className="avatar avatar-moss">AR</span><span className="avatar avatar-blue">JL</span></div><span>Trusted by small teams who publish for a living.</span></div>
        </div>
        <div className="hero-visual" aria-label="CreatorGrid workspace preview">
          <div className="hero-window">
            <div className="window-top"><span className="window-dots"><i /><i /><i /></span><span className="window-title">Signal Notes / Overview</span><span className="window-date">OCT 2026</span></div>
            <div className="window-body">
              <div className="preview-sidebar"><div className="preview-logo"><Mark /></div><div className="preview-line active" /><div className="preview-line" /><div className="preview-line" /><div className="preview-line short" /><div className="preview-line" /></div>
              <div className="preview-main"><div className="preview-heading"><div><small>MONDAY, OCT 19</small><h3>Your week, with less chasing.</h3></div><span className="preview-plus">+</span></div><div className="preview-stats"><div><small>IN PIPELINE</small><strong>24</strong><span>+4 this week</span></div><div><small>IN REVIEW</small><strong>03</strong><span>Needs attention</span></div><div><small>PUBLISHED</small><strong>18</strong><span>+12.6% reach</span></div></div><div className="preview-grid"><div className="preview-panel wide"><div className="panel-label">THIS WEEK <span>↗</span></div><div className="mini-row"><i className="signal orange" /><b>The quiet launch</b><span>Review</span></div><div className="mini-row"><i className="signal lilac" /><b>Creator burnout is a systems problem</b><span>Production</span></div><div className="mini-row"><i className="signal moss" /><b>Studio tour for people who hate tours</b><span>Scheduled</span></div></div><div className="preview-panel"><div className="panel-label">CHANNEL MIX</div><div className="donut"><span>74%</span></div><div className="legend"><span><i className="signal orange" /> YouTube</span><span><i className="signal moss" /> Newsletter</span></div></div></div></div>
            </div>
          </div>
          <div className="hero-note note-one"><span className="note-star">✦</span><strong>One source of truth</strong><small>for the whole team</small></div>
          <div className="hero-note note-two"><span className="note-check">✓</span><strong>Review without</strong><small>the status meeting</small></div>
        </div>
      </section>

      <section className="logo-strip"><span>MADE FOR PEOPLE WHO PUBLISH ON</span><b>YOUTUBE</b><b>SUBSTACK</b><b>SPOTIFY</b><b>INSTAGRAM</b><b>LINKEDIN</b></section>

      <section className="feature-section" id="workflow"><div className="section-intro"><div className="eyebrow">A better editorial rhythm</div><h2>From first spark<br /><em>to final send.</em></h2><p>CreatorGrid gives every piece of content a home, a next step and a clear owner.</p></div><div className="feature-stack"><article className="feature-card feature-card-dark"><div className="feature-number">01 / 04</div><div><h3>Make the invisible work visible.</h3><p>Capture the idea, add the context, assign the next step. A content pipeline that feels as thoughtful as the work inside it.</p></div><span className="feature-arrow">↗</span></article><article className="feature-card"><div className="feature-number">02 / 04</div><div><h3>Plan around attention, not anxiety.</h3><p>See the week at a glance, spot the gaps early and keep your publishing rhythm realistic.</p></div><span className="feature-arrow">↗</span></article><article className="feature-card feature-card-orange"><div className="feature-number">03 / 04</div><div><h3>Review in the same place you make.</h3><p>Keep notes, feedback and approvals attached to the work — not scattered across inboxes and tabs.</p></div><span className="feature-arrow">↗</span></article></div></section>

      <section className="quote-section" id="teams"><div className="quote-mark">“</div><blockquote>CreatorGrid makes the work feel lighter. We know what is moving, what is stuck and what deserves our attention next.</blockquote><div className="quote-byline"><span className="avatar avatar-orange">MC</span><span><strong>Maya Chen</strong><small>Founder, Signal Notes</small></span></div></section>

      <section className="cta-section"><div><div className="eyebrow"><Sparkles size={14} /> Make room for more making</div><h2>Your next good week<br /><em>starts here.</em></h2></div><Link href="/login" className="button button-dark button-large">Start for free <ArrowRight size={17} /></Link></section>
    </main>
    <footer className="landing-footer"><Link href="/" className="landing-brand"><Mark /><span>creatorgrid</span></Link><span>© 2026 CreatorGrid</span><div><Link href="/pricing">Pricing</Link><a href="mailto:hello@creatorgrid.app">Contact</a></div></footer>
  </div>;
}

export function LoginPage() {
  const handleLogin = () => {
    startLogin();
  };
  return <div className="auth-page"><div className="auth-panel"><Link href="/" className="landing-brand auth-brand"><Mark /><span>creatorgrid</span></Link><div className="auth-copy"><div className="eyebrow"><span className="eyebrow-dot" /> Your workspace is waiting</div><h1>Make the next<br /><em>good thing.</em></h1><p>Sign in to pick up where you left off — ideas, drafts, reviews and everything in between.</p></div><button className="button button-primary button-large auth-button" onClick={handleLogin}>Continue with Manus <ArrowRight size={17} /></button><p className="auth-note">Secure sign-in for your CreatorGrid workspace. By continuing, you agree to our terms.</p><Link href="/" className="back-link">← Back to creatorgrid</Link></div><div className="auth-art"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-card art-card-main"><span className="art-kicker">TODAY'S SIGNAL</span><strong>One idea<br />worth finishing.</strong><div className="art-card-footer"><span className="signal orange" /> Ready for review <span>→</span></div></div><div className="art-card art-card-small"><span>PIPELINE</span><strong>24</strong><small>+4 this week</small></div><div className="art-caption">The calm operating desk<br />for people who publish.</div></div></div>;
}
