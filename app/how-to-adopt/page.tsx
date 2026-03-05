import Link from "next/link";

export default function HowToAdoptPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-[#8a7a5a] to-[#5e4a2d] overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 px-4">
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-4 uppercase">
              HOW TO ADOPT
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Through our Adoption Program, the Appalachian Highlands Humane
              Society helps hundreds of animals find loving forever homes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-8 uppercase text-center">
            THE ADOPTION PROCESS
          </h2>
          <h3 className="text-xl text-accent-offwhite mb-12 text-center max-w-3xl mx-auto">
            Through our Adoption Program, the Appalachian Highlands Humane
            Society helps hundreds of animals find loving forever homes. Our
            Adoption Team will work with you to find the right dog, cat or
            critter for your home. Below is how the process works:
          </h3>

          {/* Steps */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-[#252525] rounded-eight p-8">
              <div className="flex items-start mb-4">
                <div className="bg-primary-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-heading text-xl mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h2 className="font-heading text-2xl text-white mb-4 uppercase">
                    Step 1: Explore currently available animals for adoption.
                  </h2>
                  <h5 className="text-accent-offwhite mb-6">
                    Our online adoption listings are updated daily.
                  </h5>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/adopt-a-cat"
                      className="bg-primary-blue hover:bg-blue-700 text-white px-6 py-3 rounded-eight font-bold uppercase text-sm transition-colors"
                    >
                      VIEW CATS
                    </Link>
                    <Link
                      href="/adopt-a-dog-2"
                      className="bg-primary-blue hover:bg-blue-700 text-white px-6 py-3 rounded-eight font-bold uppercase text-sm transition-colors"
                    >
                      VIEW DOGS
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#252525] rounded-eight p-8">
              <div className="flex items-start mb-4">
                <div className="bg-primary-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-heading text-xl mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h2 className="font-heading text-2xl text-white mb-4 uppercase">
                    Step 2: Complete an adoption application.
                  </h2>
                  <h5 className="text-accent-offwhite mb-6">
                    Once you have found an animal that you are interested in
                    adopting, complete an adoption application. Make sure to
                    complete the entire application. The application is submitted
                    electronically and is received by our Adoption Team.
                  </h5>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="https://new.shelterluv.com/matchme/adopt/AHTN/Cat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-red hover:bg-red-700 text-white px-6 py-3 rounded-eight font-bold uppercase text-sm transition-colors"
                    >
                      CAT APPLICATION
                    </Link>
                    <Link
                      href="https://new.shelterluv.com/matchme/adopt/AHTN/Dog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-red hover:bg-red-700 text-white px-6 py-3 rounded-eight font-bold uppercase text-sm transition-colors"
                    >
                      DOG APPLICATION
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#252525] rounded-eight p-8">
              <div className="flex items-start mb-4">
                <div className="bg-primary-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-heading text-xl mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h2 className="font-heading text-2xl text-white mb-4 uppercase">
                    Step 3: Adoption Screening Process
                  </h2>
                  <h5 className="text-accent-offwhite">
                    We use an interview process to ensure that each animal
                    adopted will be matched to the most appropriate home. During
                    this process the Adoption Team will check veterinarian
                    references and interview applicants to ensure that it is a
                    good match for both the animal and the prospective home.
                  </h5>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#252525] rounded-eight p-8">
              <div className="flex items-start mb-4">
                <div className="bg-primary-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-heading text-xl mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h2 className="font-heading text-2xl text-white mb-4 uppercase">
                    Step 4: Approval
                  </h2>
                  <h5 className="text-accent-offwhite">
                    Once your application has been approved, a meet and greet
                    will be scheduled.
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="aspect-video bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a] rounded-eight"></div>
            <div className="aspect-video bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a] rounded-eight"></div>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="bg-[#252525] py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl text-white mb-6 uppercase">
              Important Information
            </h2>
            <ul className="space-y-3 text-accent-offwhite">
              <li className="flex items-start">
                <span className="text-primary-red mr-3">✓</span>
                <span>All animals must be spayed or neutered prior to adoption</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-red mr-3">✓</span>
                <span>If renting, landlord approval is necessary</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}