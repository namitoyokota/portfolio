import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export const Photos = (): JSX.Element => {
    /** List of images to display in gallery */
    const [photos, setPhotos] = useState([
        { id: 1, src: '/photos/JAN_6166.jpg', loaded: false },
        { id: 2, src: '/photos/JAN_5989.jpg', loaded: false },
        { id: 3, src: '/photos/JAN_5978.jpg', loaded: false },
        { id: 4, src: '/photos/JAN_5869.jpg', loaded: false },
        { id: 5, src: '/photos/JAN_5633.jpg', loaded: false },
        { id: 6, src: '/photos/JAN_5066.jpg', loaded: false },
        { id: 7, src: '/photos/JAN_4137.jpg', loaded: false },
        { id: 8, src: '/photos/JAN_3375.jpg', loaded: false },
        { id: 9, src: '/photos/JAN_3144.jpg', loaded: false },
        { id: 10, src: '/photos/JAN_2711.jpg', loaded: false },
        { id: 11, src: '/photos/JAN_2704.jpg', loaded: false },
        { id: 12, src: '/photos/JAN_2643.jpg', loaded: false },
        { id: 13, src: '/photos/JAN_2574.jpg', loaded: false },
        { id: 14, src: '/photos/JAN_2214.jpg', loaded: false },
        // { id: 1, src: '/photos/JAN_2211.jpg', loaded: false },
        { id: 15, src: '/photos/JAN_2113.jpg', loaded: false },
        // { id: 1, src: '/photos/JAN_1807.jpg', loaded: false },
        // { id: 1, src: '/photos/JAN_0902.jpg', loaded: false },
    ]);

    /** Updates load status to true */
    const updateLoadStatus = (id: number) => {
        const photoToUpdate = photos.find((photo) => photo.id === id);
        if (photoToUpdate) {
            photoToUpdate.loaded = true;
        }

        setPhotos([...photos]);
    };

    /** Tracks current theme */
    const { theme } = useTheme();

    return (
        <Layout
            customMeta={{
                title: 'Photos - Namito Yokota',
            }}
        >
            <div className={styles.header}>
                <h1 className={styles.title}>Photos</h1>
                <p className={styles.description}>I take pictures, sometimes.</p>
            </div>

            <div className={styles.photolist}>
                {photos.map((photo) => (
                    <div key={photo.id}>
                        <div className={styles.loadingpane}>
                            <Image
                                className={styles.loadingimage}
                                hidden={photo.loaded}
                                src={theme === 'dark' ? '/loaders/oval-white.svg' : '/loaders/oval-black.svg'}
                                width={100}
                                height={100}
                                alt="Loading..."
                            ></Image>
                        </div>

                        <Image
                            src={photo.src}
                            width={3174}
                            height={4763}
                            alt="A great picture huh?"
                            loading="lazy"
                            onLoad={() => updateLoadStatus(photo.id)}
                        />
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Photos;
