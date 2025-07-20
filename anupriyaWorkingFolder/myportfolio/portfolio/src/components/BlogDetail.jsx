import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const blogData = [
  {
    id: '3',
    title: 'Why React is My Go-To Framework',
    content: `# Why React is My Go-To Framework

In the ever-evolving world of web development, choosing the right tool...

## 1. Component-Based Architecture
dxgfxdzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzgnchbn
vgvjgcccccccccccccccccccccccccccccccjhhhhhhhhhhhhhhhhhhjhnvvvvvvvvb
React introduced (and popularized) the component-based architecture...

## Final Thoughts

React gives me the balance I need...
    `,
  },
  // Add more blogs with different `id`s if needed
];

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const found = blogData.find(b => b.id === id);
    setBlog(found);
  }, [id]);

  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <ReactMarkdown>{blog.content}</ReactMarkdown>
    </div>
  );
};

export default BlogDetail;
