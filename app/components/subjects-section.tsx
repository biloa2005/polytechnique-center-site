import { ArrowUpRight } from "lucide-react";
import { subjects } from "./home-data";

export function SubjectsSection() {
  return <section id="cours" className="subjects-section section-pad"><div className="page-width"><div className="section-heading"><div><p className="kicker">Un accompagnement complet</p><h2>Les matières qui<br /><em>ouvrent le monde.</em></h2></div><p>Du collège au lycée, les séances s’adaptent au programme, au rythme et aux objectifs de chaque élève.</p></div><div className="subject-list">{subjects.map(({ name, description, icon: Icon }, index) => <a href="#contact" className={`subject-item ${index === 0 ? "subject-featured" : ""}`} key={name}><span className="subject-index">0{index + 1}</span><Icon size={22} /><div><h3>{name}</h3><p>{description}</p></div><ArrowUpRight className="subject-arrow" size={20} /></a>)}</div></div></section>;
}
