import React from 'react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Bachelor of Science in Agriculture",
      duration: "4 Years",
      description: "Comprehensive undergraduate program covering crop production, soil science, plant pathology, and agricultural economics.",
      features: ["Crop Production", "Soil Science", "Plant Pathology", "Agricultural Economics"],
      color: "from-green-500 to-green-600"
    },
    {
      id: 2,
      title: "Master of Science in Agricultural Engineering",
      duration: "2 Years",
      description: "Advanced program focusing on farm machinery, irrigation systems, and agricultural technology innovation.",
      features: ["Farm Machinery", "Irrigation Systems", "Agricultural Technology", "Research Methods"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      title: "Bachelor of Technology in Food Technology",
      duration: "4 Years",
      description: "Specialized program in food processing, preservation, quality control, and food safety management.",
      features: ["Food Processing", "Quality Control", "Food Safety", "Nutrition Science"],
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 4,
      title: "Master of Science in Horticulture",
      duration: "2 Years",
      description: "Advanced study in fruit and vegetable production, landscape design, and post-harvest technology.",
      features: ["Fruit Production", "Vegetable Production", "Landscape Design", "Post-harvest Technology"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of agricultural and technology programs designed to shape the future of farming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Course Header */}
              <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-bold leading-tight">
                    {course.title}
                  </h3>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.duration}
                  </span>
                </div>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Course Features */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Areas of Study:</h4>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className={`w-full bg-gradient-to-r ${course.color} text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose OUAT?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Faculty</h4>
                <p className="text-gray-600 text-sm">Learn from experienced professors and industry experts</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Modern Labs</h4>
                <p className="text-gray-600 text-sm">State-of-the-art laboratories and research facilities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Industry Placement</h4>
                <p className="text-gray-600 text-sm">Excellent placement opportunities in leading companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
