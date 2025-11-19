import React from "react";

// উদাহরণ job data
const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Tech Solutions",
        duration: "Jan 2023 - Present",
        description: "Developed responsive web applications using React and Tailwind CSS.",
    },
    {
        id: 2,
        title: "React Developer",
        company: "Creative Labs",
        duration: "Jun 2022 - Dec 2022",
        description: "Built interactive UI components and optimized website performance.",
    },
    {
        id: 3,
        title: "Web Intern",
        company: "Startup Hub",
        duration: "Jan 2022 - May 2022",
        description: "Assisted in frontend development and debugging tasks.",
    },
];

const JobCard = ({ job }) => {
    return (
        <div className="bg-white rounded-xl ml-64 shadow-lg p-6 mb-6 transform transition duration-700 ease-in-out hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fadeIn">
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>
            <p className="text-green-500 font-semibold mb-1">{job.company}</p>
            <p className="text-gray-500 text-sm mb-3">{job.duration}</p>
            <p className="text-gray-700">{job.description}</p>
        </div>
    );
};

const MyJob = () => {
    return (
        <section className="min-h-screen bg-gray-100 p-10 lg:px-20">
            <h1 className="text-4xl font-bold text-gray-900 mb-10">My Job Experience</h1>

            <div className="flex flex-col">
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>

            {/* Animation CSS */}
            <style>
                {`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s forwards;
        }
        `}
            </style>
        </section>
    );
};

export default MyJob;
