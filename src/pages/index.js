import React from "react"
import Layout from "../components/Layout"
import * as  styles from '../styles/home.module.css'

export default function Home() {
    return (
        <Layout>
            <section className={styles.hero}>
                <p>The site is live.</p>
                <img src="kiss1.jpg" alt="Chagall" style={{ maxWidth: '25%' }} />
            </section>
        </Layout>
    )
}
