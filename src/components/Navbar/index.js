import { Wrapper, A } from './styles';
import styles from './styles.module.css'

import LoginControl from '../LoginControl';

const Navbar = () => {
    const navigation = [
        { id: 1, text: "Main", url: "/" },
        { id: 2, text: "About", url: "/about" },
        { id: 3, text: "Admin", url: "/admin" },
    ]
    let itemList = [];
    navigation.forEach((object, index)=>{
        itemList.push( <div key={object.id}><a className={styles.a} href={object.url}>{object.text}</a></div>)
    })
    return (
        <div className={styles.wrapper}>
            { itemList }
            <div>
                <LoginControl/>
            </div>
        </div>
    );
}

export default Navbar;