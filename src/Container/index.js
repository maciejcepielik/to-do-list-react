import "./style.css";

const Container = ({ title, body, extraHeaderContent }) => (
    <section className="container">
        <div className="container--checkList">
            <div className="container__title container__title--checkList">{title}</div>
            {extraHeaderContent}
        </div>
        <div className="checkList">
            {body}
        </div>
    </section>
);

export default Container;