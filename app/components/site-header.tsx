import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MobileMenu } from "./mobile-menu";
import { navigationLinks } from "./home-data";

export function SiteHeader() {
  return <>
    <div className="utility-bar"><div className="page-width utility-inner"><span>POLYTECHNIQUE CENTER</span><span>Douala, Cameroun</span><a href="#contact">Prendre rendez-vous <ArrowUpRight size={13} /></a></div></div>
    <header className="site-header"><div className="page-width header-inner"><Link href="#accueil" className="brand" aria-label="Polytechnique Center, accueil"><Image src="/logo.png" alt="Polytechnique Center" width={150} height={115} priority /><span><strong>Polytechnique</strong><small>Center · Excellence scolaire</small></span></Link><nav className="desktop-nav" aria-label="Navigation principale">{navigationLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><MobileMenu /></div></header>
  </>;
}
