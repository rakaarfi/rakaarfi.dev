"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useLanguage } from '@/components/language-provider';
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
}

export function BlogPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  const extractImageFromDescription = (description: string): string => {
    // Extract image URL from description HTML
    const imgRegex = /<img[^>]+src="([^">]+)"/i;
    const match = description.match(imgRegex);
    return match ? match[1] : 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800';
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const cacheBuster = `_=${new Date().getTime()}`;
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rakaarfi&${cacheBuster}`);
        const data = await response.json();
        
        if (data.status === 'ok') {
          const formattedPosts = data.items.slice(0, 3).map((item: any) => {
            // Use thumbnail if available, otherwise extract from description
            let thumbnailUrl = item.thumbnail;
            if (!thumbnailUrl || thumbnailUrl.trim() === '') {
              thumbnailUrl = extractImageFromDescription(item.description || '');
            }

            return {
              title: item.title,
              link: item.link,
              pubDate: item.pubDate,
              contentSnippet: item.contentSnippet || item.description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
              thumbnail: thumbnailUrl
            };
          });
          setPosts(formattedPosts);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        // Fallback posts
        setPosts([
          {
            title: 'Building Scalable APIs with Golang and Fiber',
            link: 'https://medium.com/@rakaarfi',
            pubDate: new Date().toISOString(),
            contentSnippet: 'Learn how to build high-performance REST APIs using Golang and the Fiber framework with best practices for scalability.',
            thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800'
          },
          {
            title: 'FastAPI vs Flask: Choosing the Right Python Framework',
            link: 'https://medium.com/@rakaarfi',
            pubDate: new Date().toISOString(),
            contentSnippet: 'A comprehensive comparison between FastAPI and Flask, covering performance, features, and use cases.',
            thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800'
          },
          {
            title: 'Modern Database Design Patterns for Web Applications',
            link: 'https://medium.com/@rakaarfi',
            pubDate: new Date().toISOString(),
            contentSnippet: 'Explore modern database design patterns and best practices for building robust web applications.',
            thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (sectionRef.current && typeof window !== 'undefined' && !loading) {
      gsap.fromTo('.blog-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, [loading]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t('blog.title')}
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
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
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights and thoughts on fullstack development, programming, and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card key={index} className="blog-card hover-target group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${post.thumbnail})` }}
              />
              
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
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
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="hover-target group">
            <Link href="/blog">
              {t('blog.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}