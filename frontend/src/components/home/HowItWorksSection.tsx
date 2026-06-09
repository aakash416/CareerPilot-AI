const steps = [
    "Create Account",
    "Upload Resume",
    "Get AI Suggestions",
    "Apply For Jobs",
];

const HowItWorksSection = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">
                    How It Works
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={step}
                            className="text-center"
                        >
                            <div className="w-14 h-14 rounded-full border mx-auto flex items-center justify-center mb-4">
                                {index + 1}
                            </div>

                            <h3 className="font-semibold">
                                {step}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;