import styles from './Input.module.css';
import React from 'react';

export function Input({ icon, onPressEnter, ...props }) {
      const pressEnterHandler = (e) => {
            if (e.key === 'Enter') {
                  console.log(e.target.value);
                  typeof onPressEnter === 'function' && onPressEnter();
            }
      }
      return (
            <div className={styles.inputWrapper}>
                  {icon ? <div className={styles.icon}>{icon}</div> : null}
                  <input
                        onKeyDown={pressEnterHandler}
                        className={styles.input} {...props} />
            </div>
      );
}