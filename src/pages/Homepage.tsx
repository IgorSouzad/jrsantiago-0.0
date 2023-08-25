import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";
const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/joserenatosatirosantiago/");
  }, []);

  const onNestProtectIconClick = useCallback(() => {
    window.open("https://www.instagram.com/jrsantiagojr/");
  }, []);

  const onYoutubeSvgrepoCom1Click = useCallback(() => {
    window.open("https://www.youtube.com/@JoseRenatoSantiago");
  }, []);

  const onMediumIconSvgrepoCom2Click = useCallback(() => {
    window.open("https://jrsantiagojr.medium.com");
  }, []);

  const onIcons8Twitter1Click = useCallback(() => {
    window.open("https://twitter.com/jrsantiagojr");
  }, []);

  const onVectorIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <img
        className={styles.whatsappImage20230805At1}
        alt=""
        src="/whatsapp-image-20230805-at-1159-1@2x.png"
      />
      <img
        className={styles.groupIcon}
        alt=""
        src="/group.svg"
        onClick={onGroupIconClick}
      />
      <img
        className={styles.nestProtectIcon}
        alt=""
        src="/nest-protect.svg"
        onClick={onNestProtectIconClick}
      />
      <button
        className={styles.youtubeSvgrepoCom1}
        onClick={onYoutubeSvgrepoCom1Click}
      >
        <img className={styles.groupIcon1} alt="" src="/group1.svg" />
      </button>
      <img
        className={styles.mediumIconSvgrepoCom2}
        alt=""
        src="/mediumiconsvgrepocom-2.svg"
        onClick={onMediumIconSvgrepoCom2Click}
      />
      <img
        className={styles.icons8Twitter1}
        alt=""
        src="/icons8twitter-1.svg"
        onClick={onIcons8Twitter1Click}
      />
      <div className={styles.homepageInner}>
        <div className={styles.vectorWrapper}>
          <img
            className={styles.vectorIcon}
            alt=""
            src="/vector2.svg"
            onClick={onVectorIconClick}
          />
        </div>
      </div>
      <div className={styles.josRenatoStiroSantiagoJrWrapper}>
        <h1 className={styles.josRenatoStiro}>
          José Renato Sátiro Santiago Jr.
        </h1>
      </div>
    </div>
  );
};

export default Homepage;
