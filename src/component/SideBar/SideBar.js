import styles from './SideBar.module.css';

export function SideBar(props){
      return (
            <div className={styles.sidebar}>
                  {props.children}
            </div>
      );
}