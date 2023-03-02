import Navbar from "../Navbar";
import Title from "../Title"
import { Wrapper, Button } from './styles'
import useOnlineStatus, { useDocumentTitle } from "../../hooks";
import { useToggle } from "../../hooks";

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