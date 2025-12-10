import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Home, Gamepad2, PlusSquare, Plus, MessageCircle, User, Search, Heart, MessageSquare, Share2, MapPin, Coins, 
  Trophy, Clock, ChevronRight, ChevronLeft, Play, Pause, Users, Bell, Settings, X, Send, Mic, MoreHorizontal, 
  Wallet, CheckCircle2, Loader2, RefreshCw, TrendingUp, Calendar, Award, Gem, CircleDollarSign, Star, Zap, 
  Target, Gift, Languages, Filter, Flame, UserPlus, ArrowRightLeft, Receipt, Sword, Crown, LayoutGrid, LayoutList, LogOut, Ban, AlertTriangle, Lock, HelpCircle, XCircle, ChevronDown
} from 'lucide-react';

// --- Internationalization (i18n) ---

const TEXTS = {
  zh: {
    home: "首页", game: "游戏", inbox: "消息", mine: "我的",
    following: "关注", foryou: "推荐",
    match_title: "对战大厅", match_desc: "同屏竞技 · 3分钟结算 · 胜者通吃",
    season_week: "本周赛季", season_pool: "总奖池", season_rules: "活动规则",
    season_rank: "实时榜单", my_rank: "我的排名",
    nearby_groups: "附近的邦/县群组", join: "加入",
    wallet: "我的钱包", tasks: "每日任务", skills: "游戏段位",
    works: "作品", likes: "点赞", history: "游戏战绩",
    balance: "当前余额", recharge: "立即充值",
    total_won: "今日盈利",
    find_groups: "发现群组", search_placeholder: "搜索群名或ID",
    sort_dist: "距离最近", sort_pop: "最活跃", sort_mem: "人数最多",
    active: "活跃", members: "人", distance: "距离",
    chat_input: "发送消息...", invite: "发起对战", gift: "发送礼物",
    victory: "胜利", defeat: "失败",
    lang_switch: "Switch to English",
    entry_fee: "入场费", players: "玩家", no_likes: "暂无点赞内容",
    room_lb: "附近房间", room_gp: "我的群组", room_qk: "快速匹配", room_create: "创建房间",
    pay_start: "开始游戏", rule_desc: "规则: 支付入场费 → 玩同一游戏 → 3分钟后最高分获得80%奖池",
    recent_trans: "近期流水", trans_reward: "对局奖励",
    view_all_trans: "查看全部流水", trans_history: "交易记录",
    trans_type_game: "游戏对局", trans_type_recharge: "充值", trans_type_gift: "礼物打赏",
    beans: "游戏豆", diamonds: "钻石", coins: "金币",
    quick_match_title: "极速匹配", quick_match_sub: "选择入场档位，系统自动匹配对手",
    custom_rooms: "自选房间", create_room_title: "创建私人房间",
    select_game: "选择游戏", set_entry: "选择场次", send_invite: "支付房费并发送",
    enter_room: "进入房间", waiting_opp: "等待对手...", challenged_you: "向你发起挑战",
    tier_junior: "初级场", tier_inter: "中级场", tier_master: "高级场",
    prize: "奖金", capacity: "人数", playing: "人在玩",
    mode_friendly: "友谊对战", mode_compete: "竞赛模式",
    room_cost: "房间费", host_pay: "房主支付", invite_friend: "邀请好友对战",
    compete_desc: "所有玩家支付入场费，赢家获得奖池", friendly_desc: "仅需房主支付房费，无入场费无奖金",
    room_lobby: "房间等待中", kick: "踢出", ready: "准备", start: "开始", waiting: "等待...",
    host: "房主", you: "我", leave_room: "离开房间", room_id: "房间ID",
    disband: "解散房间", disband_warn: "解散房间将退还其他玩家入场费，但不退还您的房间费。且您将在15分钟内无法再次创建房间。",
    pay_confirm: "支付确认", pay_msg: "准备游戏需要支付入场费", pay_btn: "确认支付",
    cant_leave: "已支付入场费，无法退出", paid: "已支付",
    cooldown_msg: "您处于创建冷却期 (15分钟)", friend_invite: "友谊赛邀请", comp_invite: "竞赛邀请",
    exchange: "兑换", exchange_title: "金币兑换游戏豆", exchange_rate: "1 金币 = 100 游戏豆", 
    confirm_exchange: "确认兑换", input_coins: "输入金币数量", withdraw: "提现",
    back_home: "返回大厅", game_over: "游戏结束", playing_now: "游戏中",
    cancel_ready: "取消准备", ready_cancel_hint: "长按取消准备", shared_success: "分享成功",
    hot_games: "热门游戏", all_games: "全部游戏", rec_groups: "推荐群组",
    level_up_tasks: "升级任务", level_up_desc: "完成每日任务赚取经验和游戏豆！",
    task_center: "任务中心", daily_missions: "每日任务", weekly_chest: "周宝箱",
    weekly_chest_desc: "完成15个每日任务开启", claim: "领取", claimed: "已领",
    next_level: "下一级：解锁专属头像框", elite_gamer: "精英玩家",
    join_group_modal_title: "加入群组", join_group_desc: "加入群组，结识附近玩家，组织比赛，分享游戏精彩瞬间！",
    welcome_group: "欢迎加入群组！", welcome_back: "欢迎回来！",
    popular: "热门", newest: "最新", most_played: "最多游玩", more: "更多",
    play_also: "我也玩", loading_game: "加载游戏中...", preparing_assets: "准备资源并连接玩家...",
    game_started: "游戏开始（模拟）", joined_group_toast: "已加入",
    tap_to_play: "点击任意位置开始（模拟）", you_brackets: "（我）",
    fans: "粉丝", likes_count: "获赞", just_now: "刚刚", km: "公里",
    level: "等级", exp: "经验", favorite: "收藏", share: "分享",
    rec_game: "热门", players_online: "在线玩家", play_now: "立即玩",
    rec_room: "推荐房间", nearby: "附近", shorts: "短视频",
    comments: "评论", add_comment: "添加评论...", sample_comment: "这个视频太棒了！🔥",
    guest: "访客", game_room: "游戏房间", ready_excl: "已准备！",
    cancel_ready_first: "请先取消准备（长按准备按钮）", insufficient_balance: "余额不足！",
    ready_cancelled: "已取消准备", host_badge: "房主", cancel: "取消",
    all: "全部", balance_label: "余额：",
    sys_play: "我也玩", sys_join: "进入群聊", sys_watch: "进入短视频",
    achievements: "成就", owned: "已拥有", trophy_room: "荣誉展厅", earned_on: "获得于",
    minimize_hint: "点击这里最小化游戏，边玩边逛！",
    multiplayer: "多人游戏", singleplayer: "单人游戏"
  },
  en: {
    home: "Home", game: "Game", inbox: "Inbox", mine: "Mine",
    following: "Following", foryou: "For You",
    match_title: "Match Lobby", match_desc: "Real-time PVP · 3 Mins · Winner Takes All",
    season_week: "Weekly Season", season_pool: "Prize Pool", season_rules: "Rules",
    season_rank: "Live Rank", my_rank: "My Rank",
    nearby_groups: "Nearby Groups", join: "Join",
    wallet: "Wallet", tasks: "Tasks", skills: "Skills",
    works: "Works", likes: "Likes", history: "Game Stats",
    balance: "Current Balance", recharge: "Recharge Now",
    total_won: "Today's Profit",
    find_groups: "Discover Groups", search_placeholder: "Search Name or ID",
    sort_dist: "Nearest", sort_pop: "Trending", sort_mem: "Members",
    active: "Active", members: "Mem", distance: "Dist",
    chat_input: "Send a message...", invite: "Challenge", gift: "Gift",
    victory: "VICTORY", defeat: "DEFEAT",
    lang_switch: "切换为中文",
    entry_fee: "Entry", players: "Players", no_likes: "No liked content yet",
    room_lb: "Nearby (LBS)", room_gp: "My Groups", room_qk: "Quick Match", room_create: "Create",
    pay_start: "Start Game", rule_desc: "Rule: Pay Entry → Play Game → Winner takes 80% pool after 3 mins",
    recent_trans: "Recent Transactions", trans_reward: "Match Reward",
    view_all_trans: "View All Transactions", trans_history: "Transaction History",
    trans_type_game: "Game Match", trans_type_recharge: "Top Up", trans_type_gift: "Gift Sent",
    minimize_hint: "Tap here to minimize & keep playing!",
    beans: "Beans", diamonds: "Diamonds", coins: "Coins",
    quick_match_title: "Quick Match", quick_match_sub: "Select tier, auto-match opponents",
    custom_rooms: "Custom Rooms", create_room_title: "Create Private Room",
    select_game: "Select Game", set_entry: "Select Tier", send_invite: "Pay & Send",
    enter_room: "Enter Room", waiting_opp: "Waiting...", challenged_you: "Challenged You",
    tier_junior: "Junior", tier_inter: "Intermediate", tier_master: "Master",
    prize: "Prize", capacity: "Capacity", playing: "Playing",
    mode_friendly: "Friendly", mode_compete: "Competitive",
    room_cost: "Room Fee", host_pay: "Host Pays", invite_friend: "Invite Friends",
    compete_desc: "All players pay entry fee, winner takes pool", friendly_desc: "Host pays room fee, no entry fee, no prize",
    room_lobby: "Room Lobby", kick: "Kick", ready: "Ready", start: "Start", waiting: "Waiting...",
    host: "Host", you: "You", leave_room: "Leave Room", room_id: "Room ID",
    disband: "Disband", disband_warn: "Disbanding will refund other players but NOT your room fee. You will be restricted from creating rooms for 15 mins.",
    pay_confirm: "Confirm Payment", pay_msg: "Pay entry fee to ready up", pay_btn: "Confirm Pay",
    cant_leave: "Entry fee paid. Cannot leave.", paid: "Paid",
    cooldown_msg: "Creation Cooldown (15m)", friend_invite: "Friendly Invite", comp_invite: "Pro Challenge",
    exchange: "Exchange", exchange_title: "Exchange Coins to Beans", exchange_rate: "1 Coin = 100 Beans",
    confirm_exchange: "Confirm", input_coins: "Input Coins", withdraw: "Withdraw",
    back_home: "Back to Lobby", game_over: "Game Over", playing_now: "Playing",
    cancel_ready: "Cancel Ready", ready_cancel_hint: "Hold to Cancel", shared_success: "Shared Successfully",
    hot_games: "Hot Games", all_games: "All Games", rec_groups: "Recommended Groups",
    level_up_tasks: "Level Up Tasks", level_up_desc: "Complete daily missions to earn EXP & Beans!",
    task_center: "Task Center", daily_missions: "Daily Missions", weekly_chest: "Weekly Chest",
    weekly_chest_desc: "Complete 15 daily tasks to open", claim: "Claim", claimed: "Done",
    next_level: "Next Level: Unlock Exclusive Avatar Frame", elite_gamer: "Elite Gamer",
    join_group_modal_title: "Join Group", join_group_desc: "Join this group to connect with players nearby, organize matches, and share your gaming moments!",
    welcome_group: "Welcome to the group!", welcome_back: "Welcome back!",
    popular: "Popular", newest: "Newest", most_played: "Most Played", more: "More",
    play_also: "Play Also", loading_game: "Loading Game...", preparing_assets: "Preparing assets and connecting players",
    game_started: "Game Started (Simulated)", joined_group_toast: "Joined",
    tap_to_play: "Tap anywhere to play (Simulated)", you_brackets: "(You)",
    fans: "Fans", likes_count: "Likes", just_now: "Just now", km: "km",
    level: "Level", exp: "EXP", favorite: "Favorite", share: "Share",
    rec_game: "Hot", players_online: "Players Online", play_now: "Play Now",
    rec_room: "Recommended Room", nearby: "Nearby", shorts: "Shorts",
    comments: "Comments", add_comment: "Add a comment...", sample_comment: "This is a great video! 🔥",
    guest: "Guest", game_room: "Game Room", ready_excl: "Ready!",
    cancel_ready_first: "Please cancel ready first (Long press Ready button)", insufficient_balance: "Insufficient balance!",
    ready_cancelled: "Ready Cancelled", host_badge: "HOST", cancel: "Cancel",
    all: "All", balance_label: "Balance:",
    sys_play: "Play Also", sys_join: "Join Group", sys_watch: "Watch Video",
    achievements: "Achievements", owned: "Owned", trophy_room: "Trophy Room", earned_on: "Earned on",
    multiplayer: "Multiplayer", singleplayer: "Singleplayer"
  }
};

// --- Mock Data ---

const GAMES = [
  { id: 1, title: "Ludo Master", image: "from-yellow-500 to-red-500", players: "2.5M", type: "Board", minEntry: 100, category: "hot" },
  { id: 2, title: "Block Puzzle", image: "from-blue-500 to-cyan-400", players: "1.8M", type: "Puzzle", minEntry: 50, category: "recent" },
  { id: 3, title: "Cricket Clash", image: "from-blue-600 to-indigo-800", players: "5.0M", type: "Sports", minEntry: 200, category: "hot" },
  { id: 4, title: "Candy Match", image: "from-pink-400 to-purple-500", players: "3.2M", type: "Puzzle", minEntry: 50, category: "recent" },
  { id: 5, title: "Car Racing", image: "from-red-600 to-orange-600", players: "1.2M", type: "Racing", minEntry: 100, category: "all" },
  { id: 6, title: "Chess Pro", image: "from-slate-600 to-slate-800", players: "900k", type: "Board", minEntry: 200, category: "all" },
  { id: 7, title: "Bubble Shooter", image: "from-cyan-400 to-blue-500", players: "850k", type: "Puzzle", minEntry: 50, category: "all" },
  { id: 8, title: "Snake.io", image: "from-green-500 to-emerald-700", players: "2.1M", type: "Action", minEntry: 100, category: "hot" },
  { id: 9, title: "Pool 8 Ball", image: "from-indigo-500 to-purple-700", players: "1.5M", type: "Sports", minEntry: 200, category: "all" },
  { id: 10, title: "Word Connect", image: "from-yellow-400 to-orange-500", players: "600k", type: "Puzzle", minEntry: 50, category: "all" },
  { id: 11, title: "Archery King", image: "from-stone-500 to-stone-700", players: "450k", type: "Sports", minEntry: 100, category: "all" },
  { id: 12, title: "Knife Hit", image: "from-red-500 to-rose-700", players: "1.1M", type: "Action", minEntry: 50, category: "recent" },
  { id: 13, title: "Tower Stack", image: "from-blue-400 to-cyan-600", players: "750k", type: "Arcade", minEntry: 50, category: "all" },
  { id: 14, title: "Piano Tiles", image: "from-purple-500 to-pink-600", players: "3.5M", type: "Music", minEntry: 100, category: "hot" },
  { id: 15, title: "Solitaire", image: "from-green-600 to-emerald-800", players: "950k", type: "Card", minEntry: 50, category: "all" },
  { id: 16, title: "Dominoes", image: "from-slate-500 to-gray-700", players: "500k", type: "Board", minEntry: 100, category: "all" },
  { id: 17, title: "Bingo Bash", image: "from-pink-500 to-rose-600", players: "1.3M", type: "Casino", minEntry: 200, category: "all" },
  { id: 18, title: "Subway Run", image: "from-yellow-500 to-orange-600", players: "4.2M", type: "Action", minEntry: 100, category: "hot" },
];

const MATCH_ROOMS = [
  { id: 101, name: "Mumbai Elite", entry: 500, prize: 800, players: 1240, tag: "District", capacity: 4, current: 3, mode: 'compete', host: 'Raj', gameName: "Ludo Master" },
  { id: 102, name: "Tech Park Ludo", entry: 1000, prize: 1600, players: 560, tag: "Nearby", capacity: 2, current: 1, mode: 'compete', host: 'Amit', gameName: "Ludo Master" },
  { id: 103, name: "Friendly Match", entry: 0, prize: 0, players: 8900, tag: "Group", capacity: 4, current: 2, mode: 'friendly', host: 'Priya', gameName: "Candy Match" },
  { id: 104, name: "Pro Cricket", entry: 200, prize: 320, players: 120, tag: "Nearby", capacity: 2, current: 1, mode: 'compete', host: 'Vikram', gameName: "Cricket Clash" },
  { id: 105, name: "Late Night Fun", entry: 50, prize: 80, players: 45, tag: "Group", capacity: 4, current: 3, mode: 'friendly', host: 'Neha', gameName: "Fruit Slicer" },
];

const MATCH_TIERS = [
  { id: 1, name: "tier_junior", entry: 50, prize: 80, capacity: 2, color: "bg-blue-500" },
  { id: 2, name: "tier_inter", entry: 200, prize: 640, capacity: 4, color: "bg-purple-500" },
  { id: 3, name: "tier_master", entry: 1000, prize: 1600, capacity: 2, color: "bg-yellow-500" },
];

