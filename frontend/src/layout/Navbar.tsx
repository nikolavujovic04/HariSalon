import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ReservationButton from '../components/button/ReservationButton'
import "../styles/Navbar.css"

const links = [
  { label: "Services", href: "#services" },
  { label: "Book", href: "#booking" },
  { label: "Barbers", href: "#barbers" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="navbar-header"
    >
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <a href="#top" className="navbar-logo">
          <span className="navbar-logo__icon">✂</span>
          <span className="navbar-logo__text">MAISON</span>
        </a>

        <ul className="navbar-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="navbar-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <ReservationButton text="Rezervisi" className="btn-primary" />


        <button
          onClick={() => setOpen((v) => !v)}
          className="navbar-hamburger"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="navbar-mobile"
          >
            <ul className="navbar-mobile__links">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="navbar-mobile__link"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className="navbar-mobile__cta"
                >
                  Reserve your seat
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}