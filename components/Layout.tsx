import Nav from './Nav';
import Footer from './Footer';

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Nav/>
            <div style={{flex: 1}}>
              {children}
            </div>
            
            <Footer/>
        </div>
    )
}

export default Layout;