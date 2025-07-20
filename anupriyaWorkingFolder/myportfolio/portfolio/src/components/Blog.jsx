import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: 'Reusable Component Patterns in React: Buttons, Cards & Layouts',
      date: '12 Feb 2020',
      category: 'Design, Pattern',
      short: 'One of the most powerful aspects of React is its component-driven architecture. Once you understand how to break UI down into reusable parts, your development speed, code quality, and sanity all improve dramatically.',
      full: 'One of the most powerful aspects of React is its component-driven architecture. Once you understand how to break UI down into reusable parts, your development speed, code quality, and sanity all improve dramatically.'
    },
    {
      id: 2,
      title: 'Creating pixel perfect icons in Figma',
      date: '12 Feb 2020',
      category: 'Figma, Icon Design',
      short: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      full: 'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },

    {
      id: 3,
      title: 'Why React is My Go-To Framework',
      date: '18 Mar 2024',
      category: 'React, Frontend',
      short: 'In the ever-evolving world of web development, choosing the right tool for the job is half the battle.',
      full: 'In the ever-evolving world of web development, choosing the right tool for the job is half the battle. ...'
    },
    {
      id: 4,
      title: 'Tips for Clean Code in JavaScript',
      date: '22 Apr 2024',
      category: 'JavaScript, Clean Code',
      short: 'Writing clean code helps maintainability and reduces bugs.',
      full: 'I use descriptive naming, avoid nested logic, modularize code, and follow style guides.'
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>Recent posts</h2>
      </div>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h3>{blog.title}</h3>
            <p className="meta">
              {blog.date} <span className="divider">|</span> {blog.category}
            </p>
            <p className="description">{blog.short}</p>
            <Link to={`/blog/${blog.id}`}>
              <button className="view-button">View</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
