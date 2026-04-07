import React, { useState, useEffect } from 'react';
import { Search, Menu, X, BookOpen, User, ShoppingCart, Star, Clock, PlayCircle, CheckCircle, ChevronRight, Mail, Facebook, Twitter, Instagram, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES, COURSES, FAQS } from './constants';
import { Course } from './types';

// --- Sub-components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
            <BookOpen size={24} />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>EduFlow</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Courses', 'Mentors', 'Pricing', 'Resources'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
            <ShoppingCart size={20} />
          </button>
          <button className="text-sm font-semibold text-gray-900 px-4 py-2 hover:text-indigo-600 transition-colors">Log in</button>
          <button className="text-sm font-semibold text-white bg-indigo-600 px-6 py-2.5 rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
            Join for Free
          </button>
        </div>

        <button className="md:hidden p-2 text-gray-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {['Courses', 'Mentors', 'Pricing', 'Resources'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg">
                  {item}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button className="w-full text-center py-3 font-semibold text-gray-900 border border-gray-200 rounded-xl">Log in</button>
                <button className="w-full text-center py-3 font-semibold text-white bg-indigo-600 rounded-xl">Join for Free</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-6">
            🚀 10,000+ Students Joined This Week
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-[1.1]">
            Unlock Your Potential with <br />
            <span className="text-indigo-600">Expert-Led</span> Courses
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed">
            Join the world's most innovative learning platform. Master new skills, advance your career, and learn from industry leaders.
          </p>

          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="text-gray-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
            </div>
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="block w-full pl-14 pr-32 py-5 bg-white border-2 border-gray-100 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all shadow-xl shadow-gray-100/50"
            />
            <button className="absolute right-3 top-3 bottom-3 px-8 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all">
              Search
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-500" />
              Lifetime Access
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-500" />
              Expert Mentors
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-500" />
              Verified Certificates
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Categories</h2>
            <p className="text-gray-600">Discover courses across various domains and start learning.</p>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all">
            View All <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border-2 border-gray-50 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/50 transition-all cursor-pointer group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${cat.color}`}>
                {/* Dynamic Icon Rendering */}
                {cat.name === 'Design' && <Star size={28} />}
                {cat.name === 'Coding' && <PlayCircle size={28} />}
                {cat.name === 'Marketing' && <Mail size={28} />}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.name}</h3>
              <p className="text-gray-500 text-sm mb-4">Over 1,200+ courses available in this category.</p>
              <div className="flex items-center gap-1 text-indigo-600 font-bold text-sm">
                Explore <ChevronRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseCard: React.FC<{ course: Course; onClick: () => void }> = ({ course, onClick }) => {
  return (
    <motion.div
      layoutId={`course-${course.id}`}
      onClick={onClick}
      className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-indigo-100/50 transition-all cursor-pointer group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 py-1 px-3 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-indigo-600">
          {course.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1 text-amber-400 mb-3">
          <Star size={16} fill="currentColor" />
          <span className="text-sm font-bold text-gray-900">{course.rating}</span>
          <span className="text-xs text-gray-400 font-medium">({course.reviews})</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 mb-6">by {course.instructor}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <span className="text-xl font-extrabold text-indigo-600">${course.price}</span>
          <div className="flex items-center gap-3 text-gray-400 text-xs font-medium">
            <div className="flex items-center gap-1">
              <Clock size={14} /> {course.duration.split(' ')[0]}
            </div>
            <div className="flex items-center gap-1">
              <PlayCircle size={14} /> {course.lessons}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CourseModal: React.FC<{ course: Course; onClose: () => void }> = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
      />
      <motion.div
        layoutId={`course-${course.id}`}
        className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 hover:bg-indigo-600 hover:text-white transition-all shadow-lg"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto h-full">
            <img
              src={course.thumbnail}
              alt={course.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
          </div>

          <div className="p-8 lg:p-12 overflow-y-auto max-h-[80vh] lg:max-h-none">
            <div className="flex items-center gap-3 mb-6">
              <span className="py-1 px-3 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full">
                {course.category}
              </span>
              <span className="py-1 px-3 bg-green-50 text-green-600 text-xs font-bold rounded-full">
                {course.level}
              </span>
            </div>

            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
              {course.title}
            </h2>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                <User size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{course.instructor}</p>
                <p className="text-xs text-gray-500">Industry Expert & Mentor</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {course.description}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="p-4 bg-gray-50 rounded-2xl text-center">
                <Clock size={20} className="mx-auto text-indigo-600 mb-2" />
                <p className="text-xs font-bold text-gray-900">{course.duration}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl text-center">
                <PlayCircle size={20} className="mx-auto text-indigo-600 mb-2" />
                <p className="text-xs font-bold text-gray-900">{course.lessons} Lessons</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl text-center">
                <Star size={20} className="mx-auto text-amber-400 mb-2" />
                <p className="text-xs font-bold text-gray-900">{course.rating} Rating</p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-6">
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Price</span>
                <span className="text-4xl font-black text-indigo-600">${course.price}</span>
              </div>
              <button className="flex-1 py-5 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const InstructorSpotlight = () => {
  return (
    <section className="py-24 bg-indigo-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/20 -skew-x-12 translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-indigo-500/30">
              <img
                src="https://picsum.photos/seed/instructor/800/800"
                alt="Instructor"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-900">4.9/5 Rating</span>
              </div>
              <p className="text-xs text-gray-500 font-medium">"The best mentor I've ever had in my career journey."</p>
            </div>
          </div>

          <div className="text-white">
            <span className="inline-block py-1 px-4 rounded-full bg-indigo-500 text-indigo-100 text-sm font-bold mb-6">
              Instructor Spotlight
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
              Learn from the <br /> Industry's Finest
            </h2>
            <p className="text-indigo-100 text-lg mb-10 leading-relaxed">
              Our instructors are more than just teachers. They are pioneers, leaders, and innovators who bring real-world experience directly to your screen.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-3xl font-black mb-1">500+</p>
                <p className="text-indigo-200 text-sm font-medium">Expert Mentors</p>
              </div>
              <div>
                <p className="text-3xl font-black mb-1">1M+</p>
                <p className="text-indigo-200 text-sm font-medium">Students Taught</p>
              </div>
            </div>
            <button className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-900/20">
              Meet All Instructors
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="resources">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about our platform and courses.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border-2 border-gray-50 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                <div className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-50 rounded-[3rem] p-8 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50" />

          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              Get the latest updates <br /> delivered to your inbox
            </h2>
            <p className="text-gray-600 mb-10">
              Join our newsletter and stay up to date with new courses, exclusive discounts, and learning tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white border-2 border-transparent rounded-2xl focus:outline-none focus:border-indigo-600 transition-all shadow-lg shadow-indigo-100/50"
                required
              />
              <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                Subscribe
              </button>
            </form>
            <p className="mt-6 text-xs text-gray-400">
              We care about your data. Read our <a href="#" className="underline hover:text-indigo-600">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                <BookOpen size={18} />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">EduFlow</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Empowering learners worldwide with expert-led courses and a community of passionate mentors.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-8">Platform</h4>
            <ul className="space-y-4">
              {['Browse Courses', 'Mentors', 'Pricing', 'Resources', 'Mobile App'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-8">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Blog', 'Contact', 'Partners'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-8">Support</h4>
            <ul className="space-y-4">
              {['Help Center', 'Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Sitemap'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2024 EduFlow Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <select className="text-sm text-gray-500 bg-transparent border-none focus:ring-0 cursor-pointer">
              <option>English (US)</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-indigo-100 selection:text-indigo-600">
      <Navbar />

      <main>
        <Hero />
        <Categories />

        <section className="py-20" id="courses">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
                <p className="text-gray-600">Handpicked courses to help you reach your goals faster.</p>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {['All', 'Design', 'Coding', 'Marketing'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                      tab === 'All' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-white text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {COURSES.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onClick={() => setSelectedCourse(course)}
                />
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="px-10 py-4 border-2 border-gray-200 text-gray-900 font-bold rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all">
                Explore All Courses
              </button>
            </div>
          </div>
        </section>

        <InstructorSpotlight />
        <FAQ />
        <Newsletter />
      </main>

      <Footer />

      <AnimatePresence>
        {selectedCourse && (
          <CourseModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
