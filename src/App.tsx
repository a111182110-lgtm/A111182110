import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Waves, 
  MapPin, 
  Mail, 
  Calendar, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Compass,
  CheckCircle2,
  Anchor,
  ExternalLink,
  Video,
  Presentation,
  Package,
  Plane
} from 'lucide-react';

type Page = 'resume' | 'trip' | '3d';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('resume');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const NavItem = ({ id, label }: { id: Page, label: string }) => (
    <button 
      onClick={() => setCurrentPage(id)}
      className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
        currentPage === id ? 'text-art-accent border-b-2 border-art-accent' : 'text-art-text/50 hover:text-art-text'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-art-bg text-art-text font-sans p-6 md:p-12 flex flex-col selection:bg-art-accent selection:text-white">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <div className="flex flex-col">
          <span className="art-label mb-2">A111182110 / Portfolio 2026 Edition</span>
          <h1 className="art-heading-lg">
            陳柏翰<br/>CHEN BO HAN
          </h1>
        </div>
        <div className="text-right flex flex-col items-end">
          <p className="text-xs leading-relaxed uppercase tracking-widest mb-6">
            Based in Kaohsiung, TW<br/>
            Navigation Dept. Student<br/>
            NKUST
          </p>
          <nav className="flex gap-4">
            <NavItem id="resume" label="個人履歷" />
            <NavItem id="trip" label="清明連假計畫" />
            <NavItem id="3d" label="3D模型製作" />
          </nav>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {currentPage === 'resume' && (
          <motion.div 
            key="resume"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="grid grid-cols-12 gap-12 flex-1"
          >
            {/* Main Content Column */}
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-12">
              {/* Experience */}
              <div className="art-border pt-6">
                <h2 className="art-label mb-8 flex items-center">
                  <span className="w-2 h-2 bg-art-accent rounded-full mr-3"></span>
                  Professional Experience
                </h2>
                <div className="space-y-10 pl-5 border-l border-art-text/10">
                  <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-baseline group">
                    <div>
                      <h3 className="text-3xl font-serif italic">YMCA 游泳教學</h3>
                      <p className="text-sm opacity-60">游泳教練 / 水域安全教育</p>
                    </div>
                    <span className="font-mono text-xs mt-2 md:mt-0">2019 — PRES</span>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-baseline group">
                    <div>
                      <h3 className="text-3xl font-serif italic">御風輪 實習</h3>
                      <p className="text-sm opacity-60">甲板部航海實習</p>
                    </div>
                    <span className="font-mono text-xs mt-2 md:mt-0">2025.05 — 2025.06</span>
                  </motion.div>
                </div>
              </div>

              {/* Bio Statement */}
              <motion.div variants={itemVariants} className="mt-auto">
                <p className="text-3xl md:text-4xl leading-snug font-medium tracking-tight pr-12">
                  融合 <span className="font-serif italic">航海實務</span> 與 <span className="font-serif italic text-art-accent">穩健態度</span>，致力於成為值得信賴的專業海事人才。
                </p>
              </motion.div>

              {/* Biography Details */}
              <div className="art-border pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants}>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50">觀察與好奇心</h4>
                  <p className="text-sm leading-relaxed opacity-80">
                    對機械結構有敏銳觀察力。學習機械課程時，我能將課本內容與實物構造聯想，深刻理解專業重點。
                  </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50">穩定與毅力</h4>
                  <p className="text-sm leading-relaxed opacity-80">
                    多年游泳隊訓練培養了高度自我要求。面對繁重專業課程與壓力，能保持穩定心態，堅持到底。
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="col-span-12 lg:col-span-4 flex flex-col bg-art-text text-art-bg p-10 h-full">
              <div className="mb-12">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 opacity-40">Core Expertise</h2>
                <ul className="text-xl space-y-3 font-medium">
                  <li>船舶航行技術</li>
                  <li>水域安全教育</li>
                  <li>游泳專業指導</li>
                  <li>基礎海事保全</li>
                  <li>船舶消防與急救</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 opacity-40">Professional Certs</h2>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-art-accent" /> 基安證照 (BST)
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-art-accent" /> 醫療急救 (MFA)
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-art-accent" /> 基礎滅火
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-art-accent" /> 救生艇 (PSCRB)
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-art-accent" /> 保全證照 (SA)
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-10 border-t border-art-bg/10">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 opacity-40">Connect</h2>
                <div className="space-y-3 text-sm">
                  <p className="flex items-center gap-3">
                    <Mail size={14} /> 
                    <a href="mailto:A111182110@nkust.edu.tw" className="art-link decoration-white/30 truncate">A111182110@nkust.edu.tw</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin size={14} /> <span>Kaohsiung, Taiwan</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentPage === 'trip' && (
          <motion.div 
            key="trip"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="flex-1 space-y-12"
          >
            <div className="art-border pt-6">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="art-label">Travel Itinerary</h2>
                  <h3 className="text-5xl font-black tracking-tighter mt-2">花東縱谷「山海螢光」<br/>四日深度行程</h3>
                </div>
                <div className="text-right">
                  <span className="font-mono text-sm opacity-60">2026/04/03 — 04/06</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    day: "Day 1",
                    title: "山海初見",
                    desc: "蘇花改 → 新城老街 → 七星潭 → 東大門夜市",
                    lunch: "佳興冰果室", dinner: "東大門夜市"
                  },
                  {
                    day: "Day 2",
                    title: "壯闊峽谷",
                    desc: "太魯閣 (砂卡礑步道) → 光復糖廠 → 大農大富賞螢",
                    lunch: "達基力部落屋", dinner: "大農大富限定餐盒"
                  },
                  {
                    day: "Day 3",
                    title: "慢活稻浪",
                    desc: "瑞穗牧場 → 池上伯朗大道 → 鹿野高台 → 鐵花村",
                    lunch: "池上全美行便當", dinner: "講蜜蜜小餐館"
                  },
                  {
                    day: "Day 4",
                    title: "森林秘境",
                    desc: "台東森林公園 (琵琶湖) → 加路蘭 → 伴手禮 → 賦歸",
                    lunch: "卑南豬血湯", dinner: "北返"
                  }
                ].map((d, i) => (
                  <motion.div key={i} variants={itemVariants} className="p-6 bg-art-text text-art-bg flex flex-col justify-between h-full">
                    <div>
                      <span className="font-mono text-xs text-art-accent mb-2 block">{d.day}</span>
                      <h4 className="text-xl font-serif italic mb-4">{d.title}</h4>
                      <p className="text-xs opacity-70 leading-relaxed mb-6">{d.desc}</p>
                    </div>
                    <div className="text-[10px] uppercase tracking-widest space-y-1 opacity-50 border-t border-art-bg/20 pt-4">
                      <p>午：{d.lunch}</p>
                      <p>晚：{d.dinner}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-12 gap-12">
              <div className="col-span-12 lg:col-span-12 art-border pt-6">
                <h2 className="art-label mb-8">預算明細 Budget Detail</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-art-text/10">
                        <th className="py-4 text-xs font-bold uppercase tracking-widest opacity-40">項目</th>
                        <th className="py-4 text-xs font-bold uppercase tracking-widest opacity-40 text-right">金額 (TWD)</th>
                        <th className="py-4 text-xs font-bold uppercase tracking-widest opacity-40 pl-8">說明</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-art-text/5">
                        <td className="py-4 font-bold">交通費</td>
                        <td className="py-4 text-right font-mono">$5,000</td>
                        <td className="py-4 pl-8 opacity-70">包含租車、油資、火車/國道來回</td>
                      </tr>
                      <tr className="border-b border-art-text/5">
                        <td className="py-4 font-bold">住宿費</td>
                        <td className="py-4 text-right font-mono">$7,000</td>
                        <td className="py-4 pl-8 opacity-70">三晚連假住宿 (雙人房平均價格)</td>
                      </tr>
                      <tr className="border-b border-art-text/5">
                        <td className="py-4 font-bold">餐食費</td>
                        <td className="py-4 text-right font-mono">$4,500</td>
                        <td className="py-4 pl-8 opacity-70">特色餐廳與在地小吃</td>
                      </tr>
                      <tr className="border-b border-art-text/5">
                        <td className="py-4 font-bold">活動門票</td>
                        <td className="py-4 text-right font-mono">$1,000</td>
                        <td className="py-4 pl-8 opacity-70">賞螢導覽、單車租借費用</td>
                      </tr>
                      <tr className="bg-art-text text-art-bg">
                        <td className="py-4 px-4 font-black text-lg">總計</td>
                        <td className="py-4 px-4 text-right font-mono text-lg text-art-accent">$17,500</td>
                        <td className="py-4 px-8 opacity-70">Estimated per person</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 art-border pt-6">
              <div>
                <h2 className="art-label mb-6">Important Notes</h2>
                <ul className="text-sm space-y-4 font-medium italic font-serif">
                  <li>— 台鐵清明車票於 3/6 (五) 00:00 開搶。</li>
                  <li>— 大農大富賞螢導覽務必在 2 月底於官網預約。</li>
                  <li>— 東部小黑蚊多，準備長袖外套與強效防蚊液。</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="art-label mb-2">Media & Files</h2>
                <a 
                  href="https://s3.hicloud.net.tw/zuvio.public/public/files/question/irs_17748833245f558334f3e787e6036f537ba216db9a73e6c057.mp4" 
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white border border-art-text/10 art-link no-underline"
                >
                  <Video size={18} className="text-art-accent" />
                  <span className="text-sm font-bold uppercase tracking-widest">行程短片 Preview Video</span>
                </a>
                <a 
                  href="https://docs.google.com/presentation/d/14WHYQjYAAfBdsKasWtwbTOZIItWuLNAA6FBGkzgyqnk/edit?slide=id.p1#slide=id.p1" 
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white border border-art-text/10 art-link no-underline"
                >
                  <Presentation size={18} className="text-art-accent" />
                  <span className="text-sm font-bold uppercase tracking-widest">簡報規劃 Slideshow</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {currentPage === '3d' && (
          <motion.div 
            key="3d"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="flex-1"
          >
            <div className="art-border pt-6 max-w-4xl">
              <h2 className="art-label mb-4 opacity-50 text-art-accent">Art & Creation</h2>
              <h3 className="text-6xl font-black tracking-tighter mb-12">3D 模型製作<br/>Digital Sculpting</h3>
              
              <div className="bg-[#1A1A1A] text-white p-12 flex flex-col md:flex-row gap-12 group overflow-hidden relative">
                <div className="relative z-10 flex-1">
                  <h4 className="text-2xl font-serif italic mb-6">AI 生成與數位建模</h4>
                  <p className="text-sm opacity-70 leading-relaxed max-w-md mb-12">
                    利用 Tripo3D 先進的生成技術，將視覺創意轉化為立體數位資產。這是我近期探索 3D 內容與空間應用的實驗作品。
                  </p>
                  <a 
                    href="https://studio.tripo3d.ai/3d-model/4f0ca7f5-ad6b-467e-bbef-2db08a9cf7b4?invite_code=LJM4JY" 
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-art-accent text-white font-bold uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform"
                  >
                    查看 3D 模型 <ExternalLink size={14} />
                  </a>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <div className="w-64 h-64 border-2 border-dashed border-white/20 rounded-full flex justify-center items-center relative animate-spin-slow">
                    <Package size={120} className="text-art-accent opacity-50" />
                  </div>
                </div>
                {/* Visual Accent */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-art-accent blur-3xl opacity-20 pointer-events-none" />
              </div>

              <div className="mt-12">
                <p className="text-sm opacity-50 italic">
                  * 作品連結至 Tripo3D 雲端預覽平台。
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Bar */}
      <footer className="mt-24 flex justify-between items-end art-border pt-6">
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest opacity-60">
          <span className="hover:text-art-accent cursor-pointer">NKUST Navigation</span>
          <span className="hover:text-art-accent cursor-pointer">Sea Survival</span>
          <span className="hover:text-art-accent cursor-pointer">Swimming Tech</span>
        </div>
        <div className="text-[10px] font-mono opacity-40">
          &copy;{new Date().getFullYear()} EST. 22.6273° N, 120.3014° E
        </div>
      </footer>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
