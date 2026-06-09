const HeroSection = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl font-bold mb-6">
                    Find Your Dream Job Faster With AI
                </h1>

                <p className="text-xl text-gray-600 mb-8">
                    AI-powered job recommendations, resume analysis,
                    and application tracking.
                </p>

                <div className="flex justify-center gap-4">
                    <button className="px-6 py-3 rounded-lg bg-black text-white">
                        Get Started
                    </button>

                    <button className="px-6 py-3 rounded-lg border">
                        Browse Jobs
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;