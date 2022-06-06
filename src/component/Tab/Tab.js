import React, { useState } from 'react';
import styles from './Tab.module.css';

export function Tabs({ defaultActiveKey,
      children,
      selectedKey,
      onChange,
      hideContent
}) {
      let content;
      const buttons = [];
      selectedKey = selectedKey ?? defaultActiveKey;
      if (children instanceof Array) {
            {
                  React.Children.map(children, child => {
                        buttons.push({
                              label: child.props?.label,
                              key: child.props?.tabKey,
                        })
                        if (hideContent || child.props?.tabKey === selectedKey) {
                              content = child.props.children
                        }
                  })
                  return (
                        <div className={styles.tabContainer}>
                              <TabButtons selectedKey={selectedKey}
                                    buttons={buttons} onChange={onChange} />
                              {hideContent ? null : <div className={styles.tabContent}>{content}</div>}
                        </div>
                  )
            }
      } else {
            return (
                  <h1>
                        You don't even need tabs.
                  </h1>
            )
      }
}

Tabs.TabPane = props => {
      return (
            <React.Fragment>
                  {props.children}
            </React.Fragment>
      )
}

function TabButtons({ buttons, onChange, selectedKey }) {

      return (
            <div className={styles.tabButtons}>
                  {buttons.map(tabButton => {
                        const { label, key } = tabButton;
                        return <button
                              key={key}
                              className={key === selectedKey
                                    ? `${styles.tabButton} ${styles.activeTab}` : styles.tabButton}
                              onClick={() => onChange(key)}>{label}</button>
                  })}
            </div>
      )
}