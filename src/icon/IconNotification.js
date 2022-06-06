
export function IconNotification({
      isNew, count
}) {
      return (
            <div style={{ position: 'relative', cursor:'pointer' }}>
                  <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                              <path d="M4 23V13H20V23" stroke="#444444" strokeWidth="2" strokeLinecap="square" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M23 27V35H1V27H8V30H16V27H23Z" stroke="#444444" strokeWidth="2" strokeLinecap="square" />
                              <path d="M9 18H15" stroke="#444444" strokeWidth="2" strokeLinecap="square" />
                              <path d="M9 22H15" stroke="#444444" strokeWidth="2" strokeLinecap="square" />
                        </g>
                  </svg>
                  {isNew ? <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        transform:'translate-x(50%)',
                        color: "white",
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        display: 'grid',
                        placeItems: 'center',
                        width: '22px',
                        height: '22px',
                  }}>
                        <div style={{
                              width: '18px',
                              height: '18px',
                              display: 'grid',
                              placeItems: 'center',
                              fontSize: '11px',
                              lineHeight: '13px',
                              backgroundColor:'#2995DA',
                              borderRadius:'50%'
                        }}>
                              {count}
                        </div>
                  </div> : null}
            </div>
      );
}

IconNotification.defaultProps = {
      isNew: false,
      count: 0
}