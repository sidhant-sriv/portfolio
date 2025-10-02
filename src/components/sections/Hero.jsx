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
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="subtle-card p-10 md:p-16">
          <motion.h1
            className="text-4xl md:text-6xl font-semibold tracking-tight mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Sidhant Srivastava
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl muted mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Backend Developer · AI/ML · Competitive Programmer
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <a
              href="mailto:sidhant.sriv@gmail.com"
              className="px-5 py-2 rounded-full bg-graphite text-white hover:opacity-90 transition"
            >
              Get in touch
            </a>
            <a
              href="https://drive.google.com/file/d/1wx185UVx9dO4C7AhxFp93iJLVwJC9_Vr/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-silver hover:bg-white transition"
            >
              View resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;