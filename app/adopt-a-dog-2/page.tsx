import Link from "next/link";

export default function AdoptableDogsPage() {
  const dogs = [
    {
      name: "Max",
      age: "2 yrs",
      gender: "MALE",
      breed: "Lab mix / Retriever Mix",
      tags: ["Playful", "Large", "High-Energy"],
    },
    {
      name: "Bella",
      age: "3 yrs",
      gender: "FEMALE",
      breed: "German Shepherd",
      tags: ["Loyal", "Smart", "Active"],
    },
    {
      name: "Charlie",
      age: "1 yr",
      gender: "MALE",
      breed: "Terrier Mix",
      tags: ["Energetic", "Cuddy", "Friendly"],
    },
    {
      name: "Luna",
      age: "4 yrs",
      gender: "FEMALE",
      breed: "Husky Mix",
      tags: ["Independent", "Loyal", "Vocal"],
    },
    {
      name: "Cooper",
      age: "5 yrs",
      gender: "MALE",
      breed: "Beagle / Hound Mix",
      tags: ["Curious", "Friendly", "Food-Motivated"],
    },
    {
      name: "Daisy",
      age: "2 yrs",
      gender: "FEMALE",
      breed: "Labradoodle",
      tags: ["Smart", "Playful", "Hypoallergenic"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-br from-[#6b4a3d] to-[#4a2d1e] overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 px-4">
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-4 uppercase">
              OUR ADOPTABLE DOGS
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Meet our wonderful dogs waiting for their forever homes. Browse
              the gallery below to find your perfect companion.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and CTA */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-3">
            <select className="bg-[#252525] text-white px-4 py-2 rounded-eight border border-[#333] text-sm">
              <option>FILTERS:</option>
            </select>
            <select className="bg-[#252525] text-white px-4 py-2 rounded-eight border border-[#333] text-sm">
              <option>Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <select className="bg-[#252525] text-white px-4 py-2 rounded-eight border border-[#333] text-sm">
              <option>Age</option>
              <option>Puppy</option>
              <option>Young</option>
              <option>Adult</option>
              <option>Senior</option>
            </select>
            <select className="bg-[#252525] text-white px-4 py-2 rounded-eight border border-[#333] text-sm">
              <option>Energy Level</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <Link
            href="https://new.shelterluv.com/matchme/adopt/AHTN/Dog"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-red hover:bg-red-700 text-white px-6 py-2 rounded-eight font-bold uppercase text-sm transition-colors flex items-center"
          >
            <span className="mr-2">📋</span> DOG ADOPTION APPLICATION
          </Link>
        </div>
      </section>

      {/* Dogs Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogs.map((dog) => (
            <div
              key={dog.name}
              className="bg-[#252525] rounded-eight overflow-hidden hover:transform hover:scale-105 transition-all relative"
            >
              <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-eight z-10">
                {dog.gender}
              </div>
              <div className="aspect-[4/3] relative bg-gradient-to-br from-[#5a6b4a] to-[#3d4a2d] flex items-center justify-center">
                <span className="text-9xl">🐕</span>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-heading text-xl text-white">
                      {dog.name}
                    </h3>
                    <p className="text-primary-red text-sm font-bold">
                      {dog.age}
                    </p>
                  </div>
                </div>
                <p className="text-accent-offwhite text-sm mb-3">{dog.breed}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {dog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#1a1a1a] text-accent-offwhite px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-[#252525] hover:bg-[#2a2a2a] text-white px-8 py-3 rounded-eight font-bold uppercase text-sm transition-colors border border-[#333]">
            LOAD MORE DOGS ↻
          </button>
        </div>
      </section>
    </div>
  );
}