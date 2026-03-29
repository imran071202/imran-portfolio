"use client"
import React, { useState, useEffect } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { BiSolidSun } from "react-icons/bi";
import { FaRegMoon } from "react-icons/fa";
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from "motion/react"
import { FiHome, FiUser, FiBriefcase, FiFileText, FiMail } from "react-icons/fi"

const navItems = [
  { id: 1, text: "Home",    icon: <FiHome />,      to: "Body"    },
  { id: 2, text: "About",   icon: <FiUser />,      to: "About"   },
  { id: 3, text: "Project", icon: <FiBriefcase />, to: "Project" },
  { id: 4, text: "Resume",  icon: <FiFileText />,  to: "Resume"  },
  { id: 5, text: "Contact", icon: <FiMail />,      to: "Contact" },
]

// LEFT sidebar — socials (desktop only)
const socials = [
  { href: "https://github.com/imran071202",                       icon: <FaGithub />,         colorDark: "#e2e8f0", colorLight: "#1f2937", label: "GitHub"      },
  { href: "https://www.linkedin.com/in/imran-shaikh-163372241/", icon: <BsLinkedin />,       colorDark: "#38bdf8", colorLight: "#0284c7", label: "LinkedIn"    },
  { href: "https://x.com/Imran___02",                            icon: <FaXTwitter />,       colorDark: "#e2e8f0", colorLight: "#1f2937", label: "X / Twitter" },
  { href: "https://www.facebook.com/imran.shaikh.562433",        icon: <FaFacebookSquare />, colorDark: "#3b82f6", colorLight: "#1d4ed8", label: "Facebook"    },
  { href: "mailto:imran@example.com",                            icon: <FaEnvelope />,       colorDark: "#d4af37", colorLight: "#92650a", label: "Email"       },
]

/* ── Gold Divider ──────────────────────────────────────────── */
const GDiv = () => (
  <div style={{ width: 36, height: 1, background: 'linear-gradient(90deg,transparent,rgba(212,175,55,0.45),transparent)' }} />
)

/* ── Pulse Orb ─────────────────────────────────────────────── */
const PulseOrb = () => (
  <div className="relative flex items-center justify-center w-5 h-5">
    <motion.div
      animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
      className="absolute w-4 h-4 rounded-full"
      style={{ background: 'rgba(212,175,55,0.28)' }}
    />
    <div className="w-2 h-2 rounded-full"
      style={{ background: '#d4af37', boxShadow: '0 0 10px rgba(212,175,55,0.9)' }} />
  </div>
)

/* ── Theme Toggle Button ───────────────────────────────────── */
const ThemeBtn = ({ isDark, onToggle }) => (
  <motion.button
    onClick={onToggle}
    whileHover="hov"
    whileTap={{ scale: 0.88 }}
    className="relative flex items-center justify-center w-10 h-10 rounded-xl cursor-pointer overflow-hidden"
    style={{
      border: '1px solid rgba(212,175,55,0.38)',
      background: isDark ? 'rgba(212,175,55,0.06)' : 'rgba(180,140,20,0.1)',
    }}
    aria-label="Toggle theme"
  >
    <motion.span
      className="absolute inset-0 rounded-xl pointer-events-none"
      variants={{ hov: { background: 'rgba(212,175,55,0.18)', boxShadow: '0 0 18px rgba(212,175,55,0.38)' } }}
      transition={{ duration: 0.2 }}
    />
    <AnimatePresence mode="wait">
      {isDark
        ? <motion.span key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.22 }}
            className="relative z-10 text-lg" style={{ color: '#f5d060' }}>
            <BiSolidSun />
          </motion.span>
        : <motion.span key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.22 }}
            className="relative z-10 text-base" style={{ color: '#92650a' }}>
            <FaRegMoon />
          </motion.span>
      }
    </AnimatePresence>
  </motion.button>
)

