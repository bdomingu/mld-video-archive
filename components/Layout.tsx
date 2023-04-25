import Nav from './Nav';
import Footer from './Footer';
import cookies from 'next-cookies';


type LayoutProps = {
    children: React.ReactNode
    footerColor?: string;
}

const Layout: React.FC<LayoutProps> = ({children, footerColor}) => {
/* Need to figure out how to check that the user is logged in so that I can render a different nav menu
Need to look at checking if the token exists?
*/
   
    return (
        <div >
             <Nav  />
            <div style={{flex: 1}}>
              {children}
            </div>
            
            <Footer footerColor={footerColor}/>
        </div>
    )
}

export default Layout;