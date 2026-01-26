
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

const TEXTS = {
  zh: {
    langSwitch: 'EN',
    nav: {
      feed: '首页',
      groups: '群组',
      create: '发布',
      inbox: '消息',
      me: '我的',
    },
    headline: '本地生活短视频社群',
    tags: {
      autoGroup: 'LBS 自动入群',
      cityLive: '孟买正在热聊',
      commentFusion: '评论区融合',
    },
    syncCardTitle: '已同步 12 条本地视频',
    syncCardSource: '来源：马哈拉施特拉邦群',
    view: '查看',
    openGroup: '进入群聊',
    syncedTo: (group) => `同步到 ${group}`,
    localDiscussionLabel: (count) => `本地讨论 ${count} 人`,
    badgeLabels: {
      localHot: '本地热榜',
      synced: '已同步',
    },
    groupsLabel: '群组',
    groupsTitle: '附近的 LBS 群组',
    filter: '筛选',
    autoJoinTitle: '自动入群已开启',
    autoJoinDesc: '你的省/邦群已创建并置顶。',
    openHomeGroup: '进入家乡群',
    myGroups: '我的群聊',
    nearbyGroups: '附近群聊',
    membersLabel: (count) => `${count} 成员`,
    activityLabel: (activity) => `活跃度 ${activity}`,
    open: '进入',
    join: '加入',
    localTopics: '本地话题',
    localTopicsDesc: '来自附近群聊的讨论',
    seeAll: '查看全部',
    inboxLabel: '消息',
    inboxTitle: '本地对话',
    profileLabel: '个人',
    profileTitle: '本地创作者',
    edit: '编辑',
    safetyTitle: '安全与信任',
    safetyDesc: '定位授权与群同步状态',
    profileTags: {
      lbsOn: 'LBS 已开启',
      autoTranslate: '自动翻译',
      privacyShield: '隐私保护',
    },
    infraTitle: '基础设施状态',
    infraDesc: '本地同步的核心服务',
    details: '详情',
    discussion: '讨论',
    videoComments: '视频评论',
    localDiscussion: '本地讨论',
    jump: '跳转',
    saySomething: '说点什么...',
    createLabel: '发布',
    createTitle: '发布本地短视频',
    capture: '拍摄',
    shortVideo: '短视频',
    voiceNote: '语音',
    quickUpdate: '快速更新',
    tagLocation: '标记位置',
    streetPoi: '街道或 POI',
    syncToGroup: '同步到群',
    autoDistribution: '自动分发',
    tip: '提示：所有内容必须包含地理标记，发布后将自动同步到你的本地群。',
    tagLabels: {
      nightMarket: '夜市',
      streetFood: '街头美食',
      sunset: '日落',
      walk: '散步',
      nightRun: '夜跑',
      safety: '安全',
      coffee: '咖啡',
      weekend: '周末',
      weather: '天气',
      alerts: '提醒',
      running: '跑步',
    },
    topics: {
      streetFoodUnder50: '50 以内的街边美食',
      safeRoutes: '更安全的夜跑路线',
      weekendMarket: '周末市集开摊',
    },
    stats: {
      localPosts: '本地内容',
      groupReplies: '群聊回复',
      reach: '触达',
    },
    infraItems: {
      lbsService: { title: 'LBS 群组服务', detail: 'AA1/AA2 自动映射' },
      syncQueue: { title: '内容同步队列', detail: 'p95 低于 3 秒' },
      fusionIndex: { title: '评论融合索引', detail: 'video_id 关联已就绪' },
    },
    infraStatus: {
      online: '在线',
      healthy: '健康',
      ready: '就绪',
    },
    inboxMessages: {
      stateSync: '系统：已同步 12 条本地视频。',
      market: 'Priya：线下聚会 20 分钟后开始。',
      coast: 'Ajay：潮汐报告已发布。',
    },
    timeNow: '刚刚',
    groupBadges: {
      home: '家乡群',
      pinned: '置顶',
      creator: '创作者',
    },
    groupRoles: {
      auto: '系统加入',
      joined: '已加入',
    },
  },
  en: {
    langSwitch: '中文',
    nav: {
      feed: 'Home',
      groups: 'Groups',
      create: 'Create',
      inbox: 'Inbox',
      me: 'Me',
    },
    headline: 'Local short video community',
    tags: {
      autoGroup: 'LBS auto group on',
      cityLive: 'Mumbai live',
      commentFusion: 'Comment fusion',
    },
    syncCardTitle: 'Auto synced 12 local videos',
    syncCardSource: 'Source: Maharashtra State Group',
    view: 'View',
    openGroup: 'Open group',
    syncedTo: (group) => `Synced to ${group}`,
    localDiscussionLabel: (count) => `Local discussion ${count} people`,
    badgeLabels: {
      localHot: 'Local Hot',
      synced: 'Synced',
    },
    groupsLabel: 'Groups',
    groupsTitle: 'LBS groups near you',
    filter: 'Filter',
    autoJoinTitle: 'Auto join active',
    autoJoinDesc: 'Your state group is created and pinned.',
    openHomeGroup: 'Open home group',
    myGroups: 'My groups',
    nearbyGroups: 'Nearby groups',
    membersLabel: (count) => `${count} members`,
    activityLabel: (activity) => `${activity} active`,
    open: 'Open',
    join: 'Join',
    localTopics: 'Local topics',
    localTopicsDesc: 'Discover conversations from nearby groups',
    seeAll: 'See all',
    inboxLabel: 'Inbox',
    inboxTitle: 'Local conversations',
    profileLabel: 'Profile',
    profileTitle: 'Local creator',
    edit: 'Edit',
    safetyTitle: 'Safety and trust',
    safetyDesc: 'Location access and group sync status',
    profileTags: {
      lbsOn: 'LBS On',
      autoTranslate: 'Auto translate',
      privacyShield: 'Privacy shield',
    },
    infraTitle: 'Infrastructure status',
    infraDesc: 'Core services for local sync',
    details: 'Details',
    discussion: 'Discussion',
    videoComments: 'Video comments',
    localDiscussion: 'Local discussion',
    jump: 'Jump',
    saySomething: 'Say something...',
    createLabel: 'Create',
    createTitle: 'Post local short video',
    capture: 'Capture',
    shortVideo: 'Short video',
    voiceNote: 'Voice note',
    quickUpdate: 'Quick update',
    tagLocation: 'Tag location',
    streetPoi: 'Street or POI',
    syncToGroup: 'Sync to group',
    autoDistribution: 'Auto distribution',
    tip: 'Tip: all posts must include location tags. Videos sync to your state group automatically.',
    tagLabels: {
      nightMarket: 'night market',
      streetFood: 'street food',
      sunset: 'sunset',
      walk: 'walk',
      nightRun: 'night run',
      safety: 'safety',
      coffee: 'coffee',
      weekend: 'weekend',
      weather: 'weather',
      alerts: 'alerts',
      running: 'running',
    },
    topics: {
      streetFoodUnder50: 'Street food under 50',
      safeRoutes: 'Safer night routes',
      weekendMarket: 'Weekend market openings',
    },
    stats: {
      localPosts: 'Local posts',
      groupReplies: 'Group replies',
      reach: 'Reach',
    },
    infraItems: {
      lbsService: { title: 'LBS Group Service', detail: 'AA1/AA2 auto mapping' },
      syncQueue: { title: 'Content Sync Queue', detail: 'p95 under 3s' },
      fusionIndex: { title: 'Comment Fusion Index', detail: 'video_id join ready' },
    },
    infraStatus: {
      online: 'Online',
      healthy: 'Healthy',
      ready: 'Ready',
    },
    inboxMessages: {
      stateSync: 'System: 12 local videos synced.',
      market: 'Priya: Meetup starts in 20 minutes.',
      coast: 'Ajay: Tide report is posted.',
    },
    timeNow: 'now',
    groupBadges: {
      home: 'Home Group',
      pinned: 'Pinned',
      creator: 'Creator',
    },
    groupRoles: {
      auto: 'Auto joined',
      joined: 'Joined',
    },
  },
};

