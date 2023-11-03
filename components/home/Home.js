import SwiperBrands from './SwiperBrands';
import css from './Home.module.css';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

import santaCruz from '@/public/images/bg/santaCruz.png';
import siamese from '@/public/images/bg/siamese.png';
import bengal from '@/public/images/bg/bengal.png';
import { useRouter } from 'next/router';
// import sphynx from '@/images/bg/sphynx.png';

export default function HomePage({}) {
  const router = useRouter();
  return (
    <>
      <div className={css.home}>
        <section className={css['home-block1']}>
          <div className={css['block1-content']}>
            <h2>
              <span style={{ color: 'rgb(226, 226, 226)' }}>БУДЬ</span>{' '}
              УНИКАЛЬНЫМ
            </h2>
            <h2>
              КАТАЙСЯ{' '}
              <span style={{ color: 'rgb(226, 226, 226)' }}>СО СТИЛЕМ.</span>
            </h2>
            <Button
              onClick={() => {
                router.push('/catalog');
              }}
              variant="ghost"
            >
              К покупкам
            </Button>
          </div>
        </section>
        <SwiperBrands />
        <section className={css['home-block2']}>
          {/* <div className={css['block2-bg']}></div> */}
          <div className={css['block2-content']}>
            <div className={css['block2-text']}>
              <h2>
                <span style={{ color: '#000' }}>The</span> SPHYNX
              </h2>
              <h2>
                <span style={{ color: '#000' }}>Model</span>
              </h2>
              <Button
                onClick={() => {
                  router.push('/catalog');
                }}
                variant="ghost"
                style={{ color: '#000' }}
              >
                Перейти в каталог
              </Button>
            </div>
            <div className={css['block2-img']}>
              <Image
                src={santaCruz}
                layout="responsive"
                alt="The SPHYNX Model"
              ></Image>
            </div>
          </div>
        </section>
        <section className={css['home-block3']}>
          <div className={css['block3-content']}>
            <div className={css['block3-img']}>
              <Image
                src={siamese}
                layout="responsive"
                alt="The SIAMESE Model"
              ></Image>
            </div>
            <div className={css['block3-text']}>
              <h2>
                <span style={{ color: '#000' }}>The</span> Siamese
              </h2>
              <h2>
                <span style={{ color: '#000' }}>Model</span>
              </h2>
              <Button
                onClick={() => {
                  router.push('/catalog');
                }}
                variant="ghost"
                style={{ color: '#000' }}
              >
                Перейти в каталог
              </Button>
            </div>
          </div>
        </section>
        <section className={css['home-block4']}>
          <div className={css['block4-content']}>
            <div className={css['block4-text']}>
              <h2>
                <span style={{ color: '#000' }}>The</span> Bengal
              </h2>
              <h2>
                <span style={{ color: '#000' }}>Model</span>
              </h2>
              <Button
                onClick={() => {
                  router.push('/catalog');
                }}
                variant="ghost"
                style={{ color: '#000' }}
              >
                Перейти в каталог
              </Button>
            </div>
            <div className={css['block4-img']}>
              <Image
                src={bengal}
                layout="responsive"
                alt="The BENGAL Model"
              ></Image>
            </div>
          </div>
        </section>
        {/* <section className={css['comingSoon']}></section> */}
        <section className={css['followUs']}></section>
        <section className="mainContainer"></section>
      </div>
    </>
  );
}
