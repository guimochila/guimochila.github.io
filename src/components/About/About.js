import React from 'react';
import styled from '@emotion/styled';

import imgSysadmin from '../../static/icons/sysadmin.svg';
import imgSecurty from '../../static/icons/security.svg';
import imgJavascript from '../../static/icons/javascript.svg';
import imgProject from '../../static/icons/project.svg';
import imgChevron from '../../static/icons/chevron-thin-right.svg';

const AboutStyled = styled.section`
  display: flex;
  justify-content: center;

  .list {
    display: flex;
    padding: 0 4rem 2rem;
    justify-content: flex-start;
    max-width: 66rem;
    flex-wrap: wrap;
  }
  @media (max-width: 30em) {
    .list {
      padding: 0 2rem 2rem;
    }
  }
  .list__item {
    display: flex;
    list-style: none;
    flex-grow: 1;
  }
  @media (max-width: 30em) {
    .list__item {
      flex-wrap: wrap;
      display: flex;
    }
  }
  .list__details {
    padding: 0 2.5rem 4rem;
    flex-grow: 1;
  }
  .list__details__title {
    margin-bottom: 2rem;
    color: #333;
    font-weight: 400;
  }
  @media (max-width: 30em) {
    .list__details__title {
      text-align: center;
    }
  }
  .list__details__text {
    line-height: 1.7;
    max-width: 50rem;
  }
  .list__header > img {
    height: 7rem;
    width: 7rem;
  }
  @media (max-width: 30em) {
    .list__header {
      margin: 1rem auto;
    }
  }

  .list__tech {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }
  .list__tech__item {
    flex: 0 0 50%;
    margin-bottom: 0.7rem;
  }
  .list__tech__item::before {
    content: '';
    display: inline-block;
    height: 1rem;
    width: 1rem;
    margin-right: 0.7rem;
    background-image: url(${imgChevron});
    background-size: cover;
  }
  @supports ((-webkit-mask-image: url()) or (mask-image: url())) {
    .list__tech__item::before {
      background-color: #f24976;
      -webkit-mask-image: url(${imgChevron});
      -webkit-mask-size: cover;
      mask-image: url(${imgChevron});
      mask-size: cover;
      background-image: none;
    }
  }
`;

const About = () => (
  <AboutStyled>
    <ol className="list">
      <li className="list__item">
        <div className="list__header">
          <img src={imgSysadmin} alt="Sysadmin icon" />
        </div>
        <div className="list__details">
          <h3 className="list__details__title">System Administrator</h3>
          <p className="list__details__text">
            Since I started with computers, I have always liked Linux and from
            there I started studying System Administration based on Linux and
            FreeBSD plataforms. I have worked for many years as Sysadmin and
            support on Linux based servers.
          </p>
        </div>
      </li>

      <li className="list__item">
        <div className="list__header">
          <img src={imgSecurty} alt="Security icon" />
        </div>
        <div className="list__details">
          <h3 className="list__details__title">Security Analyst</h3>
          <p className="list__details__text">
            I am driven by new challenges in my life and career. Thus I decided
            to jump into security, something that called my atention since I
            started studying computers. I dove into Malware Analysis for a year
            and I did pretty good, I got a job as a Security Analyst at{' '}
            <a href="https://sucuri.net">Sucuri</a> where I spent more than 3
            years.
          </p>
        </div>
      </li>

      <li className="list__item">
        <div className="list__header">
          <img src={imgJavascript} alt="Javascript icon" />
        </div>
        <div className="list__details">
          <h3 className="list__details__title">Software Engineer</h3>
          <p className="list__details__text">
            Despite studying Sysadmin and Malware Analysis, I have always loved
            to create new tools to automate a task. I can't deny that in the
            past year (2017) I have gotten more into software engineering. So I
            decided to challenge myself again and I am sure I have found my
            passion for programming. I really love backend as well as frontend
            development in Javascript.
          </p>
        </div>
      </li>
      <li className="list__item">
        <div className="list__header">
          <img src={imgProject} alt="Technologies that I work with (icon)" />
        </div>
        <div className="list__details">
          <h3 className="list__details__title">Technologies</h3>
          <ul className="list__tech">
            <li className="list__tech__item">HTML5 & CSS3</li>
            <li className="list__tech__item">Javascript & ES6</li>
            <li className="list__tech__item">React & Redux</li>
            <li className="list__tech__item">Node.js</li>
            <li className="list__tech__item">MongoDB</li>
            <li className="list__tech__item">MySQL</li>
            <li className="list__tech__item">GraphQL</li>
            <li className="list__tech__item">Typescript</li>
          </ul>
        </div>
      </li>
    </ol>
  </AboutStyled>
);

export default About;
