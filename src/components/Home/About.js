import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'
const About = () => {
    return (
        <div className={styles.about}>            
           <Title title="About" subtitle="US"/>
           <div className={styles.aboutCenter}>
               <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="about company"/>
                    </div>
               </article>
               <article className={styles.aboutInfo}>
                    <h4>explore the difference</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa optio similique expedita aut saepe dolore a obcaecati laboriosam quasi, nostrum quisquam, at aperiam, quaerat magni cumque esse mollitia tempora repudiandae.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus, excepturi nisi ipsum aperiam beatae eius at pariatur nemo nesciunt, rem aliquam voluptate in quisquam esse adipisci sequi dolores ut?</p>
                    <button type="button" className="btn-primary">read more</button>
               </article>
           </div>

        </div>
    )
}

export default About
