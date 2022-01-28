import React from "react";
import owner from "./img/owner.png";
import "../../App.css";
import Zoom from "react-reveal/Zoom";
import { StyledAll, StyledDiv, AboutMe, StyledMe } from "./styles";

export default function About() {
  return (
    <StyledAll id={"about"}>
      <StyledDiv>
        <h2>SOBRE MIM</h2>
        <div></div>
      </StyledDiv>

      <Zoom>
        <AboutMe>
          <StyledMe>
            <img src={owner} alt="Roberta Soliman" />
          </StyledMe>
          <StyledMe>
            <p>
              Oi, meu nome é <span>Roberta Soliman</span>. Atuo na área de DevOps e SRE,
              planejando, automatizando e executando o desenvolvimento de programas,
              estabelecendo padrões, métodos e identificando soluções de problemas
              técnicos e administrativos. Nos últimos anos, passei focada em aplicar
              e aprimorar a metodologia DevOps e adoção de Cloud, usando sempre as principais
              tendências do mercado. Sou formada em Redes de Computadores
              e atualmente curso pós-graduação em Projetos e arquiteturas em cloud computing
              e também possuo certificados no FIAP e na Mackenzie na área de DevOps.
              Atualmente, exerço a profissão de DevOps Specialist & Cloud Analyst.
              Em 2019, criei minha empresa, <a href="https://www.fibonaccit.com/" target="_blank">Fibonacci</a>, 
              que é uma consultoria de TI que fornece 
              diversos projetos, principalmente focado em Web Designer,
              Monitoring, DevOps e consultoria especializada.{" "}
            </p>
          </StyledMe>
        </AboutMe>
      </Zoom>
    </StyledAll>
  );
}
