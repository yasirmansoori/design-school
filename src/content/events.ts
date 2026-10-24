export interface UpcomingEvent {
  id: number;
  image: string;
  alt: string;
  label: string;
  title: string;
  description: string;
  audience: string;
  layout: "left" | "right";
}

export interface PastEvent {
  title: string;
  summary: string;
  date: string;
  url: string;
  image: string;
}

export const upcomingEvents: readonly UpcomingEvent[] = [
  {
    id: 1,
    image:
      "https://images.lumacdn.com/uploads/7n/51a3d63a-d68e-4414-a693-cbbf27d1a026.jpg",
    alt: "AI Design-a-thon workshop",
    label: "EVENT 01 · AI DESIGN-A-THON · 5TH EDITION",
    title: "AI Design-a-thon",
    description:
      "A hands-on, three-hour design sprint by AI Learn Circle and Juspay. Work in small teams and use AI tools to turn an idea into wireframes and product screens, then share what you created.",
    audience:
      "UX/UI designers, product managers, builders, and anyone curious about AI-powered design.",
    layout: "left",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/1200x/1c/cb/60/1ccb60a03e32a443fda6f9586c95b927.jpg",
    alt: "Upcoming Design School event",
    label: "EVENT 02 · COMING SOON",
    title: "The Next Design Challenge",
    description:
      "Another hands-on Design School session is coming soon, with a practical brief, useful tools, and something you will create during the session. Topic and registration details will be announced shortly.",
    audience: "Designers, builders, and curious product people.",
    layout: "right",
  },
];

export const pastEvents: readonly PastEvent[] = [
  {
    title: "Workshop On Locking Your ICP",
    summary: "Get clear on your ideal customer and who to reach first.",
    date: "28 Aug 2026",
    url: "https://luma.com/t5svsbxy",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/24/338de6e5-3229-40b3-ae57-e0d34414d4b2.png",
  },
  {
    title: "Workshop On Branding And Positioning",
    summary: "Define what makes your product worth choosing.",
    date: "29 Aug 2026",
    url: "https://luma.com/58kv1ud9",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/9f/f7993ec5-c4a5-48f8-ba3b-05ceeeb26889.png",
  },
  {
    title: "AI Search Optimisation Masterclass",
    summary: "Explore how people discover products through AI search.",
    date: "5 Sep 2026",
    url: "https://luma.com/shyjl0h4",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/1g/6eecc744-fa46-4166-8621-1ee9e94f25ba.png",
  },
  {
    title: "Revenue-Backwards SEO",
    summary: "Connect your search strategy to business growth.",
    date: "10 Sep 2026",
    url: "https://luma.com/q4l3a6t4",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/ol/7f029a5e-0a29-4885-95f7-eb9ca9412197.png",
  },
  {
    title: "Story That Sells: Narrative & Messaging",
    summary: "Turn your product story into a clear, memorable pitch.",
    date: "11 Sep 2026",
    url: "https://luma.com/vem4umwo",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/61/1933763e-27b8-44e1-a613-68f690787de5.png",
  },
  {
    title: "Finding Your First 10 Customers",
    summary: "Explore practical ways to reach your first customers.",
    date: "12 Sep 2026",
    url: "https://luma.com/v86zq8l7",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/to/e293d32b-2456-4809-97b9-0d49997a417d.png",
  },
  {
    title: "Price to Win: Are You Charging Enough?",
    summary: "Rethink how you price your product and communicate value.",
    date: "12 Sep 2026",
    url: "https://luma.com/bmimpost",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/0r/a35f88dc-c897-4402-a03d-4174bfd9ce9c.png",
  },
  {
    title: "Ship That Landing Page — Buildathon",
    summary: "Build, publish, and share a landing page for your idea.",
    date: "12 Sep 2026",
    url: "https://luma.com/mrgm0sp7",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/hu/6fe96e2b-60b7-4a43-9d5a-15576e29f6c7.png",
  },
  {
    title: "Your First Paid Ads Budget",
    summary: "Plan your first ad spend and know when to stop.",
    date: "18 Sep 2026",
    url: "https://luma.com/br198ccd",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/u7/004705f4-f6b9-4909-86f0-f0f496e2dded.png",
  },
  {
    title: "Selling to Enterprise as an Early-Stage Startup",
    summary: "Explore how early-stage teams approach enterprise sales.",
    date: "19 Sep 2026",
    url: "https://luma.com/q1ydndih",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/hl/80e94760-4bfc-4f45-a0ad-f0e170a8271b.png",
  },
  {
    title: "Lessons from Growing on Instagram: 0 → 50K",
    summary: "Build a repeatable content system that grows an audience.",
    date: "25 Sep 2026",
    url: "https://luma.com/uvzsogs5",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/rp/ecf823d2-2789-43fd-9d47-4f1babab8bc0.png",
  },
  {
    title: "How to Launch on Product Hunt",
    summary: "Prepare your launch and build momentum on launch day.",
    date: "26 Sep 2026",
    url: "https://luma.com/5318tyh0",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/pa/44dafd31-f02f-4f32-a82a-abfb79b3d51e.png",
  },
  {
    title: "Building an ABM Strategy from Scratch",
    summary: "Focus sales and marketing on the accounts that matter.",
    date: "27 Sep 2026",
    url: "https://luma.com/mh2znnu2",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/mh/dbee3c19-1bd2-45ff-9b75-af4f7847c647.png",
  },
  {
    title: "GTM India → US",
    summary: "Think through your startup’s move into the US market.",
    date: "27 Sep 2026",
    url: "https://luma.com/ltb2vasr",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/wu/bdb44ac7-a778-4035-b1e9-cec74c021928.png",
  },
  {
    title: "Everything You Need to Know About PLG",
    summary: "Find growth opportunities within your product experience.",
    date: "3 Oct 2026",
    url: "https://luma.com/udfmdw9l",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/9u/22bb675f-e888-4625-a6c4-323822ed90b5.png",
  },
  {
    title: "Solopreneur Guide to GTM",
    summary: "Explore go-to-market essentials for building on your own.",
    date: "3 Oct 2026",
    url: "https://luma.com/5caubgk2",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/b9/02958621-87e3-4621-bc99-a2a3fe4ce398.png",
  },
  {
    title: "How to Tell Your Product Story Through a Demo",
    summary: "Shape a product demo around a story people understand.",
    date: "9 Oct 2026",
    url: "https://luma.com/rwwpks0u",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/oo/3579f2a4-a42b-4122-80b4-7f721059333e.png",
  },
  {
    title: "From Product Designer to Solopreneur",
    summary: "Lessons from building and growing NextDoor.Company.",
    date: "11 Oct 2026",
    url: "https://luma.com/gtyi5qcx",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/zv/f0ecf627-3fc8-4984-b740-6309527421fb.png",
  },
  {
    title: "Getting Started with Claude as Your GTM Co-Pilot",
    summary: "Turn everyday GTM tasks into reusable Claude workflows.",
    date: "17 Oct 2026",
    url: "https://luma.com/6ltngx5h",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/13/519e7536-2112-4b34-8988-81183d57e3c9.png",
  },
  {
    title: "Awards, Analysts and Third-Party Proof",
    summary: "Build the credibility that helps buyers choose you.",
    date: "17 Oct 2026",
    url: "https://luma.com/m1mlkwer",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=420/event-social/gw/200491fe-717b-4ef6-89ff-fb3f6b7a226e.png",
  },
];
