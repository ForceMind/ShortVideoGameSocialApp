import React, { useState, useEffect, useMemo } from 'react';
import { 
  Home, Gamepad2, PlusSquare, Plus, MessageCircle, User, Search, Heart, MessageSquare, Share2, MapPin, Coins, 
  Trophy, Clock, ChevronRight, ChevronLeft, Play, Pause, Users, Bell, Settings, X, Send, Mic, MoreHorizontal, 
  Wallet, CheckCircle2, Loader2, RefreshCw, TrendingUp, Calendar, Award, Gem, CircleDollarSign, Star, Zap, 
  Target, Gift, Languages, Filter, Flame, UserPlus, ArrowRightLeft, Receipt, Sword, Crown, LayoutGrid, LogOut, Ban, AlertTriangle, Lock, HelpCircle
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
    cancel_ready: "取消准备", ready_cancel_hint: "长按取消准备", shared_success: "分享成功"
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
    cancel_ready: "Cancel Ready", ready_cancel_hint: "Hold to Cancel", shared_success: "Shared Successfully"
  }
};

// --- Mock Data ---

const GAMES = [
  { id: 1, title: "Ludo Master", image: "from-yellow-500 to-red-500", players: "2.5M", type: "Board", minEntry: 100, category: "hot" },
  { id: 2, title: "Fruit Slicer", image: "from-green-400 to-lime-600", players: "1.8M", type: "Action", minEntry: 50, category: "recent" },
  { id: 3, title: "Cricket Clash", image: "from-blue-600 to-indigo-800", players: "5.0M", type: "Sports", minEntry: 200, category: "hot" },
  { id: 4, title: "Candy Match", image: "from-pink-400 to-purple-500", players: "3.2M", type: "Puzzle", minEntry: 50, category: "recent" },
  { id: 5, title: "Car Racing", image: "from-red-600 to-orange-600", players: "1.2M", type: "Racing", minEntry: 100, category: "all" },
  { id: 6, title: "Chess Pro", image: "from-slate-600 to-slate-800", players: "900k", type: "Board", minEntry: 200, category: "all" },
  { id: 7, title: "Bubble Shooter", image: "from-cyan-400 to-blue-500", players: "2.1M", type: "Puzzle", minEntry: 20, category: "all" },
  { id: 8, title: "Sniper 3D", image: "from-green-800 to-emerald-900", players: "3.5M", type: "Action", minEntry: 500, category: "hot" }
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
];

const VIDEOS = [
  { id: 1, user: "@Priya_Dance", desc: "Walking in Mumbai 🇮🇳 #Mumbai #Vlog", likes: 12500, comments: 342, location: "Mumbai, MH", color: "from-slate-700 to-slate-900" },
  { id: 2, user: "@TechGuru_Ravi", desc: "New Gaming Setup! 🎮 #Gaming", likes: 8200, comments: 156, location: "Bangalore, KA", color: "from-indigo-900 to-purple-900" },
  { id: 3, user: "@Foodie_Amit", desc: "Best Curry in Town 🍛 #IndianFood", likes: 24000, comments: 890, location: "New Delhi, DL", color: "from-orange-800 to-red-900" },
];

const CHATS = [
  { id: 1, name: "Maharashtra State Group", lastMsg: "System: Welcome!", time: "12:30", type: "State", unread: 5, avatar: "M" },
  { id: 2, name: "Pune District Gamers", lastMsg: "Rohan: Anyone for Ludo?", time: "11:45", type: "District", unread: 2, avatar: "P" },
  { id: 3, name: "Mumbai Elite Club", lastMsg: "Admin: Tournament starts at 8 PM", time: "10:20", type: "City", unread: 0, avatar: "E" },
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
    <div className="absolute bottom-0 w-full h-16 bg-black border-t border-gray-800 flex justify-around items-end pb-2 z-40">
      {tabs.map(tab => (
        <button key={tab.id} onClick={() => onTabChange(tab.id)} className={`relative flex flex-col items-center gap-1 w-1/5 ${tab.isSpecial ? '-top-1' : ''} active:scale-90 transition-transform`}>
          {tab.isSpecial ? (
            <div className="w-12 h-8 bg-gradient-to-r from-cyan-400 to-red-500 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(0,255,255,0.5)]"><PlusSquare className="text-white fill-white" size={24} /></div>
          ) : (
            <>
              <tab.icon size={24} className={activeTab === tab.id ? 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]' : 'text-gray-500'} fill={activeTab === tab.id && tab.id !== 'inbox' ? "currentColor" : "none"}/>
              <span className={`text-[10px] font-medium ${activeTab === tab.id ? 'text-white' : 'text-gray-500'}`}>{tab.label}</span>
              {tab.id === 'inbox' && <span className="absolute top-0 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-black animate-pulse"></span>}
            </>
          )}
        </button>
      ))}
    </div>
  );
};

