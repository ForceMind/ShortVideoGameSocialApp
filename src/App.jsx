
import React, { useState } from 'react';
import {
  Home,
  Users,
  Plus,
  MessageCircle,
  User,
  Search,
  MapPin,
  Heart,
  MessageSquare,
  Share2,
  Star,
  ChevronRight,
  X,
  Navigation,
  ShieldCheck,
  Globe,
  Mic,
  Camera,
  Filter,
  Play,
  ArrowUpRight,
} from 'lucide-react';

const FEED = [
  {
    id: 1,
    user: 'Asha',
    handle: '@asha',
    title: 'Rain market restock before monsoon',
    location: 'Mumbai / Bandra West',
    group: 'Maharashtra State Group',
    tags: ['night market', 'street food'],
    likes: '12.5k',
    comments: 324,
    discussers: 186,
    gradient: 'from-[#ff7a59] via-[#ffb357] to-[#ffe2a8]',
    badge: 'Local Hot',
  },
  {
    id: 2,
    user: 'Ravi',
    handle: '@ravi',
    title: 'Sea breeze after the office rush',
    location: 'Goa / Miramar',
    group: 'Goa Coastline Group',
    tags: ['sunset', 'walk'],
    likes: '8.2k',
    comments: 156,
    discussers: 94,
    gradient: 'from-[#2fb8ac] via-[#5ed3c8] to-[#b7f4e6]',
    badge: 'Synced',
  },
  {
    id: 3,
    user: 'Nina',
    handle: '@nina',
    title: 'Night run loop with safe lights',
    location: 'Bangalore / HSR Layout',
    group: 'Bangalore Night Runners',
    tags: ['night run', 'safety'],
    likes: '9.4k',
    comments: 268,
    discussers: 142,
    gradient: 'from-[#1f2937] via-[#334155] to-[#1d4ed8]',
    badge: 'Local Hot',
  },
];

const COMMENTS = {
  1: [
    { id: 1, user: 'Mia', text: 'Looks fresh and busy tonight.', time: '2m' },
    { id: 2, user: 'Arun', text: 'That stall is my favorite spot.', time: '9m' },
    { id: 3, user: 'Ken', text: 'Any tips on parking nearby?', time: '14m' },
  ],
  2: [
    { id: 1, user: 'Lea', text: 'Goa sunsets are unreal.', time: '5m' },
    { id: 2, user: 'Ben', text: 'Looks like the tide is low.', time: '18m' },
  ],
  3: [
    { id: 1, user: 'Rae', text: 'Great route, thanks for sharing!', time: '3m' },
    { id: 2, user: 'Dev', text: 'Lighting looks safe around 9pm.', time: '11m' },
  ],
};

const LOCAL_DISCUSSIONS = {
  1: [
    {
      id: 1,
      group: 'Maharashtra State Group',
      user: 'Sanjay',
      text: 'Friday night is always packed here. Come early.',
      time: 'just now',
    },
    {
      id: 2,
      group: 'Bandra Foodies',
      user: 'Priya',
      text: 'We are meeting at 8pm near the flower stall.',
      time: '6m',
    },
  ],
  2: [
    {
      id: 1,
      group: 'Goa Coastline Group',
      user: 'Ajay',
      text: 'High tide in 45 minutes, good time for photos.',
      time: '3m',
    },
  ],
  3: [
    {
      id: 1,
      group: 'Bangalore Night Runners',
      user: 'Lia',
      text: 'Route A has better lighting than route B.',
      time: '2m',
    },
  ],
};

