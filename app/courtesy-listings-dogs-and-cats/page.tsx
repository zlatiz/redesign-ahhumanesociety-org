import Link from "next/link";

export default function CourtesyListingsPage() {
  const listings = [
    {
      name: "Buddy",
      species: "Dog",
      age: "5 years old",
      breed: "Beagle Mix",
      contact: "owner1@email.com",
      phone: "(555) 123-4567",
    },
    {
      name: "Luna",
      species: "Cat",
      age: "3 years old",
      breed: "Domestic Shorthair",
      contact: "owner2@email.com",
      phone: "(555) 234-5678",
    },
    {
      name: "Max",
      species: "Dog",
      age: "6 years old",
      breed: "Labrador Retriever / Mixed",
      contact: "owner3@email.com",
      phone: "(555) 345-6789",
    },
    {
      name: "Oliver",
      species: "Cat",
      age: "2 years old",
      breed: "Tabby Mix",
      contact: "owner4@email.com",
      phone: "(555) 456-7890",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-br from-[#5a4a6b] to-[#3d2d4a] overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 px-4">
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-4 uppercase">
              COURTESY LISTINGS DOGS AND CATS
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Info Box */}
          <div className="bg-[#252525] rounded-eight p-8 mb-12">
            <p className="text-accent-offwhite mb-4">
              The animals posted on this page are not part of HSWC's adoption
              program. They are included on our website as a courtesy to
              individuals looking for homes for their dogs. All dogs, puppies,
              cats and kittens must be spayed or neutered to be eligible for a
              courtesy post. Learn more about submitting a courtesy listing for a
              pet in need of a home.
            </p>
            <p className="text-accent-offwhite">
              HSWC has not met, evaluated or interacted with these animals and
              cannot make any guarantees about their health or temperament. To
              learn more or arrange a meeting with these pets, please use the
              contact information listed for each animal. Do not contact HSWC or
              fill out an HSWC Adoption Application for these animals unless
              requested by pet owner. Adoption process and rehoming fee is at the
              discretion of the pet's guardian.
            </p>
          </div>

          {/* Submit Button */}
          <div className="mb-12 text-center">
            <Link
              href="#"
              className="inline-block bg-primary-red hover:bg-red-700 text-white px-8 py-3 rounded-eight font-bold uppercase text-sm transition-colors"
            >
              SUBMIT A COURTESY POST
            </Link>
          </div>

          {/* Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {listings.map((listing) => (
              <div
                key={listing.name}
                className="bg-[#252525] rounded-eight overflow-hidden hover:bg-[#2a2a2a] transition-colors"
              >
                <div className="flex">
                  <div className="w-1/3 aspect-square relative bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                    <span className="text-5xl">
                      {listing.species === "Dog" ? "🐕" : "🐱"}
                    </span>
                    <div className="absolute top-2 right-2 bg-primary-red text-white text-xs px-2 py-1 rounded">
                      {listing.species}
                    </div>
                  </div>
                  <div className="flex-1 p-5">
                    <h3 className="font-heading text-xl text-white mb-1">
                      {listing.name}
                    </h3>
                    <p className="text-accent-offwhite text-sm mb-1">
                      {listing.age} • {listing.breed}
                    </p>
                    <div className="mt-4 pt-4 border-t border-[#333]">
                      <p className="text-accent-offwhite text-xs mb-1">
                        <span className="font-bold">Contact:</span>
                      </p>
                      <p className="text-primary-blue text-xs mb-1">
                        📧 {listing.contact}
                      </p>
                      <p className="text-primary-blue text-xs">
                        📞 {listing.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 bg-[#1a1a1a] border border-[#333] rounded-eight p-6">
            <p className="text-accent-offwhite text-sm text-center">
              <strong>Important:</strong> These animals are not at the AHHS
              shelter but are listed as a courtesy for community members. Please
              contact the owner directly regarding these pets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}