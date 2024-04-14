import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <div className="section__title">
      <div className="section__titleName">{title}</div>
      {extraHeaderContent}
    </div>
    <div className="section__checkList">
      {body}
    </div>
  </section>
);

export default Section;