const MY_GROUPS = [
  {
    id: 1,
    name: 'Maharashtra State Group',
    badge: 'Home Group',
    members: '12.5k',
    activity: '98% active',
    role: 'Auto joined',
  },
  {
    id: 2,
    name: 'Bandra Night Market',
    badge: 'Pinned',
    members: '2.3k',
    activity: '92% active',
    role: 'Joined',
  },
  {
    id: 3,
    name: 'Mumbai Creators',
    badge: 'Creator',
    members: '6.1k',
    activity: '86% active',
    role: 'Joined',
  },
];
const NEARBY_GROUPS = [
  {
    id: 11,
    name: 'Bandra Coffee Walk',
    distance: '1.2 km',
    members: '1.1k',
    tags: ['coffee', 'weekend'],
  },
  {
    id: 12,
    name: 'Mumbai Monsoon Updates',
    distance: '2.8 km',
    members: '4.9k',
    tags: ['weather', 'alerts'],
  },
  {
    id: 13,
    name: 'HSR Night Run Club',
    distance: '6.4 km',
    members: '900',
    tags: ['running', 'safety'],
  },
];

const INBOX = [
  {
    id: 1,
    name: 'Maharashtra State Group',
    last: 'System: 12 local videos synced.',
    time: 'now',
    unread: 12,
  },
  {
    id: 2,
    name: 'Bandra Night Market',
    last: 'Priya: Meetup starts in 20 minutes.',
    time: '12:40',
    unread: 3,
  },
  {
    id: 3,
    name: 'Goa Coastline Group',
    last: 'Ajay: Tide report is posted.',
    time: '09:18',
    unread: 0,
  },
];

const TOPICS = [
  { id: 1, name: 'Street food under 50', trend: '+32%' },
  { id: 2, name: 'Safer night routes', trend: '+18%' },
  { id: 3, name: 'Weekend market openings', trend: '+21%' },
];

const PROFILE_STATS = [
  { label: 'Local posts', value: '42' },
  { label: 'Group replies', value: '18' },
  { label: 'Reach', value: '8.6k' },
];

const INFRA_ITEMS = [
  { title: 'LBS Group Service', detail: 'AA1/AA2 auto mapping', status: 'Online' },
  { title: 'Content Sync Queue', detail: 'p95 under 3s', status: 'Healthy' },
  { title: 'Comment Fusion Index', detail: 'video_id join ready', status: 'Ready' },
];

