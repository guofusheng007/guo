import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: '编程爱好者、3C智能硬件爱好者',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    Png: '/img/a01.png',
    Alt: '编程爱好者、3C智能硬件爱好者',
    description: (
      <>
        作为编程爱好者，坚信<font color="#3EDEAE">一切皆可编程、万物均可互联、数据驱动业务、人工智能辅助决策</font>。
        在数字经济时代，编程是IT人核心能力之一，希望通过编程并结合智能硬件为用户提供一款现象级的3C产品。
      </>
    ),
  },

  {
    title: '全栈运维工程师',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    Png: '/img/a02.png',  
    Url: '/about',
    Alt: '全栈运维工程师',
    description: (
      <>
        当业务运行故障，第一个请出来的是？开发？测试？运维？ 苦逼的全能超人运维老六绝对是第1个出场，从Layer1到7逐层排雷。
        <font color="#3EDEAE">对于二进制世界，开发眼里只看到一粒沙，运维眼里看到的却是一片沙滩。</font>
      </>
    ),
  },
  {
    title: '信息安全践行者',
    Url: '/#',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    Png: '/img/a03.png',  
    Alt: '信息安全践行者',
    description: (
      <>
        随着社会经济活动、社会管理趋于信息化、数字化，网络空间的安全成为举足轻重的核心领域，关乎人类社会发展的方方面面，需从信息技术、组织管理制度、人文教育等多维度推行网络安全。
      </>
    ),
  },
];

/* 
开源技术无疑是推动信息科学技术进步的最要推手之一。作为一名开源爱好者，持续关注及积极参与开源生态，希望能够构建出一个有趣的开源项目帮助某个领域实现快速发展。
*/

/*
function Feature({Png, Alt, Url, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={Url}><img src={Png} title={Alt} width='96' height='96' /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
*/

function Feature({Png, Alt, Url, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Png} title={Alt} width='96' height='96' />
      </div>
      <div className="text--center padding-horiz--md">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h3 className="text--center" >博主Tags</h3>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