const FEED = [
  {
    id: 1,
    user: 'Asha',
    handle: '@asha',
    title: 'Rain market restock before monsoon',
    location: 'Mumbai / Bandra West',
    group: 'Maharashtra State Group',
    tags: ['nightMarket', 'streetFood'],
    likes: '12.5k',
    comments: 324,
    discussers: 186,
    gradient: 'from-[#ff7a59] via-[#ffb357] to-[#ffe2a8]',
    badgeKey: 'localHot',
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
    badgeKey: 'synced',
  },
  {
    id: 3,
    user: 'Nina',
    handle: '@nina',
    title: 'Night run loop with safe lights',
    location: 'Bangalore / HSR Layout',
    group: 'Bangalore Night Runners',
    tags: ['nightRun', 'safety'],
    likes: '9.4k',
    comments: 268,
    discussers: 142,
    gradient: 'from-[#1f2937] via-[#334155] to-[#1d4ed8]',
    badgeKey: 'localHot',
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
    badgeKey: 'home',
    members: '12.5k',
    activity: '98%',
    roleKey: 'auto',
  },
  {
    id: 2,
    name: 'Bandra Night Market',
    badgeKey: 'pinned',
    members: '2.3k',
    activity: '92%',
    roleKey: 'joined',
  },
  {
    id: 3,
    name: 'Mumbai Creators',
    badgeKey: 'creator',
    members: '6.1k',
    activity: '86%',
    roleKey: 'joined',
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
    messageKey: 'stateSync',
    timeKey: 'now',
    unread: 12,
  },
  {
    id: 2,
    name: 'Bandra Night Market',
    messageKey: 'market',
    time: '12:40',
    unread: 3,
  },
  {
    id: 3,
    name: 'Goa Coastline Group',
    messageKey: 'coast',
    time: '09:18',
    unread: 0,
  },
];

