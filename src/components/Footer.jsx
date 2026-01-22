export default function Footer() {
  return (
    <footer className="bg-dark/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        
        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <h3 className="font-heading text-2xl text-gold mb-4">
              Harmonic Studios
            </h3>
            <p className="text-gray-400 max-w-sm">
              Personalized music education designed to build confidence,
              creativity, and lifelong musical skills.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-gold transition cursor-pointer">
                Home
              </li>
              <li className="hover:text-gold transition cursor-pointer">
                About
              </li>
              <li className="hover:text-gold transition cursor-pointer">
                Courses
              </li>
              <li className="hover:text-gold transition cursor-pointer">
                Testimonials
              </li>
              <li className="hover:text-gold transition cursor-pointer">
                Book Lesson
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>📞 +91 75009 58684</li>
              <li>📧 harmonicstudio@gmail.com</li>
              
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Music Academy. All rights reserved.
          </p>
          
        </div>

      </div>
    </footer>
  );
}
