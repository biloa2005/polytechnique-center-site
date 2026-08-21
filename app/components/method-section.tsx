import { reasons } from "./home-data";

export function MethodSection() {
  return <section id="pourquoi-nous" className="method-section section-pad"><div className="page-width"><div className="section-heading method-heading"><div><p className="kicker">Notre méthode</p><h2>Apprendre à faire,<br /><em>puis apprendre seul.</em></h2></div><p>Un chemin simple, progressif et lisible pour transformer les difficultés en leviers.</p></div><div className="reason-grid">{reasons.map(({ title, description, icon: Icon }, index) => <article className="reason-item" key={title}><span className="reason-number">0{index + 1}</span><Icon size={25} /><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>;
}
