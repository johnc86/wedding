import React from 'react'
import * as styles from '../styles/transition.module.css'

export default function Transition() {
    return (
        <section className={styles.transition}>
            <main className="cd-main-content">
                <div className="center">
                    <h1>Ink Transition Effect</h1>
                    <a href="#0" className="cd-btn cd-modal-trigger">Start Effect</a>
                </div>
            </main>

            <div className={styles.transition.cd_modal}>
                <div className="modal-content">
                    <h1>My Modal Content</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad modi repellendus, optio eveniet eligendi molestiae?
                        Fugiat, temporibus!
                    </p>
                </div>

                <a href="#0" className="modal-close">Close</a>
            </div>

            <div className="cd-transition-layer">
                <div className="bg-layer"></div>
            </div>
        </section>
    )
}
