/* component import */
import Header from './../components/Header';
import Container from './../components/Container';
/* css import */
import style from './../styles/Layout.module.css';



function Layout (){
    return (
        <div className={style.wrap}>
            <Header />
            <Container />
            
        </div>
    )
}

export default Layout;