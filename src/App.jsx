export default function App() {
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    url: `https://picsum.photos/300/${300 + Math.floor(Math.random() * 200)}?random=${i}`,
    height: 300 + Math.floor(Math.random() * 200) // Random heights
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
        True Masonry Layout
      </h1>
      <p className="text-center text-gray-300 mb-8">
        Images flow vertically like Pinterest
      </p>
      
      {/* TRUE MASONRY WITH CSS COLUMNS */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-7xl mx-auto space-y-4">
        {images.map((img) => (
          <div 
            key={img.id} 
            className="break-inside-avoid mb-4 relative group overflow-hidden rounded-xl shadow-2xl"
          >
            <img
              src={img.url}
              alt={`Image ${img.id}`}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-bold text-lg">Image #{img.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}