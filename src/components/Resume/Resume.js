import React from 'react';
import styled from '@emotion/styled';

import imgAvatar from '../../static/img/avatar.jpeg';

const experiences = [
  {
    title: 'Co-Founder & Javascript Teacher',
    from: '12/2017',
    to: '07/2018',
    location: 'Las Palmas de Gran Canaria',
    description: `We at 20H do believe in People and Talent as the basic elements to help companies to achieve their objetives. 
    We offer a technical teaching program, specially oriented in creating developers. Our focus is on the person as well as in the soft skills we all want in our team members.
    `,
    company: '20H Talent',
  },
  {
    title: 'Security Analyst',
    from: '01/2014',
    to: '05/2017',
    location: 'Las Palmas de Gran Canaria',
    description: `Started in the Remediation team, analysing and removing threats (malwares) from websites. Current in the CloudProxy (WAF) team providing support to customers. Main roles are troubleshoot network issues, DDoS attack and bypass attempts.
    `,
    company: 'Sucuri',
  },
  {
    title: 'Support Engineer',
    from: '01/2012',
    to: '01/2014',
    location: 'Madrid',
    description: `System Engineer L3 over Linux servers in handset oriented projects inside Telefonica I+D. Responsible for debugging and troubleshooting issues using open source software. Monitoring services and servers using Icinga.
    `,
    company: 'Amaris @ Telefonica I+D',
  },
  {
    title: 'Consultant',
    from: '06/2009',
    to: '12/2009',
    location: 'Sao Paulo',
    description: `Contracted to configure a IP Phone system Zultys MX250 to be the main PBX in the company and integrate other offices through VoIP with the company headquarter. I developed applications in PHP/MySQL/Javascript for internal procedures and integrate SQL databases with the IP Phone System.
    `,
    company: 'Grupo Gente',
  },
  {
    title: 'Technical Support Engineer',
    from: '07/2007',
    to: '15/2009',
    location: 'Sao Paulo',
    description: `The main roles was provide technical support to clients using DLINK- VoIP routers, network troubleshoot, responsible for configuration and maintenance of Asterisk PBX servers.
    `,
    company: 'Hellou Global Phone Telecom',
  },
  {
    title: 'System Administrator',
    from: '02/2006',
    to: '05/2009',
    location: 'Sao Paulo',
    description: `Responsible for maintain the staging and production web servers (LAMP), firewall (iptables), network infrastructure and technical support.
    `,
    company: 'Hellou Global Phone Telecom',
  },
  {
    title: 'Junior Analyst Support',
    from: '12/2005',
    to: '02/2006',
    location: 'Sao Paulo',
    description: `Technical support outsourced at SEBRAE. The main responsibilities was give support and help remote users with Windows workstations.
    `,
    company: 'ISH Tecnologia',
  },
  {
    title: 'Junior Analyst Support',
    from: '07/2004',
    to: '06/2005',
    location: 'Sao Paulo',
    description: `I was responsible for the administration and maintenance of the FreeBSD and Linux servers for 2 campus of the university. Brough up Nagios for servers monitoring and SAMBA for sharing files. I also was part of the technical support team to give support for the university's staffs.
    `,
    company: 'Universidade Ibirapuera',
  },
];

const ResumeStyled = styled.div`
  display: grid;
  grid-template-rows: [header] 16rem [description] 16rem;
  margin: 0 3rem;

  p {
    font-size: 1.8rem;
    word-spacing: 0.3rem;
    line-height: 1.9rem;
  }

  & .header {
    display: flex;

    &_avatar {
      margin-right: 0.5rem;
      align-self: flex-start;

      & img {
        height: 10rem;
        width: 10rem;
        border-radius: 25%;
        object-fit: contain;
      }
    }

    &_text {
      flex: 1 1 auto;
      align-self: center;
      margin-bottom: 5rem;

      & h1,
      h3 {
        margin: 1rem;
      }

      & h3 {
        letter-spacing: 0.2rem;
      }
    }
  }
`;

const Resume = () => (
  <ResumeStyled>
    <div className="header">
      <div className="header_avatar">
        <img src={imgAvatar} />
      </div>
      <div className="header_text">
        <h1 className="profile_title">Guilherme Scaldelai</h1>
        <h3 className="profile__subtitle">Javascript Developer</h3>
      </div>
    </div>
    <div>
      <p>
        I'm passionate about computers and love new challenges. I started as
        Sysadmin, then I challenged myself into Malware Analysis which I had a
        lot of fun, however I ever felt that something was missing. Despite
        being a Sysadmin and a Malware analyst, I have always liked programming.
        I enjoy creating and fixing applications in Javascript whether is
        frontend or backend. I love to work in a fast pace environment. A
        versatile engineer with interests in Software Engineering. Adaptable and
        self motivated learner. Interested in new programming technologies, and
        continuous self improvement.{' '}
      </p>
    </div>
    <div>
      <h3>Experience</h3>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index}>
            <h3>
              {experience.title} @ {experience.company}
            </h3>
            <h4>
              {experience.from} - {experience.to} &middot; {experience.location}
            </h4>
            <p>{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </ResumeStyled>
);

export default Resume;
