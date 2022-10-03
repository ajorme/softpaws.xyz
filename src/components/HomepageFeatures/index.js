import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import axe from '@site/static/img/softpaws-axe.png';

const FeatureList = [
  {
    title: 'Blockchain Infrastructure',
    image: '../img/softpaws-axe.png',
    description: (
      <>
        Running an IBC relayer between the Echelon and Osmosis chain. Public endpoints available on the echelon chain.
      </>
    ),
  },
  {
    title: 'Validation Services',
    image: '../img/softpaws-coin.png',
    description: (
      <>
        Providing validation services on the Echelon chain. Lowest possible comission, active in governance, 
        and following best practices.
      </>
    ),
  },
  {
    title: 'Crypto Guides',
    image: '../img/softpaws-guide.png',
    description: (
      <>
        Find useful guides relating to projects involved with SoftPaws. All in one easy place.
      </>
    ),
  },
];

function Feature({title, description, image}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} role="img"/>
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
