import { Course, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'design', name: 'Design', icon: 'Palette', color: 'bg-pink-100 text-pink-600' },
  { id: 'coding', name: 'Coding', icon: 'Code', color: 'bg-blue-100 text-blue-600' },
  { id: 'marketing', name: 'Marketing', icon: 'Megaphone', color: 'bg-orange-100 text-orange-600' },
];

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Modern UI/UX Design Essentials',
    instructor: 'Sarah Jenkins',
    price: 49.99,
    rating: 4.8,
    reviews: 1240,
    category: 'Design',
    thumbnail: 'https://picsum.photos/seed/design1/600/400',
    description: 'Master the art of creating stunning user interfaces and seamless user experiences. This course covers everything from wireframing to high-fidelity prototyping.',
    duration: '12h 30m',
    lessons: 24,
    level: 'Beginner',
  },
  {
    id: '2',
    title: 'Full-Stack Web Development with React',
    instructor: 'David Chen',
    price: 89.99,
    rating: 4.9,
    reviews: 3500,
    category: 'Coding',
    thumbnail: 'https://picsum.photos/seed/coding1/600/400',
    description: 'Build powerful, scalable web applications from scratch. Learn React, Node.js, Express, and MongoDB in this comprehensive bootcamp.',
    duration: '45h 00m',
    lessons: 120,
    level: 'Intermediate',
  },
  {
    id: '3',
    title: 'Digital Marketing Masterclass 2024',
    instructor: 'Emma Rodriguez',
    price: 59.99,
    rating: 4.7,
    reviews: 890,
    category: 'Marketing',
    thumbnail: 'https://picsum.photos/seed/marketing1/600/400',
    description: 'Grow your business or career with the latest digital marketing strategies. Covers SEO, Social Media, Email Marketing, and Analytics.',
    duration: '18h 15m',
    lessons: 45,
    level: 'Beginner',
  },
  {
    id: '4',
    title: 'Advanced Python for Data Science',
    instructor: 'Dr. Michael Smith',
    price: 74.99,
    rating: 4.6,
    reviews: 2100,
    category: 'Coding',
    thumbnail: 'https://picsum.photos/seed/coding2/600/400',
    description: 'Take your Python skills to the next level. Focus on data analysis, visualization, and machine learning with NumPy, Pandas, and Scikit-Learn.',
    duration: '30h 45m',
    lessons: 68,
    level: 'Advanced',
  },
  {
    id: '5',
    title: 'Brand Identity & Logo Design',
    instructor: 'Jessica Lee',
    price: 39.99,
    rating: 4.9,
    reviews: 560,
    category: 'Design',
    thumbnail: 'https://picsum.photos/seed/design2/600/400',
    description: 'Learn how to build memorable brands. From conceptualizing logos to creating full brand guidelines for clients.',
    duration: '10h 20m',
    lessons: 18,
    level: 'Intermediate',
  },
  {
    id: '6',
    title: 'Content Strategy for Social Media',
    instructor: 'Alex Turner',
    price: 29.99,
    rating: 4.5,
    reviews: 420,
    category: 'Marketing',
    thumbnail: 'https://picsum.photos/seed/marketing2/600/400',
    description: 'Create content that converts. Learn how to plan, produce, and distribute high-performing content across all major social platforms.',
    duration: '8h 50m',
    lessons: 15,
    level: 'Beginner',
  },
];

export const FAQS = [
  {
    question: "Are the courses self-paced?",
    answer: "Yes, all our courses are 100% self-paced. Once you enroll, you have lifetime access to the materials and can learn at your own speed."
  },
  {
    question: "Do I get a certificate upon completion?",
    answer: "Absolutely! Every course includes a verified certificate of completion that you can share on LinkedIn or with potential employers."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied with the course for any reason, we'll provide a full refund, no questions asked."
  },
  {
    question: "Can I access courses on mobile?",
    answer: "Yes, our platform is fully responsive and we also have dedicated iOS and Android apps for learning on the go."
  }
];
