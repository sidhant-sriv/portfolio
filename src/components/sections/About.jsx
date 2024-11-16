import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of visible slides
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960, // Tablets and smaller devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    'https://i.imgur.com/OTtk4VY.png',
    'https://i.imgur.com/gsal53S.jpeg',
    "https://i.imgur.com/wrWLiEb.png",
    'https://i.imgur.com/G0ni4l7.jpeg',
    'https://i.imgur.com/PkJjy1q.jpeg',
  ];

  return (
    <section id="about" className="w-full py-32 text-lilac font-sans">
      <div className="flex flex-col md:flex-row items-stretch w-full">
        {/* Text Section */}
        <div className="md:w-1/3 px-6 mb-12 md:mb-0 flex-1 flex flex-col">
          <h2 className="text-5xl font-bold mb-8">About Me</h2>
          <p className="text-xl leading-relaxed text-lilac flex-grow">
            Hi, I'm Sidhant S Srivastava, a Backend Developer & Machine Learning Enthusiast based in India. I currently work as a Backend Consultant. I am studying Computer Science and Engineering at the Vellore Institute of Technology, Vellore.
            <br />
            <br />
            I like playing the guitar, reading books, and watching movies in my free time. I am also a big fan of the Marvel Cinematic Universe.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="md:w-1/3 px-6 mb-12 md:mb-0 flex-1 flex flex-col">
          <h2 className="text-5xl font-bold mb-8">Gallery</h2>
          <div className="flex-grow">
            <Slider {...settings} className="h-full">
              {images.map((src, index) => (
                <div key={index} className="p-2 h-full">
                  <img
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Spotify Playlist */}
        <div className="md:w-1/3 px-6 flex-1 flex flex-col">
          <h3 className="text-4xl font-bold mb-8 text-center">My Playlist</h3>
          <div className="flex-grow aspect-w-16 aspect-h-9">
            <iframe
              src="https://open.spotify.com/embed/playlist/36qriYnFjbfXanl19gbI0z?theme=0"
              className="w-full h-full rounded-lg shadow-lg"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
              title="Spotify Playlist"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;