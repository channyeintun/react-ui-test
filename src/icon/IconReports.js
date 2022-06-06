import React from 'react';
import PropTypes from 'prop-types';

export function IconReports({ isActive }) {
      return (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="icon-reports" opacity={isActive ? "1" : "0.5"} fillRule="evenodd" clipRule="evenodd" d="M10.2188 6.9375L6.65625 14.0625H0C0.46875 6.1875 6.9375 0 14.9062 0C22.875 0 29.3438 6.1875 29.9062 14.0625H22.5938C22.2188 14.0625 21.9375 14.3438 21.75 14.625L18.75 20.625L11.9062 6.9375C11.625 6.28125 10.5 6.28125 10.2188 6.9375ZM19.5938 23.0625L23.1562 15.9375H29.8125C29.3438 23.8125 22.875 30 14.9062 30C6.9375 30 0.46875 23.8125 0 15.9375H7.21875C7.59375 15.9375 7.875 15.75 8.0625 15.375L11.0625 9.375L17.9062 23.0625C18.0938 23.4375 18.375 23.625 18.75 23.625C19.125 23.625 19.4062 23.3438 19.5938 23.0625Z" fill="white" />
            </svg>

      );
}

IconReports.propTypes = {
      isActive: PropTypes.bool.isRequired,
}

IconReports.defaultProps = {
      isActive: false
}