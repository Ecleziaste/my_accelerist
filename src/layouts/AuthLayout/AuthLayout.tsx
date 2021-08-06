import styles from "./AuthLayout.module.scss";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.root}>
      <div className={styles.background} />
      <div className={styles.formContainer}>{children}</div>
    </div>
  );
};

export default AuthLayout;