/* ── LEFT sidebar: Social Button with right-side tooltip ────── */
const SocialBtn = ({ href, icon, colorDark, colorLight, label, delay = 0, isDark }) => (
  <motion.a
    href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
    initial={{ opacity: 0, x: -12 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    whileHover="hov"
    className="relative flex items-center justify-center w-10 h-10 rounded-xl cursor-pointer"
    style={{
      border: isDark ? '1px solid rgba(212,175,55,0.18)' : '1px solid rgba(180,140,20,0.25)',
      background: isDark ? 'rgba(212,175,55,0.04)' : 'rgba(180,140,20,0.07)',
      color: isDark ? colorDark : colorLight,
    }}
  >
    <motion.span
      className="absolute inset-0 rounded-xl pointer-events-none"
      variants={{ hov: { background: 'rgba(212,175,55,0.14)', boxShadow: '0 0 16px rgba(212,175,55,0.3)' } }}
      transition={{ duration: 0.2 }}
    />
    <span className="relative z-10 text-base">{icon}</span>
    {/* tooltip slides to the RIGHT */}
    <motion.span
      initial={{ opacity: 0, x: -6 }}
      variants={{ hov: { opacity: 1, x: 0 } }}
      transition={{ duration: 0.15 }}
      className="absolute left-full ml-3 px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap pointer-events-none"
      style={{
        background: isDark ? 'rgba(4,4,4,0.95)' : 'rgba(255,250,235,0.97)',
        border: '1px solid rgba(212,175,55,0.35)',
        color: '#b8860b',
        backdropFilter: 'blur(10px)',
        fontFamily: 'Rajdhani, sans-serif',
        letterSpacing: '0.08em',
        zIndex: 60,
      }}
    >{label}</motion.span>
  </motion.a>
)

/* ── RIGHT sidebar: Nav Icon Pill with left-side tooltip ────── */
const NavPill = ({ item, active, index, isDark }) => (
  <Link to={item.to} smooth duration={500} offset={-20} spy>
    <motion.div
      whileHover="hov"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.15 + index * 0.07, duration: 0.4 }}
      className="relative flex items-center justify-center cursor-pointer"
      style={{ width: 44, height: 44 }}
    >
      {/* background pill */}
      <motion.span
        className="absolute inset-0 rounded-xl"
        animate={{
          background: active
            ? 'linear-gradient(135deg,rgba(212,175,55,0.22),rgba(212,175,55,0.06))'
            : 'transparent',
          border: active ? '1px solid rgba(212,175,55,0.48)' : '1px solid transparent',
          boxShadow: active ? '0 0 20px rgba(212,175,55,0.22)' : 'none',
        }}
        variants={{ hov: { background: 'rgba(212,175,55,0.11)', border: '1px solid rgba(212,175,55,0.32)' } }}
        transition={{ duration: 0.2 }}
      />
      {/* active left bar */}
      {active && (
        <motion.span
          layoutId="activeBar"
          className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1 h-5 rounded-full"
          style={{ background: 'linear-gradient(180deg,#f5d060,#b8860b)', boxShadow: '0 0 8px rgba(212,175,55,0.7)' }}
        />
      )}
      {/* icon */}
      <motion.span
        className="relative z-10 text-xl"
        animate={{ color: active ? '#d4af37' : isDark ? '#4b5563' : '#9a7d3a' }}
        variants={{ hov: { color: '#d4af37' } }}
        transition={{ duration: 0.15 }}
      >{item.icon}</motion.span>
      {/* tooltip slides to the LEFT */}
      <motion.span
        initial={{ opacity: 0, x: 6 }}
        variants={{ hov: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.15 }}
        className="absolute right-full mr-3 px-3 py-1 rounded-md text-xs font-bold whitespace-nowrap pointer-events-none uppercase"
        style={{
          background: isDark ? 'rgba(4,4,4,0.95)' : 'rgba(255,250,235,0.97)',
          border: '1px solid rgba(212,175,55,0.35)',
          color: '#b8860b',
          backdropFilter: 'blur(10px)',
          fontFamily: 'Rajdhani, sans-serif',
          letterSpacing: '0.12em',
          zIndex: 60,
        }}
      >{item.text}</motion.span>
    </motion.div>
  </Link>
)

