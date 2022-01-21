import React from "react";
import { Route } from "react-router-dom";
import stack from "./images/stack.png";
import jenkins from "./images/jenk.jpg";
import grafana from "./images/graf.png";
import nginx from "./images/nginx.png";
import Fade from "react-reveal/Fade";
import fibonacci from "./images/fibonacci.png";
import react from "./images/react.png";
import {
  StyledAll,
  StyledNav,
  StyledDiv,
  StyledLink,
  StyledTotal,
} from "./styles";

import CustomFlippy from "./ProjectFlippy";
import "../../App.css";

export default function Portfolio() {
  return (
    <StyledAll id={"portfolio"}>
      <StyledDiv>
        <h2> PORTFOLIO </h2>
        <div></div>
      </StyledDiv>
      <StyledNav>
        <StyledLink to="/">ALL</StyledLink>
        <StyledLink to="/portfolio/react">REACT</StyledLink>
      </StyledNav>
      <Fade bottom cascade>
        <StyledTotal>
          <Route
            exact
            path={["/", "/about", "/skills", "/contact", "/portfolio"]}
            component={All}
          />
          <Route path="/portfolio/react" component={EReact} />
        </StyledTotal>
      </Fade>
    </StyledAll>
  );
}

function All() {
  return (
    <>
      <EReact />
    </>
  );
}

export function EReact() {
  return (
    <>
      <CustomFlippy
        projectImage={stack}
        imageAlt="Stack ELK"
        projectTitle="Stack ELK"
        projectStack="ELK Stack: Elasticsearch, Logstash e Kibana com docker"
        gitHubLink="https://github.com/robertasolimandonofreo/elk-docker.git"
        websiteLink="https://github.com/robertasolimandonofreo/elk-docker.git"
      />
      <CustomFlippy
        projectImage={jenkins}
        imageAlt="Jenkins"
        projectTitle="Jenkins"
        projectStack="Biblioteca Jenkins Windows"
        gitHubLink="https://github.com/robertasolimandonofreo/jenkins-windows-library"
        websiteLink="https://github.com/robertasolimandonofreo/jenkins-windows-library"
      />
      <CustomFlippy
        projectImage={grafana}
        imageAlt="Grafana"
        projectTitle="Grafana"
        projectStack="Stack Docker que executa Grafana, MYSQL, MYSQL-Exporter, InfluxDB, Telegraf, Node-Exporter, Cadvisor e Black-Exporter"
        gitHubLink="https://github.com/robertasolimandonofreo/grafana-docker"
        websiteLink="https://github.com/robertasolimandonofreo/grafana-docker"
      />
      <CustomFlippy
        projectImage={nginx}
        imageAlt="ECS Terraform Nginx"
        projectTitle="ECS Terraform Nginx"
        projectStack="Stack que cria imagem personalizada do nginx, um cluster ECS Fargate, provisiona o Grafana, e também cria uma esteira do Jenkins"
        gitHubLink="https://github.com/robertasolimandonofreo/ecs-terraform-nginx"
        websiteLink="https://github.com/robertasolimandonofreo/ecs-terraform-nginx"
      />
      <CustomFlippy
        projectImage={fibonacci}
        imageAlt="Web-Site Fibonacci"
        projectTitle="Web-Site Fibonacci"
        projectStack="Um Web-Site em react implementado na AWS"
        gitHubLink="https://github.com/robertasolimandonofreo/Fibonacci"
        websiteLink="https://www.fibonaccit.com/"
      />
      <CustomFlippy
        projectImage={react}
        imageAlt="Web-Site React"
        projectTitle="Web-Site React"
        projectStack="Um Web-Site escrito em react de três camadas (front-end, back-end e banco de dados) implantado usando Terraform, Ansible e AWS"
        gitHubLink="https://github.com/robertasolimandonofreo/web-site"
        websiteLink="https://github.com/robertasolimandonofreo/web-site"
      />
    </>
  );
}