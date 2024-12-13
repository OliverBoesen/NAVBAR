import styles from "./Forside.module.css";
import ForsideIntro from "../../assets/ForsideIntro.png";

const Forside = () => {
  return (
    <>
      <div className={styles["forside-intro-container"]}>
        <div className={styles["forside-intro-venstre"]}>
          <h1>
            <bold>VEJLE MOD HUDCANCER </bold> <br />
            STØTTER KAMPEN MOD <br /> HUDCANCER
          </h1>
          <hr className={styles["hudcancer-divider"]} />
          <p>
            Vejle Mod Hudcancer støtter hvert år et nyt lokalt projekt i kampen
            mod
            <br />
            hudcancer. Alle midler skaffes gennem lokale sponsorer i det
            Vejlensiske
            <br />
            erhvervsliv og alle opgaver udføres frivilligt, så det indsamlede
            beløb går
            <br /> ubeskåret til projektet. Vores støtte er til gavn for det
            samlede kræftcenter i Vejle.
          </p>
        </div>
        <div className={styles["forside-intro-hojre"]}>
          <img src={ForsideIntro} alt="" />
        </div>
      </div>

      <div className={styles["forside-stats-container"]}>
        <div className={styles["Forside-stats-content"]}>
          <div className={styles["Forside-stats-1"]}>
            <h1>50%</h1>
            <p>
              Af alle nye kræfttilfælde <br /> i Danmark er hudcancer
            </p>
          </div>
          <div className={styles["Forside-stats-2"]}>
            <h1>20.000</h1>
            <p>
              bliver diagnostiseret <br /> med hudcancer hvert år
            </p>
          </div>
          <div className={styles["Forside-stats-3"]}>
            <h1>+75%</h1>
            <p>
              Risiko for udviklingen af <br />
              hudcancer efter brug af solarie
            </p>
          </div>
        </div>
        <div className={styles["Forside-kildetekst"]}>
          <p>
            Kilde: <a href="">Kræftens bekæmpelse</a> &{" "}
            <a href="">Netdoktor.dk</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Forside;
