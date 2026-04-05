"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { FiAward, FiCalendar, FiExternalLink, FiX, FiZoomIn } from "react-icons/fi"
import { HiOutlineBadgeCheck } from "react-icons/hi"

/* ══ DEMO CERTIFICATES — replace with your real ones later ════ */
const certificates = [
  {
    id: 1,
    title: "React.js Complete Developer Course",
    issuer: "Udemy",
    date: "March 2024",
    credentialId: "UC-XXXX-XXXX",
    url: "#",
    image: "./photo/cert1.jpg",       // ← replace with your certificate image path
    category: "Frontend",
    color: "#61dafb",
    icon: "⚛️",
    description: "Comprehensive course covering React hooks, Redux, React Router, and building production-ready applications.",
  },
  {
    id: 2,
    title: "Node.js & Express Backend Development",
    issuer: "Coursera",
    date: "January 2024",
    credentialId: "COUR-XXXX-XXXX",
    url: "#",
    image: "./photo/cert2.jpg",
    category: "Backend",
    color: "#68a063",
    icon: "🟢",
    description: "Learned RESTful API design, authentication with JWT, MongoDB integration, and deploying Node.js apps.",
  },
  {
    id: 3,
    title: "Next.js & Full Stack Web Development",
    issuer: "Zero To Mastery",
    date: "November 2023",
    credentialId: "ZTM-XXXX-XXXX",
    url: "#",
    image: "./photo/cert3.jpg",
    category: "Full Stack",
    color: "#d4af37",
    icon: "▲",
    description: "Covered server-side rendering, static generation, API routes, and full-stack deployment with Vercel.",
  },
  {
    id: 4,
    title: "Tailwind CSS Mastery",
    issuer: "Scrimba",
    date: "September 2023",
    credentialId: "SCR-XXXX-XXXX",
    url: "#",
    image: "./photo/cert4.jpg",
    category: "Frontend",
    color: "#38bdf8",
    icon: "💨",
    description: "Deep dive into utility-first CSS, responsive design patterns, custom configurations, and component styling.",
  },
  {
    id: 5,
    title: "Python Programming Fundamentals",
    issuer: "freeCodeCamp",
    date: "July 2023",
    credentialId: "FCC-XXXX-XXXX",
    url: "#",
    image: "./photo/cert5.jpg",
    category: "Programming",
    color: "#f7d060",
    icon: "🐍",
    description: "Core Python concepts including data structures, OOP, file handling, and automation scripting.",
  },
  {
    id: 6,
    title: "MongoDB & Database Design",
    issuer: "MongoDB University",
    date: "May 2023",
    credentialId: "MDB-XXXX-XXXX",
    url: "#",
    image: "./photo/cert6.jpg",
    category: "Database",
    color: "#4db33d",
    icon: "🍃",
    description: "Schema design, aggregation pipelines, indexing strategies, and MongoDB Atlas cloud deployment.",
  },
]

const categories = ["All", ...Array.from(new Set(certificates.map(c => c.category)))]

/* ══ Section Heading ══════════════════════════════════════════ */
const SectionHeading = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex flex-col items-center mb-12"
  >
    <h2 style={{
      fontFamily: "'Cinzel', serif",
      fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
      fontWeight: 900,
      background: 'linear-gradient(135deg,#f5d060 0%,#d4af37 40%,#fffacd 60%,#b8860b 100%)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      filter: 'drop-shadow(0 0 12px rgba(212,175,55,0.45))',
      letterSpacing: '0.08em', textAlign: 'center',
    }}>Certificates</h2>
    <div style={{ width: 70, height: 2, marginTop: 12, background: 'linear-gradient(90deg,transparent,#d4af37,transparent)' }} />
    <div style={{ width: 30, height: 2, marginTop: 5,  background: 'linear-gradient(90deg,transparent,rgba(212,175,55,0.4),transparent)' }} />
    <p className="cert-sub" style={{
      marginTop: 14, fontSize: '0.88rem', letterSpacing: '0.06em',
      textAlign: 'center', maxWidth: 400, fontFamily: 'Rajdhani, sans-serif',
    }}>
      Courses &amp; certifications I've completed
    </p>
  </motion.div>
)

