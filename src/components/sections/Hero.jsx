import { useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Backend Developer', 'Machine Learning Enthusiast', 'Human Being'],
    loop: {},
  });

  const images = [
    'https://i.imgur.com/OTtk4VY.png', // Example image URLs
    'https://i.imgur.com/gsal53S.jpeg',
    'https://i.imgur.com/wrWLiEb.png',
  ];

  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Text Section */}
      <div className="text-center text-lilac z-10">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I'm Sidhant Srivastava
        </motion.h1>
        <motion.h2
          className="text-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {text}
          <span className="cursor">|</span>
        </motion.h2>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >

          <a
            href="/resume.pdf"
            className="border border-lilac text-lilac px-4 py-2 rounded hover:bg-lilac hover:text-black transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="grid grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Hero image ${index + 1}`}
              className="w-40 h-40 rounded-full object-cover shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.3,
                duration: 0.6,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;