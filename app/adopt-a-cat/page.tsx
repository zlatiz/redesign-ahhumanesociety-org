import Link from "next/link";

export default function AdoptableCatsPage() {
  const cats = [
    {
      name: "Whiskers",
      age: "3 years",
      gender: "Male",
      description:
        "Playful and friendly. Loves playing with toys and getting petted.",
    },
    {
      name: "Luna",
      age: "2 years",
      gender: "Female",
      description:
        "Sweet indoor cat who loves to snuggle. Great with other cats.",
    },
    {
      name: "Oliver",
      age: "1 year",
      gender: "Male",
      description: "Curious kitten ready for adventure. Very affectionate.",
    },
    {
      name: "Bella",
      age: "5 years",
      gender: "Female",
      description: "Calm and loving. Purrs constantly when being petted.",
    },
    {
      name: "Shadow",
      age: "4 years",
      gender: "Male",
      description: "Independent yet affectionate. Prefers quiet environments.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-br from-[#5a6b8a] to-[#3d4a5e] overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 px-4">
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-4 uppercase">
              OUR ADOPTABLE CATS
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Meet our cats! Bring home all your life requires for decades.
              Discover available and purrfect your furry companion.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and CTA */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-3">
            <select className="bg-[#252525] text-white px-4 py-2 rounded-eight border border-[#333] text-sm">
              <option>Age</option>
              <option>Kitten</option>
              <option>Young</option>
              <option>Adult</option>
              <option>Senior</option>
            </select>
            <select className="bg-[#252525] text-white px-4 py-2 rounded-eight border border-[#333] text-sm">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <select className="bg-[#252525] text-white px-4 py-2 rounded-eight border border-[#333] text-sm">
              <option>Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <Link
            href="https://new.shelterluv.com/matchme/adopt/AHTN/Cat"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-red hover:bg-red-700 text-white px-6 py-2 rounded-eight font-bold uppercase text-sm transition-colors"
          >
            CAT ADOPTION APPLICATION
          </Link>
        </div>
      </section>

      {/* Cats Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cats.map((cat) => (
            <div
              key={cat.name}
              className="bg-[#252525] rounded-eight overflow-hidden hover:transform hover:scale-105 transition-all"
            >
              <div className="aspect-square relative bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a] flex items-center justify-center">
                <span className="text-8xl">🐱</span>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-lg text-white">
                    {cat.name}
                  </h3>
                  <span className="text-accent-offwhite text-xs bg-[#1a1a1a] px-2 py-1 rounded">
                    {cat.gender}
                  </span>
                </div>
                <p className="text-accent-offwhite text-sm mb-2">{cat.age}</p>
                <p className="text-accent-offwhite text-xs mb-4 line-clamp-2">
                  {cat.description}
                </p>
                <button className="w-full bg-primary-blue hover:bg-blue-700 text-white py-2 rounded-eight text-sm font-bold uppercase transition-colors">
                  VIEW PROFILE
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#252525] py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl text-white mb-4 uppercase">
            Ready to welcome a cat into your home?
          </h2>
          <Link
            href="https://new.shelterluv.com/matchme/adopt/AHTN/Cat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-red hover:bg-red-700 text-white px-8 py-3 rounded-eight font-bold uppercase text-sm transition-colors"
          >
            START YOUR ADOPTION
          </Link>
        </div>
      </section>
    </div>
  );
}