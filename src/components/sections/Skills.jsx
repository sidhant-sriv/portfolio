const Skills = () => {
    const skills = {
      'Programming Languages': ['Python', 'C/C++', 'Java', 'Node.js'],
      Frameworks: ['Django', 'Flask', 'Sanic'],
      Tools: ['Docker', 'Compose', 'GitHub CI/CD'],
      'Cloud Platforms': ['AWS', 'GCP', 'DigitalOcean'],
      'Machine Learning': ['PyTorch', 'TensorFlow', 'LangChain', 'LLamaIndex'],
      'Other Skills': ['React', 'Unix/Linux', 'Data Structures and Algorithms'],
    };
  
    return (
      <section
        id="skills"
        className="w-full py-20 text-lilac bg-black "
      >
        <div className="container mx-auto px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
            {Object.keys(skills).map((category) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold">{category}</h3>
                <ul className="list-disc ml-5 space-y-3">
                  {skills[category].map((skill) => (
                    <li key={skill} className="text-lg">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;