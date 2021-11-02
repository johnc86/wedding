import React from "react"
import Layout from "../components/Layout"
// import Transition from "../components/Transition"
import * as  styles from '../styles/home.module.css'

export default function Home({ data }) {
    return (
        <Layout>
            <section className={styles.hero}>
                <img src="kiss1.jpg" alt="Chagall" style={{ maxWidth: '25%' }} />
                <p>This is normal text</p>
                <p className={styles.othertext}>This is other text</p>
            </section>
        </Layout>
        // <Transition />
    )
}