import Date from "./Date";
import style from "./Amazon.module.css";
import styles from "./Apple.module.css";

const Amazon = () => {
  return (
    <>
      <div className={style.bg}>
        <Date className={styles.date} />
        <img
          className={styles.logo}
          alt="apple logo"
          src="data:image/png;base64,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"
        />
        <div className={styles.case}>Case Study</div>
        <div className={styles.gift}>Amazon Gift</div>
        <div className={styles.pay}>Payment</div>
        <div className={styles.system}>Desktop-Mobile</div>
        <img
          className={styles.arrow}
          src="https://img.icons8.com/ios/50/undefined/forward--v1.png"
          alt="roght arrow"
        />
      </div>
    </>
  );
};

export default Amazon;
