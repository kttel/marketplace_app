import { A } from './styles';
import styles from './styles.module.css'

function LogoutButton(props) {
    return (
      <div onClick={props.onClick}>
        <a className={styles.a} href="#">Logout</a>
      </div>
    );
}

export default LogoutButton;