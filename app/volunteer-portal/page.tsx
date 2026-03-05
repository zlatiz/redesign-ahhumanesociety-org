import Link from "next/link";

export default function VolunteerPortalPage() {
  const resources = [
    {
      title: "Volunteer Handbook",
      description:
        "Access the complete safety guidelines, best practices for interacting with animals, policies.",
      link: "#",
      icon: "📖",
    },
    {
      title: "Training Videos",
      description:
        "Access library of required and optional training videos covering animal welfare and more.",
      link: "#",
      icon: "🎥",
    },
    {
      title: "Shift Scheduling",
      description:
        "Easily schedule shifts with sign-up, volunteer with us on your schedule.",
      link: "#",
      icon: "📅",
    },
    {
      title: "Contact Coordinator",
      description:
        "Have questions or need assistance? Reach out directly to our volunteer coordinator team.",
      link: "#",
      icon: "👥",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-[#4a6b8a] to-[#2d4a5e] overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 px-4">
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-4 uppercase">
              VOLUNTEER PORTAL
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Welcome back! Your dedication helps us save lives and find loving
              homes for animals in need across the Appalachian Highlands.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Link
              href="#"
              className="bg-primary-blue hover:bg-blue-700 text-white p-8 rounded-eight text-center transition-colors"
            >
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="font-heading text-2xl mb-2 uppercase">
                VOLUNTEER LOGIN
              </h3>
              <p className="text-sm opacity-90">Access your volunteer account</p>
            </Link>
            <Link
              href="#"
              className="bg-primary-red hover:bg-red-700 text-white p-8 rounded-eight text-center transition-colors"
            >
              <div className="text-4xl mb-4">📝</div>
              <h3 className="font-heading text-2xl mb-2 uppercase">
                NEW REGISTRATION
              </h3>
              <p className="text-sm opacity-90">
                Sign up to become a volunteer
              </p>
            </Link>
          </div>

          {/* Resources */}
          <div>
            <h2 className="font-heading text-3xl text-white mb-8 uppercase flex items-center">
              <span className="mr-3">📚</span> Volunteer Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <div
                  key={resource.title}
                  className="bg-[#252525] rounded-eight overflow-hidden hover:bg-[#2a2a2a] transition-colors"
                >
                  <div className="aspect-video relative bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a] flex items-center justify-center">
                    <span className="text-6xl">{resource.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg text-white mb-2 uppercase">
                      {resource.title}
                    </h3>
                    <p className="text-accent-offwhite text-sm mb-4">
                      {resource.description}
                    </p>
                    <Link
                      href={resource.link}
                      className="text-primary-blue hover:text-blue-400 text-sm font-bold uppercase transition-colors"
                    >
                      LEARN MORE →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 bg-[#252525] rounded-eight p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>
    </div>
  );
}