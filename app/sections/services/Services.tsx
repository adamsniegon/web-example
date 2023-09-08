import GradientContainer from "@components/gradientContainer/GradientContainer";
import Badge from "@components/badge/Badge";
import GradientHeadline from "@components/gradientHeadline/GradientHeadline";
import SectionText from "@components/sectionText/SectionText";
import ServiceCard from "@components/serviceCard/ServiceCard";
import content from "@content.json";
import styles from "./services.module.scss";

export default function Services() {
    const { section: { services: { badge, headline, text, list } } } = content;

    return (
        <div id="services" className="section">
            <GradientContainer>
                <Badge>{badge}</Badge>
            </GradientContainer>
            <GradientHeadline className="section__headline">
                <h2>{headline}</h2>
            </GradientHeadline>
            <SectionText>
                <p>{text}</p>
            </SectionText>
            <div className={`section__content ${styles["services__grid"]}`}>
                {list.map(({ id, icon, name, list }) => (
                    <ServiceCard key={id} icon={icon} name={name} list={list} />
                ))}
            </div>
        </div>
    )
}