/* ── Main Navbar ───────────────────────────────────────────── */
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState("Home")
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [menu])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const D = isDark

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Rajdhani:wght@500;600;700&display=swap');

        /* ── shared sidebar ──────────────────────────── */
        .nb {
          position: fixed; top: 0; bottom: 0; width: 66px; z-index: 50;
          display: flex; flex-direction: column;
          align-items: center; justify-content: space-between;
          padding: 28px 11px;
          backdrop-filter: blur(24px);
          transition: background 0.4s, box-shadow 0.4s;
        }
        .nb::before {
          content: ''; position: absolute; top: 0; left: 12%; right: 12%; height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
        }
        .nb::after {
          content: ''; position: absolute; bottom: 0; left: 12%; right: 12%; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent);
        }

        /* ── dark / light variants ───────────────────── */
        .nb-dark  { background: linear-gradient(180deg,rgba(5,5,5,0.98),rgba(8,6,2,0.98)); }
        .nb-light { background: linear-gradient(180deg,rgba(255,252,240,0.98),rgba(250,245,220,0.98)); }

        /* LEFT sidebar */
        .nb-l { left: 0; }
        .nb-dark.nb-l  { border-right: 1px solid rgba(212,175,55,0.1);  box-shadow:  2px 0 30px rgba(0,0,0,0.55); }
        .nb-light.nb-l { border-right: 1px solid rgba(180,140,20,0.2);  box-shadow:  2px 0 22px rgba(180,140,20,0.1); }

        /* RIGHT sidebar */
        .nb-r { right: 0; }
        .nb-dark.nb-r  { border-left: 1px solid rgba(212,175,55,0.1);  box-shadow: -2px 0 30px rgba(0,0,0,0.55); }
        .nb-light.nb-r { border-left: 1px solid rgba(180,140,20,0.2);  box-shadow: -2px 0 22px rgba(180,140,20,0.1); }

        /* ── logo ────────────────────────────────────── */
        .nb-logo {
          font-family: 'Cinzel', serif; font-size: 0.78rem; font-weight: 900;
          background: linear-gradient(180deg,#f5d060 0%,#d4af37 35%,#fffacd 60%,#b8860b 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          filter: drop-shadow(0 0 7px rgba(212,175,55,0.55));
          writing-mode: vertical-rl; transform: rotate(180deg);
          letter-spacing: 0.14em; text-decoration: none; transition: filter 0.3s;
        }
        .nb-logo:hover { filter: drop-shadow(0 0 16px rgba(212,175,55,0.9)); }

        .nb-sub {
          font-family: 'Rajdhani', sans-serif; font-size: 0.45rem;
          text-transform: uppercase; letter-spacing: 0.28em;
          writing-mode: vertical-rl; transform: rotate(180deg);
        }
        .nb-sub-d { color: rgba(212,175,55,0.28); }
        .nb-sub-l { color: rgba(130,90,8,0.55); }

        /* ── mobile top bar ──────────────────────────── */
        .nb-top {
          position: fixed; top: 0; left: 0; right: 0; height: 62px; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 18px; backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(212,175,55,0.12);
          transition: background 0.4s;
        }
        .nb-top::after {
          content: ''; position: absolute; bottom: 0; left: 15%; right: 15%; height: 1px;
          background: linear-gradient(90deg,transparent,rgba(212,175,55,0.5),transparent);
        }
        .nb-top-d { background: rgba(4,4,4,0.97); }
        .nb-top-l { background: rgba(255,252,240,0.97); }

        .nb-mLogo {
          font-family: 'Cinzel', serif; font-size: 1rem; font-weight: 900;
          background: linear-gradient(135deg,#f5d060,#d4af37,#b8860b);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          filter: drop-shadow(0 0 6px rgba(212,175,55,0.45)); text-decoration: none;
        }
        .nb-ham {
          width: 42px; height: 42px; display: flex; align-items: center; justify-content: center;
          border-radius: 10px; border: 1px solid rgba(212,175,55,0.35);
          background: rgba(212,175,55,0.06); cursor: pointer; font-size: 1.25rem; transition: all 0.25s;
        }
        .nb-ham-d { color: #d4af37; }
        .nb-ham-l { color: #92650a; }
        .nb-ham:hover { background: rgba(212,175,55,0.14); box-shadow: 0 0 16px rgba(212,175,55,0.3); }

        /* ── mobile overlay ──────────────────────────── */
        .nb-overlay {
          position: fixed; inset: 0; top: 62px; z-index: 49;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          overflow: hidden; transition: background 0.4s;
        }
        .nb-overlay::before {
          content: ''; position: absolute; top: -100px; left: -100px;
          width: 350px; height: 350px;
          background: radial-gradient(circle,rgba(212,175,55,0.07) 0%,transparent 70%);
          pointer-events: none;
        }
        .nb-ol-d { background: rgba(3,3,3,0.98); }
        .nb-ol-l { background: rgba(255,252,240,0.98); }

        .nb-mi {
          display: flex; align-items: center; gap: 18px;
          padding: 15px 0; width: 270px;
          border-bottom: 1px solid rgba(212,175,55,0.08);
          font-family: 'Rajdhani', sans-serif; font-size: 1.1rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.18em;
          cursor: pointer; transition: all 0.22s; position: relative;
        }
        .nb-mi-d { color: #4b5563; }
        .nb-mi-l { color: #92700a; }
        .nb-mi .ic { font-size: 1.2rem; transition: color 0.2s; }
        .nb-mi-d .ic { color: rgba(212,175,55,0.35); }
        .nb-mi-l .ic { color: rgba(140,100,10,0.45); }
        .nb-mi:hover, .nb-mi.on { color: #d4af37; padding-left: 14px; }
        .nb-mi:hover .ic, .nb-mi.on .ic { color: #d4af37; }
        .nb-mi.on::before {
          content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%);
          width: 3px; height: 55%;
          background: linear-gradient(180deg,#f5d060,#b8860b); border-radius: 2px;
        }

        /* hide/show per breakpoint */
        @media (max-width: 767px)  { .nb { display: none !important; } }
        @media (min-width: 768px)  { .nb-top, .nb-overlay { display: none !important; } }
      `}</style>

      {/* ════════════════════════════════════════════════════
          LEFT SIDEBAR — Logo + Socials (desktop only)
      ════════════════════════════════════════════════════ */}
      <motion.aside
        initial={{ x: -66 }} animate={{ x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`nb nb-l ${D ? 'nb-dark' : 'nb-light'}`}
      >
        {/* Logo */}
        <div className="flex flex-col items-center gap-2.5">
          <motion.a href="/" className="nb-logo"
            whileHover={{ scale: 1.06 }} transition={{ type: 'spring', stiffness: 280 }}>
            Imran
          </motion.a>
          <span className={`nb-sub ${D ? 'nb-sub-d' : 'nb-sub-l'}`}>Full Stack</span>
        </div>

        <GDiv />

        {/* ── SOCIALS — visible on desktop only (CSS hides on mobile via .nb) ── */}
        <div className="flex flex-col items-center gap-2">
          <p className={`nb-sub ${D ? 'nb-sub-d' : 'nb-sub-l'} mb-1`} style={{ fontSize: '0.42rem' }}>Find Me</p>
          {socials.map((s, i) => (
            <SocialBtn key={s.label} {...s} delay={0.28 + i * 0.07} isDark={D} />
          ))}
        </div>

        <GDiv />

        <span className={`nb-sub ${D ? 'nb-sub-d' : 'nb-sub-l'}`}>2024</span>
      </motion.aside>

      {/* ════════════════════════════════════════════════════
          RIGHT SIDEBAR — Theme toggle + Nav icons (desktop only)
      ════════════════════════════════════════════════════ */}
      <motion.aside
        initial={{ x: 66 }} animate={{ x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`nb nb-r ${D ? 'nb-dark' : 'nb-light'}`}
      >
        {/* Theme toggle at top */}
        <ThemeBtn isDark={D} onToggle={() => setIsDark(p => !p)} />

        <GDiv />

        {/* ── NAV ICONS in center ── */}
        <div className="flex flex-col items-center gap-1.5 flex-1 justify-center">
          {navItems.map((item, i) => (
            <NavPill
              key={item.id}
              item={item}
              active={active === item.text}
              index={i}
              isDark={D}
            />
          ))}
        </div>

        <GDiv />

        <PulseOrb />
      </motion.aside>

      {/* ════════════════════════════════════════════════════
          MOBILE TOP BAR — no socials, just logo + theme + hamburger
      ════════════════════════════════════════════════════ */}
      <motion.header
        initial={{ y: -62 }} animate={{ y: 0 }}
        transition={{ duration: 0.55 }}
        className={`nb-top ${D ? 'nb-top-d' : 'nb-top-l'}`}
      >
        <a href="/" className="nb-mLogo">&lt;Imran /&gt;</a>

        <div className="flex items-center gap-2.5">
          {/* Theme toggle */}
          <ThemeBtn isDark={D} onToggle={() => setIsDark(p => !p)} />

          <div style={{ width: 1, height: 22, background: 'rgba(212,175,55,0.2)' }} />

          {/* Hamburger */}
          <button
            className={`nb-ham ${D ? 'nb-ham-d' : 'nb-ham-l'}`}
            onClick={() => setMenu(!menu)}
            aria-label="menu"
          >
            <AnimatePresence mode="wait">
              {menu
                ? <motion.span key="x"
                    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}><IoClose /></motion.span>
                : <motion.span key="h"
                    initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}><TiThMenu /></motion.span>
              }
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ════════════════════════════════════════════════════
          MOBILE MENU — nav links only, NO socials
      ════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {menu && (
          <motion.div
            className={`nb-overlay ${D ? 'nb-ol-d' : 'nb-ol-l'}`}
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}
              style={{
                fontFamily: 'Rajdhani, sans-serif', fontSize: '0.55rem',
                color: D ? 'rgba(212,175,55,0.32)' : 'rgba(140,100,10,0.5)',
                letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '18px',
              }}
            >── Navigation ──</motion.p>

            {navItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.16 + i * 0.065, ease: 'easeOut' }}
              >
                <Link to={item.to} smooth duration={500} offset={-20}
                  onClick={() => { setMenu(false); setActive(item.text) }}>
                  <div className={`nb-mi ${D ? 'nb-mi-d' : 'nb-mi-l'} ${active === item.text ? 'on' : ''}`}>
                    <span className="ic">{item.icon}</span>
                    {item.text}
                    {active === item.text && (
                      <motion.span layoutId="mActive" className="ml-auto text-xs"
                        style={{ color: 'rgba(212,175,55,0.5)' }}>◆</motion.span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* ── NO SOCIALS on mobile as requested ── */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar