import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }});
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const posts = [
  {
    date: 'March 15, 2026',
    category: 'Artificial Intelligence',
    title: 'The Rise of Generative AI in Business',
    desc: 'Exploring how AI is transforming workflow automation in 2026, from LLM-powered agents to autonomous decision systems.',
    readTime: '5 min read',
  },
  {
    date: 'March 10, 2026',
    category: 'Cloud',
    title: 'Scaling Cloud Infrastructure for 2026',
    desc: 'Best practices for microservices and serverless architectures when handling millions of requests at enterprise scale.',
    readTime: '7 min read',
  },
  {
    date: 'March 5, 2026',
    category: 'Web Development',
    title: 'React 19: What\'s New and Why It Matters',
    desc: 'A deep dive into the most impactful features of React 19 including Actions, the new compiler, and asset loading.',
    readTime: '6 min read',
  },
  {
    date: 'February 28, 2026',
    category: 'Cybersecurity',
    title: 'Zero Trust Architecture in 2026',
    desc: 'Why traditional perimeter security is dead and how to implement a robust zero-trust model for modern enterprises.',
    readTime: '8 min read',
  },
  {
    date: 'February 20, 2026',
    category: 'Mobile',
    title: 'Flutter vs React Native in 2026',
    desc: 'An honest, data-driven comparison of the two leading cross-platform frameworks after major updates from both teams.',
    readTime: '9 min read',
  },
  {
    date: 'February 15, 2026',
    category: 'DevOps',
    title: 'The Future of CI/CD with AI-Driven Pipelines',
    desc: 'How AI is automating test generation, deployment decisions, and incident recovery inside modern CI/CD workflows.',
    readTime: '6 min read',
  },
];

const categoryColors = {
  'Artificial Intelligence': 'var(--accent-purple)',
  'Cloud': 'var(--accent-cyan)',
  'Web Development': '#0096ff',
  'Cybersecurity': '#ffa500',
  'Mobile': '#ff00ff',
  'DevOps': '#00c864',
};

export default function Blog() {
  useReveal();

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="container">
          <span className="sub-heading">Insights</span>
          <h1>Latest <span className="gradient-text">Tech Trends</span></h1>
          <p>Stay ahead of the curve with expert insights, tutorials, and industry analysis from our engineering team.</p>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="blog-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {posts.map((post, i) => (
              <article className="blog-card glass-card reveal" key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div className="blog-date" style={{ marginBottom: 0 }}>{post.date}</div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{post.readTime}</span>
                </div>
                <span style={{
                  display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px',
                  borderRadius: '50px', marginBottom: '1rem', letterSpacing: '0.5px',
                  background: `${categoryColors[post.category]}20`,
                  color: categoryColors[post.category],
                  border: `1px solid ${categoryColors[post.category]}40`,
                }}>
                  {post.category}
                </span>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.8rem' }}>{post.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{post.desc}</p>
                <a href="#" className="read-more">Read More →</a>
              </article>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
