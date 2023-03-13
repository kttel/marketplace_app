import Navbar from "../Navbar";
import Title from "../Title"
import { Wrapper, Button } from './styles'
import useDocumentTitle from '../../hooks/useDocumentTitle';
import useToggle from '../../hooks/useToggle';
import useOnlineStatus from '../../hooks/useOnlineStatus';

function Header() {
    const [open, toggle] = useToggle(false);
    const {online, setOnline} = useOnlineStatus();
    useDocumentTitle(`You're ${online ? "online" : "offline"}`)

    return (
        <Wrapper>
            <Title />
            <Navbar />
            {open && <div>
                You're {online ? "ONLINE" : "OFFLINE"}!
            </div>} <Button onClick={e => toggle(!open)}>{open ? "Hide" : "Show"} status</Button>
        </Wrapper>
    );
}

export default Header;