import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Menu.module.css";
const Menu: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconParkOutlinebackClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNotciasEntrevistasClick = useCallback(() => {
    navigate("/entrevistas");
  }, [navigate]);

  const onArtigosPublicaesClick = useCallback(() => {
    navigate("/artigos-publicaes");
  }, [navigate]);

  const onSobreClick = useCallback(() => {
    navigate("/sobre");
  }, [navigate]);

  return (
    <div className={styles.menu}>
      <button
        className={styles.iconParkOutlineback}
        onClick={onIconParkOutlinebackClick}
      >
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      </button>
      <div className={styles.notciasEntrevistasWrapper}>
        <button
          className={styles.notciasEntrevistas}
          onClick={onNotciasEntrevistasClick}
        >{`Notícias & Entrevistas`}</button>
      </div>
      <div className={styles.artigosPublicaesWrapper}>
        <button
          className={styles.notciasEntrevistas}
          onClick={onArtigosPublicaesClick}
        >{`Artigos & Publicações`}</button>
      </div>
      <div className={styles.sobreWrapper}>
        <button className={styles.notciasEntrevistas} onClick={onSobreClick}>
          <p className={styles.sobre1}>Sobre</p>
        </button>
      </div>
      <div className={styles.josRenatoStiroSantiagoJrWrapper}>
        <h1 className={styles.josRenatoStiro}>
          José Renato Sátiro Santiago Jr.
        </h1>
      </div>
    </div>
  );
};

export default Menu;
