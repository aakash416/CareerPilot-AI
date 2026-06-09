const features = [
    {
        title: "AI Job Recommendations",
        description:
            "Get personalized job suggestions based on your profile.",
    },
    {
        title: "Resume Analyzer",
        description:
            "Analyze your resume and improve ATS score.",
    },
    {
        title: "Application Tracking",
        description:
            "Track every application in one dashboard.",
    },
];

const FeaturesSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Features
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-white p-6 rounded-xl shadow"
                        >
                            <h3 className="text-xl font-semibold mb-3">
                                {feature.title}
                            </h3>

                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;