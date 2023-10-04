import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// url for badges:
// https://ileriayo.github.io/markdown-badges/

const FeatureList = [
  {
    title: 'Extensive Industry Experience',
    Svg: require('@site/static/img/logos.svg').default,
    description: (
      <>
        I have been fortunate enough to complete internships at global SaaS companies,
        ML research institutes, and Canadian top start-ups, learning different skills at each.
      </>
    ),
  },
  {
    title: 'Wide Range of Technical Competencies',
    Svg: require('@site/static/img/badges.svg').default,
    description: (
      <>
        I am proud to have substantial experience in languages like Python, Ts/Js, C++, PHP, HTML, SQL, R and technologies like
        AWS, Azure Cloud, K8s, Docker, and more.
      </>
    ),
  },
  {
    title: 'Leadership Experience',
    img: require('@site/static/img/tcf.png').default,  // Use the 'img' property for PNGs
    description: (
      <>
        I am truly honoured to have served as both tech lead and team lead in different organizations.
        These experiences have helped me become more empathetic of all sides of the equation.
      </>
    ),
  },
];

function Feature({ Svg, title, description, img }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {img ?
          <img src={img} className={styles.featureSvg} alt={title} /> :
          <Svg className={styles.featureSvg} role="img" />
        }
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
