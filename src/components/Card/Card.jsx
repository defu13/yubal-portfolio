import styles from "./Card.module.css";

function Card({ children, className, clickable = true }) {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.card} ${className} ${clickable ? styles.clickable : ""}`}>{children}</div>
        </div>
    );
}

export default Card;
