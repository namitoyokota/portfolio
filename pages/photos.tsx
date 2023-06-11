import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export const Photos = (): JSX.Element => {
    /** List of images to display in gallery */
    const images = [
        '/photos/JAN_2110.jpg',
        '/photos/JAN_2113.jpg',
        '/photos/JAN_2146.jpg',
        '/photos/JAN_2214.jpg',
        '/photos/JAN_2574.jpg',
        '/photos/JAN_2582.jpg',
        '/photos/JAN_2643.jpg',
        '/photos/JAN_2704.jpg',
        '/photos/JAN_2711.jpg',
        '/photos/JAN_3144.jpg',
        '/photos/JAN_3179.jpg',
        '/photos/JAN_3375.jpg',
        '/photos/JAN_3564.jpg',
        '/photos/JAN_3593.jpg',
    ];

    return (
        <Layout
            customMeta={{
                title: 'Photos - Namito Yokota',
            }}
        >
            <div className={styles.header}>
                <h1 className={styles.title}>Photos</h1>
                <p className={styles.description}>I enjoy taking pictures in my free time</p>
            </div>

            <div className={styles.photolist}>
                {images.map((image) => (
                    <Image src={image} width={3174} height={4763} alt="A great picture huh?" loading="lazy" />
                ))}
            </div>
        </Layout>
    );
};

export default Photos;
