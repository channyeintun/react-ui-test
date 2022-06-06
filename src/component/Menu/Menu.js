import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.css';
import { useNavigate } from 'react-router-dom';

export function Menu({
      defaultSelectedKey,
      children,
      selectedKey,
      onChange,
      style,
}) {
      return (
            <div className={styles.menu} style={style}>
                  {React.Children.map(children, child => {
                        selectedKey = selectedKey ?? defaultSelectedKey;
                        if (React.isValidElement(child)) {
                              return React.cloneElement(child, { selectedKey, onClick: onChange });
                        }
                        return child;
                  })}
            </div>
      )
}

Menu.MenuItem = function MenuItem({
      selectedKey,
      itemKey,
      icon,
      title,
      onClick,
      style,
      link,
}) {

      const navigate = useNavigate();

      const isSelected = selectedKey === itemKey;

      if (React.isValidElement(icon)) {
            icon = React.cloneElement(icon, { isActive: isSelected });
      }

      return (<div className={styles.menuItem}
            onClick={() => {
                  onClick(itemKey);
                  link && navigate(link);
            }}
            style={{
                  ...style,
                  background: isSelected ? '#2995DA' : 'transparent'
            }}>
            {icon}
            {title ?? ""}
      </div>)
}

const MenuItemType = function (propValue, key, componentName, location, propFullName) {
      if (Array.isArray(propValue) && propValue.every(value => /MenuItem/.test(value.type.name))) { }
      else {
            return new Error(
                  'Invalid prop `' + propFullName + '` supplied to' +
                  ' `' + componentName + '`. Validation failed.'
            );
      }
};

Menu.MenuItem.propTypes = {
      selectedKey: PropTypes.string,
      itemKey: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      title: PropTypes.string,
      onClick: PropTypes.func,
      style: PropTypes.object,
      link: PropTypes.string
}

Menu.MenuItem.defaultProps = {
      style: {}
}

Menu.propTypes = {
      children: PropTypes.arrayOf(MenuItemType),
      onChange: PropTypes.func.isRequired,
      selectedKey: PropTypes.string,
      defaultSelectedKey: PropTypes.string,
      style: PropTypes.object
}

Menu.defaultProps = {
      style: {}
}