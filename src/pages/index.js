import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import HomepageProject from './_components/HomepageProject'    //新增

//首页头部信息显示
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1> 
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/category/devops" title="快速集成DevOps CI/CD、k8s/istio、ceph、prometheus/grafana">
          👉敏捷开发DevOps快速搭建 - 5min ⏰
          </Link>
        </div>
        <div>
          <br></br>
          <img src={siteConfig.customFields.bannerImgUrl} title="功能演示" />         
        </div>
      </div>
    </header>
  );
}
// <iframe width="80%" src="/media/01.mp4"></iframe> 
// <video width="80%" src="/media/01.mp4" type="video/mp4" controls="controls" autoplay="autoplay" loop="loop"></video>
// <img src={siteConfig.customFields.bannerImgUrl} title="功能演示" />

//自己定义显示
function HomepageTest() {
  const {siteConfig} = useDocusaurusContext();
  return (  
    <test className={styles.features} >
      <div className="container">
        <div className="text--center padding-horiz--md" >
          <marquee behavior="alternate">{siteConfig.customFields.bannerString}</marquee>
        </div> 
      </div>
    </test>
    );
}

//主页内容输出，其中“<HomepageProject /> ”为新增
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageProject /> 
        <HomepageFeatures />
        <HomepageTest />
      </main>      
    </Layout>
  );
}