const TOPICS = [
  { id: 1, key: 'streetFoodUnder50', trend: '+32%' },
  { id: 2, key: 'safeRoutes', trend: '+18%' },
  { id: 3, key: 'weekendMarket', trend: '+21%' },
];

const PROFILE_STATS = [
  { labelKey: 'localPosts', value: '42' },
  { labelKey: 'groupReplies', value: '18' },
  { labelKey: 'reach', value: '8.6k' },
];

const INFRA_ITEMS = [
  { key: 'lbsService', statusKey: 'online' },
  { key: 'syncQueue', statusKey: 'healthy' },
  { key: 'fusionIndex', statusKey: 'ready' },
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

const BottomNav = ({ activeTab, onChange, onCompose, t }) => {
  const tabs = [
    { id: 'feed', label: t.nav.feed, icon: Home },
    { id: 'groups', label: t.nav.groups, icon: Users },
    { id: 'create', label: t.nav.create, icon: Plus, action: true },
    { id: 'inbox', label: t.nav.inbox, icon: MessageCircle },
    { id: 'me', label: t.nav.me, icon: User },
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

const VideoCard = ({ item, onOpenComments, t }) => {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/80 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.7)]">
      <div className={`relative h-72 bg-gradient-to-br ${item.gradient}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <Tag tone="outline">{item.location}</Tag>
          <Tag tone="accent">{t.badgeLabels[item.badgeKey] || item.badgeKey}</Tag>
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
                #{t.tagLabels[tag] || tag}
              </span>
            ))}
          </div>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-[11px] font-semibold">
            <ShieldCheck size={14} />
            {t.syncedTo(item.group)}
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
          {t.localDiscussionLabel(item.discussers)}
        </div>
        <button className="flex items-center gap-1 text-xs font-semibold text-[var(--accent)]">
          {t.openGroup} <ArrowUpRight size={12} />
        </button>
      </div>
    </div>
  );
};
const FeedTab = ({ onOpenComments, t }) => {
  return (
    <div className="no-scrollbar h-full overflow-y-auto pb-24">
      <div className="px-5 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--ink-muted)]">
              MajaGo
            </p>
            <h1 className="text-2xl font-black">{t.headline}</h1>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80">
            <Search size={18} className="text-[color:var(--ink)]" />
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Tag tone="accent">{t.tags.autoGroup}</Tag>
          <Tag tone="mint">{t.tags.cityLive}</Tag>
          <Tag tone="neutral">{t.tags.commentFusion}</Tag>
        </div>
      </div>

      <div className="mx-5 mb-5 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.5)]">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)] text-white">
            <Navigation size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold">{t.syncCardTitle}</p>
            <p className="text-xs text-[color:var(--ink-muted)]">{t.syncCardSource}</p>
          </div>
          <button className="ml-auto flex items-center gap-1 text-xs font-semibold text-[var(--accent)]">
            {t.view} <ChevronRight size={12} />
          </button>
        </div>
      </div>

      <div className="space-y-6 px-5 pb-8">
        {FEED.map((item) => (
          <VideoCard key={item.id} item={item} onOpenComments={onOpenComments} t={t} />
        ))}
      </div>
    </div>
  );
};

const GroupsTab = ({ groupTab, onGroupTabChange, t }) => {
  return (
    <div className="no-scrollbar h-full overflow-y-auto pb-24">
      <div className="px-5 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--ink-muted)]">
              {t.groupsLabel}
            </p>
            <h1 className="text-2xl font-black">{t.groupsTitle}</h1>
          </div>
          <button className="flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-2 text-xs font-semibold text-[color:var(--ink)]">
            <Filter size={14} />
            {t.filter}
          </button>
        </div>
      </div>

      <div className="mx-5 mb-5 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.5)]">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--mint)] text-[color:var(--ink)]">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold">{t.autoJoinTitle}</p>
            <p className="text-xs text-[color:var(--ink-muted)]">{t.autoJoinDesc}</p>
          </div>
          <button className="ml-auto rounded-full bg-[var(--accent)] px-3 py-2 text-xs font-semibold text-white">
            {t.openHomeGroup}
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
            {t.myGroups}
          </button>
          <button
            onClick={() => onGroupTabChange('nearby')}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              groupTab === 'nearby'
                ? 'bg-[var(--accent)] text-white'
                : 'border border-white/70 bg-white/70 text-[color:var(--ink)]'
            }`}
          >
            {t.nearbyGroups}
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
                      {t.membersLabel(group.members)} · {t.activityLabel(group.activity)}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-[var(--accent)]">
                      {t.groupBadges[group.badgeKey]} · {t.groupRoles[group.roleKey]}
                    </p>
                  </div>
                </div>
                <button className="rounded-full border border-[var(--accent)] px-3 py-2 text-xs font-semibold text-[var(--accent)]">
                  {t.open}
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
                    {t.membersLabel(group.members)} · {group.distance}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--mint)] px-2 py-1 text-[10px] font-semibold"
                      >
                        {t.tagLabels[tag] || tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="rounded-full bg-[var(--accent)] px-3 py-2 text-xs font-semibold text-white">
                  {t.join}
                </button>
              </div>
            ))}
      </div>

      {groupTab === 'nearby' && (
        <div className="mt-6 px-5">
          <div className="rounded-3xl border border-white/70 bg-white/80 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">{t.localTopics}</p>
                <p className="text-xs text-[color:var(--ink-muted)]">{t.localTopicsDesc}</p>
              </div>
              <button className="flex items-center gap-1 text-xs font-semibold text-[var(--accent)]">
                {t.seeAll} <ChevronRight size={12} />
              </button>
            </div>
            <div className="mt-4 space-y-2">
              {TOPICS.map((topic) => (
                <div
                  key={topic.id}
                  className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/70 px-3 py-2"
                >
                  <span className="text-xs font-semibold">{t.topics[topic.key]}</span>
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
const InboxTab = ({ t }) => {
  return (
    <div className="no-scrollbar h-full overflow-y-auto pb-24">
      <div className="px-5 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--ink-muted)]">
              {t.inboxLabel}
            </p>
            <h1 className="text-2xl font-black">{t.inboxTitle}</h1>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80">
            <Search size={18} className="text-[color:var(--ink)]" />
          </button>
        </div>
      </div>

      <div className="space-y-3 px-5">
        {INBOX.map((chat) => {
          const message = t.inboxMessages[chat.messageKey] || chat.last || '';
          const timeLabel = chat.timeKey ? t.timeNow : chat.time;

          return (
            <div
              key={chat.id}
              className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 p-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)] text-white">
                {chat.name[0]}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">{chat.name}</p>
                <p className="text-xs text-[color:var(--ink-muted)]">{message}</p>
              </div>
              <div className="text-right text-[10px] text-[color:var(--ink-muted)]">
                <p>{timeLabel}</p>
                {chat.unread > 0 && (
                  <span className="mt-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-semibold text-white">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProfileTab = ({ t }) => {
  return (
    <div className="no-scrollbar h-full overflow-y-auto pb-24">
      <div className="px-5 pt-6 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--ink-muted)]">
              {t.profileLabel}
            </p>
            <h1 className="text-2xl font-black">{t.profileTitle}</h1>
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
            {t.edit}
          </button>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {PROFILE_STATS.map((stat) => (
            <div
              key={stat.labelKey}
              className="rounded-2xl border border-white/70 bg-white/70 px-3 py-3 text-center"
            >
              <p className="text-lg font-bold">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-wider text-[color:var(--ink-muted)]">
                {t.stats[stat.labelKey]}
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
            <p className="text-sm font-bold">{t.safetyTitle}</p>
            <p className="text-xs text-[color:var(--ink-muted)]">{t.safetyDesc}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Tag tone="accent">{t.profileTags.lbsOn}</Tag>
          <Tag tone="mint">{t.profileTags.autoTranslate}</Tag>
          <Tag tone="neutral">{t.profileTags.privacyShield}</Tag>
        </div>
      </div>

      <div className="mx-5 mt-5 rounded-3xl border border-white/70 bg-white/80 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold">{t.infraTitle}</p>
            <p className="text-xs text-[color:var(--ink-muted)]">{t.infraDesc}</p>
          </div>
          <button className="flex items-center gap-1 text-xs font-semibold text-[var(--accent)]">
            {t.details} <ChevronRight size={12} />
          </button>
        </div>
        <div className="mt-4 space-y-2">
          {INFRA_ITEMS.map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/70 px-3 py-2"
            >
              <div>
                <p className="text-xs font-semibold">{t.infraItems[item.key].title}</p>
                <p className="text-[10px] text-[color:var(--ink-muted)]">
                  {t.infraItems[item.key].detail}
                </p>
              </div>
              <span className="text-xs font-semibold text-[var(--accent)]">
                {t.infraStatus[item.statusKey]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CommentDrawer = ({ open, onClose, video, activeTab, onTabChange, t }) => {
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
              {t.discussion}
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
            {t.videoComments}
          </button>
          <button
            onClick={() => onTabChange('local')}
            className={`rounded-full px-4 py-2 text-xs font-semibold ${
              activeTab === 'local'
                ? 'bg-[var(--accent)] text-white'
                : 'border border-white/70 bg-white/70 text-[color:var(--ink)]'
            }`}
          >
            {t.localDiscussion}
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
                      {t.jump}
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
            placeholder={t.saySomething}
          />
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-white">
            <Share2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
const ComposerModal = ({ onClose, t }) => {
  return (
    <div className="absolute inset-0 z-50">
      <div className="absolute inset-0 bg-slate-900/40" onClick={onClose} />
      <div className="slide-up absolute bottom-0 left-0 right-0 rounded-t-[32px] bg-[var(--paper)] p-6 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--ink-muted)]">
              {t.createLabel}
            </p>
            <h3 className="text-xl font-black">{t.createTitle}</h3>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-2 rounded-2xl border border-white/70 bg-white/80 p-4">
            <Camera size={20} className="text-[var(--accent)]" />
            <p className="text-sm font-semibold">{t.capture}</p>
            <p className="text-[10px] text-[color:var(--ink-muted)]">{t.shortVideo}</p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/70 bg-white/80 p-4">
            <Mic size={20} className="text-[var(--accent)]" />
            <p className="text-sm font-semibold">{t.voiceNote}</p>
            <p className="text-[10px] text-[color:var(--ink-muted)]">{t.quickUpdate}</p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/70 bg-white/80 p-4">
            <MapPin size={20} className="text-[var(--accent)]" />
            <p className="text-sm font-semibold">{t.tagLocation}</p>
            <p className="text-[10px] text-[color:var(--ink-muted)]">{t.streetPoi}</p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/70 bg-white/80 p-4">
            <Users size={20} className="text-[var(--accent)]" />
            <p className="text-sm font-semibold">{t.syncToGroup}</p>
            <p className="text-[10px] text-[color:var(--ink-muted)]">{t.autoDistribution}</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/70 bg-white/80 p-3 text-xs text-[color:var(--ink-muted)]">
          {t.tip}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('zh');
  const [activeTab, setActiveTab] = useState('feed');
  const [groupTab, setGroupTab] = useState('my');
  const [composerOpen, setComposerOpen] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [commentTab, setCommentTab] = useState('video');
  const [activeVideo, setActiveVideo] = useState(FEED[0]);
  const t = TEXTS[lang];

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

      <div className="relative">
        <button
          onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
          className="absolute -top-12 right-2 z-30 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-semibold text-[color:var(--ink)] shadow-lg md:-right-20 md:top-6"
        >
          {t.langSwitch}
        </button>

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
          {activeTab === 'feed' && <FeedTab onOpenComments={handleOpenComments} t={t} />}
          {activeTab === 'groups' && (
            <GroupsTab groupTab={groupTab} onGroupTabChange={setGroupTab} t={t} />
          )}
          {activeTab === 'inbox' && <InboxTab t={t} />}
          {activeTab === 'me' && <ProfileTab t={t} />}
        </div>

        <BottomNav
          activeTab={activeTab}
          onChange={setActiveTab}
          onCompose={() => setComposerOpen(true)}
          t={t}
        />

        {commentOpen && (
          <CommentDrawer
            open={commentOpen}
            onClose={() => setCommentOpen(false)}
            video={activeVideo}
            activeTab={commentTab}
            onTabChange={setCommentTab}
            t={t}
          />
        )}

        {composerOpen && <ComposerModal onClose={() => setComposerOpen(false)} t={t} />}
      </div>
    </div>
    </div>
  );
}

