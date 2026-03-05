import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const featuredAnimals = [
    {
      name: "Charlie",
      species: "Cat",
      age: "2 years old",
      image:
        "https://www.ahhumanesociety.org/wp-content/uploads/2021/08/646C429B-700E-45AC-8E76-8D946370456D-1024x681.jpeg",
    },
    {
      name: "Buddy",
      species: "Dog",
      age: "3 years old",
      image:
        "https://www.ahhumanesociety.org/wp-content/uploads/2021/08/D30F5EA7-03AA-484E-90D5-27F9677C98E8_1_201_a-scaled.jpeg",
    },
    {
      name: "Luna",
      species: "Cat",
      age: "1 year old",
      image:
        "https://www.ahhumanesociety.org/wp-content/uploads/2021/08/836C42FF-2D5A-4DF6-BF60-4DEED6404263-1024x681.jpeg",
    },
    {
      name: "Max",
      species: "Dog",
      age: "4 years old",
      image:
        "https://www.ahhumanesociety.org/wp-content/uploads/2021/08/7BBF36D3-741F-4B61-8E4F-646F5FC9A5E9-1024x681.jpeg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-[#5a8a6e] to-[#3d6b54] overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 px-4">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-4 uppercase">
              ADOPTIONS AND FOSTER CARE
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Find your new best friend
            </p>
            <Link
              href="/how-to-adopt"
              className="inline-block bg-primary-blue hover:bg-blue-700 text-white px-8 py-3 rounded-eight font-bold uppercase text-sm transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/adopt-a-cat"
            className="bg-[#252525] hover:bg-[#2a2a2a] rounded-eight overflow-hidden transition-colors group"
          >
            <div className="aspect-video relative bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">🐱</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl text-white mb-2 uppercase">
                OUR ADOPTABLE CATS
              </h3>
              <p className="text-accent-offwhite text-sm">
                Browse our available cats
              </p>
            </div>
          </Link>

          <Link
            href="/adopt-a-dog-2"
            className="bg-[#252525] hover:bg-[#2a2a2a] rounded-eight overflow-hidden transition-colors group"
          >
            <div className="aspect-video relative bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">🐕</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl text-white mb-2 uppercase">
                OUR ADOPTABLE DOGS
              </h3>
              <p className="text-accent-offwhite text-sm">
                Browse our available dogs
              </p>
            </div>
          </Link>

          <Link
            href="/foster-care"
            className="bg-[#252525] hover:bg-[#2a2a2a] rounded-eight overflow-hidden transition-colors group"
          >
            <div className="aspect-video relative bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">❤️</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl text-white mb-2 uppercase">
                FOSTER PROGRAM
              </h3>
              <p className="text-accent-offwhite text-sm">
                Learn about fostering
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Give a Gift Today */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-[#252525] rounded-eight p-8 md:p-12">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6 uppercase">
            GIVE A GIFT TODAY
          </h2>
          <p className="text-accent-offwhite text-lg mb-8 max-w-3xl">
            Every animal that enters our program has a story to tell…. abandoned
            by their owner….. injured in some way…. or found roaming the streets
            searching for food. Your donation allows them to put that life behind
            them and look to the future. Please give today. EIN: 621582278
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#1a1a1a] p-6 rounded-eight">
              <h4 className="font-heading text-lg text-white mb-2 uppercase">
                Faithful Friends
              </h4>
              <p className="text-accent-offwhite text-sm">
                Monthly giving program that makes an ongoing impact
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-eight">
              <h4 className="font-heading text-lg text-white mb-2 uppercase">
                In Honor
              </h4>
              <p className="text-accent-offwhite text-sm">
                Give in honor of someone special
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-eight">
              <h4 className="font-heading text-lg text-white mb-2 uppercase">
                In Memory
              </h4>
              <p className="text-accent-offwhite text-sm">
                Give in memory of a loved one
              </p>
            </div>
          </div>
          <Link
            href="https://www.ahhumanesociety.org/donate-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-red hover:bg-red-700 text-white px-8 py-3 rounded-eight font-bold uppercase text-sm transition-colors"
          >
            DONATE NOW
          </Link>
        </div>
      </section>

      {/* Featured Animals */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl text-white uppercase">
            FEATURED ANIMALS
          </h2>
          <Link
            href="/adopt-a-cat"
            className="text-primary-blue hover:text-blue-400 text-sm font-bold uppercase transition-colors"
          >
            VIEW ALL →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAnimals.map((animal) => (
            <div
              key={animal.name}
              className="bg-[#252525] rounded-eight overflow-hidden hover:transform hover:scale-105 transition-all"
            >
              <div className="aspect-square relative bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a]">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading text-lg text-white mb-1">
                  {animal.name}
                </h3>
                <p className="text-accent-offwhite text-sm mb-1">
                  {animal.species}
                </p>
                <p className="text-accent-offwhite text-xs">{animal.age}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="font-heading text-3xl md:text-4xl text-white mb-12 uppercase text-center">
          IMPACT 2024
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-heading text-primary-blue mb-2">
              4,204
            </div>
            <div className="text-accent-offwhite uppercase text-sm">
              Active Volunteers
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-heading text-primary-blue mb-2">
              15K+
            </div>
            <div className="text-accent-offwhite uppercase text-sm">
              Hours This Year
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-heading text-primary-blue mb-2">
              3,450
            </div>
            <div className="text-accent-offwhite uppercase text-sm">
              Animals Helped
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}