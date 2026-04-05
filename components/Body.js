"use client"
import React, { useState, useEffect, useRef } from 'react'
import { ReactTyped } from "react-typed";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react"
import { FaFileDownload } from "react-icons/fa";

/* ─── Particle field ─────────────────────────────────────────── */
const Particles = () => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = canvas.parentElement?.offsetHeight || 700
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.6 + 0.2,
    }))
    let raf
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212,175,55,${p.a})`
        ctx.fill()
      })
      // draw connecting lines
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(212,175,55,${0.08 * (1 - d / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = canvas.parentElement?.offsetHeight || 700
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
}

/* ─── 3D tilt card for avatar ────────────────────────────────── */
const TiltCard = ({ children }) => {
  const ref = useRef(null)
  const x = useMotionValue(0), y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 200, damping: 20 })
  const onMove = e => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const onLeave = () => { x.set(0); y.set(0) }
  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      className="cursor-pointer">
      {children}
    </motion.div>
  )
}

/* ─── Skill badge ─────────────────────────────────────────────── */
const Badge = ({ label, delay }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.7 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.4 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.1, y: -3 }}
    className="badge px-3 py-1 text-xs font-semibold rounded-full border border-yellow-500/40 text-yellow-300 bg-yellow-500/10 backdrop-blur-sm hover:bg-yellow-500/20 transition-colors duration-200">
    {label}
  </motion.span>
)

/* ─── Stat counter ────────────────────────────────────────────── */
const Stat = ({ value, label, delay, isDark }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="text-center">
    <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600">{value}</div>
    <div className={`text-[10px] md:text-xs uppercase tracking-widest mt-0.5 ${isDark ? 'text-gray-400' : 'text-yellow-800/70'}`}>{label}</div>
  </motion.div>
)

/* ─── Main Component ─────────────────────────────────────────── */
const Body = () => {
  const [isOpen, setIsOpen] = useState()
  const [isDark, setIsDark] = useState(true)

  /* ── sync with navbar theme toggle ── */
  useEffect(() => {
    const check = () => {
      const theme = document.documentElement.getAttribute('data-theme')
      setIsDark(theme !== 'light')
    }
    check()
    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  const handleDownloadPdf = () => {
    const link = document.createElement('a')
    link.href = './photo/Imran_Shaikh_cv.pdf'
    link.download = './photo/Imran_Shaikh_cv.pdf'
    link.click()
  }

  // ── theme-aware tokens (only what changes between modes) ──
  const D = isDark
  const sectionBg   = D ? '#000000'                          : '#faf6e8'
  const gridColor   = D ? 'rgba(212,175,55,0.04)'            : 'rgba(160,110,10,0.06)'
  const glowColor   = D ? 'rgba(212,175,55,0.07)'            : 'rgba(180,130,10,0.07)'
  const greetColor  = D ? '#d1d5db'                          : '#3d1f04'
  const statBorder  = D ? 'rgba(212,175,55,0.15)'            : 'rgba(160,110,10,0.22)'
  const statBg      = D ? 'rgba(212,175,55,0.05)'            : 'rgba(180,130,10,0.07)'
  const dividerBg   = D
    ? 'linear-gradient(90deg, transparent, #d4af37, transparent)'
    : 'linear-gradient(90deg, transparent, #b8860b, transparent)'

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Rajdhani:wght@400;500;600;700&display=swap');

        #Body {
          font-family: 'Rajdhani', sans-serif;
          position: relative;
          overflow: hidden;
          transition: background 0.4s;
        }

        /* ── gold grid overlay ── */
        #Body::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
        }

        /* ── radial glow ── */
        #Body::after {
          content: '';
          position: absolute;
          top: -20%;
          left: -10%;
          width: 70%;
          height: 80%;
          background: radial-gradient(ellipse, ${glowColor} 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }

        .gold-title {
          font-family: 'Cinzel Decorative', serif;
          background: linear-gradient(135deg, #f5d060 0%, #d4af37 30%, #fff8dc 55%, #d4af37 75%, #b8860b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: none;
          filter: drop-shadow(0 0 18px rgba(212,175,55,0.45));
        }

        .avatar-ring {
          background: conic-gradient(from 0deg, #d4af37, #fff8dc, #b8860b, #d4af37, #fff8dc, #d4af37);
          animation: spin-ring 6s linear infinite;
        }
        @keyframes spin-ring { to { transform: rotate(360deg); } }

        .avatar-inner {
          transform: translateZ(30px);
        }

        .glow-btn {
          background: linear-gradient(135deg, #d4af37, #b8860b);
          box-shadow: 0 0 20px rgba(212,175,55,0.4), inset 0 1px 0 rgba(255,255,255,0.2);
          transition: all 0.3s ease;
        }
        .glow-btn:hover {
          box-shadow: 0 0 35px rgba(212,175,55,0.7), inset 0 1px 0 rgba(255,255,255,0.3);
          transform: translateY(-2px) scale(1.03);
        }

        .social-btn {
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(212,175,55,0.3);
          background: rgba(212,175,55,0.05);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          color: #d4af37;
          font-size: 1.2rem;
        }
        .social-btn:hover {
          border-color: #d4af37;
          background: rgba(212,175,55,0.15);
          box-shadow: 0 0 16px rgba(212,175,55,0.5);
          transform: translateY(-4px) scale(1.1);
        }

        .status-dot {
          width: 8px; height: 8px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 8px #22c55e;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%,100% { box-shadow: 0 0 6px #22c55e; }
          50% { box-shadow: 0 0 14px #22c55e, 0 0 24px #22c55e55; }
        }

        .corner-bracket::before, .corner-bracket::after,
        .corner-bracket > span::before, .corner-bracket > span::after {
          content: '';
          position: absolute;
          width: 20px; height: 20px;
          border-color: #d4af37;
          border-style: solid;
        }
        .corner-bracket::before { top: -2px; left: -2px; border-width: 2px 0 0 2px; }
        .corner-bracket::after  { top: -2px; right: -2px; border-width: 2px 2px 0 0; }
        .corner-bracket > span::before { bottom: -2px; left: -2px; border-width: 0 0 2px 2px; }
        .corner-bracket > span::after  { bottom: -2px; right: -2px; border-width: 0 2px 2px 0; }
      `}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id='Body'
        name="Home"
        className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-5 md:px-12 lg:px-24 py-16 md:py-0"
        style={{ background: sectionBg, color: D ? '#ffffff' : '#180e03' }}
      >

        {/* Particle canvas */}
        <Particles />

        {/* ── LEFT CONTENT ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-xl w-full">

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="text-2xl mb-1 flex items-center gap-2 md:mt-10"
            style={{ color: greetColor }}>
            <span className="text-3xl">👋🏼</span>
            <span className="font-light tracking-wide">Hello, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="gold-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-2">
            Imran Shaikh
          </motion.h1>

          {/* Typed roles */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-1 mb-5 text-lg md:text-2xl font-semibold"
            style={{ color: D ? '#d1d5db' : '#5a3010' }}>
            <span>I'm a</span>
            <ReactTyped
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500"
              strings={["Full Stack Developer", "React.js Expert", "Node.js Engineer", "Programmer"]}
              typeSpeed={50}
              backSpeed={35}
              loop={true}
            />
          </motion.div>

          {/* Gold divider */}
          <div className="w-full md:w-3/4 mb-6" style={{ height: 1, background: dividerBg }} />

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-5 md:gap-10 mb-8 px-5 py-4 rounded-xl backdrop-blur-sm w-full md:w-auto"
            style={{ border: `1px solid ${statBorder}`, background: statBg }}>
            <Stat value="1+" label="Years Exp." delay={0.1} isDark={D} />
            <div style={{ width: 1, background: statBorder }} />
            <Stat value="10+" label="Projects" delay={0.2} isDark={D} />
            <div style={{ width: 1, background: statBorder }} />
            <Stat value="BCA" label="Graduate" delay={0.3} isDark={D} />
            <div style={{ width: 1, background: statBorder }} />
            <Stat value="10+" label="Technologies" delay={0.4} isDark={D} />
          </motion.div>

          {/* Download CV button
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8">
            <button
              onClick={handleDownloadPdf}
              className="glow-btn flex cursor-pointer items-center gap-3 px-7 py-3.5 rounded-lg text-black font-bold text-base tracking-wide">
              <FaFileDownload className="text-lg" />
              Download Resume
            </button>
          </motion.div> */}

        </motion.div>

        {/* ── RIGHT — AVATAR ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 flex justify-center items-center order-first md:order-last mb-4 md:mb-0">

          <TiltCard>
            {/* Outer decorative glow ring */}
            <div className="relative flex items-center justify-center mt-5 md:mt-0">
              {/* Spinning gradient ring */}
              <div className="avatar-ring absolute rounded-full"
                style={{ width: 'calc(100% + 8px)', height: 'calc(100% + 8px)', top: '-12px', left: '-4px' }} />

              {/* Corner bracket frame */}
              <div className="corner-bracket relative p-2" style={{ transform: 'translateZ(20px)' }}>
                <span />
                {/* Avatar image */}
                <motion.div
                  className="avatar-inner rounded-2xl overflow-hidden"
                  style={{
                    width: '250px', height: '270px',
                    boxShadow: '0 0 40px rgba(212,175,55,0.3), 0 0 80px rgba(212,175,55,0.1), inset 0 0 20px rgba(0,0,0,0.5)',
                  }}>
                  <img
                    src="./photo/imran-removebg.png"
                    alt="Imran Shaikh"
                    className="w-full h-full object-cover object-center"
                    style={{ filter: 'brightness(1.05) contrast(1.05)' }}
                  />
                  {/* gold overlay sheen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-yellow-400/5 pointer-events-none" />
                </motion.div>
              </div>

              {/* Floating badge — Full Stack */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-8 px-3 py-1.5 rounded-lg text-xs font-bold text-black bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/30"
                style={{ zIndex: 20 }}>
                Full Stack Developer
              </motion.div>

              {/* Floating badge — top right (empty, kept as is) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -right-8 px-3 py-1.5 rounded-lg text-xs font-bold border border-yellow-500/40 text-yellow-300 bg-black/60 backdrop-blur-sm shadow-lg"
                style={{ zIndex: 20 }}>
              </motion.div>
            </div>
          </TiltCard>

          {/* decorative background glow behind avatar */}
          <div className="absolute rounded-full pointer-events-none"
            style={{
              width: '320px', height: '320px',
              background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)',
              zIndex: 0,
              filter: 'blur(20px)',
            }} />
        </motion.div>

      </motion.div>
    </>
  )
}

export default Body