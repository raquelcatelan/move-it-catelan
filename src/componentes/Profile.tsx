import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/componentes/Profile.module.css'


export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer} >
            <img src="https://github.com/raquelcatelan.png" alt="Raquel Catelan" />
            <div>
                <strong>Raquel Catelan</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                 </p>
            </div>
        </div>
    );
}