import React from "react";
import "../../App.css";
import aws from "./img/aws.png";
import gcp from "./img/gcp.png";
import terraform from "./img/terraform.png";
import gitlab from "./img/gitlab.png";
import git from "./img/git.png";
import ansible from "./img/ansible.png";
import jenkins from "./img/jenkins.png";
import kubernetes from "./img/kubernetes.png";
import docker from "./img/docker.png";
import argocd from "./img/argocd.png";
import elk from "./img/elk.png";
import prometheus from "./img/prometheus.png";
import grafana from "./img/grafana.png";
import python from "./img/python.png";
import golang from "./img/golang.png";
import linux from "./img/linux.png";
import nginx from "./img/nginx.png";
import Zoom from "react-reveal/Zoom";
import { StyledAll, StyledDiv, StyledTotalSkills, StyledSkill } from "./styles";

export default function About() {
  return (
    <StyledAll id={"skills"}>
      <StyledDiv>
        <h2>SKILLS</h2>
        <div></div>
      </StyledDiv>

      <Zoom>
        <StyledTotalSkills>
          <StyledSkill>
            <p>AWS</p>
            <img src={aws} alt="stack-icon" className="s-icon" />
          </StyledSkill>
          <StyledSkill>
            <p>GCP</p>
            <img src={gcp} alt="stack-icon" className="s-icon" />
          </StyledSkill>
          <StyledSkill>
            <p>Terraform</p>
            <img src={terraform} alt="stack-icon" className="s-icon" />
          </StyledSkill>
          <StyledSkill>
            <p>GitLabCI</p>
            <img src={gitlab} alt="stack-icon" className="s-icon" />
          </StyledSkill>
          <StyledSkill>
            <p>Git</p>
            <img src={git} alt="stack-icon" className="s-icon" />
          </StyledSkill>
          <StyledSkill>
            <p>Ansible</p>
            <img src={ansible} alt="stack-icon" className="s-icon" />
          </StyledSkill>
          <StyledSkill>
            <p>Jenkins</p>
            <img src={jenkins} alt="stack-icon" className="s-icon" />
          </StyledSkill>
          <StyledSkill>
            <p>Kubernetes</p>
            <img src={kubernetes} alt="stack-icon" className="s-icon" />
          </StyledSkill>
          <StyledSkill>
            <p>Docker</p>
            <img src={docker} alt="stack-icon" className="s-icon" />
          </StyledSkill>
          <StyledSkill>
            <p>ArgoCD</p>
            <img src={argocd} alt="stack-icon" className="s-icon" />
          </StyledSkill>
          <StyledSkill>
            <p>Stack ELK</p>
            <img src={elk} alt="stack-icon" className="s-icon" />
          </StyledSkill>
          <StyledSkill>
            <p>Prometheus</p>
            <img src={prometheus} alt="stack-icon" className="s-icon" />
          </StyledSkill>
          <StyledSkill>
            <p>Grafana</p>
            <img src={grafana} alt="stack-icon" className="s-icon" />
          </StyledSkill>
          <StyledSkill>
            <p>Python</p>
            <img src={python} alt="stack-icon" className="s-icon" />
          </StyledSkill>
          <StyledSkill>
            <p>Golang</p>
            <img src={golang} alt="stack-icon" className="s-icon" />
          </StyledSkill>
          <StyledSkill>
            <p>Linux</p>
            <img src={linux} alt="stack-icon" className="s-icon" />
          </StyledSkill>
          <StyledSkill>
            <p>Nginx</p>
            <img src={nginx} alt="stack-icon" className="s-icon" />
          </StyledSkill>
        </StyledTotalSkills>
      </Zoom>
    </StyledAll>
  );
}
