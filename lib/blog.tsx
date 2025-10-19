export interface BlogPost {
  slug: string
  metadata: {
    title: string
    publishedAt: string
    summary?: string
    image?: string
  }
  content: string
}

export function getBlogPosts(): BlogPost[] {
  return [
    {
      slug: "building-better-interfaces",
      metadata: {
        title: "Building Better Interfaces",
        publishedAt: "Jan 15, 2025",
        summary: "Thoughts on creating user interfaces that are both beautiful and functional.",
        image: "/modern-minimalist-user-interface-design-with-clean.jpg",
      },
      content: `
        <p>Creating great user interfaces is about finding the balance between aesthetics and functionality. Over the years, I've learned that the best interfaces are often the simplest ones—they get out of the way and let users accomplish their goals effortlessly.</p>
        
        <h2>Start with Content</h2>
        <p>Before thinking about colors, layouts, or animations, start with the content. What are you trying to communicate? What actions do users need to take? Once you have clarity on the content, the design decisions become much easier.</p>
        
        <p>I always begin by asking these questions:</p>
        <ul>
          <li>What is the primary goal of this interface?</li>
          <li>What information does the user need to make a decision?</li>
          <li>What's the most important action they should take?</li>
          <li>What can we remove without losing functionality?</li>
        </ul>
        
        <h2>Embrace Constraints</h2>
        <p>Constraints are not limitations—they're opportunities for creativity. A limited color palette forces you to be more intentional. A small screen size makes you prioritize what's truly important.</p>
        
        <p>Here's a simple example of how constraints can improve your design:</p>
        <pre><code>// Instead of using 20 different colors
const colors = {
  primary: '#0070f3',
  secondary: '#7928ca',
  success: '#0070f3',
  // ... 17 more colors
}

// Use a focused palette
const colors = {
  primary: '#0070f3',
  foreground: '#000000',
  background: '#ffffff',
  muted: '#666666',
}</code></pre>
        
        <h2>Iterate Constantly</h2>
        <p>The first version is never the final version. Build, test, learn, and iterate. Every iteration brings you closer to something great. I've found that shipping early and often leads to better products than trying to perfect everything before launch.</p>
        
        <p>My typical workflow looks like this:</p>
        <ol>
          <li>Build a minimal version that solves the core problem</li>
          <li>Ship it to a small group of users</li>
          <li>Gather feedback and observe how they use it</li>
          <li>Identify the biggest pain points</li>
          <li>Iterate and repeat</li>
        </ol>
        
        <blockquote>
          <p>"Good design is invisible. When users can accomplish their goals without thinking about the interface, you've succeeded."</p>
        </blockquote>
        
        <h2>The Details Matter</h2>
        <p>While simplicity is key, the small details make the difference between a good interface and a great one. Thoughtful micro-interactions, consistent spacing, and careful typography all contribute to the overall experience.</p>
        
        <p>Pay attention to:</p>
        <ul>
          <li><strong>Loading states</strong> — Never leave users wondering if something is happening</li>
          <li><strong>Error messages</strong> — Be helpful, not technical</li>
          <li><strong>Empty states</strong> — Guide users on what to do next</li>
          <li><strong>Transitions</strong> — Smooth animations help users understand state changes</li>
        </ul>
        
        <p>Remember: good design is invisible. When users can accomplish their goals without thinking about the interface, you've succeeded.</p>
      `,
    },
    {
      slug: "the-power-of-simplicity",
      metadata: {
        title: "The Power of Simplicity",
        publishedAt: "Dec 28, 2024",
        summary: "Why simple solutions are often the best solutions in software development.",
        image: "/minimalist-zen-garden-representing-simplicity-in-d.jpg",
      },
      content: `
        <p>In software development, there's a constant temptation to over-engineer. We want to build systems that can handle every possible edge case, scale to millions of users, and use the latest technologies. But often, the simplest solution is the best solution.</p>
        
        <h2>Simple Doesn't Mean Easy</h2>
        <p>Simplicity is hard work. It requires deep understanding of the problem and the discipline to say no to unnecessary complexity. It's much easier to add features than to remove them.</p>
        
        <p>Consider this example. Here's a complex approach to handling user authentication:</p>
        <pre><code>class AuthenticationManager {
  private strategies: Map<string, AuthStrategy>
  private middleware: AuthMiddleware[]
  private cache: CacheLayer
  
  async authenticate(user: User, options: AuthOptions) {
    const strategy = this.selectStrategy(options)
    const result = await this.executeMiddleware(user)
    return this.cache.memoize(() => strategy.verify(user))
  }
}</code></pre>
        
        <p>And here's a simpler approach that solves the same problem:</p>
        <pre><code>async function authenticate(email: string, password: string) {
  const user = await db.user.findUnique({ where: { email } })
  if (!user) return null
  
  const valid = await bcrypt.compare(password, user.passwordHash)
  return valid ? user : null
}</code></pre>
        
        <h2>Start Small</h2>
        <p>Build the smallest thing that could possibly work. Ship it. Learn from real users. Then iterate. This approach has served me well throughout my career.</p>
        
        <p>When starting a new project, I follow these principles:</p>
        <ul>
          <li>Choose boring technology that you understand well</li>
          <li>Avoid premature optimization</li>
          <li>Don't build features you might need—build what you need now</li>
          <li>Measure before you scale</li>
        </ul>
        
        <blockquote>
          <p>"Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." — Antoine de Saint-Exupéry</p>
        </blockquote>
        
        <h2>Complexity Compounds</h2>
        <p>Every line of code you write is a liability. It needs to be maintained, tested, and understood by future developers. Choose simplicity whenever possible.</p>
        
        <p>I've seen projects grind to a halt because of accumulated complexity. Technical debt isn't just about bad code—it's about unnecessary code. The best code is code you don't have to write.</p>
        
        <h2>Know When to Add Complexity</h2>
        <p>This isn't to say you should never add complexity. Sometimes it's necessary. But it should be a conscious decision based on real needs, not hypothetical ones.</p>
        
        <p>Add complexity when:</p>
        <ol>
          <li>You have concrete evidence that the simple solution won't work</li>
          <li>The cost of the simple solution is higher than the complex one</li>
          <li>You're solving a problem you've already encountered, not one you imagine</li>
        </ol>
        
        <p>Start simple. Stay simple. Add complexity only when you must.</p>
      `,
    },
    {
      slug: "learning-in-public",
      metadata: {
        title: "Learning in Public",
        publishedAt: "Nov 10, 2024",
        summary: "How sharing your learning journey can accelerate your growth as a developer.",
        image: "/person-sharing-knowledge-with-community-collaborat.jpg",
      },
      content: `
        <p>One of the best decisions I made early in my career was to start learning in public. Writing about what I'm learning, sharing code, and engaging with the community has accelerated my growth in ways I never expected.</p>
        
        <h2>What Does Learning in Public Mean?</h2>
        <p>Learning in public means sharing your journey as you learn. It's about being vulnerable, admitting what you don't know, and documenting your progress along the way.</p>
        
        <p>This can take many forms:</p>
        <ul>
          <li>Writing blog posts about concepts you're learning</li>
          <li>Sharing code snippets and projects on GitHub</li>
          <li>Creating tutorials or video content</li>
          <li>Answering questions on forums and social media</li>
          <li>Speaking at meetups or conferences</li>
        </ul>
        
        <h2>Document Your Journey</h2>
        <p>Write tutorials, create demos, share your mistakes. Future you will thank you, and others will benefit from your experience.</p>
        
        <p>Here's a simple example. When I learned about React Server Components, I wrote a blog post explaining it in my own words:</p>
        <pre><code>// Before: Client Component fetching data
'use client'
import { useEffect, useState } from 'react'

export function Posts() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetch('/api/posts')
      .then(r => r.json())
      .then(setPosts)
  }, [])
  
  return <div>{/* render posts */}</div>
}

// After: Server Component with direct data access
import { db } from '@/lib/db'

export async function Posts() {
  const posts = await db.post.findMany()
  return <div>{/* render posts */}</div>
}</code></pre>
        
        <p>Writing this helped me understand the concept better, and dozens of people told me it helped them too.</p>
        
        <h2>Build a Network</h2>
        <p>When you share your work publicly, you attract like-minded people. These connections can lead to collaborations, job opportunities, and lifelong friendships.</p>
        
        <p>Some of my best professional relationships started with a simple blog post or open source contribution. The tech community is incredibly supportive of people who share their knowledge.</p>
        
        <h2>Overcome Imposter Syndrome</h2>
        <p>Everyone feels like an imposter sometimes. The cure? Share your work anyway. You'll be surprised how many people find value in what you have to say.</p>
        
        <blockquote>
          <p>"You don't need to be an expert to teach. You just need to be one step ahead of the person you're teaching."</p>
        </blockquote>
        
        <h2>How to Start</h2>
        <p>Starting is the hardest part. Here's my advice:</p>
        <ol>
          <li><strong>Start small</strong> — Write a short post about something you learned today</li>
          <li><strong>Be consistent</strong> — Set a schedule and stick to it (even if it's just once a month)</li>
          <li><strong>Don't aim for perfection</strong> — Published is better than perfect</li>
          <li><strong>Engage with others</strong> — Comment on other people's work, join discussions</li>
          <li><strong>Be patient</strong> — Building an audience takes time</li>
        </ol>
        
        <p>Start today. Write that blog post. Share that project. Your future self will thank you.</p>
      `,
    },
    {
      slug: "on-writing-code",
      metadata: {
        title: "On Writing Code",
        publishedAt: "Oct 5, 2024",
        summary: "Reflections on the craft of programming and what makes code truly great.",
        image: "/elegant-code-on-screen-programming-craftsmanship.jpg",
      },
      content: `
        <p>Writing code is a craft. Like any craft, it requires practice, patience, and a commitment to continuous improvement. After years of writing code professionally, I've learned that great code isn't just about making things work—it's about making things work well.</p>
        
        <h2>Code is Communication</h2>
        <p>Code is read far more often than it's written. Write for humans first, computers second. Use clear names, write comments when necessary, and structure your code in a way that tells a story.</p>
        
        <p>Compare these two approaches:</p>
        <pre><code>// Hard to understand
function p(u) {
  const d = new Date(u.c)
  return d.getTime() < Date.now() - 86400000
}

// Clear and communicative
function isPostOlderThanOneDay(post) {
  const postDate = new Date(post.createdAt)
  const oneDayInMs = 24 * 60 * 60 * 1000
  return postDate.getTime() < Date.now() - oneDayInMs
}</code></pre>
        
        <p>The second version takes a few more characters, but it's infinitely more maintainable.</p>
        
        <h2>Consistency Matters</h2>
        <p>Consistent code is easier to understand and maintain. Follow conventions, use linters, and establish patterns that your team can follow.</p>
        
        <p>In my projects, I always set up these tools:</p>
        <ul>
          <li><strong>ESLint</strong> — Catch errors and enforce code style</li>
          <li><strong>Prettier</strong> — Automatic code formatting</li>
          <li><strong>TypeScript</strong> — Type safety and better tooling</li>
          <li><strong>Husky</strong> — Git hooks to run checks before commits</li>
        </ul>
        
        <h2>Write Self-Documenting Code</h2>
        <p>The best documentation is code that explains itself. Use descriptive names, break complex logic into well-named functions, and structure your code logically.</p>
        
        <pre><code>// Instead of comments explaining what code does
// Get all active users who haven't logged in for 30 days
const users = await db.user.findMany({
  where: { 
    active: true, 
    lastLogin: { lt: new Date(Date.now() - 30 * 86400000) }
  }
})

// Write code that explains itself
const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000
const thirtyDaysAgo = new Date(Date.now() - THIRTY_DAYS_IN_MS)

const inactiveUsers = await db.user.findMany({
  where: { 
    active: true, 
    lastLogin: { lt: thirtyDaysAgo }
  }
})</code></pre>
        
        <h2>Test Your Assumptions</h2>
        <p>Write tests. Not because you have to, but because you care about your craft. Tests give you confidence to refactor and improve your code.</p>
        
        <p>I follow a simple testing philosophy:</p>
        <ol>
          <li>Test behavior, not implementation</li>
          <li>Write tests that would fail if the feature breaks</li>
          <li>Keep tests simple and readable</li>
          <li>Don't aim for 100% coverage—aim for confidence</li>
        </ol>
        
        <h2>Refactor Ruthlessly</h2>
        <p>Good code is rewritten code. Don't be afraid to refactor when you see a better way. The best time to refactor is when you're already in the code making changes.</p>
        
        <blockquote>
          <p>"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler</p>
        </blockquote>
        
        <h2>Never Stop Learning</h2>
        <p>The best developers I know are perpetual students. They're curious, humble, and always looking for ways to improve their craft.</p>
        
        <p>Ways to keep learning:</p>
        <ul>
          <li>Read other people's code (especially open source projects)</li>
          <li>Pair program with developers better than you</li>
          <li>Write about what you learn</li>
          <li>Build side projects to experiment with new technologies</li>
          <li>Attend conferences and meetups</li>
        </ul>
        
        <p>Remember: writing great code is a journey, not a destination. Keep practicing, keep learning, and keep improving.</p>
      `,
    },
  ]
}
