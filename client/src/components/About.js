import React from 'react';

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About OUAT
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering agricultural education and research in Odisha since 1962
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              The Orissa University of Agriculture and Technology (OUAT) stands as a beacon of excellence 
              in agricultural education, research, and extension services. Established in 1962, our 
              university has been at the forefront of agricultural innovation and sustainable farming 
              practices in Eastern India.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Our institution is committed to nurturing the next generation of agricultural scientists, 
              researchers, and entrepreneurs who will drive India's agricultural transformation. 
              Through cutting-edge research, innovative teaching methods, and strong industry partnerships, 
              we prepare our students to meet the challenges of modern agriculture.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">1962</div>
                <div className="text-sm text-gray-600">Established</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Colleges</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Departments</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">A+</div>
                <div className="text-sm text-gray-600">NAAC Grade</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                To provide quality education, conduct innovative research, and deliver extension services 
                that contribute to sustainable agricultural development and rural prosperity.
              </p>
              
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To be a globally recognized center of excellence in agricultural education, research, 
                and innovation that transforms lives and communities through sustainable agriculture.
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-300 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
