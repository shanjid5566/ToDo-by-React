import React from "react";

const features = [
  {
    icon: "✅",
    title: "Easy Task Management",
    description:
      "Organize your daily tasks effortlessly. Add, edit, and track all your to-dos in one place for maximum productivity.",
  },
  {
    icon: "⏰",
    title: "Deadline Reminders",
    description:
      "Never miss an important deadline again. Get timely reminders for upcoming tasks so you can stay on schedule.",
  },
  {
    icon: "🏷️",
    title: "Tags & Categories",
    description:
      "Categorize your tasks with custom tags and labels. Easily filter and manage work, personal, or study-related activities.",
  },
  {
    icon: "📱",
    title: "Mobile Friendly",
    description:
      "Access your to-do list anytime, anywhere. Our responsive design ensures a smooth experience on phones, tablets, and desktops.",
  },
  {
    icon: "🔒",
    title: "Secure Login",
    description:
      "Your privacy comes first. Enjoy a secure login system with JWT authentication and encrypted passwords.",
  },
  {
    icon: "🔒",
    title: "Secure Login",
    description:
      "Your privacy comes first. Enjoy a secure login system with JWT authentication and encrypted passwords.",
  },
];

function Features() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Features
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
