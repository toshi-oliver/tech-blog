import { Link } from 'gatsby';
import React from 'react';
import styles from './Header.module.css';

const categories = [
  {
    slug: 'study',
    name: '勉強',
  },
  {
    slug: 'private',
    name: 'プライベート',
  },
];

const Header = ({ siteTitle }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={styles.categories}>
          {categories.map((category) => {
            return (
              <li className={styles.category} key={category.slug}>
                <Link to={`/categories/${category.slug}`}>{category.name}</Link>
              </li>
            );
          })}
        </ul>
        <h1 className={styles.title}>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div className={styles.social}>
          <a href="https://github.com/mottox2" target="_blank" rel="noreferrer">
            <img src="/github.png" width="32" height="32" alt="GitHub" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
