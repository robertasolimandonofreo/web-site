import React from 'react';
import linkedin from './logo/003-linkedin.png';
import gmail from './logo/004-gmail.png';
import github from './logo/005-github.png';
import { StyledAll, StyledDiv, StyledA } from './styles';

export default function Footer() {
    return (
        <StyledAll>
            <StyledDiv>
            <StyledA  title="gmail profile" href="mailto:robertadonofreo@gmail.com">
                <img src={gmail} alt="gmail logo" />
            </StyledA>
            <StyledA href="https://github.com/robertasolimandonofreo" title="github profile">
                <img src={github} alt="github logo"/>
            </StyledA>
            <StyledA href="https://linkedin.com/in/robertasoliman" title="linkedin profile">
                <img src={linkedin} alt="linkedin logo"/>
            </StyledA>
            </StyledDiv>
            <p> ROBERTA SOLIMAN <span> © 2021 </span></p>
        </StyledAll>
    );
}
