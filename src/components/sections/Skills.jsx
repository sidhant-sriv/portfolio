import skillsData from '../../data/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="w-full py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-tight mb-8 text-left">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group) => (
            <div key={group.name} className="subtle-card p-6">
              <h3 className="text-lg font-semibold mb-4">{group.name}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2 py-1 rounded-full border border-silver text-xs"
                    title={skill.proficiency ? `${skill.proficiency}%` : undefined}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;