import styles from "./banner.module.css";
import scroll from "../../assets/scroll-down.png";
import banner from "../../assets/jishnu.jpg";
export  const Banner = () => {
    return(
        <div>
         <span className={styles.span}>
            <h2 className={styles.product}>Product</h2>
            <h1 className={styles.h1}>Hello!</h1>
        </span>
        <h2 className={styles.h2}>I am Jishnu</h2>
        <p className={styles.paragraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <h2 className={styles.scroll}>SCROLL FOR MORE</h2><img className={styles.img} src={scroll} />
        <img className={styles.banner} src={banner} />
    </div>

    )
};
export default Banner;