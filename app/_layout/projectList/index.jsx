// components/ProjectsList.js
import ProjectCard from './ProjectCard';

const projects = [
  {
    imageSrc: '/discord1.gif',
    title: 'Xetia - Owner',
    description:
      'World’s first and most unique hybrid server. The most exciting place to be.',
    year: '2024',
  },
  {
    imageSrc: '/discord2.gif',
    title: 'Sponic Ads - Owner',
    description:
      'India’s biggest advertisement server on Discord. Making advertisement easier for Discord users.',
    year: '2024',
  },
  {
    imageSrc: '/discord3.png',
    title: 'Code Social - Manager',
    description:
      'One of India’s biggest student communities for  coders and designers.Helping developers and  designers to grow.',
    year: '2024',
  },
  {
    imageSrc: '/discord2.gif',
    title: 'BattleChest - Assistant',
    description:
      "Community Manager India's premier  gaming tournament organizer with 15K ​members.Making gaming communities more competitive.",
    year: '2024',
  },
  {
    imageSrc: '/discord2.gif',
    title: 'Sexy.ai - Moderator',
    description:
      'A leading NSFW AI image generation website.Moderating content responsibly.',
    year: '2024',
  },
];

const ProjectsList = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap items-center justify-center gap-20 '>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            year={project.year}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
