import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, User, ArrowLeft, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import SEO from '../components/SEO';

const Blog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      slug: 'celebrating-diversity-american-art',
      title: 'Celebrating Diversity in American Art',
      excerpt: 'Explore how gallerytwentythree showcases the vibrant tapestry of artistic voices from all 50 states, from urban muralists to rural painters.',
      content: `
        <div class="space-y-6">
          <img src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&h=600&fit=crop" alt="Diverse American Art" class="w-full rounded-2xl shadow-neu-lg" />

          <p class="text-lg text-gray-300 leading-relaxed">
            American art is as diverse as the nation itself. From the bustling streets of New York to the serene landscapes of Montana, artists across all 50 states bring unique perspectives shaped by their environments, cultures, and experiences.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">A Platform for Every Voice</h2>
          <p class="text-gray-300 leading-relaxed">
            At gallerytwentythree, we believe that every artist deserves a platform to share their vision. Our mission is to break down geographical and cultural barriers, creating a digital space where urban muralists collaborate with rural painters, where established masters inspire emerging talents, and where collectors discover treasures from every corner of America.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">From Coast to Coast</h2>
          <p class="text-gray-300 leading-relaxed">
            We've built a community that spans from the Pacific to the Atlantic, from the Arctic to the Gulf. Each region brings its own artistic traditions, contemporary movements, and fresh perspectives. Whether it's the vibrant street art of Los Angeles, the abstract expressionism of New York, the folk art traditions of Appalachia, or the Native American artistry of the Southwest, we celebrate it all.
          </p>

          <div class="bg-primary-dark/50 border border-primary-cyan/20 rounded-2xl p-6 my-8">
            <h3 class="text-2xl font-bold text-primary-teal mb-3">Our Commitment</h3>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-start">
                <span class="text-primary-cyan mr-2">•</span>
                <span>Showcase artists from all 50 states without bias or preference</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-cyan mr-2">•</span>
                <span>Provide equal opportunities for emerging and established artists</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-cyan mr-2">•</span>
                <span>Foster cross-cultural dialogue and artistic collaboration</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-cyan mr-2">•</span>
                <span>Empower artists with professional tools and resources</span>
              </li>
            </ul>
          </div>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">Join the Movement</h2>
          <p class="text-gray-300 leading-relaxed">
            Whether you're an artist looking to share your work, a collector seeking unique pieces, or an art enthusiast wanting to explore American creativity, gallerytwentythree welcomes you. Together, we're building a more inclusive, vibrant, and connected art community.
          </p>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=500&fit=crop',
      author: 'Gallery Team',
      date: '2024-01-15',
      category: 'Community',
      readTime: '5 min read'
    },
    {
      id: 2,
      slug: 'artist-spotlight-khalaf-leaf-jerry',
      title: 'Artist Spotlight: Khalaf "Leaf" Jerry - The Visionary Behind gallerytwentythree',
      excerpt: 'Meet the founder and creative force driving our mission to celebrate and empower American artists from all backgrounds.',
      content: `
        <div class="space-y-6">
          <img src="/images/art23-logo.jpg" alt="Khalaf Leaf Jerry" class="w-full max-w-2xl mx-auto rounded-2xl shadow-neu-lg" />

          <p class="text-lg text-gray-300 leading-relaxed">
            Behind every great platform is a visionary who dares to dream big. For gallerytwentythree, that visionary is Khalaf "Leaf" Jerry—a passionate advocate for American creativity who saw the need for a truly inclusive digital art community.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">The Vision</h2>
          <p class="text-gray-300 leading-relaxed">
            Leaf's vision was clear: create a platform where every American artist, regardless of their location, background, or level of recognition, could find support, community, and the resources to flourish. He recognized that while talent exists in every corner of the country, opportunities were often concentrated in major art hubs, leaving countless gifted artists without the exposure they deserved.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">Building a Movement</h2>
          <p class="text-gray-300 leading-relaxed">
            What started as an idea has grown into a thriving ecosystem. Under Leaf's leadership, gallerytwentythree has expanded to serve artists from all 50 states, offering not just gallery space but a comprehensive suite of professional tools—video interviews, blogging platforms, social media integration, and soon, full-service art logistics including storage, moving, and worldwide shipping.
          </p>

          <div class="grid md:grid-cols-2 gap-6 my-8">
            <div class="neu-card p-6">
              <h3 class="text-xl font-bold text-primary-teal mb-3">Philosophy</h3>
              <p class="text-gray-300">
                "Art should not be limited by geography or circumstance. Every creative voice deserves to be heard, celebrated, and supported."
              </p>
            </div>
            <div class="neu-card p-6">
              <h3 class="text-xl font-bold text-primary-teal mb-3">Mission</h3>
              <p class="text-gray-300">
                "To build a transformative platform where artists find not just an audience, but a home—a place where they can grow, connect, and thrive."
              </p>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">The Road Ahead</h2>
          <p class="text-gray-300 leading-relaxed">
            Leaf's commitment to the artistic community continues to drive innovation at gallerytwentythree. With upcoming features like comprehensive art logistics services and enhanced collaboration tools, the platform is evolving to meet the real-world needs of working artists.
          </p>

          <p class="text-gray-300 leading-relaxed">
            His unwavering belief in the power of community and the importance of supporting artists at every stage of their journey makes gallerytwentythree more than just a platform—it's a movement for change in the American art world.
          </p>
        </div>
      `,
      image: '/images/art23-logo.jpg',
      author: 'Gallery Team',
      date: '2024-01-20',
      category: 'Artist Spotlight',
      readTime: '6 min read'
    },
    {
      id: 3,
      slug: 'art-collecting-guide-beginners',
      title: 'The Art Collector\'s Guide: Starting Your Collection with Confidence',
      excerpt: 'Whether you\'re buying your first piece or expanding your collection, learn how to make informed decisions and discover works that speak to you.',
      content: `
        <div class="space-y-6">
          <img src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1200&h=600&fit=crop" alt="Art Collection" class="w-full rounded-2xl shadow-neu-lg" />

          <p class="text-lg text-gray-300 leading-relaxed">
            Starting an art collection can feel overwhelming, but it doesn't have to be. Whether you're drawn to contemporary abstracts or traditional landscapes, the journey of building a collection should be exciting, personal, and rewarding.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">1. Buy What You Love</h2>
          <p class="text-gray-300 leading-relaxed">
            The golden rule of art collecting: purchase pieces that genuinely move you. Don't buy art purely as an investment or because someone told you to. Your collection should reflect your taste, your passions, and your story. If a piece speaks to you, that connection is more valuable than any price tag.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">2. Start with Your Budget</h2>
          <p class="text-gray-300 leading-relaxed">
            Great art exists at every price point. Set a realistic budget and explore what's available within your range. Remember, emerging artists often offer incredible work at accessible prices, and supporting them early in their careers can be especially rewarding.
          </p>

          <div class="bg-primary-dark/50 border border-primary-cyan/20 rounded-2xl p-6 my-8">
            <h3 class="text-2xl font-bold text-primary-teal mb-3">Budget Considerations</h3>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-start">
                <span class="text-primary-cyan mr-2">•</span>
                <span><strong>Entry Level ($100-$500):</strong> Prints, small originals, emerging artists</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-cyan mr-2">•</span>
                <span><strong>Intermediate ($500-$5,000):</strong> Larger originals, mid-career artists, limited editions</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-cyan mr-2">•</span>
                <span><strong>Advanced ($5,000+):</strong> Established artists, investment pieces, gallery exhibitions</span>
              </li>
            </ul>
          </div>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">3. Research the Artist</h2>
          <p class="text-gray-300 leading-relaxed">
            Get to know the artists behind the work. Read their statements, watch video interviews (like those available on gallerytwentythree), understand their process and vision. This context enriches your appreciation and creates a deeper connection to the piece.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">4. Consider the Space</h2>
          <p class="text-gray-300 leading-relaxed">
            Think about where the artwork will live. Measure your walls, consider lighting, and envision how the piece will interact with your existing decor. Some collectors take photos of their spaces to compare options before purchasing.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">5. Ask Questions</h2>
          <p class="text-gray-300 leading-relaxed">
            Don't be shy about reaching out to galleries or artists. Ask about materials, techniques, care instructions, and provenance. Reputable sellers welcome questions and want you to feel confident in your purchase.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">6. Protect Your Investment</h2>
          <p class="text-gray-300 leading-relaxed">
            Once you've acquired a piece, take care of it properly. Keep artwork away from direct sunlight, maintain stable humidity, and consider professional framing for works on paper. Document your collection with photos and keep all certificates of authenticity and receipts.
          </p>

          <div class="neu-card p-6 my-8">
            <h3 class="text-2xl font-bold text-primary-teal mb-4">Quick Tips for New Collectors</h3>
            <div class="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <p class="font-semibold text-primary-cyan mb-2">✓ DO:</p>
                <ul class="space-y-1 text-sm">
                  <li>• Trust your instincts</li>
                  <li>• Visit galleries and exhibitions</li>
                  <li>• Build relationships with artists</li>
                  <li>• Document your collection</li>
                  <li>• Consider diverse artists</li>
                </ul>
              </div>
              <div>
                <p class="font-semibold text-primary-tan mb-2">✗ DON'T:</p>
                <ul class="space-y-1 text-sm">
                  <li>• Buy solely for investment</li>
                  <li>• Rush your decisions</li>
                  <li>• Ignore condition issues</li>
                  <li>• Overspend your budget</li>
                  <li>• Skip authentication</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">Start Your Journey Today</h2>
          <p class="text-gray-300 leading-relaxed">
            The beauty of collecting art is that there's no single "right way" to do it. Your collection is as unique as you are. Explore galleries, attend exhibitions, browse online platforms like gallerytwentythree, and most importantly—enjoy the journey of discovery.
          </p>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&h=500&fit=crop',
      author: 'Sarah Mitchell',
      date: '2024-01-25',
      category: 'Collecting Tips',
      readTime: '8 min read'
    },
    {
      id: 4,
      slug: 'digital-tools-empowering-artists',
      title: 'Digital Tools Empowering Today\'s Artists: Beyond the Canvas',
      excerpt: 'Discover how modern platforms and technology are transforming the way artists share their work, connect with audiences, and build sustainable careers.',
      content: `
        <div class="space-y-6">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop" alt="Digital Art Tools" class="w-full rounded-2xl shadow-neu-lg" />

          <p class="text-lg text-gray-300 leading-relaxed">
            The digital revolution has fundamentally changed how artists create, share, and monetize their work. Today's artists have access to tools and platforms that previous generations could only dream of—and gallerytwentythree is at the forefront of this transformation.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">Video Storytelling: Bringing Your Art to Life</h2>
          <p class="text-gray-300 leading-relaxed">
            Static images can only tell part of your story. Video interviews and studio tours give collectors and fans an intimate look at your creative process, inspirations, and personality. At gallerytwentythree, artists can showcase video content alongside their work, creating deeper connections with their audience.
          </p>

          <div class="neu-card p-6 my-8">
            <h3 class="text-xl font-bold text-primary-teal mb-3">Video Content Ideas:</h3>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li class="flex items-start">
                <span class="text-primary-cyan mr-2">•</span>
                <span>Time-lapse creation process videos</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-cyan mr-2">•</span>
                <span>Studio tours and workspace organization</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-cyan mr-2">•</span>
                <span>Technique demonstrations and tutorials</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-cyan mr-2">•</span>
                <span>Artist interviews and Q&A sessions</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-cyan mr-2">•</span>
                <span>Behind-the-scenes exhibition prep</span>
              </li>
            </ul>
          </div>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">Blogging: Your Voice, Your Brand</h2>
          <p class="text-gray-300 leading-relaxed">
            A blog is more than just a marketing tool—it's your platform to share insights, build thought leadership, and connect with your community on a deeper level. Whether you're discussing your inspiration, sharing art history perspectives, or documenting your creative journey, blogging helps establish your unique voice in the art world.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">Social Media Integration: Amplify Your Reach</h2>
          <p class="text-gray-300 leading-relaxed">
            Strategic social media presence can dramatically expand your audience. Platforms like Instagram, Pinterest, and TikTok have become essential tools for artists to showcase work, engage followers, and attract collectors. gallerytwentythree's integrated social sharing makes it easy to cross-promote your work across all channels.
          </p>

          <div class="grid md:grid-cols-3 gap-6 my-8">
            <div class="glass-card p-6">
              <h3 class="text-lg font-bold text-primary-cyan mb-2">Instagram</h3>
              <p class="text-sm text-gray-300">Visual storytelling, behind-the-scenes content, collector engagement</p>
            </div>
            <div class="glass-card p-6">
              <h3 class="text-lg font-bold text-primary-teal mb-2">Pinterest</h3>
              <p class="text-sm text-gray-300">Discovery engine, portfolio showcase, driving website traffic</p>
            </div>
            <div class="glass-card p-6">
              <h3 class="text-lg font-bold text-primary-sage mb-2">TikTok</h3>
              <p class="text-sm text-gray-300">Process videos, tutorials, reaching younger audiences</p>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">E-commerce Tools: Sell Directly to Collectors</h2>
          <p class="text-gray-300 leading-relaxed">
            Gone are the days when artists needed gallery representation to reach buyers. Modern platforms enable direct sales, giving artists greater control over pricing, inventory, and customer relationships. With integrated payment processing, shipping logistics, and inventory management, running an art business has never been more accessible.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">Upcoming: Full-Service Art Logistics</h2>
          <p class="text-gray-300 leading-relaxed">
            Soon, gallerytwentythree will offer comprehensive art logistics services—secure storage, professional moving services, and worldwide shipping solutions. Imagine creating a piece in your studio and seamlessly managing its journey from storage to collector, all through one platform.
          </p>

          <div class="bg-gradient-to-r from-primary-cyan/10 to-primary-teal/10 border border-primary-cyan/20 rounded-2xl p-6 my-8">
            <h3 class="text-2xl font-bold text-primary-cyan mb-4">The Future is Integrated</h3>
            <p class="text-gray-300 leading-relaxed">
              The most successful artists of tomorrow won't just be great creators—they'll be savvy digital entrepreneurs who leverage technology to amplify their reach, streamline their operations, and build sustainable careers. The tools are here. The platform is ready. The only question is: are you ready to embrace the future?
            </p>
          </div>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">Getting Started</h2>
          <p class="text-gray-300 leading-relaxed">
            If you're an artist looking to harness these digital tools, start by creating a comprehensive profile on gallerytwentythree. Upload high-quality images of your work, write an engaging artist statement, and begin exploring the video and blogging features. The community is here to support you every step of the way.
          </p>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
      author: 'Michael Torres',
      date: '2024-02-01',
      category: 'Resources',
      readTime: '7 min read'
    },
    {
      id: 5,
      slug: 'mastering-composition-visual-balance',
      title: 'Mastering Composition: The Art of Visual Balance',
      excerpt: 'Learn fundamental composition techniques that will elevate your artwork and create more compelling visual narratives.',
      content: `
        <div class="space-y-6">
          <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=600&fit=crop" alt="Art Composition" class="w-full rounded-2xl shadow-neu-lg" />

          <p class="text-lg text-gray-300 leading-relaxed">
            Composition is the silent language of art—the invisible framework that guides the viewer's eye and creates emotional impact. Whether you're a beginner or seasoned artist, understanding composition principles can transform good artwork into extraordinary pieces.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">The Rule of Thirds</h2>
          <p class="text-gray-300 leading-relaxed">
            Perhaps the most famous compositional guideline, the rule of thirds divides your canvas into nine equal sections using two horizontal and two vertical lines. Placing key elements along these lines or at their intersections creates natural balance and visual interest.
          </p>

          <div class="neu-card p-6 my-8">
            <h3 class="text-xl font-bold text-primary-teal mb-3">When to Use It:</h3>
            <ul class="space-y-2 text-gray-300">
              <li>• Landscape paintings (horizon line on upper or lower third)</li>
              <li>• Portrait compositions (eyes on upper third line)</li>
              <li>• Still life arrangements (focal points at intersections)</li>
            </ul>
          </div>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">Leading Lines</h2>
          <p class="text-gray-300 leading-relaxed">
            Lines—whether literal or implied—guide the viewer's eye through your composition. Roads, rivers, architectural elements, or even the direction of a subject's gaze can create pathways that lead to your focal point.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">Symmetry and Asymmetry</h2>
          <p class="text-gray-300 leading-relaxed">
            Symmetrical compositions create a sense of order, stability, and formality—think religious art or classical portraits. Asymmetrical compositions feel more dynamic and modern, creating tension and movement that engages the viewer.
          </p>

          <div class="grid md:grid-cols-2 gap-6 my-8">
            <div class="glass-card p-6">
              <h3 class="text-xl font-bold text-primary-cyan mb-3">Symmetry</h3>
              <p class="text-sm text-gray-300 mb-3">Creates:</p>
              <ul class="space-y-1 text-sm text-gray-300">
                <li>• Formal, dignified feeling</li>
                <li>• Sense of balance and order</li>
                <li>• Meditative quality</li>
                <li>• Classical elegance</li>
              </ul>
            </div>
            <div class="glass-card p-6">
              <h3 class="text-xl font-bold text-primary-teal mb-3">Asymmetry</h3>
              <p class="text-sm text-gray-300 mb-3">Creates:</p>
              <ul class="space-y-1 text-sm text-gray-300">
                <li>• Dynamic energy</li>
                <li>• Visual tension</li>
                <li>• Modern aesthetic</li>
                <li>• Engaging movement</li>
              </ul>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">Negative Space</h2>
          <p class="text-gray-300 leading-relaxed">
            The empty areas around your subject are just as important as the subject itself. Negative space gives the eye room to rest, emphasizes your focal point, and can create intriguing shapes and patterns of its own.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">Depth and Layers</h2>
          <p class="text-gray-300 leading-relaxed">
            Creating the illusion of depth on a two-dimensional surface involves several techniques: overlapping objects, size variation (larger objects appear closer), atmospheric perspective (distant objects appear hazier), and strategic use of detail (more detail in foreground).
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">The Golden Ratio</h2>
          <p class="text-gray-300 leading-relaxed">
            Found throughout nature and used by artists for centuries, the golden ratio (approximately 1:1.618) creates compositions that feel naturally harmonious. The Fibonacci spiral based on this ratio can help place elements in aesthetically pleasing arrangements.
          </p>

          <div class="bg-primary-dark/50 border border-primary-cyan/20 rounded-2xl p-6 my-8">
            <h3 class="text-2xl font-bold text-primary-teal mb-4">Composition Exercise</h3>
            <p class="text-gray-300 mb-4">Try this exercise to improve your compositional skills:</p>
            <ol class="space-y-3 text-gray-300">
              <li class="flex items-start">
                <span class="text-primary-cyan mr-3 font-bold">1.</span>
                <span>Choose a simple subject (a cup, flower, or fruit)</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-cyan mr-3 font-bold">2.</span>
                <span>Create 6 quick sketches using different compositional approaches</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-cyan mr-3 font-bold">3.</span>
                <span>Vary placement, negative space, and viewing angle</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-cyan mr-3 font-bold">4.</span>
                <span>Compare results and note which feels most compelling</span>
              </li>
            </ol>
          </div>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">Breaking the Rules</h2>
          <p class="text-gray-300 leading-relaxed">
            Here's the secret: once you understand composition rules, you can break them intentionally for dramatic effect. Centered compositions can create powerful symmetry. Ignoring the rule of thirds can produce striking, unconventional work. The key is knowing why you're breaking the rule and what effect you're trying to achieve.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">Practice and Observation</h2>
          <p class="text-gray-300 leading-relaxed">
            Study masterworks and contemporary pieces on platforms like gallerytwentythree. Analyze what makes certain compositions compelling. Sketch compositional thumbnails before starting major pieces. Over time, strong composition becomes intuitive—but it starts with conscious practice and observation.
          </p>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=500&fit=crop',
      author: 'Elena Rodriguez',
      date: '2024-02-05',
      category: 'Techniques',
      readTime: '9 min read'
    },
    {
      id: 6,
      slug: 'building-sustainable-art-career',
      title: 'Building a Sustainable Art Career: Practical Strategies for Long-Term Success',
      excerpt: 'Transform your passion into a viable career with practical advice on pricing, marketing, and building a loyal collector base.',
      content: `
        <div class="space-y-6">
          <img src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=1200&h=600&fit=crop" alt="Sustainable Art Career" class="w-full rounded-2xl shadow-neu-lg" />

          <p class="text-lg text-gray-300 leading-relaxed">
            Creating great art is only half the equation. Building a sustainable career requires business acumen, strategic planning, and consistent effort. Here's how to turn your artistic passion into a thriving, long-term career.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">1. Price Your Work Strategically</h2>
          <p class="text-gray-300 leading-relaxed">
            Pricing is both art and science. Too low, and you undervalue your work and struggle to make a living. Too high, and you price yourself out of the market. Consider factors like materials, time invested, size, your experience level, and market comparables.
          </p>

          <div class="neu-card p-6 my-8">
            <h3 class="text-xl font-bold text-primary-teal mb-3">Pricing Formula Framework:</h3>
            <div class="space-y-3 text-gray-300">
              <p class="text-sm"><strong class="text-primary-cyan">Materials Cost</strong> + <strong class="text-primary-cyan">Time × Hourly Rate</strong> + <strong class="text-primary-cyan">Overhead</strong> + <strong class="text-primary-cyan">Profit Margin</strong></p>
              <p class="text-sm mt-4">Example for emerging artist:</p>
              <ul class="space-y-1 text-sm mt-2">
                <li>• Materials: $50</li>
                <li>• Time (10 hours × $25/hr): $250</li>
                <li>• Overhead (studio, utilities): $50</li>
                <li>• Profit margin (30%): $105</li>
                <li class="font-bold text-primary-cyan pt-2">= Total Price: $455</li>
              </ul>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">2. Diversify Your Income Streams</h2>
          <p class="text-gray-300 leading-relaxed">
            Don't rely solely on original artwork sales. Successful artists often have multiple revenue streams: prints and reproductions, commissioned work, teaching workshops, licensing designs, online courses, and speaking engagements.
          </p>

          <div class="grid md:grid-cols-3 gap-4 my-8">
            <div class="glass-card p-5">
              <h4 class="font-bold text-primary-cyan mb-2 text-sm">Primary Income</h4>
              <ul class="text-xs text-gray-300 space-y-1">
                <li>• Original artwork</li>
                <li>• Commissions</li>
                <li>• Gallery sales</li>
              </ul>
            </div>
            <div class="glass-card p-5">
              <h4 class="font-bold text-primary-teal mb-2 text-sm">Secondary Income</h4>
              <ul class="text-xs text-gray-300 space-y-1">
                <li>• Prints & merch</li>
                <li>• Licensing</li>
                <li>• Online courses</li>
              </ul>
            </div>
            <div class="glass-card p-5">
              <h4 class="font-bold text-primary-sage mb-2 text-sm">Passive Income</h4>
              <ul class="text-xs text-gray-300 space-y-1">
                <li>• Print-on-demand</li>
                <li>• Digital downloads</li>
                <li>• Royalties</li>
              </ul>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">3. Build Your Collector Base</h2>
          <p class="text-gray-300 leading-relaxed">
            Your collectors are more than customers—they're advocates and long-term supporters. Nurture these relationships through email newsletters, exclusive previews, studio visits, and personalized communication. A collector who buys one piece often becomes a repeat buyer.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">4. Maintain Consistent Online Presence</h2>
          <p class="text-gray-300 leading-relaxed">
            In today's digital world, your online presence is your gallery that never closes. Maintain an active profile on platforms like gallerytwentythree, post regularly on social media, keep your website updated, and engage with your audience consistently.
          </p>

          <div class="bg-gradient-to-r from-primary-cyan/10 to-primary-teal/10 border border-primary-cyan/20 rounded-2xl p-6 my-8">
            <h3 class="text-2xl font-bold text-primary-cyan mb-3">Content Calendar Essentials</h3>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li><strong class="text-primary-teal">Monday:</strong> Work-in-progress shots</li>
              <li><strong class="text-primary-teal">Wednesday:</strong> Finished piece or studio insight</li>
              <li><strong class="text-primary-teal">Friday:</strong> Behind-the-scenes or technique tips</li>
              <li><strong class="text-primary-teal">Weekend:</strong> Engage with followers, share others' work</li>
            </ul>
          </div>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">5. Track Your Business Metrics</h2>
          <p class="text-gray-300 leading-relaxed">
            Treat your art practice like a business. Track sales, expenses, website traffic, social media engagement, and email list growth. Understanding your metrics helps you make informed decisions about where to invest your time and energy.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">6. Invest in Professional Development</h2>
          <p class="text-gray-300 leading-relaxed">
            Never stop learning. Attend workshops, take online courses, study business fundamentals, and stay current with art market trends. The most successful artists are perpetual students who continuously refine both their craft and business skills.
          </p>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">7. Manage Your Time Wisely</h2>
          <p class="text-gray-300 leading-relaxed">
            Balancing creation time with business tasks is challenging. Many successful artists follow the 70/30 rule: 70% of time creating, 30% on business activities (marketing, admin, networking). Schedule both in your calendar and protect your creative time fiercely.
          </p>

          <div class="neu-card p-6 my-8">
            <h3 class="text-xl font-bold text-primary-teal mb-4">Weekly Time Allocation Example</h3>
            <div class="space-y-2 text-sm text-gray-300">
              <div class="flex justify-between items-center">
                <span>Studio creation time</span>
                <span class="text-primary-cyan font-bold">25 hours</span>
              </div>
              <div class="flex justify-between items-center">
                <span>Marketing & social media</span>
                <span class="text-primary-cyan font-bold">5 hours</span>
              </div>
              <div class="flex justify-between items-center">
                <span>Administration & emails</span>
                <span class="text-primary-cyan font-bold">3 hours</span>
              </div>
              <div class="flex justify-between items-center">
                <span>Networking & learning</span>
                <span class="text-primary-cyan font-bold">3 hours</span>
              </div>
              <div class="flex justify-between items-center border-t border-primary-cyan/20 pt-2 mt-2 font-bold">
                <span>Total productive hours</span>
                <span class="text-primary-teal">36 hours</span>
              </div>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-primary-cyan mt-8 mb-4">The Long Game</h2>
          <p class="text-gray-300 leading-relaxed">
            Building a sustainable art career is a marathon, not a sprint. Stay patient, remain consistent, and remember that every successful artist you admire went through years of grinding, learning, and adapting. With dedication, strategic thinking, and platforms like gallerytwentythree supporting your journey, you can create the art career you've always dreamed of.
          </p>

          <p class="text-gray-300 leading-relaxed">
            The art world needs your unique voice. Now get out there and build the career that supports your creative vision for the long term.
          </p>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&h=500&fit=crop',
      author: 'David Chen',
      date: '2024-02-10',
      category: 'Resources',
      readTime: '10 min read'
    }
  ];

  // Categories for filtering
  const categories = ['All', 'Artist Spotlight', 'Techniques', 'Collecting Tips', 'Resources', 'Community'];

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory, blogPosts]);

  // Find individual post if slug is provided
  const currentPost = slug ? blogPosts.find(post => post.slug === slug) : null;

  // Individual blog post view
  if (currentPost) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <SEO
          title={`${currentPost.title} - gallerytwentythree Blog`}
          description={currentPost.excerpt}
          keywords={`${currentPost.category}, art blog, ${currentPost.author}, gallerytwentythree`}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/blog')}
            className="flex items-center space-x-2 text-primary-cyan hover:text-primary-teal transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </motion.button>

          {/* Post header */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="px-3 py-1 rounded-full bg-primary-cyan/10 text-primary-cyan border border-primary-cyan/20">
                  {currentPost.category}
                </span>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(currentPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{currentPost.readTime}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {currentPost.title}
              </h1>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-primary-cyan" />
                  <span className="text-gray-300">{currentPost.author}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-400">Share:</span>
                  <button className="p-2 rounded-lg glass-card hover:bg-primary-cyan/10 transition-colors">
                    <Facebook className="w-4 h-4 text-primary-cyan" />
                  </button>
                  <button className="p-2 rounded-lg glass-card hover:bg-primary-cyan/10 transition-colors">
                    <Twitter className="w-4 h-4 text-primary-cyan" />
                  </button>
                  <button className="p-2 rounded-lg glass-card hover:bg-primary-cyan/10 transition-colors">
                    <Linkedin className="w-4 h-4 text-primary-cyan" />
                  </button>
                </div>
              </div>
            </div>

            {/* Post content */}
            <div
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: currentPost.content }}
            />

            {/* CTA at bottom */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary-cyan/10 to-primary-teal/10 border border-primary-cyan/20">
              <h3 className="text-2xl font-bold text-white mb-3">Join the gallerytwentythree Community</h3>
              <p className="text-gray-300 mb-6">
                Discover more insights, connect with artists, and explore incredible artwork from all 50 states.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/gallery')}
                  className="glass-button"
                >
                  Explore Gallery
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="neu-button"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    );
  }

  // Blog listing view
  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO
        title="Blog - gallerytwentythree | Art Insights, Tips & Artist Stories"
        description="Explore our blog for artist spotlights, collecting tips, art techniques, and insights into building a sustainable art career. Join the gallerytwentythree community."
        keywords="art blog, artist interviews, art collecting tips, art techniques, gallery blog, contemporary art, artist resources, art career advice"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover artist stories, learn techniques, and get insights into building a thriving art career.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 space-y-6"
        >
          {/* Search bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-cyan" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 neu-input text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-cyan/50"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-xl transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-cyan text-primary-dark shadow-lg'
                    : 'glass-card text-gray-300 hover:bg-primary-cyan/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blog posts grid */}
        <AnimatePresence mode="wait">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-400">No articles found matching your criteria.</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="neu-card-raised p-6 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-xl aspect-video">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-primary-dark/80 backdrop-blur-sm text-primary-cyan text-xs border border-primary-cyan/20">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold text-white group-hover:text-primary-cyan transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-gray-400 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-800">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-primary-cyan group-hover:translate-x-1 transition-transform">
                          <span className="text-sm font-medium">Read more</span>
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 p-12 rounded-2xl bg-gradient-to-r from-primary-cyan/10 to-primary-teal/10 border border-primary-cyan/20 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Want to Share Your Story?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            gallerytwentythree artists have access to blogging tools to share their insights, process, and journey. Join our community and amplify your voice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="glass-button text-lg px-8 py-3"
            >
              Join as Artist
            </button>
            <button
              onClick={() => navigate('/gallery')}
              className="neu-button text-lg px-8 py-3"
            >
              Explore Gallery
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
