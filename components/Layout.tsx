import Nav from './Nav';
import Footer from './Footer';
import Cookies from 'js-cookie';


type LayoutProps = {
    children: React.ReactNode
    footerColor?: string;
}

const Layout: React.FC<LayoutProps> = ({children, footerColor}) => {
  const loggedIn = !!Cookies.get('token')
  console.log(loggedIn)
   

   
    return (
        <div >
             <Nav loggedIn={loggedIn}/>
            <div style={{flex: 1}}>
              {children}
            </div>
            
            <Footer footerColor={footerColor}/>
        </div>
    )
}

export default Layout;