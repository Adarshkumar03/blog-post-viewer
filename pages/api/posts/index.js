const posts = [
  {
    id: 1,
    title: "10 Tips to Improve Your JavaScript Skills",
    author: "Adarsh Kumar",
    content:
      "In this post, we'll go over 10 practical tips to take your JavaScript to the next level. From understanding closures and scopes to mastering async/await, each tip is backed by real-world use cases. You'll learn how to write cleaner, more performant code, avoid common pitfalls, and embrace ES6+ features. We'll also touch on tooling, such as using linters and formatters, and improving your debugging workflow. Whether you're a beginner or an intermediate dev, these tips will elevate your JS game.",
    tags: ["JavaScript", "Programming", "Web Development"],
    published_at: "2025-07-02T14:30:00Z"
  },
  {
    id: 2,
    title: "Understanding React Hooks: useState and useEffect",
    author: "Jane Doe",
    content:
      "React Hooks are a powerful feature introduced in React 16.8. In this article, we’ll dive deep into `useState` and `useEffect`, two of the most commonly used hooks. You'll learn how to manage state and handle side effects like API calls or timers inside functional components. We'll cover useEffect dependencies, cleanup functions, and common mistakes to avoid. Code examples and real-world scenarios are included to solidify your understanding.",
    tags: ["React", "Frontend", "JavaScript"],
    published_at: "2025-06-28T10:00:00Z"
  },
  {
    id: 3,
    title: "Getting Started with FastAPI for Backend Development",
    author: "John Smith",
    content:
      "FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.6+ based on standard Python type hints. This guide walks you through setting up your first FastAPI project, including route creation, data validation with Pydantic, and interactive Swagger docs. You'll also learn how to structure a scalable project, connect to a database, and add authentication. FastAPI is ideal for building quick and efficient backend services with minimal code.",
    tags: ["Python", "FastAPI", "Backend"],
    published_at: "2025-07-01T08:45:00Z"
  },
  {
    id: 4,
    title: "How to Deploy a Full-Stack App on Vercel and Railway",
    author: "Adarsh Kumar",
    content:
      "Deployment can seem daunting at first, but this guide will walk you through deploying both frontend and backend applications with ease. We'll use Vercel for deploying the frontend (e.g., Next.js or React) and Railway for deploying a Node.js/Express backend. Topics include environment variables, custom domains, CI/CD workflows, and troubleshooting common issues. By the end, you'll have a live, full-stack app accessible from anywhere.",
    tags: ["Deployment", "Vercel", "Railway", "Full-Stack"],
    published_at: "2025-06-20T16:20:00Z"
  },
  {
    id: 5,
    title: "Mastering Git: Workflow Strategies for Team Projects",
    author: "Emily Zhang",
    content:
      "Learn how to structure your Git workflow in teams, from feature branches to pull requests. We'll cover Git Flow, trunk-based development, rebasing vs merging, and handling conflicts. You'll also understand how to use GitHub effectively for collaboration with reviews, tags, issues, and project boards. Whether you're new to Git or need to refine your workflow, this guide will help you work smoothly in a collaborative environment.",
    tags: ["Git", "Version Control", "Team Collaboration"],
    published_at: "2025-06-15T12:10:00Z"
  },
  {
    id: 6,
    title: "Building a REST API with Node.js and Express",
    author: "Robert Lee",
    content:
      "This step-by-step guide walks you through setting up a REST API using Express and Node.js. We'll cover route handling, request/response lifecycle, middleware, error handling, and RESTful design principles. You'll also see how to connect with MongoDB, validate data, and secure your API with JWT. Ideal for beginners and intermediate developers looking to build scalable backend services using JavaScript.",
    tags: ["Node.js", "Express", "API"],
    published_at: "2025-06-18T09:00:00Z"
  },
  {
    id: 7,
    title: "CSS Grid vs Flexbox: When to Use What?",
    author: "Maya Patel",
    content:
      "Both CSS Grid and Flexbox are layout tools, but they serve different purposes. Flexbox is great for one-dimensional layouts (row OR column), while Grid excels at two-dimensional layouts. This article compares them side-by-side with code examples and use cases. You'll learn best practices for using each, when to combine them, and how to make responsive layouts that work across devices. Bonus: learn about CSS subgrid, gap, auto-fit, and more.",
    tags: ["CSS", "Grid", "Flexbox", "Frontend"],
    published_at: "2025-06-22T14:50:00Z"
  },
  {
    id: 8,
    title: "Database Design Principles for Scalable Applications",
    author: "Adarsh Kumar",
    content:
      "A good database design is critical for long-term scalability. In this post, we explore normalization, indexing, data modeling, and relationships in both SQL and NoSQL contexts. You'll learn the pros and cons of denormalization, how to use foreign keys effectively, and tips for choosing the right data types. We'll also touch on performance optimization techniques like partitioning and caching, helping you build reliable and efficient database-backed apps.",
    tags: ["Database", "Design", "Scalability", "Backend"],
    published_at: "2025-07-03T07:30:00Z"
  }
];

export default function handler(req, res) {
  res.status(200).json({posts});
}
