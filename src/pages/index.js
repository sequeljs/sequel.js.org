import React, { Fragment } from 'react'
import clsx from 'clsx'

import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import styles from './styles.module.css'

const features = [
  {
    title: <Fragment>AST</Fragment>,
    description: <Fragment>A SQL AST manager with zero dependencies</Fragment>,
    links: [
      { title: 'API Reference', to: 'docs/ast/api/globals' },
      { title: 'Source Code', href: 'https://github.com/sequeljs/ast' },
    ],
  },
  {
    title: <Fragment>OMI</Fragment>,
    description: (
      <Fragment>
        A collection of interfaces (under development) for model classes in
        JavaScript.
      </Fragment>
    ),
    links: [
      { title: 'API Reference', to: 'docs/omi/api/globals' },
      { title: 'Source Code', href: 'https://github.com/sequeljs/omi' },
    ],
  },
  {
    title: <Fragment>ORM</Fragment>,
    description: (
      <Fragment>
        An ORM built on top of <code>@sequeljs/ast</code>
        <br />
        (still under development)
      </Fragment>
    ),
    links: [
      { title: 'API Reference', to: 'docs/orm/api/globals' },
      { title: 'Source Code', href: 'https://github.com/sequeljs/orm' },
    ],
  },
]

function Feature(props) {
  const { description, imageUrl, links, title } = props

  const imgSrc = useBaseUrl(imageUrl)

  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgSrc && (
        <div className="text--center">
          <img alt={title} className={styles.featureImage} src={imgSrc} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
      {links?.length > 0 && (
        <ul className="flex flex--centered flex--row list--no-spacing list--no-style">
          {links.map((link) => (
            <li className="list-item--horizontal-spacing">
              {link.href && (
                <a href={link.href} rel="noopener noreferrer" target="_blank">
                  {link.title}
                </a>
              )}
              {link.to && <Link to={link.to}>{link.title}</Link>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
