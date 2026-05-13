import React from 'react';
import Icon from '@/components/ui/AppIcon';

const newsItems = [
  {
    date: 'May 2025',
    category: 'Conference',
    title: 'Presented at ICDDA-2025, Assam Kaziranga University',
    body: 'Dr. Hassan co-presented "Exploring the Future of Connectivity: A Comprehensive Review of Wireless and Optical Communications" at the 2nd International Conference on Data Driven AI, held May 7–9, 2025.',
    link: '#',
    hot: true,
  },
  {
    date: 'April 2025',
    category: 'Publication',
    title: 'New Book Chapter Published in Routledge Volume',
    body: 'Co-authored chapter on wireless and optical communications included in "Data-Driven AI: A Multidisciplinary Approach" (Routledge, ISBN: 9781041272366).',
    link: 'https://www.routledge.com',
    hot: true,
  },
  {
    date: 'March 2025',
    category: 'Book',
    title: '"AI for Advanced Manufacturing" Now Available',
    body: 'Co-authored 231-page academic book published by RDG Scientific Publications covering AI applications in advanced manufacturing and industrial automation (ISBN: 978-8198699329).',
    link: '#',
    hot: false,
  },
  {
    date: 'December 2023',
    category: 'Patent',
    title: 'Indian Patent Application 202331046434 A Published',
    body: 'Patent application filed and officially published by the Indian Patent Office. Co-applicant status confirmed.',
    link: '#',
    hot: false,
  },
  {
    date: 'November 2023',
    category: 'Journal',
    title: 'Cloud Security Paper Published in Engineering Proceedings',
    body: '"A Futuristic Approach to Security in Cloud Data Centers Using a Hybrid Algorithm" published in Engineering Proceedings, Vol. 59, No. 1 (DOI: 10.3390/engproc2023059047).',
    link: 'https://doi.org/10.3390/engproc2023059047',
    hot: false,
  },
];

const categoryColors: Record<string, string> = {
  Conference: 'bg-secondary/30 text-secondary-foreground border-secondary/40',
  Publication: 'bg-primary/20 text-primary border-primary/30',
  Book: 'bg-accent/20 text-accent border-accent/30',
  Patent: 'bg-accent/10 text-accent border-accent/20',
  Journal: 'bg-muted text-muted-foreground border-border',
};

export default function NewsSection() {
  return (
    <section id="news" className="py-24 px-6 bg-muted/20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 items-end gap-12 mb-16 section-reveal">
          <div>
            <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              // News
            </span>
            <h2 className="font-display text-section-title font-bold text-foreground">
              News &{' '}
              <span className="gradient-text-indigo">Announcements</span>
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Latest updates on publications, conference presentations, and academic milestones.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Featured news — large cards */}
          <div className="lg:col-span-7 space-y-5">
            {newsItems
              .filter((n) => n.hot)
              .map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-8 block pub-card-hover section-reveal stagger-child"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${categoryColors[item.category] ?? ''}`}>
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-bold text-accent">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulseGlow" />
                        New
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground flex-shrink-0">{item.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  <div className="flex items-center gap-2 mt-5 text-accent text-xs font-bold uppercase tracking-widest">
                    Read More <Icon name="ArrowTopRightOnSquareIcon" size={12} />
                  </div>
                </a>
              ))}
          </div>

          {/* Older news — compact list */}
          <div className="lg:col-span-5 section-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-border">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Earlier Updates
                </span>
              </div>
              {newsItems
                .filter((n) => !n.hot)
                .map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block px-6 py-5 hover:bg-primary/10 transition-colors group ${
                      i < newsItems.filter((n) => !n.hot).length - 1 ? 'border-b border-border' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${categoryColors[item.category] ?? ''}`}>
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {item.body}
                    </p>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