const EXTENDED_GROUPS = [
  { id: 101, name: "Mumbai Gamers Club", dist: 0.5, members: 4520, activity: 98, tags: ["Gaming", "Ludo"] },
  { id: 102, name: "Pune Food & Fun", dist: 12.5, members: 120, activity: 45, tags: ["Social"] },
  { id: 103, name: "Tech Park Ludo", dist: 1.2, members: 56, activity: 88, tags: ["Office"] },
  { id: 104, name: "Bangalore Techies", dist: 850, members: 2300, activity: 92, tags: ["Tech", "Gaming"] },
  { id: 105, name: "Delhi Daredevils", dist: 1200, members: 5600, activity: 99, tags: ["Cricket"] },
  { id: 106, name: "Chennai Chess Club", dist: 1400, members: 1200, activity: 85, tags: ["Chess"] },
  { id: 107, name: "Hyderabad Hunters", dist: 700, members: 3400, activity: 95, tags: ["Action"] },
  { id: 108, name: "Kolkata Knights", dist: 1600, members: 2800, activity: 90, tags: ["Sports"] },
  { id: 109, name: "Jaipur Jewels", dist: 1100, members: 900, activity: 75, tags: ["Casual"] },
  { id: 110, name: "Goa Gamers", dist: 500, members: 1500, activity: 80, tags: ["Party"] },
  { id: 111, name: "Ahmedabad Aces", dist: 900, members: 2100, activity: 88, tags: ["Cards"] },
  { id: 112, name: "Lucknow Legends", dist: 1300, members: 1800, activity: 82, tags: ["Strategy"] },
  { id: 113, name: "Surat Strikers", dist: 950, members: 1600, activity: 78, tags: ["Action"] },
  { id: 114, name: "Nagpur Ninjas", dist: 800, members: 1300, activity: 76, tags: ["Arcade"] },
  { id: 115, name: "Indore Indians", dist: 1000, members: 1100, activity: 74, tags: ["Puzzle"] },
];

const VIDEOS = [
  { id: 1, user: "@Priya_Dance", desc: "Walking in Mumbai 🇮🇳 #Mumbai #Vlog", likes: 12500, comments: 342, location: "Mumbai, MH", color: "from-slate-700 to-slate-900" },
  { id: 2, user: "@TechGuru_Ravi", desc: "New Gaming Setup! 🎮 #Gaming", likes: 8200, comments: 156, location: "Bangalore, KA", color: "from-indigo-900 to-purple-900", gameLink: { id: 1, name: "Ludo Master" } },
  { id: 3, user: "@Foodie_Amit", desc: "Best Curry in Town 🍛 #IndianFood", likes: 24000, comments: 890, location: "New Delhi, DL", color: "from-orange-800 to-red-900" },
];

const CHATS = [
  { id: 1, name: "Maharashtra State Group", lastMsg: "System: Welcome!", time: "12:30", type: "State", unread: 5, avatar: "M", members: 12500 },
  { id: 2, name: "Pune District Gamers", lastMsg: "Rohan: Anyone for Ludo?", time: "11:45", type: "District", unread: 2, avatar: "P", members: 3400 },
  { id: 3, name: "Mumbai Elite Club", lastMsg: "Admin: Tournament starts at 8 PM", time: "10:20", type: "City", unread: 0, avatar: "E", members: 850 },
  { id: 4, name: "Ludo Champions", lastMsg: "Rahul: Good game!", time: "Yesterday", type: "Game", unread: 0, avatar: "L" },
  { id: 5, name: "Cricket Fans", lastMsg: "Match delayed due to rain", time: "Yesterday", type: "Interest", unread: 12, avatar: "C" },
];

const GAME_HISTORY = [
  { id: 1, game: "Ludo Master", result: "Win", amount: 800, time: "14:30", entry: 100, players: 4, avatars: ["A", "B", "R", "Me"] },
  { id: 2, game: "Cricket Clash", result: "Loss", amount: -200, time: "12:15", entry: 200, players: 2, avatars: ["V", "Me"] },
  { id: 3, game: "Fruit Slicer", result: "Win", amount: 120, time: "09:45", entry: 50, players: 2, avatars: ["N", "Me"] },
  { id: 4, game: "Candy Match", result: "Win", amount: 80, time: "08:20", entry: 50, players: 2, avatars: ["S", "Me"] },
  { id: 5, game: "Car Racing", result: "Loss", amount: -100, time: "Yesterday", entry: 100, players: 4, avatars: ["X", "Y", "Z", "Me"] },
  { id: 6, game: "Chess Pro", result: "Win", amount: 400, time: "Yesterday", entry: 200, players: 2, avatars: ["K", "Me"] },
];

const TRANSACTIONS = [
  { id: 1, type: "game", title: "Ludo Master - Win", amount: 800, date: "Today, 14:30", currency: "beans" },
  { id: 2, type: "recharge", title: "UPI Top-up", amount: 5000, date: "Today, 10:00", currency: "beans" },
  { id: 3, type: "game", title: "Cricket Clash - Loss", amount: -200, date: "Today, 12:15", currency: "beans" },
  { id: 4, type: "gift", title: "Sent Gift to @Priya", amount: -50, date: "Yesterday", currency: "diamonds" },
  { id: 5, type: "exchange", title: "Coins to Beans", amount: 10000, date: "Yesterday", currency: "beans" },
];

const DAILY_TASKS = [
  { id: 1, title: "Play 3 Ludo Games", progress: 2, total: 3, reward: 50, type: "Beans" },
  { id: 2, title: "Win 1 Match", progress: 1, total: 1, reward: 10, type: "Exp", claimed: true },
];

const ACHIEVEMENTS = [
  { id: 1, title: "Ludo Master", desc: "Play 50 Games", progress: 24, total: 50, badge: "🥉", color: "bg-orange-700" },
  { id: 2, title: "Sharpshooter", desc: "Score 10,000 Points", progress: 12500, total: 10000, badge: "🥇", color: "bg-yellow-500", claimed: false },
  { id: 3, title: "Social Butterfly", desc: "Join 5 Groups", progress: 2, total: 5, badge: "🥈", color: "bg-slate-400" },
  { id: 4, title: "Winning Streak", desc: "Win 10 Games in a row", progress: 3, total: 10, badge: "🔥", color: "bg-red-600" },
  { id: 5, title: "Big Spender", desc: "Spend 5000 Coins", progress: 1200, total: 5000, badge: "💎", color: "bg-blue-500" },
  { id: 6, title: "Early Bird", desc: "Login before 8 AM", progress: 1, total: 1, badge: "🌅", color: "bg-sky-400", claimed: true },
  { id: 7, title: "Night Owl", desc: "Play after midnight", progress: 5, total: 10, badge: "🦉", color: "bg-indigo-900" },
  { id: 8, title: "Team Player", desc: "Play 20 Team Matches", progress: 15, total: 20, badge: "🤝", color: "bg-green-600" },
  { id: 9, title: "Collector", desc: "Unlock 10 Avatars", progress: 4, total: 10, badge: "🎭", color: "bg-purple-600" },
  { id: 10, title: "Veteran", desc: "Active for 30 Days", progress: 12, total: 30, badge: "🛡️", color: "bg-slate-600" },
];