const Tag = ({ tone = 'neutral', children }) => {
  const toneStyles = {
    neutral: 'bg-white/70 text-[color:var(--ink)]',
    accent: 'bg-[var(--accent)] text-white',
    mint: 'bg-[var(--mint)] text-[color:var(--ink)]',
    outline: 'border border-white/60 text-white',
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
};

const BottomNav = ({ activeTab, onChange, onCompose }) => {
  const tabs = [
    { id: 'feed', label: 'Home', icon: Home },
    { id: 'groups', label: 'Groups', icon: Users },
    { id: 'create', label: 'Create', icon: Plus, action: true },
    { id: 'inbox', label: 'Inbox', icon: MessageCircle },
    { id: 'me', label: 'Me', icon: User },
  ];

  return (
    <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/70 bg-white/85 px-4 py-3 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.6)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        {tabs.map((tab) => {
          if (tab.action) {
            return (
              <button
                key={tab.id}
                onClick={onCompose}
                className="-mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)] text-white shadow-[0_20px_40px_-18px_rgba(255,107,74,0.8)] transition hover:scale-105"
              >
                <tab.icon size={22} />
              </button>
            );
          }

          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className="flex flex-col items-center gap-1 text-[10px] font-semibold"
            >
              <tab.icon
                size={20}
                className={
                  activeTab === tab.id
                    ? 'text-[var(--accent)]'
                    : 'text-[color:var(--ink-muted)]'
                }
              />
              <span
                className={
                  activeTab === tab.id
                    ? 'text-[color:var(--ink)]'
                    : 'text-[color:var(--ink-muted)]'
                }
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const VideoCard = ({ item, onOpenComments }) => {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/80 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.7)]">
      <div className={`relative h-72 bg-gradient-to-br ${item.gradient}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <Tag tone="outline">{item.location}</Tag>
          <Tag tone="accent">{item.badge}</Tag>
        </div>
        <div className="absolute right-4 bottom-4 flex flex-col items-center gap-4 text-white">
          <button className="flex flex-col items-center gap-1 text-[10px] font-semibold">
            <Heart size={20} />
            <span>{item.likes}</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 text-[10px] font-semibold"
            onClick={() => onOpenComments(item)}
          >
            <MessageSquare size={20} />
            <span>{item.comments}</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[10px] font-semibold">
            <Share2 size={18} />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 right-20 text-white">
          <p className="text-lg font-bold">{item.title}</p>
          <p className="text-xs opacity-80">
            {item.user} {item.handle}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/20 px-2 py-1 text-[10px] font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-[11px] font-semibold">
            <ShieldCheck size={14} />
            Synced to {item.group}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-sm">
            <Play size={22} className="text-white" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between bg-white/90 px-4 py-3">
        <div className="flex items-center gap-2 text-xs text-[color:var(--ink-muted)]">
          <Star size={14} className="text-[var(--accent)]" />
          Local discussion {item.discussers} people
        </div>
        <button className="flex items-center gap-1 text-xs font-semibold text-[var(--accent)]">
          Open group <ArrowUpRight size={12} />
        </button>
      </div>
    </div>
  );
};
const FeedTab = ({ onOpenComments }) => {
  return (
    <div className="no-scrollbar h-full overflow-y-auto pb-24">
      <div className="px-5 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--ink-muted)]">
              MajaGo
            </p>
            <h1 className="text-2xl font-black">Local short video community</h1>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80">
            <Search size={18} className="text-[color:var(--ink)]" />
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Tag tone="accent">LBS auto group on</Tag>
          <Tag tone="mint">Mumbai live</Tag>
          <Tag tone="neutral">Comment fusion</Tag>
        </div>
      </div>

      <div className="mx-5 mb-5 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.5)]">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)] text-white">
            <Navigation size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold">Auto synced 12 local videos</p>
            <p className="text-xs text-[color:var(--ink-muted)]">
              Source: Maharashtra State Group
            </p>
          </div>
          <button className="ml-auto flex items-center gap-1 text-xs font-semibold text-[var(--accent)]">
            View <ChevronRight size={12} />
          </button>
        </div>
      </div>

      <div className="space-y-6 px-5 pb-8">
        {FEED.map((item) => (
          <VideoCard key={item.id} item={item} onOpenComments={onOpenComments} />
        ))}
      </div>
    </div>
  );
};

const GroupsTab = ({ groupTab, onGroupTabChange }) => {
  return (
    <div className="no-scrollbar h-full overflow-y-auto pb-24">
      <div className="px-5 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--ink-muted)]">
              Groups
            </p>
            <h1 className="text-2xl font-black">LBS groups near you</h1>
          </div>
          <button className="flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-2 text-xs font-semibold text-[color:var(--ink)]">
            <Filter size={14} />
            Filter
          </button>
        </div>
      </div>

      <div className="mx-5 mb-5 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.5)]">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--mint)] text-[color:var(--ink)]">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold">Auto join active</p>
            <p className="text-xs text-[color:var(--ink-muted)]">
              Your state group is created and pinned.
            </p>
          </div>
          <button className="ml-auto rounded-full bg-[var(--accent)] px-3 py-2 text-xs font-semibold text-white">
            Open home group
          </button>
        </div>
      </div>

      <div className="px-5">
        <div className="flex gap-2">
          <button
            onClick={() => onGroupTabChange('my')}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              groupTab === 'my'
                ? 'bg-[var(--accent)] text-white'
                : 'border border-white/70 bg-white/70 text-[color:var(--ink)]'
            }`}
          >
            My groups
          </button>
          <button
            onClick={() => onGroupTabChange('nearby')}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              groupTab === 'nearby'
                ? 'bg-[var(--accent)] text-white'
                : 'border border-white/70 bg-white/70 text-[color:var(--ink)]'
            }`}
          >
            Nearby groups
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-3 px-5">
        {groupTab === 'my'
          ? MY_GROUPS.map((group) => (
              <div
                key={group.id}
                className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/80 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)] text-white">
                    {group.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{group.name}</p>
                    <p className="text-xs text-[color:var(--ink-muted)]">
                      {group.members} members · {group.activity}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-[var(--accent)]">
                      {group.badge} · {group.role}
                    </p>
                  </div>
                </div>
                <button className="rounded-full border border-[var(--accent)] px-3 py-2 text-xs font-semibold text-[var(--accent)]">
                  Open
                </button>
              </div>
            ))
          : NEARBY_GROUPS.map((group) => (
              <div
                key={group.id}
                className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/80 p-4"
              >
                <div>
                  <p className="text-sm font-bold">{group.name}</p>
                  <p className="text-xs text-[color:var(--ink-muted)]">
                    {group.members} members · {group.distance}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--mint)] px-2 py-1 text-[10px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="rounded-full bg-[var(--accent)] px-3 py-2 text-xs font-semibold text-white">
                  Join
                </button>
              </div>
            ))}
      </div>

      {groupTab === 'nearby' && (
        <div className="mt-6 px-5">
          <div className="rounded-3xl border border-white/70 bg-white/80 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">Local topics</p>
                <p className="text-xs text-[color:var(--ink-muted)]">
                  Discover conversations from nearby groups
                </p>
              </div>
              <button className="flex items-center gap-1 text-xs font-semibold text-[var(--accent)]">
                See all <ChevronRight size={12} />
              </button>
            </div>
            <div className="mt-4 space-y-2">
              {TOPICS.map((topic) => (
                <div
                  key={topic.id}
                  className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/70 px-3 py-2"
                >
                  <span className="text-xs font-semibold">{topic.name}</span>
                  <span className="text-xs font-semibold text-[var(--accent)]">
                    {topic.trend}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const InboxTab = () => {
  return (
    <div className="no-scrollbar h-full overflow-y-auto pb-24">
      <div className="px-5 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--ink-muted)]">
              Inbox
            </p>
            <h1 className="text-2xl font-black">Local conversations</h1>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80">
            <Search size={18} className="text-[color:var(--ink)]" />
          </button>
        </div>
      </div>

      <div className="space-y-3 px-5">
        {INBOX.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 p-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)] text-white">
              {chat.name[0]}
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">{chat.name}</p>
              <p className="text-xs text-[color:var(--ink-muted)]">{chat.last}</p>
            </div>
            <div className="text-right text-[10px] text-[color:var(--ink-muted)]">
              <p>{chat.time}</p>
              {chat.unread > 0 && (
                <span className="mt-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-semibold text-white">
                  {chat.unread}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProfileTab = () => {
  return (
    <div className="no-scrollbar h-full overflow-y-auto pb-24">
      <div className="px-5 pt-6 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--ink-muted)]">
              Profile
            </p>
            <h1 className="text-2xl font-black">Local creator</h1>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80">
            <Globe size={18} className="text-[color:var(--ink)]" />
          </button>
        </div>
      </div>

      <div className="mx-5 rounded-3xl border border-white/70 bg-white/80 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)] text-white">
            Z
          </div>
          <div>
            <p className="text-lg font-bold">Zara</p>
            <p className="text-xs text-[color:var(--ink-muted)]">Mumbai / Bandra West</p>
          </div>
          <button className="ml-auto rounded-full border border-[var(--accent)] px-3 py-2 text-xs font-semibold text-[var(--accent)]">
            Edit
          </button>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {PROFILE_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/70 bg-white/70 px-3 py-3 text-center"
            >
              <p className="text-lg font-bold">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-wider text-[color:var(--ink-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-5 mt-5 rounded-3xl border border-white/70 bg-white/80 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--mint)] text-[color:var(--ink)]">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="text-sm font-bold">Safety and trust</p>
            <p className="text-xs text-[color:var(--ink-muted)]">
              Location access and group sync status
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Tag tone="accent">LBS On</Tag>
          <Tag tone="mint">Auto translate</Tag>
          <Tag tone="neutral">Privacy shield</Tag>
        </div>
      </div>

      <div className="mx-5 mt-5 rounded-3xl border border-white/70 bg-white/80 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold">Infrastructure status</p>
            <p className="text-xs text-[color:var(--ink-muted)]">
              Core services for local sync
            </p>
          </div>
          <button className="flex items-center gap-1 text-xs font-semibold text-[var(--accent)]">
            Details <ChevronRight size={12} />
          </button>
        </div>
        <div className="mt-4 space-y-2">
          {INFRA_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/70 px-3 py-2"
            >
              <div>
                <p className="text-xs font-semibold">{item.title}</p>
                <p className="text-[10px] text-[color:var(--ink-muted)]">{item.detail}</p>
              </div>
              <span className="text-xs font-semibold text-[var(--accent)]">{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CommentDrawer = ({ open, onClose, video, activeTab, onTabChange }) => {
  if (!open || !video) {
    return null;
  }

  const comments = COMMENTS[video.id] || [];
  const locals = LOCAL_DISCUSSIONS[video.id] || [];

  return (
    <div className="absolute inset-0 z-50">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="slide-up absolute bottom-0 left-0 right-0 rounded-t-[32px] bg-[var(--paper)] p-5 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--ink-muted)]">
              Discussion
            </p>
            <h3 className="text-lg font-black">{video.title}</h3>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => onTabChange('video')}
            className={`rounded-full px-4 py-2 text-xs font-semibold ${
              activeTab === 'video'
                ? 'bg-[var(--accent)] text-white'
                : 'border border-white/70 bg-white/70 text-[color:var(--ink)]'
            }`}
          >
            Video comments
          </button>
          <button
            onClick={() => onTabChange('local')}
            className={`rounded-full px-4 py-2 text-xs font-semibold ${
              activeTab === 'local'
                ? 'bg-[var(--accent)] text-white'
                : 'border border-white/70 bg-white/70 text-[color:var(--ink)]'
            }`}
          >
            Local discussion
          </button>
        </div>

        <div className="no-scrollbar mt-4 max-h-56 space-y-3 overflow-y-auto pr-2">
          {activeTab === 'video'
            ? comments.map((comment) => (
                <div
                  key={comment.id}
                  className="rounded-2xl border border-white/70 bg-white/80 p-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                      {comment.user[0]}
                    </div>
                    <div>
                      <p className="text-xs font-semibold">{comment.user}</p>
                      <p className="text-[10px] text-[color:var(--ink-muted)]">{comment.time}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm">{comment.text}</p>
                </div>
              ))
            : locals.map((comment) => (
                <div
                  key={comment.id}
                  className="rounded-2xl border border-white/70 bg-white/80 p-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--mint)] text-[color:var(--ink)]">
                      {comment.group[0]}
                    </div>
                    <div>
                      <p className="text-xs font-semibold">{comment.group}</p>
                      <p className="text-[10px] text-[color:var(--ink-muted)]">
                        {comment.user} · {comment.time}
                      </p>
                    </div>
                    <button className="ml-auto text-xs font-semibold text-[var(--accent)]">
                      Jump
                    </button>
                  </div>
                  <p className="mt-2 text-sm">{comment.text}</p>
                </div>
              ))}
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-2">
          <MessageCircle size={16} className="text-[var(--accent)]" />
          <input
            className="flex-1 bg-transparent text-xs outline-none"
            placeholder="Say something..."
          />
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-white">
            <Share2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
const ComposerModal = ({ onClose }) => {
  return (
    <div className="absolute inset-0 z-50">
      <div className="absolute inset-0 bg-slate-900/40" onClick={onClose} />
      <div className="slide-up absolute bottom-0 left-0 right-0 rounded-t-[32px] bg-[var(--paper)] p-6 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--ink-muted)]">
              Create
            </p>
            <h3 className="text-xl font-black">Post local short video</h3>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-2 rounded-2xl border border-white/70 bg-white/80 p-4">
            <Camera size={20} className="text-[var(--accent)]" />
            <p className="text-sm font-semibold">Capture</p>
            <p className="text-[10px] text-[color:var(--ink-muted)]">Short video</p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/70 bg-white/80 p-4">
            <Mic size={20} className="text-[var(--accent)]" />
            <p className="text-sm font-semibold">Voice note</p>
            <p className="text-[10px] text-[color:var(--ink-muted)]">Quick update</p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/70 bg-white/80 p-4">
            <MapPin size={20} className="text-[var(--accent)]" />
            <p className="text-sm font-semibold">Tag location</p>
            <p className="text-[10px] text-[color:var(--ink-muted)]">Street or POI</p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/70 bg-white/80 p-4">
            <Users size={20} className="text-[var(--accent)]" />
            <p className="text-sm font-semibold">Sync to group</p>
            <p className="text-[10px] text-[color:var(--ink-muted)]">Auto distribution</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/70 bg-white/80 p-3 text-xs text-[color:var(--ink-muted)]">
          Tip: all posts must include location tags. Videos sync to your state group automatically.
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('feed');
  const [groupTab, setGroupTab] = useState('my');
  const [composerOpen, setComposerOpen] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [commentTab, setCommentTab] = useState('video');
  const [activeVideo, setActiveVideo] = useState(FEED[0]);

  const theme = {
    '--ink': '#14110f',
    '--ink-muted': '#5f5b57',
    '--paper': '#f7f1e8',
    '--accent': '#ff6b4a',
    '--mint': '#9ce7d8',
  };

  const handleOpenComments = (video) => {
    setActiveVideo(video);
    setCommentTab('video');
    setCommentOpen(true);
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--paper)] p-6 text-[color:var(--ink)]"
      style={{ ...theme, fontFamily: '"Space Grotesk", "Sora", "Manrope", sans-serif' }}
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(16px); }
          100% { transform: translateY(0px); }
        }
        @keyframes slideUp {
          from { transform: translateY(24px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .float-slow { animation: floatSlow 10s ease-in-out infinite; }
        .slide-up { animation: slideUp 280ms ease-out; }
      `}</style>

      <div
        className="float-slow pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{ background: 'radial-gradient(circle, #ffd48a, transparent 70%)' }}
      />
      <div
        className="float-slow pointer-events-none absolute bottom-0 left-10 h-64 w-64 rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, #9ce7d8, transparent 70%)' }}
      />

      <div className="relative h-[860px] w-full max-w-[420px] overflow-hidden rounded-[40px] border-[8px] border-slate-900 bg-[var(--paper)] shadow-2xl ring-1 ring-slate-900/40">
        <div className="absolute left-0 right-0 top-0 flex h-10 items-center justify-between px-6 text-xs font-semibold text-[color:var(--ink)]">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="h-2 w-4 rounded-sm bg-[color:var(--ink)]" />
            <span className="h-2 w-2 rounded-full bg-[color:var(--ink)]" />
            <span className="h-2 w-2 rounded-full bg-[color:var(--ink)]" />
          </div>
        </div>

        <div className="h-full pt-10">
          {activeTab === 'feed' && <FeedTab onOpenComments={handleOpenComments} />}
          {activeTab === 'groups' && (
            <GroupsTab groupTab={groupTab} onGroupTabChange={setGroupTab} />
          )}
          {activeTab === 'inbox' && <InboxTab />}
          {activeTab === 'me' && <ProfileTab />}
        </div>

        <BottomNav
          activeTab={activeTab}
          onChange={setActiveTab}
          onCompose={() => setComposerOpen(true)}
        />

        {commentOpen && (
          <CommentDrawer
            open={commentOpen}
            onClose={() => setCommentOpen(false)}
            video={activeVideo}
            activeTab={commentTab}
            onTabChange={setCommentTab}
          />
        )}

        {composerOpen && <ComposerModal onClose={() => setComposerOpen(false)} />}
      </div>
    </div>
  );
}
