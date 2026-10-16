import { Link, useLocation } from "wouter";
import { Bell, CalendarDays, ChevronDown, CircleCheck, Columns3, FileText, FolderOpen, LayoutDashboard, Library, LogOut, Menu, Plus, Search, Settings2, Sparkles, Users, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";

type Props = { children: React.ReactNode };

const nav = [
  { href: "/app", label: "Overview", icon: LayoutDashboard },
  { href: "/app/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/app/board", label: "Production board", icon: Columns3 },
  { href: "/app/library", label: "Content library", icon: Library },
  { href: "/app/assets", label: "Asset library", icon: FolderOpen },
  { href: "/app/approvals", label: "Approvals", icon: CircleCheck, badge: "3" },
  { href: "/app/performance", label: "Performance", icon: FileText },
];

export default function CreatorShell({ children }: Props) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, loading, logout } = useAuth();
  const initials = user?.name?.split(" ").map(part => part[0]).join("").slice(0, 2) || "MC";

  if (loading) return <div className="auth-guard"><div className="auth-guard-card"><span className="brand-mark"><span /><span /><span /><span /></span><strong>Checking your workspace…</strong><span>One moment while CreatorGrid restores your session.</span></div></div>;
  if (!user) return <div className="auth-guard"><div className="auth-guard-card"><span className="brand-mark"><span /><span /><span /><span /></span><div className="eyebrow"><span className="eyebrow-dot" /> Private workspace</div><h1>Sign in to pick up where you left off.</h1><p>Your ideas, briefs, approvals and publishing rhythm are waiting inside.</p><button className="button button-primary" onClick={() => startLogin()}>Continue with Manus <span>→</span></button><Link href="/" className="back-link">← Back to creatorgrid</Link></div></div>;

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="brand-lockup">
          <div className="brand-mark"><span /><span /><span /><span /></div>
          <span className="brand-wordmark">creatorgrid</span>
          <button className="icon-button sidebar-close" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X size={18} /></button>
        </div>

        <button className="workspace-switcher" aria-label="Switch workspace">
          <span className="workspace-avatar">SN</span>
          <span className="workspace-switcher-copy"><strong>Signal Notes</strong><small>Team workspace</small></span>
          <ChevronDown size={15} />
        </button>

        <div className="sidebar-label">Workspace</div>
        <nav className="main-nav" aria-label="Workspace navigation">
          {nav.map(item => {
            const Icon = item.icon;
            const active = item.href === "/app" ? location === "/app" : location.startsWith(item.href);
            return <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`nav-link ${active ? "active" : ""}`}>
              <Icon size={17} strokeWidth={active ? 2.2 : 1.8} />
              <span>{item.label}</span>
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </Link>;
          })}
        </nav>

        <div className="sidebar-label sidebar-label-spaced">Manage</div>
        <nav className="main-nav">
          <Link href="/app/settings" className={`nav-link ${location.startsWith("/app/settings") ? "active" : ""}`}><Settings2 size={17} /><span>Settings</span></Link>
          <Link href="/pricing" className={`nav-link ${location === "/pricing" ? "active" : ""}`}><Sparkles size={17} /><span>Plans & access</span></Link>
        </nav>

        <div className="sidebar-footer">
          <div className="upgrade-card">
            <div className="upgrade-icon"><Sparkles size={16} /></div>
            <div><strong>Make room for more</strong><span>Try Pro for unlimited briefs.</span></div>
            <Link href="/pricing" className="text-link">See plans <span>↗</span></Link>
          </div>
          <div className="profile-row">
            <span className="profile-avatar">{initials}</span>
            <span className="profile-copy"><strong>{user?.name || "Maya Chen"}</strong><small>{user?.email || "Owner"}</small></span>
            <button className="icon-button" onClick={() => logout()} aria-label="Sign out"><LogOut size={15} /></button>
          </div>
        </div>
      </aside>

      {mobileOpen && <button className="sidebar-overlay" onClick={() => setMobileOpen(false)} aria-label="Close navigation overlay" />}

      <main className="app-main">
        <header className="app-topbar">
          <button className="icon-button mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu size={19} /></button>
          <div className="breadcrumb"><span>Signal Notes</span><span className="breadcrumb-slash">/</span><strong>{location === "/app" ? "Overview" : location.split("/").filter(Boolean).pop()?.replaceAll("-", " ")}</strong></div>
          <div className="topbar-actions">
            <button className="search-trigger" aria-label="Search"><Search size={16} /><span>Search anything</span><kbd>⌘ K</kbd></button>
            <button className="icon-button notification-button" aria-label="Notifications"><Bell size={18} /><span className="notification-dot" /></button>
            <button className="quick-add" aria-label="Add content"><Plus size={17} /><span>New content</span></button>
          </div>
        </header>
        <div className="app-content">{children}</div>
      </main>
    </div>
  );
}
