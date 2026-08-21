import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { navigationLinks } from "./home-data";

export function SiteFooter() {
  return <footer className="site-footer"><div className="page-width footer-top"><div><Link href="#accueil" className="footer-brand">Polytechnique<br /><em>Center</em></Link><p>Cours de répétition<br />pour toutes les classes.</p><div className="socials"><a href="#" aria-label="Facebook"><FaFacebookF /></a><a href="#" aria-label="Instagram"><FaInstagram /></a><a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a><a href="https://wa.me/237677769047" aria-label="WhatsApp"><FaWhatsapp /></a></div></div><div className="footer-links"><div><h3>Explorer</h3>{navigationLinks.slice(1).map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div><div><h3>Programmes</h3><span>Toutes les classes</span><span>Renforcement scolaire</span><span>Préparation aux examens</span></div></div></div><div className="page-width footer-bottom"><span>© 2026 Polytechnique Center</span><span>Apprendre. Progresser. Réussir.</span></div></footer>;
}
