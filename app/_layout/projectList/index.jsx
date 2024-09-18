// components/ProjectsList.js
import ProjectCard from './ProjectCard';

const projects = [
  {
    imageSrc: '/discord1.gif',
    title: 'Xetia - Owner',
    description:
      'World&amp;s first and most unique hybrid server. The most exciting place to be.',
    year: '2024',
  },
  {
    imageSrc: '/discord2.gif',
    title: 'Sponic Ads - Owner',
    description:
      'India&amp;s biggest advertisement server on Discord. Making advertisement easier for Discord users.',
    year: '2024',
  },
  {
    imageSrc: '/discord3.png',
    title: 'Code Social - Manager',
    description:
      'One of India&amp;s biggest student communities for  coders and designers.Helping developers and  designers to grow.',
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
  {
    imageSrc: '/discord2.gif',
    title: 'ModSquad - Moderator',
    description:
      'Successfully managed communities with up to 1,000,000 members. Spearheaded the development of highly engaged online communities for leading multinational tech companies.',
    year: '2024',
  },
  {
    imageSrc: '/discord2.gif',
    title: 'Slogo - Moderator',
    description:
      'Official Discord server of Slogo, or Slogoman, a gaming content creator with over 11 Million followers.',
    year: '2024',
  },
  {
    imageSrc: '/discord2.gif',
    title: 'BeluGANG - Moderator',
    description:
      'Official Discord server of Beluga, a content creator with over 7 Million followers.',
    year: '2024',
  },
  {
    imageSrc: '/discord2.gif',
    title: 'Makeshift Project - Moderator',
    description:
      'Official Discord server for Makeshift Project, an entertainment company with over 1.5 million followers.',
    year: '2024',
  },
  {
    imageSrc: '/discord2.gif',
    title: 'JHM - Moderator',
    description:
      'Managed one of the biggest freelancer platforms on Discord with over 11,000 members.',
    year: '2024',
  },
  {
    imageSrc: '/discord2.gif',
    title: 'Hideout - Moderator',
    description:
      'One of the most famous and active Discord servers with over 300,000 members.',
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
