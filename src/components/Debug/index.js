import { Wrapper } from "./styles";

const Debug = ({history}) => {
    console.log(history)
    return (
        <Wrapper>
            {history.map(el => (<span key={el}><b>path:</b> {el} → </span>))}
        </Wrapper>
    );
};

export default Debug;