const GAME_SKILLS = [
  { id: 1, name: "Ludo Master", level: 24, title: "Master", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { id: 2, name: "Cricket Clash", level: 5, title: "Rookie", color: "text-slate-400", bg: "bg-slate-500/10" },
];

const LEADERBOARD = [
  { rank: 1, name: "King_Khan", score: "98,400", avatar: "K" },
  { rank: 2, name: "Mumbai_Don", score: "86,200", avatar: "M" },
  { rank: 3, name: "Priya_Cool", score: "74,500", avatar: "P" },
];

const MY_WORKS = Array(9).fill(0).map((_, i) => ({ id: i, views: (Math.random() * 10 + 1).toFixed(1) + 'k' }));

// --- Sub-Components ---

const BottomNav = ({ activeTab, onTabChange, t }) => {
  const tabs = [
    { id: 'home', icon: Home, label: t.home },
    { id: 'game', icon: Gamepad2, label: t.game },
    { id: 'plus', icon: PlusSquare, label: '', isSpecial: true },
    { id: 'inbox', icon: MessageCircle, label: t.inbox },
    { id: 'mine', icon: User, label: t.mine },
  ];
  return (
    <div className="absolute bottom-0 w-full h-16 bg-white border-t border-gray-200 flex justify-around items-end pb-2 z-40">
      {tabs.map(tab => (
        <button key={tab.id} onClick={() => onTabChange(tab.id)} className={`relative flex flex-col items-center gap-1 w-1/5 ${tab.isSpecial ? '-top-1' : ''} active:scale-90 transition-transform`}>
          {tab.isSpecial ? (
            <div className="w-10 h-8 bg-black rounded-xl flex items-center justify-center shadow-lg"><Plus className="text-white" size={20} strokeWidth={3} /></div>
          ) : (
            <>
              <tab.icon size={24} className={activeTab === tab.id ? 'text-orange-500 fill-current' : 'text-gray-400'} strokeWidth={activeTab === tab.id ? 2.5 : 2}/>
              <span className={`text-[10px] font-bold ${activeTab === tab.id ? 'text-orange-500' : 'text-gray-400'}`}>{tab.label}</span>
              {tab.id === 'inbox' && <span className="absolute top-0 right-3 w-4 h-4 bg-red-500 rounded-full border-2 border-white text-[8px] text-white flex items-center justify-center font-bold">3</span>}
            </>
          )}
        </button>
      ))}
    </div>
  );
};

const HomeTab = ({ t, onTabChange, onJoinRoom, onCreateRoom }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('foryou');
  const [showComments, setShowComments] = useState(false);

  // Mix content: Video, Video, Group, Video, Game, Video
  const feedItems = useMemo(() => [
      { type: 'video', data: VIDEOS[0] },
      { type: 'video', data: VIDEOS[1] },
      { type: 'group_card', data: EXTENDED_GROUPS[0] },
      { type: 'video', data: VIDEOS[2] },
      { type: 'game_card', data: GAMES[0] },
  ], []);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % feedItems.length);
  const currentItem = feedItems[currentIndex];

  const renderContent = () => {
      if (currentItem.type === 'video') {
          return (
              <div className={`h-full w-full bg-gradient-to-b ${currentItem.data.color} flex items-center justify-center transition-colors duration-500 relative`}>
                  <Play size={64} className="text-white/40 animate-pulse" fill="currentColor" />
                  
                  {/* Right Sidebar Actions */}
                  <div className="absolute right-2 bottom-24 flex flex-col items-center gap-6 z-20" onClick={(e) => e.stopPropagation()}>
                      <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-lg"><Gift size={20} /></div><span className="text-white text-xs font-bold">{t.gift}</span></div>
                      <div className="flex flex-col items-center gap-1"><Heart size={32} className="text-white" /><span className="text-white text-xs">{currentItem.data.likes}</span></div>
                      <div className="flex flex-col items-center gap-1" onClick={() => setShowComments(true)}><MessageSquare size={32} className="text-white" /><span className="text-white text-xs">{currentItem.data.comments}</span></div>
                      <div className="flex flex-col items-center gap-1"><Star size={32} className="text-white" /><span className="text-white text-xs">{t.favorite}</span></div>
                      <div className="flex flex-col items-center gap-1"><Share2 size={32} className="text-white" /><span className="text-white text-xs">{t.share}</span></div>
                  </div>

                  {/* Bottom Left Info */}
                  <div className="absolute left-4 bottom-20 right-16 z-20 text-white flex flex-col items-start" onClick={(e) => e.stopPropagation()}>
                      {currentItem.data.gameLink && (
                          <div className="mb-4 animate-in slide-in-from-left duration-700">
                              <div 
                                  className="bg-black/40 backdrop-blur-md border border-white/20 rounded-full pl-1 pr-3 py-1 flex items-center gap-2 cursor-pointer active:scale-95 transition-transform hover:bg-black/60"
                                  onClick={() => onCreateRoom({ gameName: currentItem.data.gameLink.name, mode: 'compete', entry: 100, capacity: 4 })}
                              >
                                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center shadow-lg border border-white/20">
                                      <Gamepad2 size={16} className="text-white" />
                                  </div>
                                  <div className="flex flex-col">
                                      <span className="text-[8px] text-yellow-300 font-bold uppercase tracking-wider leading-none mb-0.5">{t.play_also}</span>
                                      <span className="text-xs font-bold text-white leading-none">{currentItem.data.gameLink.name}</span>
                                  </div>
                                  <ChevronRight size={14} className="text-white/60 ml-1" />
                              </div>
                          </div>
                      )}
                      <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-500 relative">
                              {/* Avatar Image Placeholder */}
                              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold border-2 border-black">+</div>
                          </div>
                          <h3 className="font-bold text-lg shadow-black drop-shadow-md">{currentItem.data.user}</h3>
                      </div>
                      <div className="flex items-center gap-2 mb-2 bg-black/30 w-fit px-2 py-1 rounded-lg backdrop-blur-sm"><MapPin size={14} className="text-red-400" /><span className="text-xs font-bold">{currentItem.data.location}</span></div>
                      <p className="text-sm opacity-90 leading-tight mb-2 shadow-black drop-shadow-md">{currentItem.data.desc}</p>
                  </div>
              </div>
          );
      } else if (currentItem.type === 'group_card') {
          return (
              <div className="h-full w-full bg-white flex flex-col items-center justify-center p-8 relative">
                  <div className="absolute top-4 right-4 text-gray-400 text-xs font-bold uppercase tracking-widest">{t.rec_groups}</div>
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white mb-6 shadow-2xl shadow-indigo-500/20">{currentItem.data.name[0]}</div>
                  <h2 className="text-2xl font-black text-slate-900 mb-2 text-center">{currentItem.data.name}</h2>
                  <div className="flex gap-4 text-gray-500 text-sm mb-8">
                      <span className="flex items-center gap-1"><Users size={16}/> {currentItem.data.members} {t.members}</span>
                      <span className="flex items-center gap-1"><MapPin size={16}/> {currentItem.data.dist}{t.km}</span>
                  </div>
                  <button className="w-full py-4 bg-blue-600 rounded-2xl font-bold text-white text-lg shadow-lg shadow-blue-600/20">{t.join_group_modal_title}</button>
              </div>
          );
      } else if (currentItem.type === 'game_card') {
           return (
              <div className="h-full w-full bg-white flex relative">
                  {/* Full Screen Game Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentItem.data.image} opacity-80`}></div>
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
                  
                  {/* Center: Game Icon & Title */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none pb-20">
                      <div className="relative mb-8">
                          <div className="absolute inset-0 bg-white/20 rounded-[2rem] blur-xl animate-pulse"></div>
                          <div className="w-32 h-32 rounded-[2rem] bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center shadow-2xl border-[6px] border-white/20 relative z-10 animate-in zoom-in duration-500">
                              <Gamepad2 size={64} className="text-white drop-shadow-lg" />
                          </div>
                          <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-white shadow-lg z-20">
                              {['Board', 'Sports', 'Racing', 'Action'].includes(currentItem.data.type) ? t.multiplayer : t.singleplayer}
                          </div>
                      </div>
                      
                      <h2 className="text-5xl font-black text-white uppercase tracking-tighter drop-shadow-2xl text-center px-4 italic transform -skew-x-6 mb-2">
                          {currentItem.data.title}
                      </h2>
                      
                      <div className="flex items-center gap-4 mt-4">
                          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                              <span className="text-xs font-bold text-white">{currentItem.data.players}</span>
                          </div>
                      </div>
                  </div>

                  {/* Bottom Interaction Zone */}
                  <div className="absolute bottom-0 left-0 right-0 h-48 z-20 flex flex-col items-center justify-end pb-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <button 
                        className="group relative w-64 h-16 bg-white rounded-full flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
                        onClick={() => {
                            const game = currentItem.data;
                            if (game.title === "Ludo Master") {
                                const roomConfig = { gameName: game.title, mode: 'compete', entry: 100, capacity: 4 };
                                onCreateRoom(roomConfig);
                            } else {
                                const players = [
                                    { id: 99, name: t.you, isHost: false, status: 'ready', avatar: 'Me', hasPaid: true },
                                    { id: 2, name: 'Player_2', isHost: false, status: 'ready', avatar: 'P2', hasPaid: true }
                                ];
                                const room = { id: 999, gameName: game.title, mode: 'compete', entry: 100, capacity: 2, host: 'System', current: 2, isMyRoom: false, players: players };
                                onJoinRoom(room);
                            }
                        }} 
                      >
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                          <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg">
                              <Play size={20} fill="currentColor" className="ml-1" />
                          </div>
                          <span className="text-slate-900 font-black text-xl uppercase tracking-widest">{t.play_now}</span>
                          <div className="absolute -top-3 right-4 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce">
                              HOT
                          </div>
                      </button>
                      
                      <button 
                          onClick={handleNext}
                          className="mt-6 text-white/50 text-sm font-bold hover:text-white transition-colors flex items-center gap-2"
                      >
                          <span>{t.not_interested}</span>
                          <ChevronDown size={16} />
                      </button>
                  </div>
              </div>
           );
      } else { // room_card
           return (
              <div className="h-full w-full bg-white flex flex-col items-center justify-center p-8 relative">
                  <div className="absolute top-4 right-4 text-gray-400 text-xs font-bold uppercase tracking-widest">{t.rec_room}</div>
                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 w-full mb-8 shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                          <span className="bg-red-500/10 text-red-500 px-2 py-1 rounded text-xs font-bold">{t.mode_compete}</span>
                          <span className="text-yellow-500 font-bold flex items-center gap-1"><Coins size={14}/> {currentItem.data.entry}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{currentItem.data.name}</h3>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Users size={14}/> {currentItem.data.current}/{currentItem.data.capacity} {t.players}
                      </div>
                  </div>
                  <button className="w-full py-4 bg-red-500 text-white rounded-2xl font-bold text-lg shadow-lg shadow-red-500/20">{t.enter_room}</button>
              </div>
           );
      }
  };

  return (
    <div className="h-full bg-black relative overflow-hidden" onClick={handleNext}>
      {/* Header */}
      <div className="absolute top-12 left-0 right-0 z-30 flex items-center justify-between px-4">
          <Search className="text-white opacity-80" size={24} />
          <div className="flex gap-4 text-white text-base font-bold shadow-black drop-shadow-md">
            {['following', 'nearby', 'shorts', 'foryou'].map(key => (
                <span key={key} onClick={(e) => { e.stopPropagation(); setActiveTab(key); }} className={`transition-opacity ${activeTab === key ? 'opacity-100 border-b-2 border-white pb-1' : 'opacity-60'}`}>{t[key]}</span>
            ))}
          </div>
          <div className="w-6"></div> {/* Spacer for centering */}
      </div>

      {renderContent()}

      {/* Comments Modal */}
      {showComments && (
          <div className="absolute inset-0 z-40 bg-black/50 backdrop-blur-sm flex flex-col justify-end animate-in slide-in-from-bottom" onClick={(e) => e.stopPropagation()}>
              <div className="bg-white rounded-t-3xl h-2/3 p-4 flex flex-col">
                  <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                      <h3 className="font-bold text-slate-900">{t.comments} ({currentItem.data.comments || 0})</h3>
                      <button onClick={() => setShowComments(false)}><X size={20} className="text-gray-400"/></button>
                  </div>
                  <div className="flex-1 overflow-y-auto space-y-4">
                      {[1,2,3,4,5].map(i => (
                          <div key={i} className="flex gap-3">
                              <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                              <div>
                                  <div className="text-xs font-bold text-slate-400 mb-0.5">User_{i}</div>
                                  <div className="text-sm text-white">{t.sample_comment}</div>
                              </div>
                          </div>
                      ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                      <input type="text" placeholder={t.add_comment} className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-slate-900 text-sm focus:outline-none"/>
                      <button className="p-2 bg-blue-600 rounded-full text-white"><Send size={16}/></button>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

// --- Updated Room Lobby with Logic ---

const RoomLobby = ({ room, onClose, t, onDisband, onStartGame, showToast }) => {
  const [players, setPlayers] = useState([
    { id: 1, name: room.host, isHost: true, status: 'ready', avatar: room.host[0], hasPaid: true }, // Host treated as paid room fee
    { id: 99, name: t.you, isHost: room.isMyRoom, status: 'waiting', avatar: t.you, hasPaid: false },
    ...(room.current > 1 ? [{ id: 2, name: `${t.guest}_1`, isHost: false, status: 'ready', avatar: 'G', hasPaid: true }] : [])
  ]);
  const [showPayConfirm, setShowPayConfirm] = useState(false);
  const [showDisbandConfirm, setShowDisbandConfirm] = useState(false);
  const [hostPaidEntry, setHostPaidEntry] = useState(false);
  const [longPressTimer, setLongPressTimer] = useState(null);
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const [isHolding, setIsHolding] = useState(false);

  const isHost = room.isMyRoom;
  const isFriendly = room.mode === 'friendly';
  const myBalance = 12450; // Mock balance

  // If host created friendly room, they don't need to pay extra entry.
  // If host created competitive room, they need to pay entry fee to START.
  
  const handleKick = (playerId) => setPlayers(players.filter(p => p.id !== playerId));
  
  const handleReadyClick = () => {
     if (longPressTriggered) {
         setLongPressTriggered(false);
         return;
     }

     const me = players.find(p => p.id === 99);
     if (me.status === 'ready') return; // Already ready

     if (!isFriendly && myBalance < room.entry) {
         showToast(t.insufficient_balance);
         return;
     }
     setPlayers(prev => prev.map(p => p.id === 99 ? { ...p, status: 'ready' } : p));
  };

  const handleCancelReadyStart = () => {
      const me = players.find(p => p.id === 99);
      if (me.status !== 'ready') return;
      
      setLongPressTriggered(false);
      setIsHolding(true);

      const timer = setTimeout(() => {
          setPlayers(prev => prev.map(p => p.id === 99 ? { ...p, status: 'waiting' } : p));
          showToast(t.ready_cancelled);
          setLongPressTriggered(true);
          setIsHolding(false);
      }, 1000);
      setLongPressTimer(timer);
  };

  const handleCancelReadyEnd = () => {
      setIsHolding(false);
      if (longPressTimer) {
          clearTimeout(longPressTimer);
          setLongPressTimer(null);
      }
  };

  const handleStart = () => {
     if (isFriendly) {
        onStartGame(players);
     } else {
        // Check if host needs to pay or just start
        // In this new flow, payment happens on start transition
        onStartGame(players);
     }
  };

  const handleExit = () => {
     const me = players.find(p => p.id === 99);
     if (!isHost && me.status === 'ready') {
        showToast(t.cancel_ready_first);
        return;
     }
     onClose();
  };

  const handleShare = () => {
      showToast(t.shared_success);
  };

  const handleDisbandRoom = () => {
     setShowDisbandConfirm(true);
  }

  const confirmDisband = () => {
     onDisband();
     onClose();
  }

  const slots = Array(room.capacity).fill(null).map((_, i) => players[i] || null);

  return (
    <div className="absolute inset-0 bg-gray-50 z-[60] flex flex-col animate-in zoom-in-95">
       {/* Disband Modal */}
       {showDisbandConfirm && (
          <div className="absolute inset-0 z-[70] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
             <div className="bg-white border border-red-200 p-6 rounded-2xl w-full max-w-xs text-center animate-slide-up shadow-2xl">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <AlertTriangle size={32} className="text-red-500"/>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.disband}</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">{t.disband_warn}</p>
                <div className="flex gap-3">
                   <button onClick={() => setShowDisbandConfirm(false)} className="flex-1 py-3 rounded-xl bg-gray-100 text-gray-500 font-bold hover:bg-gray-200">{t.cancel}</button>
                   <button onClick={confirmDisband} className="flex-1 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700">{t.disband}</button>
                </div>
             </div>
          </div>
       )}

       <div className="pt-12 px-4 pb-4 bg-white border-b border-gray-200 flex justify-between items-center">
          <div>
             <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                {room.gameName || t.game_room} <span className={`text-[10px] px-2 py-0.5 rounded-full ${room.mode === 'friendly' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{room.mode === 'friendly' ? t.mode_friendly : t.mode_compete}</span>
             </h2>
             <div className="text-xs text-gray-500 flex items-center gap-2"><span>{t.room_id}: {room.id}</span><span className="text-gray-600 font-bold flex items-center gap-1"><Users size={12}/>{room.current}/{room.capacity}</span>{room.mode === 'compete' && <span className="text-yellow-600 font-bold">{t.entry_fee}: {room.entry}</span>}</div>
          </div>
          <div className="flex gap-2">
             {isHost && <button onClick={handleShare} className="bg-blue-50 text-blue-600 p-2 rounded-full hover:bg-blue-100"><Share2 size={20}/></button>}
             <button 
                onClick={handleExit} 
                disabled={players.find(p => p.id === 99)?.status === 'ready'}
                className={`p-2 rounded-full transition-colors ${players.find(p => p.id === 99)?.status === 'ready' ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-red-50 text-red-500 hover:bg-red-100'}`}
             >
                <LogOut size={20}/>
             </button>
          </div>
       </div>
       <div className="flex-1 p-6 grid grid-cols-2 gap-4 content-start overflow-y-auto">
          {slots.map((player, i) => (
             <div key={i} className={`aspect-square rounded-2xl border-2 flex flex-col items-center justify-center relative ${player ? 'border-gray-200 bg-white' : 'border-dashed border-gray-300 bg-gray-50'}`}>
                {player ? (
                   <>
                      {isHost && !player.isHost && (<button onClick={() => handleKick(player.id)} className="absolute top-2 right-2 text-red-500 hover:scale-110 transition-transform"><Ban size={16}/></button>)}
                      {player.isHost && (<div className="absolute top-2 left-2 bg-yellow-500 text-black text-[10px] font-bold px-1.5 rounded">{t.host_badge}</div>)}
                      <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-2xl font-bold text-white mb-2 shadow-lg">{player.avatar}</div>
                      <div className="font-bold text-slate-900 text-sm">{player.name}</div>
                      <div className={`text-xs mt-1 font-bold ${player.status === 'ready' ? 'text-green-600' : 'text-gray-400'}`}>
                         {player.status === 'ready' ? (isFriendly ? t.ready : "Ready") : '...'}
                      </div>
                   </>
                ) : (
                   <div className="flex flex-col items-center text-gray-400"><div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center mb-2"><PlusSquare size={20}/></div><span className="text-xs">{t.waiting}</span></div>
                )}
             </div>
          ))}
       </div>
       <div className="p-4 bg-white border-t border-gray-200 flex gap-3">
          {isHost ? (
             <>
                <button onClick={handleDisbandRoom} className="px-4 bg-red-50 text-red-600 border border-red-200 rounded-xl font-bold text-xs flex flex-col items-center justify-center gap-1 hover:bg-red-100"><AlertTriangle size={16}/> {t.disband}</button>
                <button onClick={handleStart} className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 py-3.5 rounded-xl font-black text-lg text-white shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"><Play size={20} fill="currentColor"/> {t.start}</button>
             </>
          ) : (
             <button 
                onClick={handleReadyClick} 
                onMouseDown={handleCancelReadyStart} 
                onMouseUp={handleCancelReadyEnd}
                onMouseLeave={handleCancelReadyEnd}
                onTouchStart={handleCancelReadyStart}
                onTouchEnd={handleCancelReadyEnd}
                className={`w-full py-3.5 rounded-xl font-bold text-lg text-white shadow-lg active:scale-95 transition-transform relative overflow-hidden ${players.find(p=>p.id===99)?.status === 'ready' ? 'bg-green-600' : 'bg-blue-600'}`}>
                <div className={`absolute inset-0 bg-black/20 transition-all ease-linear origin-left ${isHolding ? 'w-full duration-[1000ms]' : 'w-0 duration-0'}`}></div>
                <span className="relative z-10">{players.find(p=>p.id===99)?.status === 'ready' ? (isFriendly ? t.ready_excl : t.ready_cancel_hint) : t.ready}</span>
             </button>
          )}
       </div>
    </div>
  );
};

const WalletPage = ({ onClose, t, showToast }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('coins');
  const [subPage, setSubPage] = useState('main');
  const [showExchange, setShowExchange] = useState(false);
  const [exchangeAmount, setExchangeAmount] = useState('');

  const CurrencyIcon = ({ type, className }) => {
     if(type==='beans') return <Coins className={className} size={16} fill="currentColor"/>;
     if(type==='diamonds') return <Gem className={className} size={16} fill="currentColor"/>;
     return <CircleDollarSign className={className} size={16}/>;
  }

  if (subPage === 'history') {
     return (
        <div className="absolute inset-0 bg-gray-50 z-50 flex flex-col animate-in slide-in-from-right">
           <div className="pt-12 px-4 pb-4 bg-white border-b border-gray-200 flex items-center gap-3">
             <button onClick={() => setSubPage('main')}><ChevronLeft size={24} className="text-slate-900"/></button><h1 className="text-lg font-bold text-slate-900">{t.trans_history}</h1>
           </div>
           <div className="flex p-4 gap-2 overflow-x-auto">{['all', 'beans', 'diamonds', 'coins'].map(c => (<button key={c} className={`px-4 py-1.5 rounded-full text-xs font-bold capitalize ${c==='all' ? 'bg-slate-800 text-white' : 'bg-gray-200 text-gray-600'}`}>{t[c] || t.all}</button>))}</div>
           <div className="flex-1 overflow-y-auto p-4 space-y-3">{TRANSACTIONS.map(tx => (<div key={tx.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center"><div className="flex items-center gap-3"><div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.amount > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>{tx.amount > 0 ? <TrendingUp size={18}/> : <ArrowRightLeft size={18}/>}</div><div><div className="font-bold text-sm text-slate-900">{tx.title}</div><div className="text-[10px] text-gray-500">{tx.date}</div></div></div><div className={`font-mono font-bold flex items-center gap-1 ${tx.amount > 0 ? 'text-green-600' : 'text-slate-900'}`}>{tx.amount > 0 ? '+' : ''}{tx.amount}<CurrencyIcon type={tx.currency} className={tx.currency === 'beans' ? 'text-yellow-500' : tx.currency === 'diamonds' ? 'text-pink-500' : 'text-blue-500'} /></div></div>))}</div>
        </div>
     )
  }

  return (
    <div className="absolute inset-0 bg-gray-50 z-50 flex flex-col animate-in slide-in-from-bottom">
       {showExchange && (
          <div className="absolute inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
             <div className="bg-white border border-gray-200 p-6 rounded-2xl w-full max-w-xs animate-slide-up shadow-xl">
                <div className="flex justify-between items-center mb-4"><h3 className="text-lg font-bold text-slate-900">{t.exchange_title}</h3><button onClick={() => setShowExchange(false)}><X size={20} className="text-gray-400"/></button></div>
                <div className="bg-gray-100 p-3 rounded-xl mb-4 text-center"><div className="text-xs text-gray-500 mb-1">{t.exchange_rate}</div></div>
                
                <div className="flex justify-between items-center mb-2 px-1">
                    <span className="text-xs text-gray-500">{t.balance_label} <span className="text-yellow-500 font-bold">8,900</span></span>
                </div>
                <div className="flex gap-2 mb-4">
                    {[10, 50, 100, 500].map(amt => (
                        <button key={amt} onClick={() => setExchangeAmount(amt)} className="flex-1 py-2 bg-gray-100 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-200 border border-gray-200">{amt}</button>
                    ))}
                </div>

                <div className="mb-4">
                   <label className="text-xs text-gray-500 mb-1 block">{t.input_coins}</label>
                   <input type="number" value={exchangeAmount} onChange={e => setExchangeAmount(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-slate-900 font-bold focus:outline-none focus:border-yellow-500" placeholder="0"/>
                </div>
                <div className="flex justify-between items-center mb-6 px-2">
                   <span className="text-xs text-gray-500">You get:</span>
                   <span className="text-yellow-500 font-bold flex items-center gap-1"><Coins size={14} fill="currentColor"/> {exchangeAmount ? exchangeAmount * 100 : 0}</span>
                </div>
                <button onClick={() => { showToast('Exchange Successful!'); setShowExchange(false); }} className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl shadow-lg shadow-yellow-400/20">{t.confirm_exchange}</button>
             </div>
          </div>
       )}

       <div className="pt-12 px-4 pb-4 bg-white border-b border-gray-200 flex justify-between items-center"><h2 className="text-xl font-bold flex items-center gap-2 text-slate-900"><Wallet size={24} className="text-yellow-500"/> {t.wallet}</h2><button onClick={onClose} className="bg-gray-100 p-2 rounded-full"><X size={20} className="text-gray-600"/></button></div>
       <div className="flex-1 overflow-y-auto p-6">
          <div className="flex bg-gray-100 border border-gray-200 rounded-xl p-1 mb-6">
             {[{id: 'coins', label: t.coins, icon: CircleDollarSign, color: 'text-blue-500'}, {id: 'beans', label: t.beans, icon: Coins, color: 'text-yellow-500'}, {id: 'diamonds', label: t.diamonds, icon: Gem, color: 'text-pink-500'}].map(c => (
                <button key={c.id} onClick={() => setSelectedCurrency(c.id)} className={`flex-1 flex items-center justify-center gap-1 py-2.5 rounded-lg text-xs font-bold transition-all ${selectedCurrency === c.id ? 'bg-white text-slate-900 shadow-sm' : 'text-gray-500'}`}>
                   <c.icon size={14} className={c.color} /> {c.label}
                </button>
             ))}
          </div>
          
          <div className={`p-8 rounded-3xl mb-8 text-center transition-colors shadow-xl relative overflow-hidden ${selectedCurrency === 'beans' ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : selectedCurrency === 'diamonds' ? 'bg-gradient-to-br from-pink-400 to-purple-500' : 'bg-gradient-to-br from-blue-400 to-cyan-500'}`}>
             <div className="absolute top-0 right-0 p-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
             <div className="relative">
                <div className="text-white/90 text-sm mb-2 uppercase tracking-widest font-bold">{t.balance}</div>
                <div className="text-5xl font-black text-white flex items-center justify-center gap-3 drop-shadow-sm">
                   {selectedCurrency === 'beans' ? <Coins size={40} fill="currentColor" /> : selectedCurrency === 'diamonds' ? <Gem size={40} fill="currentColor"/> : <CircleDollarSign size={40}/>} 
                   {selectedCurrency === 'beans' ? '12,450' : selectedCurrency === 'diamonds' ? '520' : '8,900'}
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-8">
             {selectedCurrency === 'coins' && <button className="bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-lg hover:bg-blue-500 transition-colors">{t.recharge}</button>}
             {selectedCurrency === 'beans' && <button onClick={() => setShowExchange(true)} className="bg-yellow-400 text-black py-4 rounded-2xl font-black text-lg shadow-lg shadow-yellow-400/20 hover:bg-yellow-300 transition-colors">{t.exchange}</button>}
             {selectedCurrency === 'diamonds' && <button className="bg-gray-100 text-slate-900 py-4 rounded-2xl font-bold border border-gray-200">{t.withdraw}</button>}
          </div>

          <div><div className="flex justify-between items-center mb-4"><h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">{t.recent_trans}</h3><button onClick={() => setSubPage('history')} className="text-blue-500 text-xs font-bold flex items-center gap-1">{t.view_all_trans} <ChevronRight size={12}/></button></div><div className="space-y-3">{TRANSACTIONS.slice(0, 3).map(tx => (<div key={tx.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center"><div className="flex items-center gap-3"><div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.amount > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>{tx.amount > 0 ? <TrendingUp size={18}/> : <ArrowRightLeft size={18}/>}</div><div><div className="font-bold text-sm text-slate-900">{tx.title}</div><div className="text-[10px] text-gray-500">{tx.date}</div></div></div><div className={`font-mono font-bold flex items-center gap-1 ${tx.amount > 0 ? 'text-green-600' : 'text-slate-900'}`}>{tx.amount > 0 ? '+' : ''}{tx.amount}<CurrencyIcon type={tx.currency} className={tx.currency === 'beans' ? 'text-yellow-500' : tx.currency === 'diamonds' ? 'text-pink-500' : 'text-blue-500'} /></div></div>))}</div></div>
       </div>
    </div>
  );
};

const MineTab = ({ lang, setLang, t, showToast }) => {
  const [activeModal, setActiveModal] = useState(null); 
  const [activeSubTab, setActiveSubTab] = useState('works');
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showWallet, setShowWallet] = useState(false);
  const [showTaskCenter, setShowTaskCenter] = useState(false);

  const totalEarnings = GAME_HISTORY.reduce((acc, curr) => curr.amount > 0 ? acc + curr.amount : acc, 0);

  const handleVideoClick = (video) => {
      setSelectedVideo(video);
      setShowVideoPlayer(true);
  };

  const DetailModal = ({ title, icon: Icon, color, children }) => (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in"><div className="bg-white w-full max-w-sm rounded-3xl border border-gray-200 overflow-hidden flex flex-col max-h-[80vh] animate-slide-up"><div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50"><h2 className={`text-lg font-bold flex items-center gap-2 ${color}`}><Icon size={20}/> {title}</h2><button onClick={() => setActiveModal(null)} className="bg-gray-200 p-2 rounded-full"><X size={16} className="text-gray-600"/></button></div><div className="p-4 overflow-y-auto flex-1 space-y-4">{children}</div></div></div>
  );

  return (
    <div className="h-full bg-gray-50 text-slate-900 flex flex-col relative">
       {showWallet && <WalletPage onClose={() => setShowWallet(false)} t={t} showToast={showToast} />}
       {showTaskCenter && <TaskCenter onClose={() => setShowTaskCenter(false)} t={t} showToast={showToast} />}

       {/* Header */}
       <div className="pt-12 px-6 pb-6 bg-gradient-to-b from-blue-50 to-white">
           <div className="flex justify-between items-start mb-6">
               <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg relative">
                   <img src="https://github.com/shadcn.png" alt="User" className="w-full h-full rounded-full" />
                   <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">Dawn</div>
               </div>
               <div className="flex gap-4">
                   <button className="p-2 bg-white rounded-full shadow-sm"><LayoutGrid size={20} className="text-gray-600"/></button>
                   <button className="p-2 bg-white rounded-full shadow-sm"><Settings size={20} className="text-gray-600"/></button>
               </div>
           </div>
           
           <div className="mb-6">
               <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">Winner <Flame className="text-orange-500" fill="currentColor" size={24}/></h2>
               <div className="text-sm text-gray-500 flex items-center gap-2">ID: 10135992 <div className="bg-gray-200 p-1 rounded"><ArrowRightLeft size={12}/></div></div>
           </div>

           <div className="flex justify-start gap-8 text-center mb-6">
               <div><div className="font-black text-xl text-slate-900">1.2k</div><div className="text-xs text-gray-500">Followers</div></div>
               <div><div className="font-black text-xl text-slate-900">245</div><div className="text-xs text-gray-500">Following</div></div>
               <div><div className="font-black text-xl text-slate-900">12.5k</div><div className="text-xs text-gray-500">Likes</div></div>
               <button className="ml-auto bg-gray-200 px-6 py-1.5 rounded-lg text-sm font-bold text-gray-700">Edit</button>
           </div>
       </div>

       {/* Feature Grid */}
       <div className="px-4 grid grid-cols-3 gap-3 mb-4">
           <div onClick={() => setShowWallet(true)} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-1 active:scale-95 transition-transform">
               <Wallet className="text-blue-500" size={24}/>
               <span className="text-xs font-bold text-slate-700">{t.wallet}</span>
           </div>
           <div onClick={() => setShowTaskCenter(true)} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-1 active:scale-95 transition-transform">
               <Target className="text-orange-500" size={24}/>
               <span className="text-xs font-bold text-slate-700">{t.task_center}</span>
           </div>
           <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-1 active:scale-95 transition-transform">
               <Trophy className="text-yellow-500" size={24}/>
               <span className="text-xs font-bold text-slate-700">Rank</span>
           </div>
       </div>

       {/* Content Tabs */}
       <div className="flex-1 bg-white mt-2 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex flex-col overflow-hidden">
           <div className="flex border-b border-gray-100">
               {['works', 'likes', 'history'].map(tab => (
                   <button 
                       key={tab} 
                       onClick={() => setActiveSubTab(tab)}
                       className={`flex-1 py-4 text-sm font-bold relative ${activeSubTab === tab ? 'text-slate-900' : 'text-gray-400'}`}
                   >
                       {tab === 'works' ? 'Works' : tab === 'likes' ? 'Likes' : 'History'}
                       {activeSubTab === tab && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-slate-900 rounded-full"></div>}
                   </button>
               ))}
           </div>
           
           <div className="flex-1 overflow-y-auto p-1">
               {activeSubTab === 'works' && (
                   <div className="grid grid-cols-3 gap-1">
                       {MY_WORKS.map(work => (
                           <div key={work.id} className="aspect-[3/4] bg-gray-200 relative">
                               <div className="absolute bottom-1 left-1 text-white text-[10px] font-bold flex items-center gap-1"><Play size={8} fill="currentColor"/> {work.views}</div>
                           </div>
                       ))}
                   </div>
               )}
               {activeSubTab === 'likes' && (
                   <div className="flex flex-col items-center justify-center h-40 text-gray-400">
                       <Heart size={32} className="mb-2 opacity-50"/>
                       <span className="text-xs">No liked videos yet</span>
                   </div>
               )}
               {activeSubTab === 'history' && (
                   <div className="p-3 space-y-3">
                       {GAME_HISTORY.map(h => (
                           <div key={h.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100">
                               <div className="flex items-center gap-3">
                                   <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                       {h.game[0]}
                                   </div>
                                   <div>
                                       <div className="font-bold text-slate-900 text-sm">{h.game}</div>
                                       <div className={`text-xs font-bold ${h.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                           {h.amount > 0 ? 'Victory' : 'Defeat'} ({h.amount > 0 ? '+' : ''}{h.amount})
                                       </div>
                                   </div>
                               </div>
                               <button onClick={() => showToast("Starting Game...")} className="px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg">Play Again</button>
                           </div>
                       ))}
                   </div>
               )}
           </div>
       </div>
    </div>
  );
};

const GroupFinder = ({ onClose, t, onOpenChat }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("dist");
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);

  const filteredGroups = useMemo(() => {
    let result = EXTENDED_GROUPS.filter(g => g.name.toLowerCase().includes(searchTerm.toLowerCase()) || g.id.toString().includes(searchTerm));
    if (sortBy === 'dist') result.sort((a, b) => a.dist - b.dist);
    if (sortBy === 'pop') result.sort((a, b) => b.activity - a.activity);
    if (sortBy === 'mem') result.sort((a, b) => b.members - a.members);
    return result;
  }, [searchTerm, sortBy]);

  return (
    <div className="absolute inset-0 bg-gray-50 z-50 flex flex-col animate-in slide-in-from-right">
       <div className="pt-12 px-4 pb-4 bg-white border-b border-gray-200 flex items-center justify-between">
           <div className="flex items-center gap-3">
               <button onClick={onClose}><ChevronLeft size={24} className="text-slate-900"/></button>
               <h1 className="text-lg font-bold text-slate-900">{t.find_groups}</h1>
           </div>
           <button onClick={() => setShowSearchOverlay(true)} className="p-2 bg-gray-100 rounded-full"><Search size={20} className="text-slate-900"/></button>
       </div>
       
       {showSearchOverlay && (
           <div className="absolute inset-0 z-[60] bg-white flex flex-col animate-in fade-in">
               <div className="pt-12 px-4 pb-4 border-b border-gray-200 flex items-center gap-3">
                   <div className="relative flex-1">
                       <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                       <input autoFocus type="text" placeholder="Search groups, messages..." className="w-full bg-gray-100 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-slate-900 text-sm focus:border-blue-500 focus:outline-none"/>
                   </div>
                   <button onClick={() => setShowSearchOverlay(false)} className="text-slate-900 font-bold text-sm">Cancel</button>
               </div>
               <div className="p-4">
                   <div className="text-xs font-bold text-gray-400 uppercase mb-3">History</div>
                   <div className="flex flex-wrap gap-2">
                       {['Ludo Group', 'Official', 'Anna'].map(k => (
                           <span key={k} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">{k}</span>
                       ))}
                   </div>
               </div>
           </div>
       )}

       <div className="p-4 space-y-4 flex-1 overflow-y-auto">
         <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
             {[{id: 'dist', label: t.sort_dist, icon: MapPin}, {id: 'pop', label: t.sort_pop, icon: Flame}, {id: 'mem', label: t.sort_mem, icon: Users}].map(opt => (
                 <button key={opt.id} onClick={() => setSortBy(opt.id)} className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-xs font-bold transition-all ${sortBy === opt.id ? 'bg-white text-slate-900 shadow-sm' : 'text-gray-500 hover:text-slate-900'}`}>
                     <opt.icon size={12}/> {opt.label}
                 </button>
             ))}
         </div>
         
         <div className="space-y-3 pb-20">
             {filteredGroups.map(group => (
                 <div key={group.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                     <div className="flex items-center gap-3">
                         <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-lg font-bold text-white">{group.name[0]}</div>
                         <div>
                             <h3 className="font-bold text-slate-900 text-sm">{group.name}</h3>
                             <div className="flex items-center gap-3 text-[10px] text-gray-500 mt-1">
                                 <span className="flex items-center gap-0.5"><MapPin size={10}/> {group.dist < 100 ? `${group.dist}${t.km}` : `100+${t.km}`}</span>
                                 <span className="flex items-center gap-0.5"><Users size={10}/> {group.members}</span>
                                 <span className="flex items-center gap-0.5 text-green-500"><Flame size={10}/> {group.activity}</span>
                             </div>
                         </div>
                     </div>
                     <button onClick={() => onOpenChat({ id: group.id, name: group.name, avatar: group.name[0], lastMsg: t.welcome_group, time: t.just_now, unread: 0, type: 'group' })} className="bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold border border-blue-200">{t.join}</button>
                 </div>
             ))}
         </div>
       </div>
    </div>
  );
};

const TaskCenter = ({ onClose, t, showToast }) => {
  const [tasks, setTasks] = useState(DAILY_TASKS);
  const [achievements, setAchievements] = useState(ACHIEVEMENTS);
  const [activeTab, setActiveTab] = useState('daily');
  const [level, setLevel] = useState(5);
  const [exp, setExp] = useState(350);
  const maxExp = 500;

  const handleClaim = (taskId) => {
      setTasks(prev => prev.map(task => {
          if (task.id === taskId) {
              showToast(`${t.claim} ${task.title}!`);
              setExp(e => Math.min(e + 50, maxExp));
              return { ...task, claimed: true };
          }
          return task;
      }));
  };

  const handleClaimAchievement = (achId) => {
      setAchievements(prev => prev.map(ach => {
          if (ach.id === achId) {
              showToast(`Achievement Unlocked: ${ach.title}!`);
              return { ...ach, claimed: true };
          }
          return ach;
      }));
  };

  return (
    <div className="absolute inset-0 bg-gray-50 z-50 flex flex-col animate-in slide-in-from-right">
       {/* Header */}
       <div className="pt-12 px-4 pb-6 bg-gradient-to-b from-blue-50 to-white border-b border-gray-200 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
           <div className="relative z-10 flex items-center justify-between mb-6">
               <button onClick={onClose} className="bg-white/50 p-2 rounded-full backdrop-blur-sm"><ChevronLeft size={24} className="text-slate-900"/></button>
               <h1 className="text-lg font-bold text-slate-900">Level Up Center</h1>
               <button className="bg-white/50 p-2 rounded-full backdrop-blur-sm"><HelpCircle size={20} className="text-gray-500"/></button>
           </div>
           
           {/* Level Card */}
           <div className="relative z-10 flex items-center gap-4">
               <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 p-1 shadow-lg shadow-orange-500/20">
                   <div className="w-full h-full rounded-full bg-white flex items-center justify-center flex-col">
                       <span className="text-[10px] text-gray-500 font-bold uppercase">{t.level}</span>
                       <span className="text-3xl font-black text-slate-900">{level}</span>
                   </div>
               </div>
               <div className="flex-1">
                   <div className="flex justify-between items-end mb-2">
                       <span className="text-slate-900 font-bold text-lg">{t.elite_gamer}</span>
                       <span className="text-xs text-blue-600 font-mono">{exp}/{maxExp} {t.exp}</span>
                   </div>
                   <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden border border-gray-100">
                       <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000" style={{width: `${(exp/maxExp)*100}%`}}></div>
                   </div>
                   <div className="text-[10px] text-gray-500 mt-2">{t.next_level}</div>
               </div>
           </div>
       </div>

       {/* Tabs */}
       <div className="px-4 mt-4">
           <div className="bg-gray-100 p-1 rounded-xl flex border border-gray-200">
               <button onClick={() => setActiveTab('daily')} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'daily' ? 'bg-white text-slate-900 shadow-sm' : 'text-gray-500 hover:text-slate-900'}`}>{t.daily_missions}</button>
               <button onClick={() => setActiveTab('achievements')} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'achievements' ? 'bg-white text-slate-900 shadow-sm' : 'text-gray-500 hover:text-slate-900'}`}>{t.achievements}</button>
           </div>
       </div>

       {/* Task List */}
       <div className="flex-1 overflow-y-auto p-4 space-y-4">
           {activeTab === 'daily' ? (
               <>
                   {/* Check-in Section */}
                   <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-4 text-white mb-4 shadow-lg shadow-blue-500/20">
                       <div className="flex justify-between items-start mb-4">
                           <div>
                               <h3 className="font-bold text-lg">Daily Check-in</h3>
                               <p className="text-xs text-blue-100">Get rewards every day!</p>
                           </div>
                           <button className="bg-white text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm active:scale-95 transition-transform">Check In</button>
                       </div>
                       <div className="flex justify-between gap-2">
                           {[1,2,3,4,5,6,7].map(day => (
                               <div key={day} className={`flex-1 flex flex-col items-center gap-1 p-2 rounded-lg ${day === 3 ? 'bg-white/20 ring-1 ring-white/50' : 'bg-white/10'}`}>
                                   <span className="text-[10px] font-bold opacity-80">Day {day}</span>
                                   {day === 3 ? <Gift size={14} className="animate-bounce"/> : <Coins size={12}/>}
                               </div>
                           ))}
                       </div>
                   </div>

                   <div className="flex items-center gap-2 mb-2">
                       <Target size={18} className="text-yellow-500"/>
                       <h2 className="font-bold text-slate-900">Earn EXP</h2>
                   </div>
                   
                   {/* EXP Earning Behaviors */}
                   <div className="space-y-3 mb-6">
                       {[
                           { title: "Watch 5 Videos", exp: 50, current: 2, target: 5, icon: Play },
                           { title: "Play 3 Games", exp: 100, current: 1, target: 3, icon: Gamepad2 },
                           { title: "Share to Friend", exp: 30, current: 0, target: 1, icon: Share2 },
                           { title: "Join a Group", exp: 80, current: 1, target: 1, claimed: true, icon: Users }
                       ].map((task, i) => (
                           <div key={i} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                               <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${task.claimed ? 'bg-gray-100 text-gray-400' : 'bg-blue-50 text-blue-500'}`}>
                                   <task.icon size={20}/>
                               </div>
                               <div className="flex-1">
                                   <div className="flex justify-between items-center mb-1">
                                       <h3 className={`font-bold text-sm ${task.claimed ? 'text-gray-400' : 'text-slate-900'}`}>{task.title}</h3>
                                       <span className="text-xs font-bold text-orange-500">+{task.exp} EXP</span>
                                   </div>
                                   <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                       <div className={`h-full ${task.claimed ? 'bg-gray-300' : 'bg-blue-500'}`} style={{width: `${(task.current/task.target)*100}%`}}></div>
                                   </div>
                               </div>
                               <button 
                                   disabled={task.claimed || task.current < task.target}
                                   className={`px-3 py-1.5 rounded-lg text-[10px] font-bold ${
                                       task.claimed ? 'bg-gray-100 text-gray-400' : 
                                       task.current >= task.target ? 'bg-orange-500 text-white animate-pulse' : 'bg-gray-100 text-gray-400'
                                   }`}
                               >
                                   {task.claimed ? 'Done' : 'Go'}
                               </button>
                           </div>
                       ))}
                   </div>

                   <div className="flex items-center gap-2 mb-2">
                       <Target size={18} className="text-yellow-500"/>
                       <h2 className="font-bold text-slate-900">{t.daily_missions}</h2>
                   </div>
                   
                   {tasks.map(task => (
                       <div key={task.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                           <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${task.claimed ? 'bg-gray-100 text-gray-400' : 'bg-blue-50 text-blue-500'}`}>
                               {task.claimed ? <CheckCircle2 size={24}/> : <Star size={24}/>}
                           </div>
                           <div className="flex-1">
                               <h3 className={`font-bold text-sm ${task.claimed ? 'text-gray-400' : 'text-slate-900'}`}>{task.title}</h3>
                               <div className="flex items-center gap-2 mt-1">
                                   <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                       <div className={`h-full ${task.claimed ? 'bg-gray-300' : 'bg-yellow-400'}`} style={{width: `${(task.progress/task.total)*100}%`}}></div>
                                   </div>
                                   <span className="text-[10px] text-gray-500">{task.progress}/{task.total}</span>
                               </div>
                           </div>
                           <button 
                               disabled={task.claimed || task.progress < task.total}
                               onClick={() => handleClaim(task.id)}
                               className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                                   task.claimed 
                                       ? 'bg-gray-100 text-gray-400 cursor-default' 
                                       : task.progress >= task.total 
                                           ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg shadow-yellow-400/20 animate-pulse' 
                                           : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                               }`}
                           >
                               {task.claimed ? t.claimed : t.claim}
                           </button>
                       </div>
                   ))}
               </>
           ) : (
               <>
                   <div className="flex items-center gap-2 mb-2">
                       <Trophy size={18} className="text-yellow-500"/>
                       <h2 className="font-bold text-slate-900">{t.achievements}</h2>
                   </div>
                   {[...achievements].sort((a, b) => (a.claimed === b.claimed ? 0 : a.claimed ? 1 : -1)).map(ach => (
                       <div key={ach.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                           <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-lg ${ach.color} text-white`}>
                               {ach.badge}
                           </div>
                           <div className="flex-1">
                               <h3 className="font-bold text-sm text-slate-900">{ach.title}</h3>
                               <div className="text-[10px] text-gray-500 mb-1">{ach.desc}</div>
                               <div className="flex items-center gap-2">
                                   <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                       <div className="h-full bg-yellow-500" style={{width: `${Math.min(100, (ach.progress/ach.total)*100)}%`}}></div>
                                   </div>
                                   <span className="text-[10px] text-gray-500">{ach.progress}/{ach.total}</span>
                               </div>
                           </div>
                           <button 
                               disabled={ach.claimed || ach.progress < ach.total}
                               onClick={() => handleClaimAchievement(ach.id)}
                               className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                                   ach.claimed 
                                       ? 'bg-gray-100 text-gray-400 cursor-default' 
                                       : ach.progress >= ach.total 
                                           ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg shadow-yellow-400/20 animate-pulse' 
                                           : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                               }`}
                           >
                               {ach.claimed ? t.claimed : t.claim}
                           </button>
                       </div>
                   ))}
                   <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4 flex justify-between items-center">
                        <span className="text-gray-500 text-xs">{t.achievements}</span>
                        <span className="text-yellow-500 font-bold">{achievements.filter(a => a.claimed).length}/{achievements.length} {t.owned}</span>
                   </div>

                   {achievements.some(a => a.claimed) && (
                       <div className="mt-8">
                           <div className="flex items-center gap-2 mb-4">
                               <div className="w-1 h-4 bg-yellow-500 rounded-full"></div>
                               <h2 className="font-bold text-slate-900 text-lg">{t.trophy_room}</h2>
                           </div>
                           <div className="grid grid-cols-2 gap-3">
                               {achievements.filter(a => a.claimed).map(ach => (
                                   <div key={ach.id} className="bg-white border border-gray-100 shadow-sm p-3 rounded-xl flex flex-col items-center text-center relative overflow-hidden group">
                                       <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                       <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg ${ach.color} text-white mb-3 ring-4 ring-gray-50`}>
                                           {ach.badge}
                                       </div>
                                       <h3 className="font-bold text-slate-900 text-xs mb-1">{ach.title}</h3>
                                       <p className="text-[10px] text-gray-500">{t.earned_on} 2023/10/24</p>
                                   </div>
                               ))}
                           </div>
                       </div>
                   )}
               </>
           )}

           {activeTab === 'daily' && (
           <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 rounded-2xl p-4 mt-6">
               <div className="flex items-center gap-3 mb-3">
                   <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white"><Gift size={20}/></div>
                   <div>
                       <h3 className="font-bold text-slate-900 text-sm">{t.weekly_chest}</h3>
                       <p className="text-[10px] text-pink-400">{t.weekly_chest_desc}</p>
                   </div>
               </div>
               <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                   <div className="h-full bg-pink-500 w-2/3"></div>
               </div>
               <div className="text-right text-[10px] text-pink-400 mt-1">10/15 Completed</div>
           </div>
           )}
       </div>
    </div>
  );
};

const GameRoomList = ({ game, onClose, t, onJoinRoom }) => {
    const rooms = MATCH_ROOMS.filter(r => r.gameName === game.title);
    const [viewMode, setViewMode] = useState('list'); // 'list' or 'card'
    
    return (
        <div className="h-full bg-gray-50 flex flex-col text-slate-900 pb-20 relative animate-in slide-in-from-right">
            <div className="pt-12 px-4 pb-4 bg-white border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button onClick={onClose}><ChevronLeft size={24} className="text-slate-900"/></button>
                    <h1 className="text-lg font-bold text-slate-900">{game.title}</h1>
                </div>
                <button onClick={() => setViewMode(viewMode === 'list' ? 'card' : 'list')} className="p-2 bg-gray-100 rounded-full border border-gray-200">
                    {viewMode === 'list' ? <LayoutGrid size={18} className="text-slate-900"/> : <LayoutList size={18} className="text-slate-900"/>}
                </button>
            </div>
            
            <div className={`flex-1 overflow-y-auto p-4 ${viewMode === 'card' ? 'grid grid-cols-2 gap-3 content-start' : 'space-y-3'}`}>
                {rooms.map(room => {
                    // Dynamic avatar spacing
                    const maxAvatarWidth = 100; // Max width for the avatar stack
                    const avatarSize = 40; // w-10 = 40px
                    const count = room.current;
                    // Calculate overlap: if count * size > max, we need negative margin
                    // Total width = size + (count-1) * (size + margin)
                    // We want Total width <= maxAvatarWidth (roughly)
                    // Actually simpler: just increase negative margin as count increases
                    // If count is high, margin is more negative (closer to -30). If count is low, margin is -10.
                    const overlapPx = count > 3 ? -25 : -15;

                    // Logic for List View fixed width container
                    let listMarginLeft = -15;
                    if (count > 1) {
                         const containerWidth = 80; // w-20
                         const maxOffset = (containerWidth - avatarSize) / (count - 1);
                         const calculatedMargin = maxOffset - avatarSize;
                         listMarginLeft = Math.min(-15, calculatedMargin);
                    }

                    const joinRoom = () => {
                        const players = [
                            { id: 99, name: t.you, isHost: false, status: 'ready', avatar: 'Me', hasPaid: true },
                            { id: 2, name: 'Player_2', isHost: false, status: 'ready', avatar: 'P2', hasPaid: true },
                            { id: 3, name: 'Player_3', isHost: false, status: 'ready', avatar: 'P3', hasPaid: true },
                            { id: 4, name: 'Player_4', isHost: false, status: 'ready', avatar: 'P4', hasPaid: true }
                        ];
                        onJoinRoom({ ...room, autoStart: true, players: players });
                    };

                    if (viewMode === 'card') {
                        return (
                            <div key={room.id} onClick={joinRoom} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2 active:scale-95 transition-transform cursor-pointer relative overflow-hidden">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                                            {room.host[0]}
                                        </div>
                                        <div className="font-bold text-slate-900 text-sm truncate max-w-[80px]">{room.host}</div>
                                    </div>
                                    <div className="text-xs text-gray-500 flex items-center gap-1">
                                        <Users size={12}/> {room.current}/{room.capacity}
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-2 text-xs text-yellow-500 font-bold">
                                     <Coins size={12}/> {t.entry_fee}: {room.entry}
                                </div>

                                <div className="flex items-center h-8 pl-2 mt-1">
                                     {[...Array(room.current)].map((_, i) => (
                                        <div key={i} style={{ marginLeft: i === 0 ? 0 : `${overlapPx}px`, zIndex: 10-i }} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-slate-900 shadow-sm">
                                            {i === 0 ? room.host[0] : `P${i+1}`}
                                        </div>
                                    ))}
                                </div>
                                
                                <button className="w-full bg-blue-600 py-1.5 rounded-lg text-xs font-bold text-white mt-1">
                                    {t.join}
                                </button>
                            </div>
                        );
                    }

                    return (
                        <div key={room.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center w-20 flex-shrink-0 relative">
                                    {[...Array(room.current)].map((_, i) => (
                                        <div key={i} style={{ marginLeft: i === 0 ? 0 : `${listMarginLeft}px`, zIndex: 10-i }} className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-slate-900 shadow-sm bg-gray-200 relative">
                                            {i === 0 ? room.host[0] : `P${i+1}`}
                                        </div>
                                    ))}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="font-bold text-slate-900 text-sm truncate">{room.host}</div>
                                    <div className="text-xs text-yellow-500 font-bold flex items-center gap-1 mt-1">
                                        <Coins size={12}/> {t.entry_fee}: {room.entry}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-col items-end gap-2">
                                <div className="text-xs text-gray-500 flex items-center gap-1">
                                    <Users size={12}/> {room.current}/{room.capacity}
                                </div>
                                <button onClick={joinRoom} className="bg-blue-600 px-4 py-1.5 rounded-lg text-xs font-bold text-white">
                                    {t.join}
                                </button>
                            </div>
                        </div>
                    );
                })}
                
                {rooms.length === 0 && (
                    <div className="text-center text-gray-500 mt-10">No rooms available. Create one!</div>
                )}
            </div>
            
             <div className="p-4 bg-white border-t border-gray-200">
                <button className="w-full py-3 bg-yellow-400 text-black rounded-xl font-bold shadow-lg shadow-yellow-400/20">
                    {t.room_create}
                </button>
            </div>
        </div>
    )
};

const SystemBanner = ({ t, onAction, activeGameSession, isGameMinimized, onMaximize, onCloseGame }) => {
    const [msgIndex, setMsgIndex] = useState(0);
    const messages = [
        { text: "🔥 User_99 won 500 Beans in Ludo Master!", type: 'game', target: 'Ludo Master', labelKey: 'sys_play' },
        { text: "🏆 Player_X reached Rank #1 in Cricket Clash!", type: 'game', target: 'Cricket Clash', labelKey: 'sys_play' },
        { text: "🎉 New Group 'Mumbai Gamers' is trending!", type: 'group', target: 'Mumbai Gamers', labelKey: 'sys_join' },
        { text: "🎥 Viral: Top 10 Ludo Moments!", type: 'video', target: 'video_1', labelKey: 'sys_watch' },
        { text: "💎 User_A just exchanged 1000 Coins!", type: 'none' }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setMsgIndex(prev => (prev + 1) % messages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    if (activeGameSession && isGameMinimized) {
        return (
           <div className="bg-slate-900 text-white py-2 px-4 flex items-center justify-between border-b border-white/10 shadow-md animate-in slide-in-from-top-2">
               <div className="flex items-center gap-3 overflow-hidden cursor-pointer flex-1" onClick={onMaximize}>
                   <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
                       <Gamepad2 size={16} className="text-white" />
                   </div>
                   <div className="flex flex-col overflow-hidden">
                        <div className="text-[10px] font-bold text-green-400 uppercase tracking-wider flex items-center gap-1.5">
                           <span className="relative flex h-2 w-2">
                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                             <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                           </span>
                           Playing Now
                       </div>
                       <div className="text-xs font-bold truncate text-slate-200">{activeGameSession.room.gameName}</div>
                   </div>
               </div>
               <button 
                   onClick={(e) => { e.stopPropagation(); onCloseGame(); }}
                   className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors shrink-0 ml-2 active:scale-95"
               >
                   <X size={14} className="text-white/80" />
               </button>
           </div>
       );
   }

    const current = messages[msgIndex];

    return (
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 py-2 px-4 flex items-center gap-2 overflow-hidden">
            <div className="bg-red-100 text-red-600 p-1 rounded text-[10px] font-bold uppercase tracking-wider shrink-0">System</div>
            <div className="text-xs text-slate-600 flex-1 flex items-center justify-between overflow-hidden animate-in slide-in-from-bottom-2 fade-in duration-500 key={msgIndex}">
                <span className="truncate mr-2">{current.text}</span>
                {current.type !== 'none' && (
                    <button 
                        onClick={() => onAction && onAction(current)}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap transition-colors"
                    >
                        {t[current.labelKey]}
                    </button>
                )}
            </div>
        </div>
    );
};

const GameTab = ({ t, onJoinRoom, showToast, onOpenChat, onShowHourlyRush, onSystemAction, activeGameSession, isGameMinimized, onMaximize, onCloseGame }) => {
  const [showWallet, setShowWallet] = useState(false);
  const [showTaskCenter, setShowTaskCenter] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [showAllGames, setShowAllGames] = useState(false);
  const [groupTab, setGroupTab] = useState('my_groups');

  const handlePlayClick = (game) => {
     if (game.title === "Ludo Master") {
         setSelectedGame(game);
         return;
     }

     const players = [
        { id: 99, name: t.you, isHost: false, status: 'ready', avatar: 'Me', hasPaid: true },
        { id: 2, name: 'Player_2', isHost: false, status: 'ready', avatar: 'P2', hasPaid: true },
        { id: 3, name: 'Player_3', isHost: false, status: 'ready', avatar: 'P3', hasPaid: true },
        { id: 4, name: 'Player_4', isHost: false, status: 'ready', avatar: 'P4', hasPaid: true }
    ];
    const room = { id: 999, gameName: game.title, mode: 'compete', entry: 100, capacity: 4, host: 'System', current: 4, isMyRoom: false };
    onJoinRoom({ ...room, autoStart: true, players: players });
  };

  if (selectedGame) {
      return <GameRoomList game={selectedGame} onClose={() => setSelectedGame(null)} t={t} onJoinRoom={onJoinRoom} />;
  }

  if (showAllGames) {
      return (
          <div className="h-full bg-gray-50 flex flex-col text-slate-900 pb-20 relative animate-in slide-in-from-right">
              <div className="pt-12 px-4 pb-4 bg-white border-b border-gray-200 flex items-center gap-3">
                  <button onClick={() => setShowAllGames(false)}><ChevronLeft size={24} className="text-slate-900"/></button>
                  <h1 className="text-lg font-bold text-slate-900">{t.all_games}</h1>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                  <div className="grid grid-cols-3 gap-4">
                      {GAMES.map(game => (
                          <div key={game.id} onClick={() => handlePlayClick(game)} className="bg-white rounded-xl overflow-hidden border border-gray-200 active:scale-95 transition-transform cursor-pointer group relative w-full aspect-square shadow-sm">
                              <div className={`absolute inset-0 bg-gradient-to-br ${game.image}`}></div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                              <div className="absolute inset-0 flex flex-col justify-end p-2 text-center">
                                  <h3 className="font-bold text-white text-[10px] leading-tight truncate drop-shadow-md mb-0.5">{game.title}</h3>
                                  <div className="text-[8px] text-white/90 drop-shadow-md flex items-center justify-center gap-1">
                                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                                      {game.players}
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      );
  }

  return (
    <div className="h-full bg-gray-50 flex flex-col text-slate-900 pb-20 relative">
      {showWallet && <WalletPage onClose={() => setShowWallet(false)} t={t} showToast={showToast} />}
      {showTaskCenter && <TaskCenter onClose={() => setShowTaskCenter(false)} t={t} showToast={showToast} />}
      
      {/* Header */}
      <div className="px-4 pt-12 pb-2 bg-white flex justify-between items-center sticky top-0 z-10 shadow-sm">
         <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
                 <img src="https://github.com/shadcn.png" alt="User" className="w-full h-full object-cover" />
             </div>
             <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200" onClick={() => setShowWallet(true)}>
                 <Coins className="text-yellow-500" size={16} fill="currentColor" />
                 <span className="font-bold text-yellow-700 text-sm">11.5K</span>
                 <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs ml-1">+</div>
             </div>
         </div>
         <div className="relative" onClick={() => setShowTaskCenter(true)}>
             <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 active:scale-95 transition-transform">
                  <TrendingUp size={20} className="text-slate-900" />
             </div>
             <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
         </div>
      </div>

      <SystemBanner t={t} onAction={onSystemAction} activeGameSession={activeGameSession} isGameMinimized={isGameMinimized} onMaximize={onMaximize} onCloseGame={onCloseGame} />

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
         {/* Game Cards Grid (Top Half - 2 Large Cards) */}
         <div>
             <div className="flex justify-between items-center mb-3">
                 <h2 className="text-lg font-bold text-slate-900">{t.game}</h2>
                 <button className="text-blue-600 text-xs font-bold flex items-center gap-1" onClick={() => setShowAllGames(true)}>
                     {t.all_games} <ChevronRight size={14}/>
                 </button>
             </div>
             <div className="grid grid-cols-2 gap-3">
                 {GAMES.slice(0, 2).map(game => (
                     <div key={game.id} onClick={() => handlePlayClick(game)} className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 relative overflow-hidden aspect-square flex flex-col items-center justify-end active:scale-95 transition-transform">
                         <div className={`absolute inset-0 bg-gradient-to-br ${game.image} opacity-20`}></div>
                         <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 w-20 h-20 rounded-2xl shadow-lg transform rotate-12 bg-gradient-to-br ${game.id === 1 ? 'from-orange-400 to-red-500' : 'from-blue-400 to-indigo-500'}`}></div>
                         <div className="absolute top-2 right-2 bg-black/20 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1">
                             <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                             <span className="text-[10px] font-bold text-white">{game.players}</span>
                         </div>
                         <h3 className="font-black text-slate-800 text-lg relative z-10 mb-1">{game.title}</h3>
                     </div>
                 ))}
             </div>
         </div>

         {/* Horizontal Scroll Games */}
         <div>
             <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar snap-x">
                 {GAMES.slice(2).map(game => (
                     <div key={game.id} onClick={() => handlePlayClick(game)} className="flex flex-col items-center gap-1 cursor-pointer active:scale-95 transition-transform flex-shrink-0 w-[22%] snap-start">
                         <div className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${game.image} shadow-sm border border-gray-100 relative`}>
                             <div className="absolute bottom-1 right-1 bg-black/20 backdrop-blur-sm px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                                 <div className="w-1 h-1 rounded-full bg-green-400"></div>
                                 <span className="text-[8px] font-bold text-white">{game.players}</span>
                             </div>
                         </div>
                         <span className="text-[10px] font-bold text-slate-700 text-center leading-tight truncate w-full">{game.title}</span>
                     </div>
                 ))}
                 <div onClick={() => setShowAllGames(true)} className="flex flex-col items-center gap-1 cursor-pointer active:scale-95 transition-transform flex-shrink-0 w-[22%] snap-start">
                     <div className="w-full aspect-square rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
                         <LayoutGrid size={24}/>
                     </div>
                     <span className="text-[10px] font-bold text-gray-500 text-center leading-tight">More</span>
                 </div>
             </div>
         </div>

         {/* Group Chat Section */}
         <div>
             <div className="flex justify-between items-center mb-4 border-b border-gray-200">
                 <div className="flex gap-4">
                     {['my_groups', 'nearby', 'hot'].map(tab => (
                         <button 
                            key={tab} 
                            onClick={() => setGroupTab(tab)}
                            className={`pb-2 text-sm font-bold transition-colors relative ${groupTab === tab ? 'text-slate-900' : 'text-gray-400'}`}
                         >
                             {tab === 'my_groups' ? t.room_gp : tab === 'nearby' ? t.nearby : t.popular}
                             {groupTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 rounded-full"></div>}
                         </button>
                     ))}
                 </div>
                 <button onClick={() => onOpenChat({id: 'finder'})} className="text-blue-600 text-xs font-bold flex items-center gap-1 pb-2">
                     {t.more} <ChevronRight size={14}/>
                 </button>
             </div>

             <div className="space-y-3">
                 {groupTab === 'my_groups' ? (
                     EXTENDED_GROUPS.slice(0, 2).map(group => (
                         <div key={group.id} onClick={() => onOpenChat({ id: group.id, name: group.name, avatar: group.name[0], lastMsg: "Hey everyone! Who's up for a game?", time: "2m ago" })} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 active:bg-gray-50 transition-colors">
                             <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg relative">
                                 {group.name[0]}
                                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                             </div>
                             <div className="flex-1 min-w-0">
                                 <div className="flex justify-between items-center mb-0.5">
                                     <h3 className="font-bold text-slate-900 text-sm truncate">{group.name}</h3>
                                     <span className="text-[10px] text-gray-400">2m ago</span>
                                 </div>
                                 <p className="text-xs text-gray-500 truncate">User_123: Anyone want to play Ludo?</p>
                             </div>
                         </div>
                     ))
                 ) : (
                     EXTENDED_GROUPS.slice(2, 12).map(group => (
                         <div key={group.id} onClick={() => onOpenChat({id: 'finder'})} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 active:bg-gray-50 transition-colors">
                             <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center font-bold text-lg">
                                 {group.name[0]}
                             </div>
                             <div className="flex-1">
                                 <h3 className="font-bold text-slate-900 text-sm">{group.name}</h3>
                                 <div className="text-xs text-gray-500 flex items-center gap-2 mt-0.5">
                                     <span className="flex items-center gap-1"><Users size={10}/> {group.members}</span>
                                     <span className="flex items-center gap-1"><MapPin size={10}/> {group.dist}km</span>
                                 </div>
                             </div>
                             <button className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-xs font-bold">Join</button>
                         </div>
                     ))
                 )}
             </div>
         </div>
       </div>
    </div>
  );
};

const InboxTab = ({ t, onCreateRoom, onJoinRoom, createCooldown, activeRoom, showToast, activeChat, setActiveChat, onSystemAction, activeGameSession, isGameMinimized, onMaximize, onCloseGame }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputMsg, setInputMsg] = useState('');
  const [showInviteMenu, setShowInviteMenu] = useState(false);
  const [showGameSelector, setShowGameSelector] = useState(false);
  const [selectedInviteGame, setSelectedInviteGame] = useState(GAMES[0]);
  const [showFinder, setShowFinder] = useState(false);
  const [showRecBubble, setShowRecBubble] = useState(false);
  const [messageSearch, setMessageSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (activeChat) {
        if (activeChat.id === 'finder') {
            setShowFinder(true);
            setActiveChat(null);
        } else {
            setShowRecBubble(false);
            const timer = setTimeout(() => {
                setShowRecBubble(true);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }
  }, [activeChat, setActiveChat]);

  const openChat = (chat) => {
    setActiveChat(chat);
    setChatHistory([{ id: 1, text: chat.lastMsg, sender: 'other', time: chat.time, type: 'text' }]);
  };

  const sendMessage = () => {
    if(!inputMsg.trim()) return;
    setChatHistory(prev => [...prev, { id: Date.now(), text: inputMsg, sender: 'me', time: 'Just now', type: 'text' }]);
    setInputMsg('');
  };

  const handleSendInvite = () => {
     if(createCooldown) {
        showToast(t.cooldown_msg);
        return;
     }
     const players = [
        { id: 99, name: t.you, isHost: false, status: 'ready', avatar: t.you, hasPaid: true },
        { id: 2, name: 'Player_2', isHost: false, status: 'ready', avatar: 'P2', hasPaid: true },
        { id: 3, name: 'Player_3', isHost: false, status: 'ready', avatar: 'P3', hasPaid: true },
        { id: 4, name: 'Player_4', isHost: false, status: 'ready', avatar: 'P4', hasPaid: true }
    ];
    const room = { id: 999, gameName: selectedInviteGame.title, mode: 'compete', entry: 100, capacity: 4, host: 'System', current: 4, isMyRoom: false };
    setChatHistory(prev => [...prev, { id: Date.now(), sender: 'me', time: t.just_now, type: 'playing_card', game: selectedInviteGame }]);
    onJoinRoom({ ...room, autoStart: true, players: players });
    setShowGameSelector(false);
    setShowInviteMenu(false);
  };

  const filteredChats = useMemo(() => {
      if (!messageSearch) return CHATS;
      return CHATS.filter(chat => 
          chat.lastMsg.toLowerCase().includes(messageSearch.toLowerCase()) || 
          chat.name.toLowerCase().includes(messageSearch.toLowerCase())
      );
  }, [messageSearch]);

  if (showFinder) return <GroupFinder onClose={() => setShowFinder(false)} t={t} onOpenChat={(chat) => { setShowFinder(false); setActiveChat(chat); }} />;

  if (activeChat) {
    return (
      <div className="flex flex-col h-full bg-gray-50 z-50 animate-in slide-in-from-right absolute inset-0">
        <div className="pt-12 px-4 pb-4 bg-white border-b border-gray-200 flex items-center justify-between shrink-0"><div className="flex items-center gap-3"><button onClick={() => setActiveChat(null)} className="text-slate-900 hover:text-gray-600"><ChevronLeft size={24} /></button><div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold text-white">{activeChat.avatar}</div><div className="font-bold text-slate-900 text-sm">{activeChat.name}</div></div><MoreHorizontal className="text-gray-500" /></div>
        
        <SystemBanner t={t} onAction={onSystemAction} activeGameSession={activeGameSession} isGameMinimized={isGameMinimized} onMaximize={onMaximize} onCloseGame={onCloseGame} />

        <div className="flex-1 overflow-y-auto p-4 space-y-4" onClick={() => setShowInviteMenu(false)}>
           <div className="flex gap-3 flex-row">
               <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white border border-gray-200 bg-indigo-600">
                  {activeChat.avatar}
               </div>
               <div className="flex flex-col items-start">
                   <div className="border p-2 rounded-2xl w-48 shadow-lg relative overflow-hidden bg-white border-gray-200">
                        <div className="aspect-[9/16] bg-gray-100 rounded-xl mb-2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                            <Play size={24} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80"/>
                            <div className="absolute bottom-2 left-2 text-white text-xs font-bold">New Video! 🔥</div>
                        </div>
                        <div className="text-xs text-gray-600 line-clamp-2 mb-2">Check out this amazing gameplay moment!</div>
                        <button className="w-full py-1.5 rounded-lg text-xs font-bold text-slate-900 bg-gray-100 hover:bg-gray-200 border border-gray-300">Watch</button>
                   </div>
               </div>
           </div>

           {chatHistory.map(msg => (
             <div key={msg.id} className={`flex gap-3 ${msg.sender === 'me' ? 'flex-row-reverse' : 'flex-row'}`}>
               <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white border border-gray-200 ${msg.sender === 'me' ? 'bg-slate-700' : 'bg-indigo-600'}`}>
                  {msg.sender === 'me' ? t.you : activeChat.avatar}
               </div>
               <div className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
               {msg.type === 'playing_card' ? (
                 <div className="border p-3 rounded-2xl w-56 shadow-lg relative overflow-hidden bg-gradient-to-br from-blue-50 to-white border-blue-200">
                    <div className="text-[10px] font-bold mb-2 flex items-center gap-1 uppercase tracking-wider text-blue-600"><Gamepad2 size={12}/> {t.playing_now}</div>
                    <div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center"><Gamepad2 size={20} className="text-slate-900"/></div><div><div className="font-bold text-slate-900 text-sm">{msg.game.title}</div><div className="text-[10px] text-gray-500">{msg.game.type}</div></div></div>
                    <button className="w-full py-2 rounded-lg text-xs font-bold text-white transition-colors bg-blue-600 hover:bg-blue-500">{t.play_also}</button>
                 </div>
               ) : msg.type === 'invite' ? (
                 null
               ) : (
                 <div className={`max-w-[240px] p-3 rounded-2xl text-sm ${msg.sender === 'me' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-slate-900 border border-gray-200 rounded-tl-none shadow-sm'}`}>{msg.text}</div>
               )}
               </div>
             </div>
           ))}
        </div>
        {showGameSelector && (
           <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 rounded-t-3xl p-4 z-50 animate-slide-up shadow-2xl">
              <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-slate-900">{t.select_game}</h3><button onClick={() => setShowGameSelector(false)} className="bg-gray-100 p-1 rounded-full"><X size={16} className="text-gray-600"/></button></div>
              <div className="flex gap-3 overflow-x-auto pb-4 mb-2 no-scrollbar">{GAMES.map(g => (<div key={g.id} onClick={() => setSelectedInviteGame(g)} className={`flex-shrink-0 w-24 p-2 rounded-xl border cursor-pointer transition-all ${selectedInviteGame.id === g.id ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-200'}`}><div className={`w-full h-16 rounded-lg bg-gradient-to-br ${g.image} mb-2`}></div><div className="text-[10px] text-center font-bold truncate text-slate-900">{g.title}</div></div>))}</div>
              
              <button onClick={handleSendInvite} className="w-full bg-blue-600 py-3 rounded-xl font-bold text-white mt-4">{t.start}</button>
           </div>
        )}

        {showRecBubble && (
        <div onClick={() => {
            const ludoGame = GAMES.find(g => g.title === 'Ludo Master') || GAMES[0];
            const players = [
                { id: 99, name: t.you, isHost: false, status: 'ready', avatar: t.you, hasPaid: true },
                { id: 2, name: 'Player_2', isHost: false, status: 'ready', avatar: 'P2', hasPaid: true },
                { id: 3, name: 'Player_3', isHost: false, status: 'ready', avatar: 'P3', hasPaid: true },
                { id: 4, name: 'Player_4', isHost: false, status: 'ready', avatar: 'P4', hasPaid: true }
            ];
            const room = { id: 999, gameName: ludoGame.title, mode: 'compete', entry: 100, capacity: 4, host: 'System', current: 4, isMyRoom: false };
            onJoinRoom({ ...room, autoStart: true, players: players });
            setShowRecBubble(false);
        }} className="absolute bottom-20 left-4 z-40 animate-in slide-in-from-bottom-10 fade-in duration-700 pointer-events-auto cursor-pointer active:scale-95 transition-transform">
            <div className="bg-white/90 backdrop-blur-md border border-gray-200 p-3 rounded-2xl shadow-2xl flex items-center gap-3 max-w-[200px] relative">
                <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
                <button onClick={(e) => { e.stopPropagation(); setShowRecBubble(false); }} className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-0.5 border border-gray-300 text-gray-400 hover:text-slate-900"><X size={12}/></button>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-600 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">{t.rec_game}</div>
                    <div className="font-bold text-slate-900 text-xs truncate">Ludo Master</div>
                    <div className="text-[10px] text-green-600">{activeChat.members ? Math.floor(activeChat.members * 0.42) : 124} {t.playing}</div>
                </div>
            </div>
        </div>
        )}

        <div className="p-3 bg-white border-t border-gray-200 shrink-0 relative flex items-center gap-2">
           {showInviteMenu && (<div className="absolute bottom-16 left-3 bg-white border border-gray-200 rounded-xl p-2 shadow-xl flex flex-col gap-2 w-36 animate-in fade-in slide-in-from-bottom-2 z-40"><button className="flex items-center gap-3 text-xs text-slate-900 p-3 hover:bg-gray-100 rounded-lg transition-colors"><div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500"><Gift size={14}/></div>{t.gift}</button></div>)}
           <button onClick={() => setShowGameSelector(true)} className="p-2 rounded-full transition-colors text-gray-400 hover:text-slate-900"><Gamepad2 size={24} /></button>
           <input type="text" value={inputMsg} onChange={(e) => setInputMsg(e.target.value)} placeholder={t.chat_input} className="flex-1 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 text-slate-900 text-sm focus:outline-none focus:border-blue-500" />
           <button onClick={sendMessage} className="p-2 bg-blue-600 rounded-full text-white"><Send size={18} /></button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-white text-slate-900 flex flex-col pb-20 relative">
       {/* Header */}
       <div className="pt-12 px-4 pb-2 bg-white flex items-center justify-between sticky top-0 z-10">
           {isSearching ? (
               <div className="flex-1 flex items-center gap-2 animate-in fade-in slide-in-from-right-4">
                   <div className="relative flex-1">
                       <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                       <input 
                           autoFocus
                           type="text" 
                           placeholder="Search messages..." 
                           value={messageSearch}
                           onChange={(e) => setMessageSearch(e.target.value)}
                           className="w-full bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                       />
                   </div>
                   <button onClick={() => { setIsSearching(false); setMessageSearch(""); }} className="text-sm font-bold text-gray-500 hover:text-slate-900">Cancel</button>
               </div>
           ) : (
               <>
                   <div className="flex gap-6 text-lg font-bold text-gray-400">
                       <span className="text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-orange-500 after:rounded-full">Groups</span>
                       <span>Official</span>
                       <span className="relative">Message <div className="absolute top-0 -right-2 w-2 h-2 bg-red-500 rounded-full"></div></span>
                   </div>
                   <button onClick={() => setIsSearching(true)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"><Search size={20} className="text-gray-600"/></button>
               </>
           )}
       </div>

       <SystemBanner t={t} onAction={onSystemAction} activeGameSession={activeGameSession} isGameMinimized={isGameMinimized} onMaximize={onMaximize} onCloseGame={onCloseGame} />

       <div className="flex-1 overflow-y-auto">
           {filteredChats.map(chat => (
               <div key={chat.id} onClick={() => openChat(chat)} className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-50">
                   <div className="relative">
                       <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">{chat.avatar}</div>
                       {chat.unread > 0 && <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white text-white text-[10px] flex items-center justify-center font-bold">{chat.unread}</div>}
                   </div>
                   <div className="flex-1">
                       <div className="flex justify-between items-center mb-1">
                           <h4 className="font-bold text-base text-slate-900">{chat.name}</h4>
                           <span className={`text-xs ${chat.unread > 0 ? 'text-green-500 font-bold' : 'text-gray-400'}`}>{chat.time}</span>
                       </div>
                       <div className="flex justify-between items-center">
                           <div className="text-sm text-gray-500 truncate max-w-[200px]">{chat.lastMsg}</div>
                           {chat.id === 1 && <div className="bg-yellow-400 text-[10px] font-bold px-1.5 rounded text-black">OWNER</div>}
                       </div>
                   </div>
               </div>
           ))}
           {filteredChats.length === 0 && (
               <div className="p-8 text-center text-gray-400 text-sm">No messages found</div>
           )}
       </div>
    </div>
  );
};

const FloatingHourlyRush = ({ t, onClick, isGameOver, myRank, myScore, hasClaimableReward }) => {
    const [expanded, setExpanded] = useState(false);

    // Auto-expand on Game Over
    useEffect(() => {
        if (isGameOver) {
            setExpanded(true);
        }
    }, [isGameOver]);

    if (expanded) {
        return (
            <div className="absolute bottom-24 right-4 z-40 w-56 bg-white/95 backdrop-blur-md border border-indigo-200 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 origin-bottom-right">
                <div className={`${isGameOver ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'} p-2 flex justify-between items-center`}>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                        {isGameOver ? <Trophy size={12} className="text-white"/> : <TrendingUp size={12} className="text-white"/>}
                        {isGameOver ? 'Game Finished' : 'Hourly Rush'}
                    </span>
                    <button onClick={(e) => { e.stopPropagation(); setExpanded(false); }}><X size={14} className="text-white/80 hover:text-white"/></button>
                </div>
                <div className="p-3 space-y-3">
                    {isGameOver ? (
                        <div className="text-center">
                            <div className="text-xs text-gray-500 mb-1">Your Final Rank</div>
                            <div className="text-3xl font-black text-slate-900 mb-1">#{myRank}</div>
                            <div className="text-xs text-yellow-600 font-bold mb-2">Score: {myScore}</div>
                            <div className="text-[10px] text-gray-400">Top 10% players get rewards!</div>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>My Rank</span>
                                <span className="text-slate-900 font-bold">#{myRank || 142}</span>
                            </div>
                            <div className="h-px bg-gray-200"></div>
                            <div className="space-y-1">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex justify-between items-center text-[10px]">
                                        <span className="text-gray-500 flex items-center gap-1"><span className={`w-3 h-3 rounded-full flex items-center justify-center text-[8px] ${i===1?'bg-yellow-500 text-black':i===2?'bg-gray-300 text-black':'bg-orange-700 text-white'}`}>{i}</span> Player_{i}</span>
                                        <span className="text-yellow-600 font-mono">{1000 - i*100}</span>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    <button onClick={onClick} className={`w-full mt-1 text-[10px] py-2 rounded-lg font-bold transition-colors ${isGameOver ? 'bg-yellow-500 hover:bg-yellow-400 text-black' : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700'}`}>
                        {isGameOver ? 'View Details & Claim' : 'View Full Board'}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div onClick={() => setExpanded(true)} className={`absolute bottom-24 right-4 z-40 flex items-center gap-2 backdrop-blur-md border rounded-full pl-1 pr-3 py-1 cursor-pointer transition-colors animate-in slide-in-from-right ${isGameOver ? 'bg-yellow-100/80 border-yellow-500/30 hover:bg-yellow-200/80' : 'bg-white/80 border-indigo-200 hover:bg-white/90'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg relative ${isGameOver ? 'bg-gradient-to-br from-yellow-500 to-orange-600' : 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-500/20'}`}>
                {isGameOver ? <Trophy size={14} className="text-white" /> : <TrendingUp size={14} className="text-white" />}
                {hasClaimableReward && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                )}
            </div>
            <div className="flex flex-col leading-none">
                <span className={`text-[8px] font-bold uppercase ${isGameOver ? 'text-yellow-700' : 'text-indigo-600'}`}>{isGameOver ? 'Finished' : 'Hourly Rush'}</span>
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    #{myRank || 142}
                    {hasClaimableReward && <span className="text-[8px] bg-yellow-500 text-black px-1 rounded">Claim</span>}
                </span>
            </div>
        </div>
    );
};

const ActiveGameSession = ({ room, players, onGameOver, t, onShowHourlyRush }) => {
  const [timeLeft, setTimeLeft] = useState(10); // Reduced to 10s for demo
  const [liveScores, setLiveScores] = useState(players.map(p => ({ ...p, score: 0 })));
  const [isGameOver, setIsGameOver] = useState(false);
  const [showMinimizeHint, setShowMinimizeHint] = useState(true);

  // Only show hourly rush for non-Ludo games
  const showHourlyRush = room.gameName !== 'Ludo Master';
  
  const myScore = liveScores.find(p => p.id === 99)?.score || 0;
  const myRank = liveScores.sort((a, b) => b.score - a.score).findIndex(p => p.id === 99) + 1;

  useEffect(() => {
      const timer = setTimeout(() => {
          setShowMinimizeHint(false);
      }, 5000);
      return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isGameOver) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          setIsGameOver(true); // Set local game over state
          return 0;
        }
        return prev - 1;
      });

      setLiveScores(prev => prev.map(p => ({
        ...p,
        score: p.score + Math.floor(Math.random() * 50)
      })).sort((a, b) => b.score - a.score));

    }, 1000); // Normal speed for demo

    return () => clearInterval(timer);
  }, [isGameOver]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="absolute inset-0 bg-gray-900 z-[80] flex flex-col animate-in fade-in">
       {showHourlyRush && !isGameOver && <FloatingHourlyRush t={t} onClick={onShowHourlyRush} isGameOver={isGameOver} myRank={myRank} myScore={myScore} hasClaimableReward={isGameOver && myRank <= 3} />}
       
       {/* Floating Capsule Button (Share | Exit) */}
       <div className="absolute top-12 right-4 z-50 flex flex-col items-end">
          <div className="flex items-center bg-white/90 backdrop-blur-md rounded-full border border-gray-200 overflow-hidden h-9 shadow-lg">
              <button onClick={() => { /* Share logic */ }} className="px-3 h-full hover:bg-gray-100 active:bg-gray-200 transition-colors border-r border-gray-200 flex items-center justify-center">
                  <Share2 size={16} className="text-slate-900" />
              </button>
              <button onClick={() => { setShowMinimizeHint(false); onGameOver('minimize'); }} className="px-3 h-full hover:bg-gray-100 active:bg-gray-200 transition-colors flex items-center justify-center group">
                  <div className="w-3 h-3 rounded-full border-2 border-slate-900 group-hover:bg-slate-900 transition-colors"></div>
              </button>
          </div>
          {showMinimizeHint && (
              <div className="bg-blue-600 text-white text-xs font-bold px-3 py-2 rounded-xl relative animate-bounce shadow-lg mt-2 mr-1 animate-in fade-in slide-in-from-top-2 pointer-events-none">
                  {t.minimize_hint}
                  <div className="absolute -top-1 right-4 w-2 h-2 bg-blue-600 rotate-45"></div>
              </div>
          )}
       </div>

       {/* Game Area (H5 Placeholder) */}
       <div className="flex-1 bg-black relative flex items-center justify-center overflow-hidden">
          {/* Simulated Game Content */}
          <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center transition-opacity duration-1000 ${isGameOver ? 'opacity-20 grayscale' : 'opacity-40'}`}></div>
          
          {!isGameOver ? (
              <div className="relative z-10 text-center p-8 bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-2xl">
                 <Gamepad2 size={64} className="text-slate-900/50 mx-auto mb-4 animate-bounce"/>
                 <h3 className="text-2xl font-black text-slate-900 uppercase tracking-widest mb-2">{room.gameName}</h3>
                 <p className="text-gray-500 text-sm">{t.tap_to_play}</p>
                 <div className="mt-4 text-4xl font-mono font-bold text-yellow-500">{formatTime(timeLeft)}</div>
              </div>
          ) : (
              <div className="relative z-10 text-center p-8 animate-in zoom-in flex flex-col items-center gap-6">
                  <div>
                      <h2 className="text-4xl font-black text-white uppercase tracking-widest mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Time's Up!</h2>
                      <p className="text-gray-300">Game Finished</p>
                  </div>
              </div>
          )}
          
          {/* Interactive Click Area for "Playing" */}
          {!isGameOver && (
              <button 
                className="absolute inset-0 z-20 w-full h-full cursor-crosshair focus:outline-none"
                onClick={() => {
                    setLiveScores(prev => prev.map(p => p.id === 99 ? { ...p, score: p.score + 100 } : p).sort((a, b) => b.score - a.score));
                }}
              ></button>
          )}
       </div>
    </div>
  );
};

const TopStatusBar = ({ activeGameSession, isGameMinimized, onMaximize, onCloseGame }) => {
    return (
        <div className="absolute top-0 w-full h-12 z-50 flex justify-between items-center px-6 text-slate-900 pointer-events-none">
            <span className="text-xs font-bold w-12">9:41</span>
            
            {/* Center Area - The "Island" */}
            <div className="flex-1 flex justify-center pointer-events-auto">
                {activeGameSession && isGameMinimized && (
                    <div 
                        onClick={onMaximize}
                        className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-full h-8 pl-1 pr-3 flex items-center gap-2 shadow-lg cursor-pointer animate-in zoom-in-95 duration-300"
                    >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                            <Gamepad2 size={12} className="text-white" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-900 max-w-[100px] truncate">
                            {activeGameSession.room.gameName}
                        </span>
                         <button 
                            onClick={(e) => { e.stopPropagation(); onCloseGame(); }}
                            className="ml-1 p-0.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-slate-900"
                        >
                            <X size={12} />
                        </button>
                    </div>
                )}
            </div>

            <div className="flex gap-1.5 w-12 justify-end">
                <div className="w-3 h-3 bg-slate-900 rounded-full opacity-80"></div>
                <div className="w-3 h-3 bg-slate-900 rounded-full opacity-80"></div>
            </div>
        </div>
    );
};

const GameResultModal = ({ result, onClose, t, onShowHourlyRush }) => {
  const { room, scores } = result;
  const myRank = scores.findIndex(p => p.id === 99) + 1;
  const totalPrize = room.mode === 'compete' ? (Number(room.entry) * room.capacity * 0.9) : 0; // 10% fee
  
  // Simple prize distribution: 1st: 60%, 2nd: 30%, 3rd: 10%
  const getPrize = (rank) => {
      if (room.mode === 'friendly') return 0;
      if (rank === 1) return Math.floor(totalPrize * 0.6);
      if (rank === 2) return Math.floor(totalPrize * 0.3);
      if (rank === 3) return Math.floor(totalPrize * 0.1);
      return 0;
  };

  return (
      <div className="fixed inset-0 z-[90] bg-white/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-gradient-to-b from-white to-gray-50 w-full max-w-sm rounded-3xl border border-gray-200 p-6 relative overflow-hidden shadow-2xl">
              {/* Confetti / Rays Effect */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

              <div className="relative z-10 text-center">
                  <h2 className="text-3xl font-black italic text-slate-900 mb-1 drop-shadow-sm uppercase">{myRank === 1 ? t.victory : (myRank <= 3 ? 'TOP 3' : t.game_over)}</h2>
                  <p className="text-gray-500 text-xs mb-6">{room.gameName} · {room.mode === 'compete' ? t.mode_compete : t.mode_friendly}</p>
                  
                  {/* Rank Display with Trophy */}
                  <div className="flex justify-center items-end gap-4 mb-8 h-32">
                      {/* 2nd Place */}
                      {scores[1] && (
                          <div className="flex flex-col items-center gap-2">
                              <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center text-lg font-bold text-gray-600 relative">
                                  {scores[1].avatar}
                                  <div className="absolute -bottom-2 bg-gray-400 text-[10px] px-1.5 rounded text-white">2</div>
                              </div>
                              <div className="h-16 w-8 bg-gray-100 rounded-t-lg border-t border-x border-gray-200"></div>
                          </div>
                      )}
                      
                      {/* 1st Place */}
                      <div className="flex flex-col items-center gap-2 -mt-4">
                          <div className="relative">
                              <Crown size={32} className="text-yellow-500 absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce" fill="currentColor" />
                              <div className="w-16 h-16 rounded-full bg-yellow-100 border-2 border-yellow-500 flex items-center justify-center text-2xl font-bold text-slate-900 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                                  {scores[0].avatar}
                              </div>
                              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">1</div>
                          </div>
                          <div className="h-24 w-10 bg-gradient-to-b from-yellow-100 to-gray-100 rounded-t-lg border-t border-x border-yellow-200"></div>
                      </div>

                      {/* 3rd Place */}
                      {scores[2] && (
                          <div className="flex flex-col items-center gap-2">
                              <div className="w-12 h-12 rounded-full bg-orange-100 border-2 border-orange-300 flex items-center justify-center text-lg font-bold text-orange-700 relative">
                                  {scores[2].avatar}
                                  <div className="absolute -bottom-2 bg-orange-400 text-[10px] px-1.5 rounded text-white">3</div>
                              </div>
                              <div className="h-12 w-8 bg-gray-100 rounded-t-lg border-t border-x border-gray-200"></div>
                          </div>
                      )}
                  </div>

                  {/* My Result */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-500 text-xs">{t.my_rank}</span>
                          <span className="text-xl font-bold text-slate-900">#{myRank}</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-xs">{t.prize}</span>
                          <div className="flex items-center gap-1 text-yellow-600 font-bold text-lg">
                              <Coins size={16} fill="currentColor"/>
                              +{getPrize(myRank)}
                          </div>
                      </div>
                  </div>

                  {/* Hourly Rush Board (New Feature) - Only for non-Ludo games */}
                  {false && room.gameName !== 'Ludo Master' && (
                      <div onClick={onShowHourlyRush} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 mb-6 border border-indigo-200 relative overflow-hidden cursor-pointer active:scale-95 transition-transform">
                          <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">1H RUSH</div>
                          <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
                                  <TrendingUp size={20} />
                              </div>
                              <div className="text-left">
                                  <div className="text-slate-900 font-bold text-sm">Hourly Ranking</div>
                                  <div className="text-indigo-600 text-[10px]">Top 1% wins 500 Beans!</div>
                              </div>
                          </div>
                          <div className="flex justify-between items-center text-xs bg-white/60 rounded-lg p-2">
                              <div className="text-gray-600">Your Rank: <span className="text-slate-900 font-bold">#142</span> <span className="text-green-600 text-[10px]">(↑ 5)</span></div>
                              <div className="text-gray-600">To #1: <span className="text-yellow-600 font-bold">240 pts</span></div>
                          </div>
                      </div>
                  )}

                  <button onClick={onClose} className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold text-white shadow-lg hover:scale-[1.02] active:scale-95 transition-all">
                      {t.back_home}
                  </button>
              </div>
          </div>
      </div>
  );
};

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-[100] bg-slate-800/90 backdrop-blur border border-slate-700 text-white px-6 py-3 rounded-full shadow-2xl animate-in slide-in-from-top-4 fade-in flex items-center gap-2 pointer-events-none">
      <CheckCircle2 size={18} className="text-green-500" />
      <span className="text-sm font-bold">{message}</span>
    </div>
  );
};

const GlobalExpTicker = ({ onClick }) => {
    const [exp, setExp] = useState(64);
    const [flying, setFlying] = useState(false);
    const [position, setPosition] = useState({ x: 16, y: 112 }); // Initial top-28 (112px), left-4 (16px)
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0 });
    const startPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setFlying(true);
            setTimeout(() => {
                setFlying(false);
                setExp(prev => prev + 50);
            }, 1000); // Flight duration
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleTouchStart = (e) => {
        // e.preventDefault(); // Don't prevent default here to allow click
        setIsDragging(true);
        const touch = e.touches[0];
        dragStart.current = { x: touch.clientX, y: touch.clientY };
        startPos.current = { ...position };
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        // e.preventDefault(); // Removed to fix passive event listener issue
        const touch = e.touches[0];
        const dx = touch.clientX - dragStart.current.x;
        const dy = touch.clientY - dragStart.current.y;
        setPosition({
            x: startPos.current.x + dx,
            y: startPos.current.y + dy
        });
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        // Snap to edge logic
        // Assuming container width is approx 448px (max-w-md)
        // Center is roughly 224px
        if (position.x < 200) {
            setPosition(prev => ({ ...prev, x: 16 }));
        } else {
            setPosition(prev => ({ ...prev, x: 340 })); // Approx right edge
        }
    };

    // Mouse events for desktop testing
    const handleMouseDown = (e) => {
        setIsDragging(true);
        dragStart.current = { x: e.clientX, y: e.clientY };
        startPos.current = { ...position };
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const dx = e.clientX - dragStart.current.x;
        const dy = e.clientY - dragStart.current.y;
        setPosition({
            x: startPos.current.x + dx,
            y: startPos.current.y + dy
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (position.x < 200) {
            setPosition(prev => ({ ...prev, x: 16 }));
        } else {
            setPosition(prev => ({ ...prev, x: 340 }));
        }
    };

    return (
        <>
            {/* Draggable Ticker */}
            <div 
                onClick={() => !isDragging && onClick && onClick()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{ top: `${position.y}px`, left: `${position.x}px`, cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'none' }}
                className="absolute z-40 bg-slate-900/90 backdrop-blur-md text-white rounded-full pl-1 pr-4 py-1 flex items-center gap-3 shadow-xl border border-white/10 transition-all duration-300 ease-out"
            >
                <div className="w-8 h-8 relative flex items-center justify-center pointer-events-none">
                     <div className="absolute inset-0 bg-green-500 rotate-45 rounded-lg scale-75"></div>
                     <div className="absolute inset-0 bg-green-400 rotate-12 rounded-lg scale-75 opacity-50"></div>
                     <span className="relative z-10 font-black text-[10px] text-yellow-200 drop-shadow-md">XP</span>
                </div>
                <span key={exp} className="font-black text-lg animate-in slide-in-from-bottom-2 fade-in duration-300 pointer-events-none">{exp}</span>
            </div>

            {/* Flying Particle - Absolute relative to container */}
            {flying && (
                <div 
                    className="absolute z-50 w-8 h-8 flex items-center justify-center pointer-events-none"
                    style={{ 
                        left: '16px', 
                        bottom: '80px', // Start from bottom left (near nav)
                        animation: 'flyIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
                    }}
                >
                    <style>{`
                        @keyframes flyIn {
                            0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
                            20% { opacity: 1; }
                            100% { transform: translate(${position.x - 16}px, ${position.y - (850 - 80)}px) scale(1); opacity: 0; } 
                        }
                    `}</style>
                    {/* Note: The keyframe calculation above is tricky with dynamic end positions in CSS. 
                        Ideally we use JS animation or a fixed start point relative to the ticker.
                        Let's simplify: Fly from bottom center to the ticker's current position.
                    */}
                    <div className="w-full h-full relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-green-500 rotate-45 rounded-lg scale-75 shadow-[0_0_15px_rgba(34,197,94,0.8)]"></div>
                        <span className="relative z-10 font-black text-[10px] text-yellow-200">XP</span>
                    </div>
                </div>
            )}
        </>
    );
};

const HourlyRushModal = ({ onClose, t, inGame }) => {
    const [selectedGameId, setSelectedGameId] = useState(GAMES[0].id);
    const [timePeriod, setTimePeriod] = useState('current'); // 'current' or 'last'

    // Mock data for different games/periods
    const getRankings = () => {
        // Just shuffle or change based on game/period for demo
        const base = [1,2,3,4,5,6,7,8,9,10];
        return base;
    };

    return (
        <div className="fixed inset-0 z-[100] bg-white/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-white w-full max-w-sm rounded-3xl border border-gray-200 flex flex-col max-h-[85vh] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-indigo-600 to-transparent pointer-events-none opacity-20"></div>
                
                <div className="p-6 pb-2 relative z-10 flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-wider">Hourly Rush</h2>
                        <p className="text-indigo-600 text-xs">Top 1% wins 500 Beans!</p>
                    </div>
                    <button onClick={onClose} className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-gray-200"><X size={20}/></button>
                </div>

                {/* Game Selector */}
                <div className="px-6 pb-4 relative z-10">
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                        {GAMES.map(game => (
                            <div 
                                key={game.id} 
                                onClick={() => setSelectedGameId(game.id)}
                                className={`flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer transition-opacity ${selectedGameId === game.id ? 'opacity-100 scale-105' : 'opacity-50 hover:opacity-80'}`}
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${game.image} border-2 ${selectedGameId === game.id ? 'border-indigo-600 shadow-lg' : 'border-transparent'}`}></div>
                                <span className="text-[10px] font-bold text-slate-900 truncate w-14 text-center">{game.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Time Period Toggle */}
                <div className="px-6 pb-4 relative z-10 flex justify-center">
                    <div className="bg-gray-100 p-1 rounded-full flex gap-1 border border-gray-200">
                        <button 
                            onClick={() => setTimePeriod('last')}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${timePeriod === 'last' ? 'bg-white text-indigo-900 shadow-lg' : 'text-gray-500 hover:text-slate-900'}`}
                        >
                            Last Hour
                        </button>
                        <button 
                            onClick={() => setTimePeriod('current')}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${timePeriod === 'current' ? 'bg-white text-indigo-900 shadow-lg' : 'text-gray-500 hover:text-slate-900'}`}
                        >
                            Current Hour
                        </button>
                    </div>
                </div>

                <div className="px-6 pb-4 relative z-10">
                    <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white border-2 border-indigo-100 flex items-center justify-center font-bold text-indigo-600">Me</div>
                            <div>
                                <div className="text-slate-900 font-bold text-sm">My Rank</div>
                                <div className="text-indigo-600 text-xs">#{timePeriod === 'last' ? '12' : '142'} <span className="text-green-600">(↑5)</span></div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-yellow-600 font-bold text-lg">{timePeriod === 'last' ? '4,500' : '1,250'}</div>
                            <div className="text-gray-500 text-[10px]">Points</div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-2">
                    {getRankings().map((rank) => (
                        <div key={rank} className={`flex items-center justify-between p-3 rounded-xl ${rank <= 3 ? 'bg-white border border-yellow-200 shadow-sm' : 'bg-gray-50 border border-gray-200'}`}>
                            <div className="flex items-center gap-3">
                                <div className={`w-6 h-6 flex items-center justify-center font-bold text-xs rounded ${rank === 1 ? 'bg-yellow-500 text-black' : rank === 2 ? 'bg-gray-300 text-black' : rank === 3 ? 'bg-orange-700 text-white' : 'text-gray-500'}`}>
                                    {rank}
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                <div className="text-slate-900 font-bold text-sm">Player_{rank}</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-yellow-600 font-mono font-bold text-sm">{2000 - rank * 50}</div>
                                {timePeriod === 'last' && rank <= 3 && (
                                    <button className="bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded-full hover:bg-yellow-400 transition-colors animate-pulse">
                                        Claim
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState('zh'); // Default to Chinese
  const [activeRoom, setActiveRoom] = useState(null); 
  const [createCooldown, setCreateCooldown] = useState(null); // Timestamp for cooldown
  const [activeGameSession, setActiveGameSession] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  const [isLoadingGame, setIsLoadingGame] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);
  const [activeChat, setActiveChat] = useState(null); // Lifted state for chat
  const [showHourlyRush, setShowHourlyRush] = useState(false);
  const [hourlyRushContext, setHourlyRushContext] = useState('global'); // 'global' or 'game'
  const [taskTab, setTaskTab] = useState('daily'); // 'daily' or 'achievements'
  const [isGameMinimized, setIsGameMinimized] = useState(false);
  const t = TEXTS[lang];

  const showToast = (msg) => setToastMsg(msg);

  const handleSystemAction = (action) => {
      if (action.type === 'game') {
          const game = GAMES.find(g => g.title === action.target) || GAMES[0];
          const players = [
            { id: 99, name: t.you, isHost: false, status: 'ready', avatar: 'Me', hasPaid: true },
            { id: 2, name: 'Player_2', isHost: false, status: 'ready', avatar: 'P2', hasPaid: true },
            { id: 3, name: 'Player_3', isHost: false, status: 'ready', avatar: 'P3', hasPaid: true },
            { id: 4, name: 'Player_4', isHost: false, status: 'ready', avatar: 'P4', hasPaid: true }
          ];
          const room = { id: 999, gameName: game.title, mode: 'compete', entry: 100, capacity: 4, host: 'System', current: 4, isMyRoom: false };
          handleJoinRoom({ ...room, autoStart: true, players: players });
      } else if (action.type === 'group') {
          showToast(`${t.joined_group_toast} ${action.target}!`);
          handleOpenChat({ id: 999, name: action.target, avatar: action.target[0], lastMsg: t.welcome_group, time: 'Just now', unread: 0, type: 'group' });
      } else if (action.type === 'video') {
          showToast("Opening Short Video Player...");
      }
  };

  useEffect(() => {
     if(createCooldown && Date.now() > createCooldown) {
        setCreateCooldown(null);
     }
  }, [createCooldown, activeTab]);

  const handleJoinRoom = (roomData) => {
      // Always use quick match flow, skipping room lobby
      setIsLoadingGame(true);
      setTimeout(() => {
          setIsLoadingGame(false);
          setActiveGameSession({ room: roomData, players: roomData.players });
      }, 1500);
  };
  const handleCreateRoom = (roomConfig) => setActiveRoom({ id: Math.floor(Math.random()*10000), gameName: roomConfig.gameName, mode: roomConfig.mode, entry: roomConfig.entry, capacity: roomConfig.capacity, host: 'Me', current: 1, isMyRoom: true });
  const handleDisband = () => {
     // Set cooldown 15 minutes from now (simulated as 15 seconds for demo purposes usually, but logic here is real)
     setCreateCooldown(Date.now() + 15 * 60 * 1000); 
     setActiveRoom(null);
  };

  const handleGameStart = (players) => {
      const roomToStart = activeRoom;
      setActiveRoom(null);
      setIsLoadingGame(true);
      setIsGameMinimized(false); // Ensure game starts maximized
      setTimeout(() => {
          setIsLoadingGame(false);
          setActiveGameSession({ room: roomToStart, players });
      }, 2000);
  };

  const handleExitGame = (result) => {
      if (result === 'minimize') {
          setIsGameMinimized(true);
      } else {
          setActiveGameSession(null);
      }
  };

  const handleOpenChat = (chat) => {
      setActiveChat(chat);
      setActiveTab('inbox');
  };

  const handleShowHourlyRush = (context = 'global') => {
      setHourlyRushContext(context);
      setShowHourlyRush(true);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 font-sans relative">
      <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg font-bold text-sm hover:bg-gray-100 transition-colors z-50 text-black">
          {lang === 'en' ? '中文' : 'English'}
      </button>
      <div className="w-full max-w-md h-[850px] bg-white rounded-[40px] overflow-hidden shadow-2xl relative border-[8px] border-slate-900 ring-1 ring-slate-900/50">
        <div className="absolute top-0 w-full h-10 z-50 flex justify-between items-center px-6 text-slate-900 pointer-events-none"><span className="text-xs font-bold">9:41</span><div className="flex gap-1.5"><div className="w-3 h-3 bg-slate-900 rounded-full opacity-80"></div><div className="w-3 h-3 bg-slate-900 rounded-full opacity-80"></div></div></div>
        <GlobalExpTicker onClick={() => setShowTaskCenter(true)} />
        
        {isLoadingGame && (
            <div className="absolute inset-0 z-[100] bg-white flex flex-col items-center justify-center animate-in fade-in">
                <Loader2 size={64} className="text-blue-500 animate-spin mb-6" />
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.loading_game}</h2>
                <p className="text-gray-500 text-sm">{t.preparing_assets}</p>
            </div>
        )}

        <div className="h-full w-full">
          {activeTab === 'home' && <HomeTab t={t} onTabChange={setActiveTab} onJoinRoom={handleJoinRoom} onCreateRoom={handleCreateRoom} />}
          {activeTab === 'game' && <GameTab t={t} onJoinRoom={handleJoinRoom} onCreateRoom={handleCreateRoom} createCooldown={createCooldown} showToast={showToast} onOpenChat={handleOpenChat} onShowHourlyRush={() => handleShowHourlyRush('global')} onSystemAction={handleSystemAction} activeGameSession={activeGameSession} isGameMinimized={isGameMinimized} onMaximize={() => setIsGameMinimized(false)} onCloseGame={() => setActiveGameSession(null)} />}
          {activeTab === 'inbox' && <InboxTab t={t} onJoinRoom={handleJoinRoom} onCreateRoom={handleCreateRoom} createCooldown={createCooldown} activeRoom={activeRoom} showToast={showToast} activeChat={activeChat} setActiveChat={setActiveChat} onSystemAction={handleSystemAction} activeGameSession={activeGameSession} isGameMinimized={isGameMinimized} onMaximize={() => setIsGameMinimized(false)} onCloseGame={() => setActiveGameSession(null)} />}
          {activeTab === 'mine' && <MineTab lang={lang} setLang={setLang} t={t} showToast={showToast} />}
          {activeTab === 'plus' && (
            <div className="absolute inset-0 bg-black z-50 flex flex-col animate-in slide-in-from-bottom">
                <div className="relative flex-1 bg-gray-900 overflow-hidden">
                     {/* Camera Preview Placeholder */}
                     <div className="absolute inset-0 flex items-center justify-center text-white/50">
                         <div className="text-center">
                             <div className="w-16 h-16 border-2 border-white/30 rounded-lg mb-2 mx-auto border-dashed"></div>
                             <span className="text-xs font-bold">Camera Preview</span>
                         </div>
                     </div>
                     
                     {/* Controls */}
                     <button onClick={() => setActiveTab('home')} className="absolute top-12 left-4 p-2 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/40 transition-colors"><X size={24}/></button>
                </div>
                <div className="h-32 bg-black flex items-center justify-center gap-12 pb-8">
                    <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700"></div>
                    <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center cursor-pointer active:scale-95 transition-transform">
                        <div className="w-16 h-16 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center"><RefreshCw size={20} className="text-white"/></div>
                </div>
            </div>
          )}
        </div>
        {activeRoom && <RoomLobby room={activeRoom} onClose={() => setActiveRoom(null)} t={t} onDisband={handleDisband} onStartGame={handleGameStart} showToast={showToast} />}
        
        {activeGameSession && (
            <div className={`absolute inset-0 z-[80] ${isGameMinimized ? 'hidden' : ''}`}>
                <ActiveGameSession room={activeGameSession.room} players={activeGameSession.players} onGameOver={handleExitGame} t={t} onShowHourlyRush={() => handleShowHourlyRush('game')} />
            </div>
        )}
        



        {gameResult && <GameResultModal result={gameResult} onClose={() => setGameResult(null)} t={t} onShowHourlyRush={() => handleShowHourlyRush('game')} />}
        {showHourlyRush && <HourlyRushModal onClose={() => setShowHourlyRush(false)} t={t} inGame={hourlyRushContext === 'game'} />}
        {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg(null)} />}
        {activeTab !== 'plus' && <BottomNav activeTab={activeTab} onTabChange={setActiveTab} t={t} />}
      </div>
    </div>
  );
}