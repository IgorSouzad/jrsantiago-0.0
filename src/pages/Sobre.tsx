import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sobre.module.css";
const Sobre: FunctionComponent = () => {
  const navigate = useNavigate();

  const onComponent3Click = useCallback(() => {
    window.open("http://buscatextual.cnpq.br/buscatextual/visualizacv.do");
  }, []);

  const onComponent1ContainerClick = useCallback(() => {
    window.open(
      "https://www.teses.usp.br/teses/disponiveis/3/3136/tde-27112003-160742/pt-br.php"
    );
  }, []);

  const onComponent2Click = useCallback(() => {
    window.open(
      "https://www.teses.usp.br/teses/disponiveis/3/3136/tde-01082007-171127/pt-br.php"
    );
  }, []);

  const onIconParkOutlinebackContainerClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className={styles.sobre}>
      <img
        className={styles.e0cf230614f4aB32e541e590b9Icon}
        alt=""
        src="/782e0cf230614f4ab32e541e590b9eb0-1@2x.png"
      />
      <button className={styles.component3} onClick={onComponent3Click}>
        <img
          className={styles.component3Child}
          alt=""
          src="/rectangle-106.svg"
        />
        <div className={styles.currculoLattes}>Currículo Lattes</div>
      </button>
      <div className={styles.component1} onClick={onComponent1ContainerClick}>
        <input className={styles.component1Child} type="text" />
        <div className={styles.dissertaoDeMestrado}>
          Dissertação de Mestrado
        </div>
      </div>
      <button className={styles.component2} onClick={onComponent2Click}>
        <div className={styles.component2Child} />
        <div className={styles.teseDeDoutorado}>Tese de Doutorado</div>
      </button>
      <div
        className={styles.iconParkOutlineback}
        onClick={onIconParkOutlinebackContainerClick}
      >
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      </div>
      <div className={styles.alencarinoNascidoEmContainer}>
        <p
          className={styles.alencarinoNascidoEm}
        >{`Alencarino nascido em São Paulo com coração Baré, assim me autodeclaro, `}</p>
        <p
          className={styles.alencarinoNascidoEm}
        >{`por conta de ser filho de cearenses que adotaram o Amazonas como lar. `}</p>
        <p
          className={styles.alencarinoNascidoEm}
        >{`Aos 16 anos parti de casa em busca de traçar uma trajetória que tem se `}</p>
        <p className={styles.alencarinoNascidoEm}>
          caracterizado por atuações no mundo corporativo, onde tenho estado
          presente em importantes instituições de ensino do país, e na área
          literária, através de dezenas de artigos e publicações, principalmente
          nas áreas corporativas, histórias e esportivas.
        </p>
        <p className={styles.alencarinoNascidoEm}>&nbsp;</p>
        <p className={styles.alencarinoNascidoEm}>
          Em 2014 passei a fazer parte do Guinness World Records por possuir o
          maior acervo de publicações esportivas do mundo, uma conquista que
          teve início graças a coleção de jornais de meu avô, Felipe de Lima
          Santiago, morador da Vila Manoel Sátiro. Já em 12 de Maio de 2022, por
          decisão da Câmara Municipal de Fortaleza, através do Decreto
          Legislativo n.º 1.036, a partir de iniciativa do vereador Eudes
          Bringel, recebi o Título de Cidadão de Fortaleza, um presente único do
          qual muito me orgulho.
        </p>
        <p className={styles.alencarinoNascidoEm}>&nbsp;</p>
        <p className={styles.alencarinoNascidoEm}>
          Sou Doutor e Mestre em Engenharia de Produção pela Universidade de São
        </p>
        <p className={styles.alencarinoNascidoEm}>
          Paulo com pós-graduação em Marketing pela ESPM em Engenharia de
          Qualidade pela USP e graduação em Engenharia Elétrica pela FEI. No
          mundo corporativo tenho atuado como Consultor e Palestrante nas áreas
          de Gestão de Projetos, Inovação, Gestão do Conhecimento, Capital
          Intelectual, Gestão de Pessoas, Gestão Esportiva e Lições Aprendidas.
          Na academia, minha graduação tem se destacado como professor de MBA,
          pós-graduação e graduação em várias universidades e instituições de
          ensino, dentre elas a Universidade do Estado do Amazonas (UEA),
          Fundação Instituto de Administração (FIA), Instituto Euvaldo Lodi
          (IEL) e PUC.
        </p>
      </div>
      <img className={styles.sobreIcon} alt="" src="/sobre.svg" />
    </div>
  );
};

export default Sobre;
