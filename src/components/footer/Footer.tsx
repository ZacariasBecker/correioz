
// Styles
import styles from './styles.module.css';

// mui
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div className={styles.container}>
            <a href='https://www.linkedin.com/in/jos%C3%A9-zacarias-becker-pereira-47a06a1a2/'>
                <LinkedInIcon style={{ fontSize: '3rem' }} />
            </a>
            <a href='https://github.com/ZacariasBecker/correioz'>
                <GitHubIcon style={{ fontSize: '3rem', marginLeft: '1rem' }} />
            </a>
        </div>
    );
};

export default Footer;