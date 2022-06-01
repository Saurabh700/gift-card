import Date from "./Date";
import styles from "./Apple.module.css";

const Apple = () => {
  return (
    <div className={styles.bg}>
      <Date className={styles.date} />
      <img
        className={styles.logo}
        alt="apple logo"
        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
      />
      <div className={styles.case}>Case Study</div>
      <div className={styles.gift}>Apple Gift</div>
      <div className={styles.pay}>Payment</div>
      <div className={styles.system}>MacOS-Mobile</div>
      <img
        className={styles.arrow}
        src="https://img.icons8.com/ios/50/undefined/forward--v1.png"
        alt="roght arrow"
      />
    </div>
  );
};

export default Apple;
