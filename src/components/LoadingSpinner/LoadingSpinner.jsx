import styles from "./LoadingSpinner.module.css";
function LoadingSpinner() {
    return (
        <div className={styles.spinner}>
            <div className="flex gap-2">
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
            <p className="neuemontreal-regular text-sm">Un momento...</p>
        </div>
    );
}

export default LoadingSpinner;
