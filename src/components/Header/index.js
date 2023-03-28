import Navbar from "../Navbar";
import Title from "../Title"
import useDocumentTitle from '../../hooks/useDocumentTitle';
import useToggle from '../../hooks/useToggle';
import useOnlineStatus from '../../hooks/useOnlineStatus';

import { Wrapper, Button } from './styles'
import styles from './styles.module.css'

function Header() {
    const [open, toggle] = useToggle(false);
    const {online, setOnline} = useOnlineStatus();
    useDocumentTitle(`You're ${online ? "online" : "offline"}`)

    return (
        <div className={styles.wrapper}>
            <Title />
            <Navbar />
            {open && <div>
                You're {online ? "ONLINE" : "OFFLINE"}!
            </div>} <button className={styles.button} onClick={e => toggle(!open)}>{open ? "Hide" : "Show"} status</button>
        </div>
    );
}

export default Header;