/* ══ Lightbox Modal ═══════════════════════════════════════════ */
const Lightbox = ({ cert, onClose, isDark }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
    onClick={onClose}
    style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(0,0,0,0.88)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 20, backdropFilter: 'blur(10px)',
    }}
  >
    <motion.div
      initial={{ scale: 0.85, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.85, opacity: 0, y: 30 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      onClick={e => e.stopPropagation()}
      style={{
        borderRadius: 20, overflow: 'hidden',
        border: '1px solid rgba(212,175,55,0.35)',
        background: isDark ? 'rgba(8,6,2,0.98)' : 'rgba(255,253,242,0.99)',
        maxWidth: 700, width: '100%',
        boxShadow: '0 0 60px rgba(212,175,55,0.18), 0 20px 60px rgba(0,0,0,0.6)',
        position: 'relative',
      }}
    >
      {/* top shimmer */}
      <div style={{
        position: 'absolute', top: 0, left: '8%', right: '8%', height: 1,
        background: 'linear-gradient(90deg,transparent,rgba(212,175,55,0.7),transparent)',
      }} />

      {/* close btn */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 14, right: 14, zIndex: 10,
          width: 36, height: 36, borderRadius: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1px solid rgba(212,175,55,0.3)',
          background: 'rgba(212,175,55,0.08)',
          color: '#d4af37', cursor: 'pointer', fontSize: '1rem',
          transition: 'all 0.2s',
        }}
      ><FiX /></button>

      {/* certificate image */}
      <div style={{
        width: '100%', height: 300, overflow: 'hidden',
        background: isDark ? 'rgba(15,12,4,0.8)' : 'rgba(245,240,220,0.8)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        <img
          src={cert.image}
          alt={cert.title}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          onError={e => { e.target.style.display = 'none' }}
        />
        {/* fallback placeholder */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 10, zIndex: -1,
        }}>
          <span style={{ fontSize: '3.5rem' }}>{cert.icon}</span>
          <p style={{ color: 'rgba(212,175,55,0.4)', fontSize: '0.75rem',
            fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Certificate Preview
          </p>
        </div>
      </div>

      {/* info */}
      <div style={{ padding: '24px 28px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14 }}>
          <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{cert.icon}</span>
          <div>
            <h3 style={{
              fontFamily: 'Cinzel, serif', fontSize: '1.1rem', fontWeight: 900, lineHeight: 1.3, marginBottom: 4,
              background: 'linear-gradient(135deg,#f5d060,#d4af37,#c4961a)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>{cert.title}</h3>
            <p style={{ color: isDark ? '#f3f4f6' : '#180e03', fontWeight: 700, fontSize: '0.95rem', fontFamily: 'Rajdhani, sans-serif' }}>
              {cert.issuer}
            </p>
          </div>
        </div>

        <p style={{ color: isDark ? '#c9cdd5' : '#2d1a04', lineHeight: 1.8, fontSize: '0.88rem', fontFamily: 'Rajdhani, sans-serif', marginBottom: 16 }}>
          {cert.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <span style={{ fontSize: '0.78rem', color: isDark ? '#7a8090' : '#7a4d0a', fontFamily: 'Rajdhani, sans-serif', display: 'flex', alignItems: 'center', gap: 5 }}>
              <FiCalendar style={{ color: '#d4af37' }} /> {cert.date}
            </span>
            <span style={{ fontSize: '0.78rem', color: isDark ? '#7a8090' : '#7a4d0a', fontFamily: 'Rajdhani, sans-serif' }}>
              ID: {cert.credentialId}
            </span>
          </div>
          {cert.url && cert.url !== '#' && (
            <a href={cert.url} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '7px 16px', borderRadius: 10,
                background: 'linear-gradient(135deg,#d4af37,#b8860b)',
                color: '#000', fontWeight: 800, fontSize: '0.72rem',
                textTransform: 'uppercase', letterSpacing: '0.15em',
                textDecoration: 'none', fontFamily: 'Rajdhani, sans-serif',
                boxShadow: '0 0 16px rgba(212,175,55,0.35)',
              }}>
              <FiExternalLink /> Verify
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
)

/* ══ Certificate Card ═════════════════════════════════════════ */
const CertCard = ({ cert, index, isDark, onOpen }) => {
  const D = isDark
  const bgCard  = D ? 'rgba(10,8,3,0.92)'       : 'rgba(255,253,242,0.97)'
  const borderC = D ? 'rgba(212,175,55,0.14)'    : 'rgba(160,110,10,0.2)'
  const textH   = D ? '#f3f4f6'                  : '#180e03'
  const textM   = D ? '#7a8090'                  : '#7a4d0a'

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6, boxShadow: `0 0 35px rgba(212,175,55,0.14), 0 12px 40px rgba(0,0,0,0.28)` }}
      onClick={() => onOpen(cert)}
      style={{
        borderRadius: 16,
        border: `1px solid ${borderC}`,
        background: bgCard,
        backdropFilter: 'blur(16px)',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        transition: 'border-color 0.3s',
      }}
      className="cert-card group"
    >
      {/* top shimmer on hover */}
      <div className="cert-shimmer" style={{
        position: 'absolute', top: 0, left: '6%', right: '6%', height: 1,
        background: 'linear-gradient(90deg,transparent,rgba(212,175,55,0.55),transparent)',
        opacity: 0, transition: 'opacity 0.3s', zIndex: 2,
      }} />

      {/* left color bar */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
        background: `linear-gradient(180deg,${cert.color}70,${cert.color},${cert.color}50)`,
        borderRadius: '16px 0 0 16px',
      }} />

      {/* ── IMAGE AREA ── */}
      <div style={{
        width: '100%', height: 160, overflow: 'hidden', position: 'relative',
        background: D ? 'rgba(15,12,4,0.85)' : 'rgba(245,240,220,0.85)',
        borderBottom: `1px solid ${borderC}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <img
          src={cert.image}
          alt={cert.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          className="cert-img"
          onError={e => { e.target.style.display = 'none' }}
        />
        {/* fallback / overlay */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, zIndex: 0,
        }}>
          <span style={{ fontSize: '2.8rem' }}>{cert.icon}</span>
          <p style={{ color: 'rgba(212,175,55,0.35)', fontSize: '0.62rem',
            fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            {cert.issuer}
          </p>
        </div>

        {/* zoom hint overlay */}
        <div className="cert-zoom" style={{
          position: 'absolute', inset: 0, zIndex: 3,
          background: 'rgba(0,0,0,0.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0, transition: 'opacity 0.3s',
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(212,175,55,0.2)',
            border: '1px solid rgba(212,175,55,0.5)',
            color: '#d4af37', fontSize: '1.2rem',
          }}>
            <FiZoomIn />
          </div>
        </div>

        {/* category badge */}
        <span style={{
          position: 'absolute', top: 10, right: 10, zIndex: 4,
          padding: '3px 10px', borderRadius: 99,
          fontSize: '0.58rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em',
          background: `${cert.color}20`, border: `1px solid ${cert.color}45`,
          color: cert.color, fontFamily: 'Rajdhani, sans-serif',
          backdropFilter: 'blur(8px)',
        }}>{cert.category}</span>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ padding: '16px 18px 18px' }}>
        {/* verified badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 8 }}>
          <HiOutlineBadgeCheck style={{ color: '#22c55e', fontSize: '0.95rem', flexShrink: 0 }} />
          <span style={{ fontSize: '0.6rem', color: '#22c55e', fontFamily: 'Rajdhani, sans-serif',
            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em' }}>Verified Certificate</span>
        </div>

        {/* title */}
        <h3 style={{
          fontFamily: 'Cinzel, serif',
          fontSize: 'clamp(0.78rem, 1.8vw, 0.92rem)',
          fontWeight: 900, lineHeight: 1.35, marginBottom: 6,
          background: 'linear-gradient(135deg,#f5d060,#d4af37,#c4961a)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>{cert.title}</h3>

        {/* issuer */}
        <p style={{ color: textH, fontWeight: 700, fontSize: '0.85rem',
          fontFamily: 'Rajdhani, sans-serif', marginBottom: 10 }}>{cert.issuer}</p>

        {/* divider */}
        <div style={{ height: 1, marginBottom: 10,
          background: `linear-gradient(90deg,${borderC},transparent)` }} />

        {/* date + id */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5,
            color: textM, fontSize: '0.75rem', fontFamily: 'Rajdhani, sans-serif' }}>
            <FiCalendar style={{ color: '#d4af37', fontSize: '0.7rem' }} />
            {cert.date}
          </span>
          <span style={{
            fontSize: '0.58rem', color: D ? 'rgba(212,175,55,0.45)' : 'rgba(130,80,10,0.5)',
            fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.06em',
          }}>Click to view</span>
        </div>
      </div>

      <style>{`
        .cert-card:hover .cert-shimmer { opacity: 1 !important; }
        .cert-card:hover { border-color: rgba(212,175,55,0.38) !important; }
        .cert-card:hover .cert-zoom { opacity: 1 !important; }
        .cert-card:hover .cert-img { transform: scale(1.06); }
      `}</style>
    </motion.div>
  )
}

/* ══ Main Component ═══════════════════════════════════════════ */
const Certificate = () => {
  const [isDark, setIsDark] = useState(true)
  const [activeFilter, setActiveFilter] = useState("All")
  const [selected, setSelected] = useState(null)

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

  // close lightbox on Escape
  useEffect(() => {
    const fn = e => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [])

  const D = isDark
  const bg       = D ? '#050503'                      : '#faf6e8'
  const gridLine = D ? 'rgba(212,175,55,0.035)'       : 'rgba(160,120,10,0.055)'
  const filterBg = D ? 'rgba(10,8,3,0.9)'             : 'rgba(255,253,242,0.95)'
  const filterBdr= D ? 'rgba(212,175,55,0.14)'        : 'rgba(160,110,10,0.2)'
  const subColor = D ? '#6b7280'                      : '#7a4d0a'

  const filtered = activeFilter === "All"
    ? certificates
    : certificates.filter(c => c.category === activeFilter)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Rajdhani:wght@500;600;700&display=swap');
        #Certificate { font-family: 'Rajdhani', sans-serif; }
        .cert-wrap { position: relative; }
        .cert-wrap::before {
          content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(${gridLine} 1px, transparent 1px),
            linear-gradient(90deg, ${gridLine} 1px, transparent 1px);
          background-size: 56px 56px;
        }
        .cert-sub { color: ${subColor}; }

        /* filter pill */
        .f-pill {
          padding: 6px 16px; border-radius: 99px; cursor: pointer;
          font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.14em; transition: all 0.22s ease;
          font-family: 'Rajdhani', sans-serif;
          border: 1px solid ${filterBdr};
          background: transparent;
          color: ${D ? '#4b5563' : '#92700a'};
        }
        .f-pill:hover {
          border-color: rgba(212,175,55,0.4);
          color: #d4af37;
          background: rgba(212,175,55,0.08);
        }
        .f-pill.active {
          background: linear-gradient(135deg,rgba(212,175,55,0.22),rgba(212,175,55,0.08));
          border-color: rgba(212,175,55,0.5);
          color: #d4af37;
          box-shadow: 0 0 14px rgba(212,175,55,0.2);
        }
      `}</style>

      <section
        id="Certificate"
        name="Certificate"
        className="cert-wrap w-full py-20 md:py-28 px-5 md:px-16 transition-colors duration-400"
        style={{ background: bg }}
      >
        {/* ambient glow orbs */}
        <div style={{ position:'absolute', top:'6%', left:'4%', width:380, height:380,
          background:'radial-gradient(circle,rgba(212,175,55,0.055) 0%,transparent 70%)',
          pointerEvents:'none', borderRadius:'50%', zIndex:0 }} />
        <div style={{ position:'absolute', bottom:'8%', right:'3%', width:300, height:300,
          background:'radial-gradient(circle,rgba(212,175,55,0.04) 0%,transparent 70%)',
          pointerEvents:'none', borderRadius:'50%', zIndex:0 }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeading />

          {/* ── stats strip ── */}
          <motion.div
            initial={{ opacity:0, y:16 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.5 }}
            viewport={{ once:true }}
            className="flex flex-wrap justify-center gap-6 mb-10 px-6 py-4 rounded-2xl"
            style={{
              border:`1px solid ${filterBdr}`,
              background: filterBg,
              backdropFilter:'blur(12px)',
              maxWidth: 440, margin: '0 auto 40px',
            }}
          >
            {[
              { val: `${certificates.length}`,                                             lbl: 'Total Certs'   },
              { val: `${Array.from(new Set(certificates.map(c=>c.issuer))).length}`,       lbl: 'Platforms'     },
              { val: `${Array.from(new Set(certificates.map(c=>c.category))).length}`,     lbl: 'Categories'    },
            ].map((s, i) => (
              <React.Fragment key={s.lbl}>
                {i > 0 && <div style={{ width:1, background: D ? 'rgba(212,175,55,0.2)' : 'rgba(160,110,10,0.2)' }} />}
                <div className="text-center">
                  <p style={{ fontSize:'1.6rem', fontWeight:900, lineHeight:1,
                    background:'linear-gradient(135deg,#f5d060,#d4af37)',
                    WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{s.val}</p>
                  <p style={{ fontSize:'0.6rem', textTransform:'uppercase', letterSpacing:'0.18em',
                    color: D ? '#6b7280' : '#7a4d0a', marginTop:2, fontFamily:'Rajdhani, sans-serif' }}>{s.lbl}</p>
                </div>
              </React.Fragment>
            ))}
          </motion.div>

          {/* ── filter pills ── */}
          <motion.div
            initial={{ opacity:0, y:12 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.45, delay:0.1 }}
            viewport={{ once:true }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {categories.map(cat => (
              <button
                key={cat}
                className={`f-pill ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat === "All" && <span style={{ marginRight:5 }}>🏅</span>}
                {cat}
              </button>
            ))}
          </motion.div>

          {/* ── certificate grid ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity:0, y:10 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-10 }}
              transition={{ duration:0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((cert, i) => (
                <CertCard
                  key={cert.id}
                  cert={cert}
                  index={i}
                  isDark={D}
                  onOpen={setSelected}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ── footer note ── */}
          <motion.p
            initial={{ opacity:0, y:10 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ delay:0.3 }}
            viewport={{ once:true }}
            className="text-center mt-14"
            style={{
              fontSize:'0.78rem', letterSpacing:'0.14em', textTransform:'uppercase',
              color: D ? 'rgba(212,175,55,0.3)' : 'rgba(140,90,10,0.38)',
              fontFamily:'Rajdhani, sans-serif',
            }}
          >── More certificates coming soon ──</motion.p>
        </div>
      </section>

      {/* ── divider ── */}
      <div style={{ height:1, background:`linear-gradient(90deg,transparent,${D?'rgba(212,175,55,0.3)':'rgba(160,110,10,0.3)'},transparent)` }} />

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {selected && (
          <Lightbox cert={selected} onClose={() => setSelected(null)} isDark={D} />
        )}
      </AnimatePresence>
    </>
  )
}

export default Certificate