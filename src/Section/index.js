import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <div className="section__checkList">
            <div className="section__title">{title}</div>
            {extraHeaderContent}
        </div>
        <div className="checkList">
            {body}
        </div>
    </section>
);

export default Section;