const HomeTab = ({ t }) => {
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
                      <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-lg"><Gift size={20} /></div><span className="text-white text-xs font-bold">Gift</span></div>
                      <div className="flex flex-col items-center gap-1"><Heart size={32} className="text-white" /><span className="text-white text-xs">{currentItem.data.likes}</span></div>
                      <div className="flex flex-col items-center gap-1" onClick={() => setShowComments(true)}><MessageSquare size={32} className="text-white" /><span className="text-white text-xs">{currentItem.data.comments}</span></div>
                      <div className="flex flex-col items-center gap-1"><Star size={32} className="text-white" /><span className="text-white text-xs">Fav</span></div>
                      <div className="flex flex-col items-center gap-1"><Share2 size={32} className="text-white" /><span className="text-white text-xs">Share</span></div>
                  </div>

                  {/* Bottom Left Info */}
                  <div className="absolute left-4 bottom-20 right-16 z-20 text-white flex flex-col items-start" onClick={(e) => e.stopPropagation()}>
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
              <div className="h-full w-full bg-slate-900 flex flex-col items-center justify-center p-8 relative">
                  <div className="absolute top-4 right-4 text-slate-500 text-xs font-bold uppercase tracking-widest">Recommended Group</div>
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white mb-6 shadow-2xl shadow-indigo-500/20">{currentItem.data.name[0]}</div>
                  <h2 className="text-2xl font-black text-white mb-2 text-center">{currentItem.data.name}</h2>
                  <div className="flex gap-4 text-slate-400 text-sm mb-8">
                      <span className="flex items-center gap-1"><Users size={16}/> {currentItem.data.members} Members</span>
                      <span className="flex items-center gap-1"><MapPin size={16}/> {currentItem.data.dist}km</span>
                  </div>
                  <button className="w-full py-4 bg-blue-600 rounded-2xl font-bold text-white text-lg shadow-lg shadow-blue-600/20">Join Group</button>
              </div>
          );
      } else if (currentItem.type === 'game_card') {
           return (
              <div className="h-full w-full bg-slate-900 flex flex-col items-center justify-center p-8 relative">
                  <div className="absolute top-4 right-4 text-slate-500 text-xs font-bold uppercase tracking-widest">Recommended Game</div>
                  <div className={`w-full aspect-video rounded-3xl bg-gradient-to-br ${currentItem.data.image} flex items-center justify-center mb-6 shadow-2xl`}>
                      <Gamepad2 size={64} className="text-white/50"/>
                  </div>
                  <h2 className="text-2xl font-black text-white mb-2">{currentItem.data.title}</h2>
                  <p className="text-slate-400 mb-8">{currentItem.data.players} Players Online</p>
                  <button className="w-full py-4 bg-yellow-500 text-black rounded-2xl font-bold text-lg shadow-lg">Play Now</button>
              </div>
           );
      } else { // room_card
           return (
              <div className="h-full w-full bg-slate-900 flex flex-col items-center justify-center p-8 relative">
                  <div className="absolute top-4 right-4 text-slate-500 text-xs font-bold uppercase tracking-widest">Recommended Room</div>
                  <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 w-full mb-8">
                      <div className="flex justify-between items-center mb-4">
                          <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-bold">Competitive</span>
                          <span className="text-yellow-400 font-bold flex items-center gap-1"><Coins size={14}/> {currentItem.data.entry}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{currentItem.data.name}</h3>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Users size={14}/> {currentItem.data.current}/{currentItem.data.capacity} Players
                      </div>
                  </div>
                  <button className="w-full py-4 bg-red-600 text-white rounded-2xl font-bold text-lg shadow-lg">Join Room</button>
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
            {['Followed', 'Nearby', 'Shorts', 'For You'].map(tab => (
                <span key={tab} onClick={(e) => { e.stopPropagation(); setActiveTab(tab.toLowerCase().replace(' ', '')); }} className={`transition-opacity ${activeTab === tab.toLowerCase().replace(' ', '') ? 'opacity-100 border-b-2 border-white pb-1' : 'opacity-60'}`}>{tab}</span>
            ))}
          </div>
          <div className="w-6"></div> {/* Spacer for centering */}
      </div>

      {renderContent()}

      {/* Comments Modal */}
      {showComments && (
          <div className="absolute inset-0 z-40 bg-black/50 backdrop-blur-sm flex flex-col justify-end animate-in slide-in-from-bottom" onClick={(e) => e.stopPropagation()}>
              <div className="bg-slate-900 rounded-t-3xl h-2/3 p-4 flex flex-col">
                  <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
                      <h3 className="font-bold text-white">Comments ({currentItem.data.comments || 0})</h3>
                      <button onClick={() => setShowComments(false)}><X size={20} className="text-slate-400"/></button>
                  </div>
                  <div className="flex-1 overflow-y-auto space-y-4">
                      {[1,2,3,4,5].map(i => (
                          <div key={i} className="flex gap-3">
                              <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0"></div>
                              <div>
                                  <div className="text-xs font-bold text-slate-400 mb-0.5">User_{i}</div>
                                  <div className="text-sm text-white">This is a great video! 🔥</div>
                              </div>
                          </div>
                      ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                      <input type="text" placeholder="Add a comment..." className="flex-1 bg-slate-800 rounded-full px-4 py-2 text-white text-sm focus:outline-none"/>
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
    { id: 99, name: t.you, isHost: room.isMyRoom, status: 'waiting', avatar: 'Me', hasPaid: false },
    ...(room.current > 1 ? [{ id: 2, name: 'Guest_1', isHost: false, status: 'ready', avatar: 'G', hasPaid: true }] : [])
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
         showToast("Insufficient balance!");
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
          showToast("Ready Cancelled");
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
        showToast("Please cancel ready first (Long press Ready button)");
        return;
     }
     onClose();
  };

  const handleShare = () => {
      showToast("Shared to recent chats!");
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
    <div className="absolute inset-0 bg-slate-950 z-[60] flex flex-col animate-in zoom-in-95">
       {/* Disband Modal */}
       {showDisbandConfirm && (
          <div className="absolute inset-0 z-[70] bg-black/80 flex items-center justify-center p-4">
             <div className="bg-slate-900 border border-red-900/50 p-6 rounded-2xl w-full max-w-xs text-center animate-slide-up">
                <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                   <AlertTriangle size={32} className="text-red-500"/>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.disband}</h3>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">{t.disband_warn}</p>
                <div className="flex gap-3">
                   <button onClick={() => setShowDisbandConfirm(false)} className="flex-1 py-3 rounded-xl bg-slate-800 text-slate-400 font-bold">Cancel</button>
                   <button onClick={confirmDisband} className="flex-1 py-3 rounded-xl bg-red-600 text-white font-bold">{t.disband}</button>
                </div>
             </div>
          </div>
       )}

       <div className="pt-12 px-4 pb-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
          <div>
             <h2 className="text-xl font-bold text-white flex items-center gap-2">
                {room.gameName || "Game Room"} <span className={`text-[10px] px-2 py-0.5 rounded-full ${room.mode === 'friendly' ? 'bg-green-600' : 'bg-red-600'}`}>{room.mode === 'friendly' ? t.mode_friendly : t.mode_compete}</span>
             </h2>
             <div className="text-xs text-slate-400 flex items-center gap-2"><span>{t.room_id}: {room.id}</span><span className="text-slate-300 font-bold flex items-center gap-1"><Users size={12}/>{room.current}/{room.capacity}</span>{room.mode === 'compete' && <span className="text-yellow-400 font-bold">{t.entry_fee}: {room.entry}</span>}</div>
          </div>
          <div className="flex gap-2">
             {isHost && <button onClick={handleShare} className="bg-blue-500/20 text-blue-500 p-2 rounded-full hover:bg-blue-500/30"><Share2 size={20}/></button>}
             <button 
                onClick={handleExit} 
                disabled={players.find(p => p.id === 99)?.status === 'ready'}
                className={`p-2 rounded-full transition-colors ${players.find(p => p.id === 99)?.status === 'ready' ? 'bg-slate-800 text-slate-600 cursor-not-allowed' : 'bg-red-500/20 text-red-500 hover:bg-red-500/30'}`}
             >
                <LogOut size={20}/>
             </button>
          </div>
       </div>
       <div className="flex-1 p-6 grid grid-cols-2 gap-4 content-start overflow-y-auto">
          {slots.map((player, i) => (
             <div key={i} className={`aspect-square rounded-2xl border-2 flex flex-col items-center justify-center relative ${player ? 'border-slate-700 bg-slate-900' : 'border-dashed border-slate-800 bg-slate-900/50'}`}>
                {player ? (
                   <>
                      {isHost && !player.isHost && (<button onClick={() => handleKick(player.id)} className="absolute top-2 right-2 text-red-500 hover:scale-110 transition-transform"><Ban size={16}/></button>)}
                      {player.isHost && (<div className="absolute top-2 left-2 bg-yellow-500 text-black text-[10px] font-bold px-1.5 rounded">HOST</div>)}
                      <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-2xl font-bold text-white mb-2 shadow-lg">{player.avatar}</div>
                      <div className="font-bold text-white text-sm">{player.name}</div>
                      <div className={`text-xs mt-1 font-bold ${player.status === 'ready' ? 'text-green-400' : 'text-slate-500'}`}>
                         {player.status === 'ready' ? (isFriendly ? t.ready : "Ready") : '...'}
                      </div>
                   </>
                ) : (
                   <div className="flex flex-col items-center text-slate-600"><div className="w-12 h-12 rounded-full border-2 border-slate-700 flex items-center justify-center mb-2"><PlusSquare size={20}/></div><span className="text-xs">{t.waiting}</span></div>
                )}
             </div>
          ))}
       </div>
       <div className="p-4 bg-slate-900 border-t border-slate-800 flex gap-3">
          {isHost ? (
             <>
                <button onClick={handleDisbandRoom} className="px-4 bg-red-900/50 text-red-400 border border-red-900 rounded-xl font-bold text-xs flex flex-col items-center justify-center gap-1"><AlertTriangle size={16}/> {t.disband}</button>
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
                <span className="relative z-10">{players.find(p=>p.id===99)?.status === 'ready' ? (isFriendly ? "Ready!" : "Ready (Hold to Cancel)") : t.ready}</span>
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
        <div className="absolute inset-0 bg-slate-950 z-50 flex flex-col animate-in slide-in-from-right">
           <div className="pt-12 px-4 pb-4 bg-slate-900 border-b border-slate-800 flex items-center gap-3">
             <button onClick={() => setSubPage('main')}><ChevronLeft size={24} className="text-white"/></button><h1 className="text-lg font-bold text-white">{t.trans_history}</h1>
           </div>
           <div className="flex p-4 gap-2 overflow-x-auto">{['all', 'beans', 'diamonds', 'coins'].map(c => (<button key={c} className={`px-4 py-1.5 rounded-full text-xs font-bold capitalize ${c==='all' ? 'bg-white text-black' : 'bg-slate-800 text-slate-400'}`}>{t[c] || 'All'}</button>))}</div>
           <div className="flex-1 overflow-y-auto p-4 space-y-3">{TRANSACTIONS.map(tx => (<div key={tx.id} className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex justify-between items-center"><div className="flex items-center gap-3"><div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.amount > 0 ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>{tx.amount > 0 ? <TrendingUp size={18}/> : <ArrowRightLeft size={18}/>}</div><div><div className="font-bold text-sm text-white">{tx.title}</div><div className="text-[10px] text-slate-500">{tx.date}</div></div></div><div className={`font-mono font-bold flex items-center gap-1 ${tx.amount > 0 ? 'text-green-400' : 'text-white'}`}>{tx.amount > 0 ? '+' : ''}{tx.amount}<CurrencyIcon type={tx.currency} className={tx.currency === 'beans' ? 'text-yellow-400' : tx.currency === 'diamonds' ? 'text-pink-400' : 'text-blue-400'} /></div></div>))}</div>
        </div>
     )
  }

  return (
    <div className="absolute inset-0 bg-slate-950 z-50 flex flex-col animate-in slide-in-from-bottom">
       {showExchange && (
          <div className="absolute inset-0 z-[60] bg-black/80 flex items-center justify-center p-4">
             <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl w-full max-w-xs animate-slide-up">
                <div className="flex justify-between items-center mb-4"><h3 className="text-lg font-bold text-white">{t.exchange_title}</h3><button onClick={() => setShowExchange(false)}><X size={20} className="text-slate-400"/></button></div>
                <div className="bg-slate-800 p-3 rounded-xl mb-4 text-center"><div className="text-xs text-slate-400 mb-1">{t.exchange_rate}</div></div>
                
                <div className="flex justify-between items-center mb-2 px-1">
                    <span className="text-xs text-slate-400">Balance: <span className="text-yellow-400 font-bold">8,900</span></span>
                </div>
                <div className="flex gap-2 mb-4">
                    {[10, 50, 100, 500].map(amt => (
                        <button key={amt} onClick={() => setExchangeAmount(amt)} className="flex-1 py-2 bg-slate-800 rounded-lg text-xs font-bold text-slate-300 hover:bg-slate-700 border border-slate-700">{amt}</button>
                    ))}
                </div>

                <div className="mb-4">
                   <label className="text-xs text-slate-400 mb-1 block">{t.input_coins}</label>
                   <input type="number" value={exchangeAmount} onChange={e => setExchangeAmount(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-yellow-500" placeholder="0"/>
                </div>
                <div className="flex justify-between items-center mb-6 px-2">
                   <span className="text-xs text-slate-400">You get:</span>
                   <span className="text-yellow-400 font-bold flex items-center gap-1"><Coins size={14} fill="currentColor"/> {exchangeAmount ? exchangeAmount * 100 : 0}</span>
                </div>
                <button onClick={() => { showToast('Exchange Successful!'); setShowExchange(false); }} className="w-full bg-yellow-500 text-black font-bold py-3 rounded-xl">{t.confirm_exchange}</button>
             </div>
          </div>
       )}

       <div className="pt-12 px-4 pb-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center"><h2 className="text-xl font-bold flex items-center gap-2 text-white"><Wallet size={24} className="text-yellow-400"/> {t.wallet}</h2><button onClick={onClose} className="bg-slate-800 p-2 rounded-full"><X size={20} className="text-white"/></button></div>
       <div className="flex-1 overflow-y-auto p-6">
          <div className="flex bg-slate-900 border border-slate-800 rounded-xl p-1 mb-6">
             {[{id: 'coins', label: t.coins, icon: CircleDollarSign, color: 'text-blue-400'}, {id: 'beans', label: t.beans, icon: Coins, color: 'text-yellow-400'}, {id: 'diamonds', label: t.diamonds, icon: Gem, color: 'text-pink-400'}].map(c => (
                <button key={c.id} onClick={() => setSelectedCurrency(c.id)} className={`flex-1 flex items-center justify-center gap-1 py-2.5 rounded-lg text-xs font-bold transition-all ${selectedCurrency === c.id ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500'}`}>
                   <c.icon size={14} className={c.color} /> {c.label}
                </button>
             ))}
          </div>
          
          <div className={`p-8 rounded-3xl mb-8 text-center transition-colors shadow-2xl relative overflow-hidden ${selectedCurrency === 'beans' ? 'bg-gradient-to-br from-yellow-500 to-orange-600' : selectedCurrency === 'diamonds' ? 'bg-gradient-to-br from-pink-500 to-purple-600' : 'bg-gradient-to-br from-blue-500 to-cyan-600'}`}>
             <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
             <div className="relative">
                <div className="text-white/80 text-sm mb-2 uppercase tracking-widest font-bold">{t.balance}</div>
                <div className="text-5xl font-black text-white flex items-center justify-center gap-3 drop-shadow-md">
                   {selectedCurrency === 'beans' ? <Coins size={40} fill="currentColor" /> : selectedCurrency === 'diamonds' ? <Gem size={40} fill="currentColor"/> : <CircleDollarSign size={40}/>} 
                   {selectedCurrency === 'beans' ? '12,450' : selectedCurrency === 'diamonds' ? '520' : '8,900'}
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-8">
             {selectedCurrency === 'coins' && <button className="bg-white text-slate-950 py-4 rounded-2xl font-black text-lg shadow-lg hover:bg-gray-100 transition-colors">{t.recharge}</button>}
             {selectedCurrency === 'beans' && <button onClick={() => setShowExchange(true)} className="bg-yellow-500 text-black py-4 rounded-2xl font-black text-lg shadow-lg hover:bg-yellow-400 transition-colors">{t.exchange}</button>}
             {selectedCurrency === 'diamonds' && <button className="bg-slate-800 text-white py-4 rounded-2xl font-bold border border-slate-700">{t.withdraw}</button>}
          </div>

          <div><div className="flex justify-between items-center mb-4"><h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">{t.recent_trans}</h3><button onClick={() => setSubPage('history')} className="text-blue-400 text-xs font-bold flex items-center gap-1">{t.view_all_trans} <ChevronRight size={12}/></button></div><div className="space-y-3">{TRANSACTIONS.slice(0, 3).map(tx => (<div key={tx.id} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex justify-between items-center"><div className="flex items-center gap-3"><div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.amount > 0 ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>{tx.amount > 0 ? <TrendingUp size={18}/> : <ArrowRightLeft size={18}/>}</div><div><div className="font-bold text-sm text-white">{tx.title}</div><div className="text-[10px] text-slate-500">{tx.date}</div></div></div><div className={`font-mono font-bold flex items-center gap-1 ${tx.amount > 0 ? 'text-green-400' : 'text-white'}`}>{tx.amount > 0 ? '+' : ''}{tx.amount}<CurrencyIcon type={tx.currency} className={tx.currency === 'beans' ? 'text-yellow-400' : tx.currency === 'diamonds' ? 'text-pink-400' : 'text-blue-400'} /></div></div>))}</div></div>
       </div>
    </div>
  );
};

const MineTab = ({ lang, setLang, t, showToast }) => {
  const [activeModal, setActiveModal] = useState(null); 
  const [activeSubTab, setActiveSubTab] = useState('works');
  const totalEarnings = GAME_HISTORY.reduce((acc, curr) => curr.amount > 0 ? acc + curr.amount : acc, 0);

  const DetailModal = ({ title, icon: Icon, color, children }) => (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in"><div className="bg-slate-900 w-full max-w-sm rounded-3xl border border-slate-700 overflow-hidden flex flex-col max-h-[80vh] animate-slide-up"><div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950"><h2 className={`text-lg font-bold flex items-center gap-2 ${color}`}><Icon size={20}/> {title}</h2><button onClick={() => setActiveModal(null)} className="bg-slate-800 p-2 rounded-full"><X size={16}/></button></div><div className="p-4 overflow-y-auto flex-1 space-y-4">{children}</div></div></div>
  );

  return (
    <div className="h-full bg-slate-950 text-white flex flex-col relative">
      {activeModal === 'wallet' && <WalletPage onClose={() => setActiveModal(null)} t={t} showToast={showToast} />}
      {activeModal === 'tasks' && (<DetailModal title={t.tasks} icon={Target} color="text-red-400">{DAILY_TASKS.map(task => (<div key={task.id} className="bg-slate-800 p-4 rounded-xl flex justify-between items-center"><div><div className="font-bold text-sm mb-1">{task.title}</div><div className="text-xs text-slate-500">{task.progress}/{task.total}</div></div><button className={`px-3 py-1.5 rounded-lg text-xs font-bold ${task.claimed ? 'bg-slate-700 text-slate-500' : 'bg-yellow-500 text-black'}`}>{task.claimed ? 'Done' : 'Claim'}</button></div>))}</DetailModal>)}
      {activeModal === 'skills' && (<DetailModal title={t.skills} icon={Star} color="text-purple-400"><div className="grid grid-cols-1 gap-3">{GAME_SKILLS.map(skill => (<div key={skill.id} className="bg-slate-800 p-4 rounded-xl flex items-center gap-4"><div className={`w-12 h-12 rounded-full flex items-center justify-center ${skill.bg}`}><Trophy size={20} className={skill.color} /></div><div className="flex-1"><div className="flex justify-between mb-1"><span className="font-bold">{skill.name}</span><span className={`font-black ${skill.color}`}>{skill.title}</span></div><div className="w-full h-1.5 bg-slate-700 rounded-full"><div className={`h-full ${skill.color.replace('text', 'bg')}`} style={{width: '60%'}}></div></div><div className="text-[10px] text-slate-500 mt-1">Lv.{skill.level}</div></div></div>))}</div></DetailModal>)}

      <div className="pt-12 px-6 pb-6 bg-slate-950 flex justify-between items-start">
         <div className="flex items-center gap-4"><div className="w-16 h-16 rounded-full bg-gray-700 border-2 border-white/20 flex items-center justify-center text-2xl font-bold text-slate-400">AK</div><div><h2 className="text-2xl font-bold flex items-center gap-2">Amit Kumar <CheckCircle2 size={16} className="text-blue-500" fill="white"/></h2><div className="text-xs text-slate-500">ID: 8839201 • Pune 🇮🇳</div></div></div>
         <div className="flex flex-col items-end gap-2"><Settings className="text-slate-400" size={20} /></div>
      </div>
      <div className="px-4 mb-6"><div className="grid grid-cols-3 gap-3">{[{id: 'wallet', label: t.wallet, icon: Wallet, color: 'text-yellow-400', bg: 'bg-yellow-500/10'}, {id: 'tasks', label: t.tasks, icon: Target, color: 'text-red-400', bg: 'bg-red-500/10'}, {id: 'skills', label: t.skills, icon: Star, color: 'text-purple-400', bg: 'bg-purple-500/10'},].map(item => (<button key={item.id} onClick={() => setActiveModal(item.id)} className="bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-all active:scale-95"><div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center`}><item.icon className={item.color} size={20} /></div><span className="text-xs font-bold text-slate-300">{item.label}</span></button>))}</div></div>
      <div className="flex justify-around text-center mb-6 px-4"><div><div className="font-bold text-lg">12.5k</div><div className="text-xs text-slate-500">Fans</div></div><div><div className="font-bold text-lg">452</div><div className="text-xs text-slate-500">Following</div></div><div><div className="font-bold text-lg">1.2M</div><div className="text-xs text-slate-500">Likes</div></div></div>
      <div className="flex-1 bg-slate-900 rounded-t-3xl border-t border-slate-800 p-4 overflow-y-auto">
         <div className="flex border-b border-slate-800 mb-4">{['works', 'likes', 'games'].map(tab => (<button key={tab} onClick={() => setActiveSubTab(tab)} className={`flex-1 pb-3 text-sm font-bold transition-colors ${activeSubTab === tab ? 'text-white border-b-2 border-white' : 'text-slate-500'}`}>{tab === 'works' ? t.works : tab === 'likes' ? t.likes : t.history}</button>))}</div>
         {activeSubTab === 'works' && (<div className="grid grid-cols-3 gap-1">{MY_WORKS.map(i => (<div key={i.id} className="aspect-[3/4] bg-slate-800 rounded-lg relative"><div className="absolute bottom-1 left-1 text-[10px] flex items-center gap-1"><Play size={8} fill="white"/> {i.views}</div></div>))}</div>)}
         {activeSubTab === 'likes' && (<div className="py-12 text-center text-slate-500 text-sm">{t.no_likes}</div>)}
         {activeSubTab === 'games' && (<div className="space-y-3"><div className="bg-slate-800 p-4 rounded-xl flex justify-between items-center"><span className="text-slate-400 text-sm">{t.total_won}</span><span className="text-yellow-400 font-bold text-xl">+{totalEarnings}</span></div>{GAME_HISTORY.map(g => (<div key={g.id} className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex justify-between items-center"><div className="flex items-center gap-3"><div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"><Gamepad2 size={24} className="text-white"/></div><div><div className="font-bold text-sm text-white">{g.game}</div><div className="text-[10px] text-slate-400 flex items-center gap-2 mt-1"><span className="flex items-center gap-0.5"><Users size={10}/> {g.players} {t.players}</span><span className="flex items-center gap-0.5"><Clock size={10}/> {g.time}</span></div><div className="flex -space-x-1.5 mt-1.5">{g.avatars.map((a, i) => (<div key={i} className="w-4 h-4 rounded-full bg-slate-700 border border-slate-900 text-[6px] flex items-center justify-center text-white font-bold">{a}</div>))}</div></div></div><div className="text-right"><div className={`font-black text-lg ${g.amount > 0 ? 'text-green-400' : 'text-slate-500'}`}>{g.amount > 0 ? '+' : ''}{g.amount}</div><div className="text-[10px] text-slate-500">{t.entry_fee}: {g.entry}</div></div></div>))}</div>)}
      </div>
    </div>
  );
};

const GroupFinder = ({ onClose, t, onOpenChat }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("dist");
  const filteredGroups = useMemo(() => {
    let result = EXTENDED_GROUPS.filter(g => g.name.toLowerCase().includes(searchTerm.toLowerCase()) || g.id.toString().includes(searchTerm));
    if (sortBy === 'dist') result.sort((a, b) => a.dist - b.dist);
    if (sortBy === 'pop') result.sort((a, b) => b.activity - a.activity);
    if (sortBy === 'mem') result.sort((a, b) => b.members - a.members);
    return result;
  }, [searchTerm, sortBy]);

  return (
    <div className="absolute inset-0 bg-slate-950 z-50 flex flex-col animate-in slide-in-from-right">
       <div className="pt-12 px-4 pb-4 bg-slate-900 border-b border-slate-800 flex items-center gap-3"><button onClick={onClose}><ChevronLeft size={24} className="text-white"/></button><h1 className="text-lg font-bold text-white">{t.find_groups}</h1></div>
       <div className="p-4 space-y-4">
         <div className="relative"><Search className="absolute left-3 top-2.5 text-slate-500" size={18} /><input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder={t.search_placeholder} className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-white text-sm focus:border-blue-500 focus:outline-none"/></div>
         <div className="flex gap-2">{[{id: 'dist', label: t.sort_dist, icon: MapPin}, {id: 'pop', label: t.sort_pop, icon: Flame}, {id: 'mem', label: t.sort_mem, icon: Users}].map(opt => (<button key={opt.id} onClick={() => setSortBy(opt.id)} className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-xs font-bold transition-all ${sortBy === opt.id ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'}`}><opt.icon size={12}/> {opt.label}</button>))}</div>
         <div className="space-y-3 pb-20 overflow-y-auto">{filteredGroups.map(group => (<div key={group.id} className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex justify-between items-center"><div className="flex items-center gap-3"><div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-lg font-bold text-white">{group.name[0]}</div><div><h3 className="font-bold text-white text-sm">{group.name}</h3><div className="flex items-center gap-3 text-[10px] text-slate-400 mt-1"><span className="flex items-center gap-0.5"><MapPin size={10}/> {group.dist < 100 ? `${group.dist}km` : '100+km'}</span><span className="flex items-center gap-0.5"><Users size={10}/> {group.members}</span><span className="flex items-center gap-0.5 text-green-400"><Flame size={10}/> {group.activity}</span></div></div></div><button onClick={() => onOpenChat({ id: group.id, name: group.name, avatar: group.name[0], lastMsg: 'Welcome to the group!', time: 'Just now', unread: 0, type: 'group' })} className="bg-white/10 hover:bg-white/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold border border-blue-500/50">{t.join}</button></div>))}</div>
       </div>
    </div>
  );
};

const TaskCenter = ({ onClose, t, showToast }) => {
  const [tasks, setTasks] = useState(DAILY_TASKS);
  const [level, setLevel] = useState(5);
  const [exp, setExp] = useState(350);
  const maxExp = 500;

  const handleClaim = (taskId) => {
      setTasks(prev => prev.map(task => {
          if (task.id === taskId) {
              showToast(`Claimed reward for ${task.title}!`);
              setExp(e => Math.min(e + 50, maxExp));
              return { ...task, claimed: true };
          }
          return task;
      }));
  };

  return (
    <div className="absolute inset-0 bg-slate-950 z-50 flex flex-col animate-in slide-in-from-right">
       {/* Header */}
       <div className="pt-12 px-4 pb-6 bg-gradient-to-b from-indigo-900 to-slate-900 border-b border-slate-800 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="relative z-10 flex items-center justify-between mb-6">
               <button onClick={onClose} className="bg-slate-800/50 p-2 rounded-full backdrop-blur-sm"><ChevronLeft size={24} className="text-white"/></button>
               <h1 className="text-lg font-bold text-white">Task Center</h1>
               <button className="bg-slate-800/50 p-2 rounded-full backdrop-blur-sm"><HelpCircle size={20} className="text-slate-400"/></button>
           </div>
           
           {/* Level Card */}
           <div className="relative z-10 flex items-center gap-4">
               <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 p-1 shadow-lg shadow-orange-500/20">
                   <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center flex-col">
                       <span className="text-[10px] text-slate-400 font-bold uppercase">Level</span>
                       <span className="text-3xl font-black text-white">{level}</span>
                   </div>
               </div>
               <div className="flex-1">
                   <div className="flex justify-between items-end mb-2">
                       <span className="text-white font-bold text-lg">Elite Gamer</span>
                       <span className="text-xs text-indigo-300 font-mono">{exp}/{maxExp} EXP</span>
                   </div>
                   <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                       <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000" style={{width: `${(exp/maxExp)*100}%`}}></div>
                   </div>
                   <div className="text-[10px] text-slate-400 mt-2">Next Level: Unlock Exclusive Avatar Frame</div>
               </div>
           </div>
       </div>

       {/* Task List */}
       <div className="flex-1 overflow-y-auto p-4 space-y-4">
           <div className="flex items-center gap-2 mb-2">
               <Target size={18} className="text-yellow-400"/>
               <h2 className="font-bold text-white">Daily Missions</h2>
           </div>
           
           {tasks.map(task => (
               <div key={task.id} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex items-center gap-4">
                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${task.claimed ? 'bg-slate-800 text-slate-600' : 'bg-indigo-500/20 text-indigo-400'}`}>
                       {task.claimed ? <CheckCircle2 size={24}/> : <Star size={24}/>}
                   </div>
                   <div className="flex-1">
                       <h3 className={`font-bold text-sm ${task.claimed ? 'text-slate-500' : 'text-white'}`}>{task.title}</h3>
                       <div className="flex items-center gap-2 mt-1">
                           <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                               <div className={`h-full ${task.claimed ? 'bg-slate-600' : 'bg-yellow-500'}`} style={{width: `${(task.progress/task.total)*100}%`}}></div>
                           </div>
                           <span className="text-[10px] text-slate-500">{task.progress}/{task.total}</span>
                       </div>
                   </div>
                   <button 
                       disabled={task.claimed || task.progress < task.total}
                       onClick={() => handleClaim(task.id)}
                       className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                           task.claimed 
                               ? 'bg-slate-800 text-slate-500 cursor-default' 
                               : task.progress >= task.total 
                                   ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20 active:scale-95' 
                                   : 'bg-slate-800 text-slate-400 cursor-not-allowed'
                       }`}
                   >
                       {task.claimed ? 'Done' : 'Claim'}
                   </button>
               </div>
           ))}

           <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-pink-500/30 rounded-2xl p-4 mt-6">
               <div className="flex items-center gap-3 mb-3">
                   <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white"><Gift size={20}/></div>
                   <div>
                       <h3 className="font-bold text-white text-sm">Weekly Chest</h3>
                       <p className="text-[10px] text-pink-200">Complete 15 daily tasks to open</p>
                   </div>
               </div>
               <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-pink-500 w-2/3"></div>
               </div>
               <div className="text-right text-[10px] text-pink-300 mt-1">10/15 Completed</div>
           </div>
       </div>
    </div>
  );
};

const GameTab = ({ t, onJoinRoom, showToast, onOpenChat }) => {
  const [showAllGames, setShowAllGames] = useState(false);
  const [showAllGroups, setShowAllGroups] = useState(false);
  const [sortBy, setSortBy] = useState('hot');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [showTaskCenter, setShowTaskCenter] = useState(false);

  const handlePlayClick = (game) => {
     const players = [
        { id: 99, name: t.you, isHost: false, status: 'ready', avatar: 'Me', hasPaid: true },
        { id: 2, name: 'Player_2', isHost: false, status: 'ready', avatar: 'P2', hasPaid: true },
        { id: 3, name: 'Player_3', isHost: false, status: 'ready', avatar: 'P3', hasPaid: true },
        { id: 4, name: 'Player_4', isHost: false, status: 'ready', avatar: 'P4', hasPaid: true }
    ];
    const room = { id: 999, gameName: game.title, mode: 'compete', entry: 100, capacity: 4, host: 'System', current: 4, isMyRoom: false };
    onJoinRoom({ ...room, autoStart: true, players: players });
  };

  const sortedGames = useMemo(() => {
      let games = [...GAMES];
      if (sortBy === 'players') {
          return games.sort((a, b) => {
              const parse = (s) => parseFloat(s.replace('M', '000000').replace('k', '000'));
              return parse(b.players) - parse(a.players);
          });
      }
      if (sortBy === 'recent') {
           return games.sort((a, b) => (a.category === 'recent' ? -1 : 1));
      }
      return games.sort((a, b) => (a.category === 'hot' ? -1 : 1));
  }, [sortBy]);

  if (showAllGames) {
      return (
          <div className="h-full bg-slate-950 flex flex-col text-white pb-20 relative animate-in slide-in-from-right">
              <div className="pt-12 px-4 pb-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                      <button onClick={() => setShowAllGames(false)}><ChevronLeft size={24} className="text-white"/></button>
                      <h1 className="text-lg font-bold text-white">All Games</h1>
                  </div>
                  <div className="relative">
                      <button onClick={() => setShowSortMenu(!showSortMenu)} className="p-2 bg-slate-800 rounded-full"><Filter size={16} className="text-white"/></button>
                      {showSortMenu && (
                          <div className="absolute right-0 top-full mt-2 bg-slate-800 rounded-xl border border-slate-700 p-2 w-32 z-50 shadow-xl">
                              {['hot', 'recent', 'players'].map(s => (
                                  <button key={s} onClick={() => { setSortBy(s); setShowSortMenu(false); }} className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold mb-1 last:mb-0 ${sortBy === s ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}>
                                      {s === 'hot' ? 'Popular' : s === 'recent' ? 'Newest' : 'Most Played'}
                                  </button>
                              ))}
                          </div>
                      )}
                  </div>
              </div>
              <div className="p-4 grid grid-cols-2 gap-4 overflow-y-auto">
                  {sortedGames.map(game => (
                      <div key={game.id} onClick={() => handlePlayClick(game)} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 active:scale-95 transition-transform cursor-pointer group">
                          <div className={`h-24 bg-gradient-to-br ${game.image} flex items-center justify-center relative overflow-hidden`}>
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                              <span className="text-xl font-black text-white/20 uppercase tracking-widest group-hover:scale-110 transition-transform duration-500">Game</span>
                          </div>
                          <div className="p-3">
                              <h3 className="font-bold text-sm truncate text-white">{game.title}</h3>
                              <div className="flex justify-between items-center mt-2 text-[10px] text-slate-400">
                                  <span>{game.type}</span>
                                  <span className="flex items-center gap-1"><Users size={10}/> {game.players}</span>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      );
  }

  if (showAllGroups) {
      return <GroupFinder onClose={() => setShowAllGroups(false)} t={t} onOpenChat={onOpenChat} />;
  }

  return (
    <div className="h-full bg-slate-950 flex flex-col text-white pb-20 relative">
      {showWallet && <WalletPage onClose={() => setShowWallet(false)} t={t} showToast={showToast} />}
      {showTaskCenter && <TaskCenter onClose={() => setShowTaskCenter(false)} t={t} showToast={showToast} />}
      <div className="px-4 pt-12 pb-4 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent italic">WinGaming</h1>
        <div className="flex items-center gap-2 bg-slate-800 rounded-full pl-3 pr-1 py-1 border border-slate-700">
            <Coins className="text-yellow-400" size={16} fill="currentColor" />
            <span className="font-bold text-yellow-100 text-sm mr-1">12,450</span>
            <button onClick={() => setShowWallet(true)} className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full w-5 h-5 flex items-center justify-center transition-colors">
                <Plus size={12} strokeWidth={4} />
            </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Top Half: Games List */}
        <div>
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-bold text-white">Hot Games</h2>
                <button onClick={() => setShowAllGames(true)} className="text-xs text-blue-400 font-bold flex items-center gap-1">More <ChevronRight size={12}/></button>
            </div>
            
            <div className="space-y-4">
                {/* Big Cards Grid (Top 2) */}
                <div className="grid grid-cols-2 gap-3">
                    {GAMES.slice(0, 2).map(game => (
                        <div key={game.id} onClick={() => handlePlayClick(game)} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 active:scale-95 transition-transform cursor-pointer group relative aspect-square">
                            <div className={`absolute inset-0 bg-gradient-to-br ${game.image} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                                <h3 className="font-bold text-white text-lg leading-tight mb-1">{game.title}</h3>
                                <span className="text-[10px] text-slate-300 bg-white/10 px-2 py-1 rounded-full w-fit backdrop-blur-sm border border-white/10">{game.players} Playing</span>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Small List Items (Rest) - Horizontal Scroll */}
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide px-1">
                    {GAMES.slice(2).map(game => (
                        <div key={game.id} onClick={() => handlePlayClick(game)} className="flex-shrink-0 relative w-20 h-20 rounded-xl overflow-hidden active:scale-95 transition-transform cursor-pointer group shadow-lg">
                            {/* Icon/Image Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${game.image}`}></div>
                            
                            {/* Overlay Gradient for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            
                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-2 text-center">
                                <h3 className="font-bold text-white text-[10px] leading-tight truncate drop-shadow-md">{game.title}</h3>
                                <div className="text-[8px] text-slate-300 drop-shadow-md">{game.players}</div>
                            </div>
                            
                            {/* Center Letter (Optional fallback) */}
                            <div className="absolute inset-0 flex items-center justify-center pb-4 opacity-30 text-2xl font-black text-white pointer-events-none mix-blend-overlay">
                                {game.title[0]}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Task Center Banner */}
        <div onClick={() => setShowTaskCenter(true)} className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-4 flex justify-between items-center shadow-lg relative overflow-hidden group cursor-pointer active:scale-95 transition-transform">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
                <h3 className="font-bold text-white text-lg flex items-center gap-2"><Trophy size={18} className="text-yellow-300"/> Level Up Tasks</h3>
                <p className="text-indigo-200 text-xs mt-1">Complete daily missions to earn EXP & Beans!</p>
            </div>
            <div className="relative z-10 bg-white/20 p-2 rounded-full backdrop-blur-sm">
                <ChevronRight size={20} className="text-white"/>
            </div>
        </div>

        {/* Bottom Half: Group Recommendations */}
        <div>
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-bold text-white">Recommended Groups</h2>
                <button onClick={() => setShowAllGroups(true)} className="text-xs text-blue-400 font-bold flex items-center gap-1">More <ChevronRight size={12}/></button>
            </div>
            <div className="space-y-3">
                {EXTENDED_GROUPS.slice(0, 5).map(group => (
                    <div key={group.id} className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white">{group.name[0]}</div>
                            <div>
                                <h3 className="font-bold text-white text-sm">{group.name}</h3>
                                <div className="flex items-center gap-3 text-[10px] text-slate-400 mt-0.5">
                                    <span className="flex items-center gap-0.5"><Users size={10}/> {group.members}</span>
                                    <span className="flex items-center gap-0.5 text-green-400"><Flame size={10}/> {group.activity}</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => onOpenChat({ id: group.id, name: group.name, avatar: group.name[0], lastMsg: 'Welcome to the group!', time: 'Just now', unread: 0, type: 'group' })} className="bg-white/10 hover:bg-white/20 text-blue-400 px-3 py-1.5 rounded-full text-xs font-bold border border-blue-500/50">{t.join}</button>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

const InboxTab = ({ t, onCreateRoom, onJoinRoom, createCooldown, activeRoom, showToast, activeChat, setActiveChat }) => {
  // const [activeChat, setActiveChat] = useState(null); // Lifted to App
  const [chatHistory, setChatHistory] = useState([]);
  const [inputMsg, setInputMsg] = useState('');
  const [showInviteMenu, setShowInviteMenu] = useState(false);
  const [showGameSelector, setShowGameSelector] = useState(false);
  const [selectedInviteGame, setSelectedInviteGame] = useState(GAMES[0]);
  const [createMode, setCreateMode] = useState('compete');
  const [inviteEntry, setInviteEntry] = useState(MATCH_TIERS[0]); // Default Tier
  const [showFinder, setShowFinder] = useState(false);
  const [joinedGroups, setJoinedGroups] = useState([]);
  const [selectedGroupInfo, setSelectedGroupInfo] = useState(null);

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
     // This function is now repurposed for "Start Game" from chat
     if(createCooldown) {
        showToast(t.cooldown_msg);
        return;
     }
     
     // Start Game Logic
     const players = [
        { id: 99, name: t.you, isHost: false, status: 'ready', avatar: 'Me', hasPaid: true },
        { id: 2, name: 'Player_2', isHost: false, status: 'ready', avatar: 'P2', hasPaid: true },
        { id: 3, name: 'Player_3', isHost: false, status: 'ready', avatar: 'P3', hasPaid: true },
        { id: 4, name: 'Player_4', isHost: false, status: 'ready', avatar: 'P4', hasPaid: true }
    ];
    const room = { id: 999, gameName: selectedInviteGame.title, mode: 'compete', entry: 100, capacity: 4, host: 'System', current: 4, isMyRoom: false };
    
    // Add "Playing" card to chat
    setChatHistory(prev => [...prev, { id: Date.now(), sender: 'me', time: 'Just now', type: 'playing_card', game: selectedInviteGame }]);
    
    // Start Game
    onJoinRoom({ ...room, autoStart: true, players: players });
    setShowGameSelector(false);
    setShowInviteMenu(false);
  };

  const handleJoinGroup = (e, group) => {
      e.stopPropagation();
      if (!joinedGroups.includes(group.id)) {
          setJoinedGroups([...joinedGroups, group.id]);
          showToast(`Joined ${group.name}!`);
      }
  };

  const handleGroupClick = (group) => {
      if (joinedGroups.includes(group.id)) {
          openChat({ id: group.id, name: group.name, avatar: group.name[0], lastMsg: "Welcome back!", time: "Now" });
      } else {
          setSelectedGroupInfo(group);
      }
  };

  if (showFinder) return <GroupFinder onClose={() => setShowFinder(false)} t={t} />;

  if (activeChat) {
    return (
      <div className="flex flex-col h-full bg-slate-950 z-50 animate-in slide-in-from-right absolute inset-0">
        <div className="pt-12 px-4 pb-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0"><div className="flex items-center gap-3"><button onClick={() => setActiveChat(null)} className="text-slate-400 hover:text-white"><ChevronLeft size={24} /></button><div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold">{activeChat.avatar}</div><div className="font-bold text-white text-sm">{activeChat.name}</div></div><MoreHorizontal className="text-slate-400" /></div>
        
        
        {/* Sticky Room Header Removed */}


        <div className="flex-1 overflow-y-auto p-4 space-y-4" onClick={() => setShowInviteMenu(false)}>
           {chatHistory.map(msg => (
             <div key={msg.id} className={`flex gap-3 ${msg.sender === 'me' ? 'flex-row-reverse' : 'flex-row'}`}>
               <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white border border-slate-700 ${msg.sender === 'me' ? 'bg-slate-800' : 'bg-indigo-600'}`}>
                  {msg.sender === 'me' ? 'Me' : activeChat.avatar}
               </div>
               <div className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
               {msg.type === 'playing_card' ? (
                 <div className="border p-3 rounded-2xl w-56 shadow-lg relative overflow-hidden bg-gradient-to-br from-blue-900 to-slate-900 border-blue-500/50">
                    <div className="text-[10px] font-bold mb-2 flex items-center gap-1 uppercase tracking-wider text-blue-300"><Gamepad2 size={12}/> {t.playing_now}</div>
                    <div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center"><Gamepad2 size={20} className="text-white"/></div><div><div className="font-bold text-white text-sm">{msg.game.title}</div><div className="text-[10px] text-slate-400">{msg.game.type}</div></div></div>
                    <button className="w-full py-2 rounded-lg text-xs font-bold text-white transition-colors bg-blue-600 hover:bg-blue-500">Play Also</button>
                 </div>
               ) : msg.type === 'invite' ? (
                 // Hidden invite card logic (kept for compatibility but not used)
                 null
               ) : (
                 <div className={`max-w-[240px] p-3 rounded-2xl text-sm ${msg.sender === 'me' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-800 text-slate-200 rounded-tl-none'}`}>{msg.text}</div>
               )}
               </div>
             </div>
           ))}
           {/* Simulate other invite removed */}
        </div>
        {showGameSelector && (
           <div className="absolute bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 rounded-t-3xl p-4 z-50 animate-slide-up">
              <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-white">{t.select_game}</h3><button onClick={() => setShowGameSelector(false)} className="bg-slate-800 p-1 rounded-full"><X size={16}/></button></div>
              <div className="flex gap-3 overflow-x-auto pb-4 mb-2 no-scrollbar">{GAMES.map(g => (<div key={g.id} onClick={() => setSelectedInviteGame(g)} className={`flex-shrink-0 w-24 p-2 rounded-xl border cursor-pointer transition-all ${selectedInviteGame.id === g.id ? 'bg-blue-600/20 border-blue-500' : 'bg-slate-800 border-slate-700'}`}><div className={`w-full h-16 rounded-lg bg-gradient-to-br ${g.image} mb-2`}></div><div className="text-[10px] text-center font-bold truncate">{g.title}</div></div>))}</div>
              
              <button onClick={handleSendInvite} className="w-full bg-blue-600 py-3 rounded-xl font-bold text-white mt-4">{t.start}</button>
           </div>
        )}
        <div className="p-3 bg-slate-900 border-t border-slate-800 shrink-0 relative flex items-center gap-2">
           {showInviteMenu && (<div className="absolute bottom-16 left-3 bg-slate-800 border border-slate-700 rounded-xl p-2 shadow-xl flex flex-col gap-2 w-36 animate-in fade-in slide-in-from-bottom-2 z-40"><button className="flex items-center gap-3 text-xs text-white p-3 hover:bg-slate-700 rounded-lg transition-colors"><div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500"><Gift size={14}/></div>{t.gift}</button></div>)}
           <button onClick={() => setShowGameSelector(true)} className="p-2 rounded-full transition-colors text-slate-400 hover:text-white"><Gamepad2 size={24} /></button>
           <input type="text" value={inputMsg} onChange={(e) => setInputMsg(e.target.value)} placeholder={t.chat_input} className="flex-1 bg-slate-950 border border-slate-700 rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500" />
           <button onClick={sendMessage} className="p-2 bg-blue-600 rounded-full text-white"><Send size={18} /></button>
        </div>
      </div>
    );
  }

  // Use EXTENDED_GROUPS for the list
  const nearbyGroups = EXTENDED_GROUPS;

  return (
    <div className="h-full bg-slate-950 text-white flex flex-col pb-20 relative">
      {/* Group Info Modal */}
      {selectedGroupInfo && (
          <div className="absolute inset-0 z-50 bg-black/80 flex items-center justify-center p-6 animate-in fade-in">
              <div className="bg-slate-900 w-full rounded-2xl border border-slate-700 p-6 flex flex-col items-center text-center relative">
                  <button onClick={() => setSelectedGroupInfo(null)} className="absolute top-4 right-4 text-slate-400"><X size={20}/></button>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white mb-4 shadow-lg">{selectedGroupInfo.name[0]}</div>
                  <h2 className="text-xl font-bold text-white mb-1">{selectedGroupInfo.name}</h2>
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-6">
                      <span className="flex items-center gap-1"><MapPin size={12}/> {selectedGroupInfo.dist}km</span>
                      <span className="flex items-center gap-1"><Users size={12}/> {selectedGroupInfo.members}</span>
                  </div>
                  <p className="text-sm text-slate-300 mb-6">Join this group to connect with players nearby, organize matches, and share your gaming moments!</p>
                  <button onClick={(e) => { handleJoinGroup(e, selectedGroupInfo); setSelectedGroupInfo(null); }} className="w-full py-3 bg-blue-600 rounded-xl font-bold text-white shadow-lg">Join Group</button>
              </div>
          </div>
      )}

      <div className="p-4 pt-12 border-b border-slate-800 flex justify-between items-center sticky top-0 bg-slate-950/90 backdrop-blur z-10"><h1 className="text-xl font-bold">{t.inbox}</h1><div className="flex gap-4 text-slate-400"><div className="flex items-center gap-1 text-xs bg-slate-800 px-2 py-1 rounded-lg"><MapPin size={12} /> Pune</div><Bell size={20} /></div></div>
      <div className="flex-1 overflow-y-auto">
        <div className="p-2">{CHATS.map(chat => (<div key={chat.id} onClick={() => openChat(chat)} className="flex items-center gap-3 p-3 hover:bg-slate-900 rounded-xl transition-colors cursor-pointer active:bg-slate-800"><div className="relative"><div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold">{chat.avatar}</div>{chat.unread > 0 && <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-950"></div>}</div><div className="flex-1"><div className="flex justify-between items-center"><h4 className="font-bold text-sm text-white">{chat.name}</h4><span className="text-[10px] text-slate-500">{chat.time}</span></div><div className="text-xs text-slate-400 truncate">{chat.lastMsg}</div></div></div>))}</div>
      </div>
    </div>
  );
};

const ActiveGameSession = ({ room, players, onGameOver, t }) => {
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  const [liveScores, setLiveScores] = useState(players.map(p => ({ ...p, score: 0 })));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });

      setLiveScores(prev => prev.map(p => ({
        ...p,
        score: p.score + Math.floor(Math.random() * 50) // Random score increment
      })).sort((a, b) => b.score - a.score));

    }, 50); // 20x speed

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
      if (timeLeft === 0) {
          onGameOver(liveScores);
      }
  }, [timeLeft, liveScores, onGameOver]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="absolute inset-0 bg-slate-950 z-[80] flex flex-col animate-in fade-in">
       {/* Top Bar: Scores & Time */}
       <div className="pt-12 px-3 pb-3 bg-slate-900 border-b border-slate-800 flex items-center gap-3 shadow-xl z-20">
          <div className="flex-1 flex items-center gap-3 overflow-x-auto no-scrollbar">
            {liveScores.map((p, i) => (
               <div key={p.id} className={`flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${p.id === 99 ? 'bg-blue-900/40 border-blue-500 shadow-blue-900/20 shadow-lg' : 'bg-slate-800 border-slate-700'}`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${i===0 ? 'bg-yellow-500 text-black' : 'bg-slate-600 text-white'}`}>{i+1}</div>
                  <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">{p.avatar}</div>
                  <div className="font-mono font-bold text-white text-xs">{p.score}</div>
               </div>
            ))}
          </div>
          <div className="flex-shrink-0 flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700 shadow-lg">
             <Clock size={14} className={timeLeft < 30 ? "text-red-500 animate-pulse" : "text-blue-500"} />
             <span className={`font-mono font-bold text-sm ${timeLeft < 30 ? "text-red-500" : "text-white"}`}>{formatTime(timeLeft)}</span>
          </div>
       </div>

       {/* Game Area (H5 Placeholder) */}
       <div className="flex-1 bg-black relative flex items-center justify-center overflow-hidden">
          {/* Simulated Game Content */}
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          <div className="relative z-10 text-center p-8 bg-black/50 backdrop-blur-sm rounded-3xl border border-white/10">
             <Gamepad2 size={64} className="text-white/50 mx-auto mb-4 animate-bounce"/>
             <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2">{room.gameName}</h3>
             <p className="text-white/50 text-sm">Tap anywhere to play (Simulated)</p>
          </div>
          
          {/* Interactive Click Area for "Playing" */}
          <button 
            className="absolute inset-0 z-20 w-full h-full cursor-crosshair focus:outline-none"
            onClick={() => {
                // Simulate score increase for "Me"
                setLiveScores(prev => prev.map(p => p.id === 99 ? { ...p, score: p.score + 100 } : p).sort((a, b) => b.score - a.score));
            }}
          ></button>
       </div>
    </div>
  );
};

const GameResultModal = ({ result, onClose, t }) => {
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
    <div className="absolute inset-0 bg-black/90 z-[90] flex items-center justify-center p-4 animate-in zoom-in-95">
       <div className="bg-slate-900 w-full max-w-sm rounded-3xl border border-slate-700 overflow-hidden flex flex-col max-h-[90vh] relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-600/20 to-transparent pointer-events-none"></div>
          <div className="p-8 text-center relative z-10">
             <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-orange-500/20">
                <Trophy size={48} className="text-white" />
             </div>
             <h2 className="text-2xl font-black text-white mb-1">{t.game_over}</h2>
             <p className="text-slate-400 text-sm">{room.gameName}</p>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-3">
             {scores.map((p, i) => {
                const prize = getPrize(i+1);
                return (
                   <div key={p.id} className={`p-3 rounded-xl flex items-center justify-between ${p.id === 99 ? 'bg-blue-600/20 border border-blue-500' : 'bg-slate-800 border border-slate-700'}`}>
                      <div className="flex items-center gap-3">
                         <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${i===0 ? 'bg-yellow-500 text-black' : i===1 ? 'bg-gray-300 text-black' : i===2 ? 'bg-orange-700 text-white' : 'bg-slate-700 text-slate-400'}`}>{i+1}</div>
                         <div className="font-bold text-sm text-white">{p.name} {p.id === 99 && '(You)'}</div>
                      </div>
                      <div className="text-right">
                         <div className="font-mono font-bold text-white">{p.score}</div>
                         {prize > 0 && <div className="text-xs font-bold text-yellow-400 flex items-center justify-end gap-1"><Coins size={10} fill="currentColor"/> +{prize}</div>}
                      </div>
                   </div>
                );
             })}
          </div>

          <div className="p-6 border-t border-slate-800 bg-slate-950">
             <button onClick={onClose} className="w-full py-3.5 rounded-xl bg-blue-600 font-bold text-white shadow-lg active:scale-95 transition-transform">{t.back_home}</button>
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

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState('zh');
  const [activeRoom, setActiveRoom] = useState(null); 
  const [createCooldown, setCreateCooldown] = useState(null); // Timestamp for cooldown
  const [activeGameSession, setActiveGameSession] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  const [isLoadingGame, setIsLoadingGame] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);
  const [activeChat, setActiveChat] = useState(null); // Lifted state for chat
  const t = TEXTS[lang];

  const showToast = (msg) => setToastMsg(msg);

  useEffect(() => {
     if(createCooldown && Date.now() > createCooldown) {
        setCreateCooldown(null);
     }
  }, [createCooldown, activeTab]);

  const handleJoinRoom = (roomData) => {
      if (roomData.autoStart) {
          // Quick match flow
          // setIsLoadingGame(true);
          // setTimeout(() => {
          //     setIsLoadingGame(false);
          //     setActiveGameSession({ room: roomData, players: roomData.players });
          // }, 2000);
          showToast("Game Started (Simulated)");
      } else {
          setActiveRoom({ ...roomData, isMyRoom: roomData.host === 'Me' });
      }
  };
  const handleCreateRoom = (roomConfig) => setActiveRoom({ id: Math.floor(Math.random()*10000), gameName: roomConfig.gameName, mode: roomConfig.mode, entry: roomConfig.entry, capacity: roomConfig.capacity, host: 'Me', current: 1, isMyRoom: true });
  const handleDisband = () => {
     // Set cooldown 15 minutes from now (simulated as 15 seconds for demo purposes usually, but logic here is real)
     setCreateCooldown(Date.now() + 15 * 60 * 1000); 
     setActiveRoom(null);
  };

  const handleGameStart = (players) => {
      setActiveRoom(null);
      setIsLoadingGame(true);
      setTimeout(() => {
          setIsLoadingGame(false);
          setActiveGameSession({ room: activeRoom, players });
      }, 2000);
  };

  const handleGameOver = (finalScores) => {
      setGameResult({ room: activeGameSession.room, scores: finalScores });
      setActiveGameSession(null);
  };

  const handleOpenChat = (chat) => {
      setActiveChat(chat);
      setActiveTab('inbox');
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 font-sans relative">
      <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg font-bold text-sm hover:bg-gray-100 transition-colors z-50 text-black">
          {lang === 'en' ? '中文' : 'English'}
      </button>
      <div className="w-full max-w-md h-[850px] bg-black rounded-[40px] overflow-hidden shadow-2xl relative border-[8px] border-slate-900 ring-1 ring-slate-900/50">
        <div className="absolute top-0 w-full h-10 z-50 flex justify-between items-center px-6 text-white pointer-events-none"><span className="text-xs font-bold">9:41</span><div className="flex gap-1.5"><div className="w-3 h-3 bg-white rounded-full opacity-80"></div><div className="w-3 h-3 bg-white rounded-full opacity-80"></div></div></div>
        
        {isLoadingGame && (
            <div className="absolute inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center animate-in fade-in">
                <Loader2 size={64} className="text-blue-500 animate-spin mb-6" />
                <h2 className="text-2xl font-bold text-white mb-2">Loading Game...</h2>
                <p className="text-slate-400 text-sm">Preparing assets and connecting players</p>
            </div>
        )}

        <div className="h-full w-full">
          {activeTab === 'home' && <HomeTab t={t} />}
          {activeTab === 'game' && <GameTab t={t} onJoinRoom={handleJoinRoom} onCreateRoom={handleCreateRoom} createCooldown={createCooldown} showToast={showToast} onOpenChat={handleOpenChat} />}
          {activeTab === 'inbox' && <InboxTab t={t} onJoinRoom={handleJoinRoom} onCreateRoom={handleCreateRoom} createCooldown={createCooldown} activeRoom={activeRoom} showToast={showToast} activeChat={activeChat} setActiveChat={setActiveChat} />}
          {activeTab === 'mine' && <MineTab lang={lang} setLang={setLang} t={t} showToast={showToast} />}
          {activeTab === 'plus' && <div className="h-full flex items-center justify-center text-white"><button onClick={() => setActiveTab('home')}>Close Camera</button></div>}
        </div>
        {activeRoom && <RoomLobby room={activeRoom} onClose={() => setActiveRoom(null)} t={t} onDisband={handleDisband} onStartGame={handleGameStart} showToast={showToast} />}
        {activeGameSession && <ActiveGameSession room={activeGameSession.room} players={activeGameSession.players} onGameOver={handleGameOver} t={t} />}
        {gameResult && <GameResultModal result={gameResult} onClose={() => setGameResult(null)} t={t} />}
        {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg(null)} />}
        {activeTab !== 'plus' && <BottomNav activeTab={activeTab} onTabChange={setActiveTab} t={t} />}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50"></div>
      </div>
    </div>
  );
}