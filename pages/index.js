import Head from 'next/head'
import Background from '../components/background/Background'
import styles from '../styles/Home.module.css'
import Navigation from "../components/navigation/Navigation.js";
import { useEffect, useRef } from 'react';
import createScrollSnap from 'scroll-snap';

export default function Home() {
  const container = useRef(null)

  function bindScrollSnap() {
    const element = container.current
    createScrollSnap(element, {
      snapDestinationY: '100%',
    } )
  }
  useEffect(() => {
		  bindScrollSnap()
  }, [])

	return (
		<div>
			<Background />
      <Navigation />
			<div ref={container} className={styles.slidesContainer}>
				<div className={styles.slide} id="about"></div>
				<div className={styles.slide} id="sign up"></div>
				<div className={styles.slide} id="download"></div>
				<div className={styles.slide} id="contact"></div>
				
			</div>
		</div>
	);
}
