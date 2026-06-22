/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  instructor: string;
  instructorTitle: string;
  instructorImage: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  duration: string;
  lectures: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  image: string;
  syllabus: string[];
  trending?: boolean;
  enrolledStudents?: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isDigital: boolean;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  rating: number;
  reviewCount: number;
  coursesCount: number;
  studentsCount: number;
  image: string;
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    whatsapp?: string;
    youtube?: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
}
