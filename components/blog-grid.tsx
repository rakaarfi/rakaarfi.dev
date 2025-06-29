"use client";

import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Search, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  thumbnail?: string;
  categories?: string[];
}

export function BlogGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const extractImageFromDescription = (description: string): string => {
    // Extract image URL from description HTML
    const imgRegex = /<img[^>]+src="([^">]+)"/i;
    const match = description.match(imgRegex);
    return match ? match[1] : 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800';
  };

  const fetchPosts = async () => {
    try {
      setRefreshing(true);
      const cacheBuster = `_=${new Date().getTime()}`;
      const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rakaarfi&${cacheBuster}`);
      const data = await response.json();
      
      if (data.status === 'ok') {
        const formattedPosts = data.items.map((item: any) => {
          // Use thumbnail if available, otherwise extract from description
          let thumbnailUrl = item.thumbnail;
          if (!thumbnailUrl || thumbnailUrl.trim() === '') {
            thumbnailUrl = extractImageFromDescription(item.description || '');
          }

          return {
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            contentSnippet: item.contentSnippet || item.description?.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
            thumbnail: thumbnailUrl,
            categories: item.categories || []
          };
        });
        setPosts(formattedPosts);
        setFilteredPosts(formattedPosts);
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      // Fallback posts
      const fallbackPosts = [
        {
          title: 'Building Scalable APIs with Golang and Fiber',
          link: 'https://medium.com/@rakaarfi',
          pubDate: new Date().toISOString(),
          contentSnippet: 'Learn how to build high-performance REST APIs using Golang and the Fiber framework. This comprehensive guide covers everything from basic setup to advanced optimization techniques for scalability.',
          thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
          categories: ['Golang', 'API', 'Backend']
        },
        {
          title: 'FastAPI vs Flask: Choosing the Right Python Framework',
          link: 'https://medium.com/@rakaarfi',
          pubDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          contentSnippet: 'A comprehensive comparison between FastAPI and Flask, covering performance benchmarks, feature sets, ecosystem maturity, and real-world use cases to help you make the right choice.',
          thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
          categories: ['Python', 'FastAPI', 'Flask']
        },
        {
          title: 'Modern Database Design Patterns for Web Applications',
          link: 'https://medium.com/@rakaarfi',
          pubDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
          contentSnippet: 'Explore modern database design patterns and best practices for building robust web applications. Learn about normalization, indexing strategies, and performance optimization.',
          thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
          categories: ['Database', 'PostgreSQL', 'Design Patterns']
        },
        {
          title: 'Microservices Architecture with Docker and Kubernetes',
          link: 'https://medium.com/@rakaarfi',
          pubDate: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
          contentSnippet: 'Deep dive into microservices architecture using containerization with Docker and orchestration with Kubernetes. Learn about service discovery, load balancing, and deployment strategies.',
          thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
          categories: ['Microservices', 'Docker', 'Kubernetes']
        },
        {
          title: 'Real-time Applications with WebSockets and Go',
          link: 'https://medium.com/@rakaarfi',
          pubDate: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
          contentSnippet: 'Building real-time applications using WebSockets in Go. Learn how to handle concurrent connections, message broadcasting, and implement chat applications with performance optimization.',
          thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
          categories: ['WebSockets', 'Golang', 'Real-time']
        },
        {
          title: 'Authentication and Authorization in Modern Web Apps',
          link: 'https://medium.com/@rakaarfi',
          pubDate: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(),
          contentSnippet: 'Comprehensive guide to implementing secure authentication and authorization in web applications. Covers JWT tokens, OAuth2, session management, and security best practices.',
          thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
          categories: ['Security', 'Authentication', 'JWT']
        }
      ];
      setPosts(fallbackPosts);
      setFilteredPosts(fallbackPosts);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.contentSnippet.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  useEffect(() => {
    if (sectionRef.current && typeof window !== 'undefined' && !loading) {
      gsap.fromTo('.blog-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, [filteredPosts, loading]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="h-10 bg-muted rounded animate-pulse" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-muted" />
                <CardContent className="p-6">
                  <div className="h-4 bg-muted rounded mb-2" />
                  <div className="h-4 bg-muted rounded mb-4 w-3/4" />
                  <div className="h-16 bg-muted rounded" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Refresh */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 hover-target"
            />
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <Button
              onClick={fetchPosts}
              disabled={refreshing}
              variant="outline"
              className="hover-target"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh Blog
            </Button>
          )}
        </div>

        {/* Results count */}
        <div className="mb-8 text-muted-foreground">
          {searchTerm && (
            <p>Found {filteredPosts.length} posts matching "{searchTerm}"</p>
          )}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Card key={index} className="blog-item hover-target group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${post.thumbnail})` }}
              />
              
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-4">
                  {post.contentSnippet}
                </p>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(post.pubDate)}
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  5 min read
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button asChild variant="ghost" size="sm" className="hover-target group/btn w-full">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read More
                    <Clock className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {searchTerm ? `No posts found matching "${searchTerm}"` : 'No blog posts available.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}