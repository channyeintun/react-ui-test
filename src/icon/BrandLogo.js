import logo from '../assets/sw-logo-white.svg';

export function BrandLogo() {
      return (
            <div style={{
                  display:'grid',
                  placeItems:'center',
                  width:'100%',
                  height:80
            }}>
                  <img src={logo} width={40} />
            </div>
      );
}