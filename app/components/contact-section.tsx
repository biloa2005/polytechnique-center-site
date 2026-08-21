import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return <section id="contact" className="contact-section section-pad"><div className="page-width contact-grid"><div><p className="kicker">Échangeons</p><h2>Le prochain progrès<br /><em>commence ici.</em></h2><p className="contact-intro">Parlons du niveau actuel, des points de blocage et du rythme scolaire de votre enfant pour définir ensemble la formule adaptée.</p><div className="contact-details"><a href="tel:+237677769047"><Phone size={17} />677 76 90 47</a><a href="mailto:bonjour@polytechnique-center.com"><Mail size={17} />bonjour@polytechnique-center.com</a><span><MapPin size={17} />Douala, Cameroun</span><span><Clock3 size={17} />Lun. - Sam. · 8h à 18h</span></div></div><ContactForm /></div></section>;
}
