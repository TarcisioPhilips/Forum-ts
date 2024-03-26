import  styles from './Header.module.css'
import meuLogo from '../assets/meu-logo.svg'

export function Header() {
    return(
        <header className={styles.header}>
            <img src={meuLogo} alt= "Imagem meu logo"></img>
        </header>
    );
}