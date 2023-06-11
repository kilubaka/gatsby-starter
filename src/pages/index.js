import React from "react";
import { Link } from "gatsby";
import Layout from 'components/Layout';

import * as styles from 'styles/home.module.scss';

const Home = () => {
    return (
        <Layout>
            <header className={styles.header}>
                <div>
                    <h2>Design</h2>
                    <h3>Develop & Deploy</h3>
                    <p>UX designer & web developer based in Manchester.</p>
                    <Link to="/projects" className={styles.btn}>My Portfolio Projects</Link>
                </div>
            </header>
        </Layout>
    );
};

export default Home;
