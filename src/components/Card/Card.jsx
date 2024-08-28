import styles from "./Card.module.css";

function Card({ children, className }) {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.card} ${className}`}>{children}</div>
        </div>
    );
}

export default Card;
