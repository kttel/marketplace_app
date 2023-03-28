import { SpecialA } from './styles';
import styles from './styles.module.css'

function LoginButton(props) {
    return (
      <div onClick={props.onClick}>
        <SpecialA className={styles.a} href="#">Login</SpecialA>
      </div>
    );
}

export default LoginButton;