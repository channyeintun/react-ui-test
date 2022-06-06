import styles from './Main.module.css';

export function Main(props){
      return (
            <div className={styles.main}>
                  {props.children}
            </div>
      );
}