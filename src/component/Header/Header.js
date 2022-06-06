import styles from './Header.module.css';

export function Header({
      children,
      style
}) {
      const styleProp = style ? { style } : {};
      return (
            <div className={styles.header} {...styleProp}>
                  {children}
            </div>
      )
}