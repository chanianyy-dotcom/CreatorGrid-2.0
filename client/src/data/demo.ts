export type Stage = "Idea" | "Drafting" | "Production" | "Review" | "Scheduled" | "Published";

export type ContentItem = {
  id: string;
  title: string;
  type: "Video" | "Podcast" | "Newsletter" | "Carousel";
  brand: string;
  channel: string;
  stage: Stage;
  date: string;
  due: string;
  owner: string;
  ownerInitials: string;
  ownerTone: string;
  tags: string[];
  excerpt: string;
  views: string;
  comments: number;
  assets: number;
  priority?: "High" | "Medium";
};

export const stageOrder: Stage[] = ["Idea", "Drafting", "Production", "Review", "Scheduled", "Published"];

export const demoContent: ContentItem[] = [
  {
    id: "quiet-launch",
    title: "The quiet launch: building an audience before the announcement",
    type: "Video",
    brand: "Signal Notes",
    channel: "YouTube",
    stage: "Review",
    date: "2026-10-20",
    due: "Oct 20",
    owner: "Maya Chen",
    ownerInitials: "MC",
    ownerTone: "orange",
    tags: ["Founder story", "Long-form"],
    excerpt: "A behind-the-scenes cut about building trust before asking for attention.",
    views: "—",
    comments: 8,
    assets: 6,
    priority: "High",
  },
  {
    id: "creator-burnout",
    title: "Creator burnout is a systems problem",
    type: "Podcast",
    brand: "Off Script",
    channel: "Spotify",
    stage: "Production",
    date: "2026-10-22",
    due: "Oct 22",
    owner: "Noah Williams",
    ownerInitials: "NW",
    ownerTone: "lilac",
    tags: ["Wellbeing", "Interview"],
    excerpt: "A practical episode on designing a creative week that can actually last.",
    views: "—",
    comments: 3,
    assets: 4,
  },
  {
    id: "studio-tour",
    title: "A studio tour for people who hate studio tours",
    type: "Carousel",
    brand: "Signal Notes",
    channel: "Instagram",
    stage: "Scheduled",
    date: "2026-10-23",
    due: "Oct 23",
    owner: "Alex Rivera",
    ownerInitials: "AR",
    ownerTone: "moss",
    tags: ["Behind the scenes", "Carousel"],
    excerpt: "A visual walkthrough that keeps the gear talk to the useful bits.",
    views: "—",
    comments: 4,
    assets: 12,
  },
  {
    id: "newsletter-48",
    title: "Issue 48 — The anti-algorithm creative brief",
    type: "Newsletter",
    brand: "Signal Notes",
    channel: "Substack",
    stage: "Published",
    date: "2026-10-14",
    due: "Oct 14",
    owner: "Maya Chen",
    ownerInitials: "MC",
    ownerTone: "orange",
    tags: ["Newsletter", "Strategy"],
    excerpt: "What changes when the brief starts with a person, not a platform.",
    views: "12.8k",
    comments: 12,
    assets: 3,
  },
  {
    id: "audience-map",
    title: "How to map the audience you actually want",
    type: "Video",
    brand: "Northstar Studio",
    channel: "YouTube",
    stage: "Drafting",
    date: "2026-10-27",
    due: "Oct 27",
    owner: "Alex Rivera",
    ownerInitials: "AR",
    ownerTone: "moss",
    tags: ["Education", "Framework"],
    excerpt: "A 9-minute framework for replacing vanity reach with useful signal.",
    views: "—",
    comments: 2,
    assets: 2,
    priority: "Medium",
  },
  {
    id: "member-spotlight",
    title: "Member spotlight: Eli makes a living from one good idea",
    type: "Carousel",
    brand: "Northstar Studio",
    channel: "LinkedIn",
    stage: "Idea",
    date: "2026-10-30",
    due: "Oct 30",
    owner: "Jordan Lee",
    ownerInitials: "JL",
    ownerTone: "blue",
    tags: ["Community", "Spotlight"],
    excerpt: "A customer-led story that makes the invisible work visible.",
    views: "—",
    comments: 1,
    assets: 0,
  },
  {
    id: "weekend-reset",
    title: "The 30-minute weekend reset for your content system",
    type: "Newsletter",
    brand: "Off Script",
    channel: "Substack",
    stage: "Published",
    date: "2026-10-11",
    due: "Oct 11",
    owner: "Noah Williams",
    ownerInitials: "NW",
    ownerTone: "lilac",
    tags: ["Workflow", "Template"],
    excerpt: "A small ritual for closing loops before Monday arrives.",
    views: "8.4k",
    comments: 7,
    assets: 5,
  },
  {
    id: "creative-briefs",
    title: "Creative briefs that make the first draft easier",
    type: "Video",
    brand: "Northstar Studio",
    channel: "YouTube",
    stage: "Idea",
    date: "2026-11-03",
    due: "Nov 03",
    owner: "Maya Chen",
    ownerInitials: "MC",
    ownerTone: "orange",
    tags: ["Process", "Tutorial"],
    excerpt: "A calm, repeatable way to move from spark to a useful first page.",
    views: "—",
    comments: 0,
    assets: 1,
  },
];

export const demoAssets = [
  { name: "quiet-launch-v3.mp4", kind: "Video", size: "184 MB", brand: "Signal Notes", updated: "Today", tone: "orange" },
  { name: "studio-tour-stills.zip", kind: "Image set", size: "42 MB", brand: "Signal Notes", updated: "Yesterday", tone: "moss" },
  { name: "off-script-intro.wav", kind: "Audio", size: "18 MB", brand: "Off Script", updated: "Oct 15", tone: "lilac" },
  { name: "audience-map-notes", kind: "Link", size: "Notion", brand: "Northstar Studio", updated: "Oct 14", tone: "blue" },
  { name: "northstar-logo-kit.fig", kind: "Design", size: "8 MB", brand: "Northstar Studio", updated: "Oct 12", tone: "moss" },
];

export const demoApprovals = [
  { id: "quiet-launch", title: "The quiet launch: building an audience before the announcement", type: "Video", requester: "Maya Chen", reviewer: "Jordan Lee", due: "Today", status: "Needs your review" },
  { id: "creator-burnout", title: "Creator burnout is a systems problem", type: "Podcast", requester: "Noah Williams", reviewer: "Maya Chen", due: "Tomorrow", status: "In review" },
  { id: "studio-tour", title: "A studio tour for people who hate studio tours", type: "Carousel", requester: "Alex Rivera", reviewer: "You", due: "Oct 19", status: "Changes requested" },
];

export const demoPerformance = [
  { label: "YouTube", value: "42.8k", change: "+18.4%", tone: "orange" },
  { label: "Newsletter", value: "21.2k", change: "+9.8%", tone: "blue" },
  { label: "Podcast", value: "14.6k", change: "+23.1%", tone: "lilac" },
];
