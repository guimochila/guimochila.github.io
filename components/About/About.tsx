import AboutItem, { Item } from '../AboutItem';
import TechStack from '../TechStack';

import styles from './About.module.css';

const myDetails: Item[] = [
  {
    title: 'Software Engineer',
    image: 'static/icons/javascript.svg',
    description: `Despite studying Sysadmin and Malware Analysis, I have always loved
    to create new tools to automate tasks. I can't deny that in the past
    year (2017) I have gotten more into software engineering. So I
    decided to challenge myself again and I am sure I have found my
    passion for programming. I really love backend as well as frontend
    development in Javascript.`,
  },
  {
    title: 'Security Analyst',
    image: 'static/icons/security.svg',
    description: `I am driven by new challenges in my life and career. Thus I decided
    to jump into security, something that called my atention since I
    started studying computers. I dove into Malware Analysis for a year
    and I did pretty good, I got a job as a Security Analyst at Sucuri where I spent more than 3
    years.`,
  },
  {
    title: 'System Administrator',
    image: 'static/icons/sysadmin.svg',
    description: `Since I started with computers, I have always liked Linux and from
  there I started studying System Administration based on Linux and
  FreeBSD plataforms. I have worked for many years as Sysadmin and
  support on Linux based servers.`,
  },
];

const About: React.FC = () => (
  <section className={styles.sectionContainer}>
    <ol className={styles.list}>
      {myDetails.map((item, index) => (
        <AboutItem item={item} key={index} />
      ))}
      <TechStack />
    </ol>
  </section>
);

export default About;
