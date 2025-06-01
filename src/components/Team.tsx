import { Twitter, Linkedin, Github } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    bio: 'Gaming enthusiast with 15+ years in the industry. Passionate about creating immersive experiences.',
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: 2,
    name: 'Samantha Lee',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
    bio: 'Award-winning designer with a background in animation and interactive storytelling.',
    socialLinks: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 3,
    name: 'Marcus Chen',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    bio: 'Programming wizard who loves solving complex problems and optimizing game performance.',
    socialLinks: {
      github: '#',
      linkedin: '#',
    },
  },
  {
    id: 4,
    name: 'Olivia Rodriguez',
    role: 'Art Director',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    bio: 'Visual artist with a keen eye for detail and a passion for creating stunning game worlds.',
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The talented individuals behind Beast Games who bring our visions to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-800 rounded-xl overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                
                <div className="flex space-x-3">
                  {member.socialLinks.twitter && (
                    <a href={member.socialLinks.twitter} className="text-gray-400 hover:text-purple-500 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a href={member.socialLinks.linkedin} className="text-gray-400 hover:text-purple-500 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.socialLinks.github && (
                    <a href={member.socialLinks.github} className="text-gray-400 hover:text-purple-500 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;