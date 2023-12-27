import styles from "./NameTag.module.css";

const NameTag = () => (
  <div class={styles.NameTagWrapper}>
    <span class={styles.firstName}>
      <span>Ollie</span>
      <span>@Oily</span>
    </span>
    <span> </span>
    <span class={styles.lastName}>
      <span>Crook</span>
      <span>Quack</span>
    </span>
  </div>
);
export default NameTag;
