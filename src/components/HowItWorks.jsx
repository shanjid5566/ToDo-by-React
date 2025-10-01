import React from "react";

const steps = [
  {
    step: "1",
    title: "Create an Account",
    description: "Sign up quickly using your email or social login to get started.",
  },
  {
    step: "2",
    title: "Add Your Tasks",
    description:
      "Easily create tasks with titles, descriptions, deadlines, and tags to stay organized.",
  },
  {
    step: "3",
    title: "Track Your Progress",
    description:
      "Mark tasks as completed, filter by category, and keep track of your daily productivity.",
  },
];

function HowItWorks() {
  return (
    <section className="py-4 lg:py-12 dark:bg-black">
      <div className="max-w-7xl mx-auto  px-4 md:px-10 lg:px-12 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          How It Works
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.step}
              className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold mb-4 mx-auto">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
