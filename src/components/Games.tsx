import { useState } from 'react';

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  platforms: string[];
  releaseStatus: 'released' | 'coming_soon';
}

const games: Game[] = [
  {
    id: 'game1',
    title: 'Shadow Warriors',
    description: 'An epic battle between light and darkness in a fantasy realm where your choices determine the fate of the world.',
    image: 'https://images.pexels.com/photos/7915567/pexels-photo-7915567.jpeg',
    platforms: ['PC', 'PS5', 'Xbox'],
    releaseStatus: 'released'
  },
  {
    id: 'game2',
    title: 'Cyber Drift 2090',
    description: 'Race through neon-lit streets in a dystopian future where speed and technology collide.',
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg',
    platforms: ['PC', 'PS5', 'Xbox', 'Switch'],
    releaseStatus: 'released'
  },
  {
    id: 'game3',
    title: 'Galactic Frontier',
    description: 'Explore uncharted worlds, build your space empire and defend against alien threats in this space strategy game.',
    image: 'https://images.pexels.com/photos/1274506/pexels-photo-1274506.jpeg',
    platforms: ['PC', 'Mac'],
    releaseStatus: 'released'
  },
  {
    id: 'game4',
    title: 'Ancient Legacy',
    description: 'Uncover the mysteries of an ancient civilization and harness forgotten magic to save humanity.',
    image: 'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg',
    platforms: ['PC', 'PS5', 'Xbox'],
    releaseStatus: 'coming_soon'
  }
];

const GameCard = ({ game }: { game: Game }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:-translate-y-2">
      <div 
        className="h-[350px] bg-cover bg-center rounded-xl relative"
        style={{ backgroundImage: `url(${game.image})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl font-bold text-white">{game.title}</h3>
            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
              game.releaseStatus === 'released' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-gray-900'
            }`}>
              {game.releaseStatus === 'released' ? 'Available Now' : 'Coming Soon'}
            </div>
          </div>
          <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{game.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {game.platforms.map(platform => (
              <span key={platform} className="px-2 py-1 bg-gray-800 text-xs text-white rounded">
                {platform}
              </span>
            ))}
          </div>
          
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-medium transition-all duration-300 w-full">
            {game.releaseStatus === 'released' ? 'Play Now' : 'Wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
};

const Games = () => {
  const [filter, setFilter] = useState<'all' | 'released' | 'coming_soon'>('all');
  
  const filteredGames = games.filter(game => {
    if (filter === 'all') return true;
    return game.releaseStatus === filter;
  });
  
  return (
    <section id="games" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Games</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our collection of immersive gaming experiences that push the boundaries of imagination
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full ${
                filter === 'all' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transition-all duration-300`}
            >
              All Games
            </button>
            <button 
              onClick={() => setFilter('released')}
              className={`px-6 py-2 rounded-full ${
                filter === 'released' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transition-all duration-300`}
            >
              Available Now
            </button>
            <button 
              onClick={() => setFilter('coming_soon')}
              className={`px-6 py-2 rounded-full ${
                filter === 'coming_soon' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transition-all duration-300`}
            >
              Coming Soon
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;