import Link from "next/link";

export default function FosterPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-[#6b5a8a] to-[#4a3d5e] overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 px-4">
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-4 uppercase">
              FOSTER
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Become a Foster Parent at the Appalachian Highlands Humane Society
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl text-white mb-6 uppercase">
              Become a Foster Parent
            </h2>
            <p className="text-accent-offwhite text-lg max-w-3xl mx-auto">
              At the Appalachian Highlands Humane Society (AHHS), we believe
              every pet deserves a safe, loving home—whether permanent or
              temporary. Our foster program plays a vital role in saving lives
              and helping animals thrive. By opening your heart and home to a pet
              in need, you can make a lasting difference in their journey toward
              finding a forever family.
            </p>
          </div>

          {/* Information Sections */}
          <div className="space-y-12">
            {/* Why Foster */}
            <div className="bg-[#252525] rounded-eight p-8">
              <div className="flex items-start mb-6">
                <div className="text-5xl mr-6">❤️</div>
                <div>
                  <h2 className="font-heading text-2xl text-white mb-4 uppercase">
                    Why Foster?
                  </h2>
                  <ul className="space-y-4 text-accent-offwhite">
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-3 font-bold">•</span>
                      <div>
                        <strong>Create Space:</strong> Fostering allows us to
                        rescue more animals. Every time a pet goes into a foster
                        home, it frees up space at the shelter for additional
                        animals in need.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-3 font-bold">•</span>
                      <div>
                        <strong>Personalized Care:</strong> In a home setting,
                        you can provide one-on-one attention, helping animals
                        become well-socialized, confident, and ready for
                        adoption.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-3 font-bold">•</span>
                      <div>
                        <strong>Rewarding Experience:</strong> Witnessing a pet
                        grow, heal, and find happiness is incredibly rewarding.
                        Fostering is a great way to experience the joy of pet
                        companionship without a long-term commitment.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Who Can Foster */}
            <div className="bg-[#252525] rounded-eight p-8">
              <div className="flex items-start mb-6">
                <div className="text-5xl mr-6">👥</div>
                <div>
                  <h2 className="font-heading text-2xl text-white mb-4 uppercase">
                    Who Can Foster?
                  </h2>
                  <ul className="space-y-4 text-accent-offwhite">
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-3 font-bold">•</span>
                      <div>
                        <strong>Individuals and Families:</strong> Whether you're
                        single, have roommates, or a family with children, we
                        welcome compassionate people to join our foster
                        community.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-3 font-bold">•</span>
                      <div>
                        <strong>Flexible Schedule:</strong> Some fosters work
                        full-time; others stay at home. We do our best to match
                        you with a pet that fits your lifestyle.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-3 font-bold">•</span>
                      <div>
                        <strong>Loving Environment:</strong> The most important
                        requirement is a safe, nurturing home and a willingness
                        to give your foster pet time, care, and attention.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What's Involved */}
            <div className="bg-[#252525] rounded-eight p-8">
              <div className="flex items-start mb-6">
                <div className="text-5xl mr-6">📋</div>
                <div>
                  <h2 className="font-heading text-2xl text-white mb-4 uppercase">
                    What's Involved in Fostering?
                  </h2>
                  <ul className="space-y-4 text-accent-offwhite">
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-3 font-bold">•</span>
                      <div>
                        <strong>Time Commitment:</strong> Fostering can last
                        anywhere from a few days to a few months, depending on
                        the pet's needs.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-3 font-bold">•</span>
                      <div>
                        <strong>Training and Support:</strong> We provide
                        resources, guidance, and ongoing support to help you care
                        for your foster pet.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-3 font-bold">•</span>
                      <div>
                        <strong>Vet Care and Supplies:</strong> AHHS covers the
                        cost of veterinary care and provides basic supplies, such
                        as food, crates, and medication. We just ask that you
                        supply the love and patience.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Getting Started */}
            <div className="bg-[#252525] rounded-eight p-8">
              <div className="flex items-start mb-6">
                <div className="text-5xl mr-6">🚀</div>
                <div>
                  <h2 className="font-heading text-2xl text-white mb-4 uppercase">
                    Getting Started
                  </h2>
                  <ul className="space-y-4 text-accent-offwhite">
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-3 font-bold">1.</span>
                      <div>
                        <strong>Fill Out an Application:</strong> Visit our
                        website's foster page to complete the online form
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-3 font-bold">2.</span>
                      <div>
                        <strong>Meet & Greet:</strong> After reviewing your
                        application, we'll schedule a time for you to meet
                        potential foster pets and discuss any special
                        requirements or considerations.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-3 font-bold">3.</span>
                      <div>
                        <strong>Orientation:</strong> We provide a quick
                        orientation to ensure you're comfortable and prepared for
                        your new foster pet.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-3 font-bold">4.</span>
                      <div>
                        <strong>Welcome Home!</strong> Take your foster pet home
                        and watch them blossom under your care and affection.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-16 text-center">
            <p className="text-accent-offwhite text-lg mb-8 max-w-3xl mx-auto">
              Becoming a foster parent is an incredible way to transform a pet's
              life—and your own. You'll play a critical role in helping these
              deserving animals find permanent, loving homes.For more information
              or to start your foster journey, please complete a foster home
              application or contact our foster home specialist
              Halee@ahhumanesociety.org. Thank you for supporting the Appalachian
              Highlands Humane Society and helping us save lives—one wagging tail
              or purring companion at a time!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl text-white mb-8 uppercase">
            READY TO MAKE A DIFFERENCE?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://new.shelterluv.com/matchme/foster/AHTN/Cat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-blue hover:bg-blue-700 text-white px-8 py-3 rounded-eight font-bold uppercase text-sm transition-colors"
            >
              🐱 CAT FOSTER APPLICATION
            </Link>
            <Link
              href="https://new.shelterluv.com/matchme/foster/AHTN/Dog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-red hover:bg-red-700 text-white px-8 py-3 rounded-eight font-bold uppercase text-sm transition-colors"
            >
              🐕 DOG FOSTER APPLICATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}