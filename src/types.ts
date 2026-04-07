export interface Course {
  id: string;
  title: string;
  instructor: string;
  price: number;
  rating: number;
  reviews: number;
  category: 'Design' | 'Coding' | 'Marketing';
  thumbnail: string;
  description: string;
  duration: string;
  lessons: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}
