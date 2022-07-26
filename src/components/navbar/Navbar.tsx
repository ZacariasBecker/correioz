
import styles from './styles.module.css';

// mui
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>correio<span>z</span></h1>
            </div>
            <WarningAmberIcon className={styles.warningIcon} sx={{ fontSize: 40}}/>

            <p className={styles.info}>
                Essa aplicação utiliza uma api privada para a requisição dos dados de rastreio. Possa ser que você receba o aviso de "Muitas requisições seguidas, tente novamente." devido ao mecanismo de segurança implementado. Se isso acontecer, repita a operação até funcionar.
            </p>
        </div>
    );
};

export default Navbar;