import websites from './websites.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { sample } from 'lodash'

import 'swiper/css'
import 'swiper/css/pagination'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">My Useless Apps</h1>
        <h1 className="sub-title">Surprise Me</h1>
        <a
          href={sample(websites).url}
          className="select"
          rel="noreferrer"
          target="_blank"
        >
          Click Here
        </a>
        <div className="card-list">
          {websites.map(({ url, name, desc, images, github }) => (
            <div className="card">
              <div className="card-header">
                <span className="card-title">{name}</span>
                <span className="card-desc">{desc}</span>
              </div>
              <div className="card-info">
                <a href={github} rel="noreferrer" target="_blank">
                  <AiFillGithub size={35} />
                </a>
                <a href={url} rel="noreferrer" target="_blank">
                  <AiOutlineLink size={35} />
                </a>
              </div>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                loop
                autoplay={{
                  delay: 3000,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {images &&
                  images.map((img) => (
                    <SwiperSlide key={img}>
                      <img alt={name} src={img} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          ))}
        </div>
      </div>
      <amp-ad
        width="100vw"
        height="320"
        type="adsense"
        data-ad-client="ca-pub-3254440158856145"
        data-ad-slot="3237314844"
        data-auto-format="rspv"
        data-full-width=""
      >
        <div overflow=""></div>
      </amp-ad>
    </div>
  )
}

export default App
