import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const POSTS = [
    {
        id: 1,
        title: "The Surge of Sustainable Architectural Masterpieces in 2024",
        excerpt: "How the world's most affluent buyers are prioritizing ecological integrity without compromising on opulence.",
        category: "Market Intel",
        date: "April 12, 2024",
        author: "Alastair Blackwood",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1500"
    },
    {
        id: 2,
        title: "Discreet Acquisitions: A Guide to Off-Market Luxury Real Estate",
        excerpt: "Learn the protocols of securing global assets before they ever hit the public gaze.",
        category: "Protocol",
        date: "March 28, 2024",
        author: "Elowen Sterling",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1500"
    },
    {
        id: 3,
        title: "The New Golden Triangle: Where to Invest Your Capital Now",
        excerpt: "An analytical deep-dive into the emerging luxury hubs across three continents.",
        category: "Strategy",
        date: "March 15, 2024",
        author: "Julian Thorne",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1500"
    }
];

export default function Blog() {
  return (
    <div className="pt-28 pb-40 bg-background min-h-screen">
      <section className="bg-white py-32 px-6 md:px-12 border-b border-border/50 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-[0.02] select-none pointer-events-none">
          <span className="text-[12rem] font-display font-medium leading-none tracking-tighter italic">JOURNAL</span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-6 mb-8"
            >
                <div className="w-16 h-[1px] bg-primary/30" />
                <span className="text-primary uppercase tracking-[0.5em] font-bold text-[10px]">Strategic Intelligence</span>
                <div className="w-16 h-[1px] bg-primary/30" />
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-display font-light text-foreground uppercase mb-10 leading-none">
              REFINED <span className="italic text-primary ml-[-0.05em]">JOURNAL</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light text-xl tracking-wide leading-relaxed italic">
                Curated insights, technical analysis, and architectural essays for the sophisticated real estate portfolio.
            </p>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-20 mb-40 group"
          >
              <div className="overflow-hidden bg-white border border-border/50 relative aspect-square lg:aspect-video shadow-2xl">
                  <img src={POSTS[0].image} className="w-full h-full object-cover grayscale transition-luxury duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt={POSTS[0].title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>
              <div className="flex flex-col justify-center space-y-10">
                  <div className="flex items-center gap-6">
                      <span className="bg-primary text-white uppercase text-[10px] tracking-[0.3em] font-bold px-5 py-2 shadow-xl">{POSTS[0].category}</span>
                      <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-[0.3em] flex items-center gap-3"><Calendar size={14} className="text-primary"/> {POSTS[0].date}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display font-light text-foreground uppercase leading-[0.9] group-hover:text-primary transition-luxury italic">
                    {POSTS[0].title}
                  </h2>
                  <p className="text-muted-foreground text-xl font-light leading-relaxed tracking-wide italic">"{POSTS[0].excerpt}"</p>
                  
                  <div className="flex items-center gap-6 pt-10 border-t border-border/50">
                      <div className="w-14 h-14 border border-border/50 p-1">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover grayscale" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase text-primary font-bold tracking-[0.4em]">Authored By</span>
                        <p className="text-sm text-foreground font-display uppercase tracking-widest">{POSTS[0].author}</p>
                      </div>
                  </div>

                  <Button asChild variant="link" className="text-primary p-0 uppercase text-[11px] tracking-[0.5em] font-bold self-start group/btn hover:text-foreground transition-luxury underline underline-offset-8 decoration-primary/30">
                      <Link to={`/blog/${POSTS[0].id}`} className="flex items-center">
                        Access Analysis <ArrowRight size={18} className="ml-4 group-hover/btn:translate-x-3 transition-luxury" />
                      </Link>
                  </Button>
              </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              {POSTS.slice(1).map((post, idx) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    className="group"
                  >
                      <div className="relative aspect-[16/10] mb-12 overflow-hidden bg-white border border-border/50 shadow-2xl">
                          <img src={post.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-luxury duration-1000 group-hover:scale-105" />
                          <div className="absolute top-0 right-0 bg-primary text-white p-4 shadow-xl">
                            <BookOpen size={18} />
                          </div>
                      </div>
                      <div className="space-y-8">
                           <div className="flex items-center gap-6 text-[10px] text-muted-foreground/60 uppercase font-bold tracking-[0.3em]">
                                <span className="flex items-center gap-3"><Calendar size={14} className="text-primary"/> {post.date}</span>
                                <span className="h-4 w-[1px] bg-border/50" />
                                <span className="flex items-center gap-3"><User size={14} className="text-primary"/> {post.author}</span>
                           </div>
                           <h3 className="text-3xl font-display font-light text-foreground transition-luxury group-hover:text-primary uppercase leading-tight italic">{post.title}</h3>
                           <p className="text-muted-foreground font-light leading-relaxed text-lg tracking-wide line-clamp-2 italic">"{post.excerpt}"</p>
                           <Button asChild variant="outline" className="border-border text-muted-foreground h-16 px-10 rounded-none uppercase text-[10px] tracking-[0.4em] font-bold hover:border-primary hover:text-primary transition-luxury bg-transparent">
                               <Link to={`/blog/${post.id}`}>Secured Access</Link>
                           </Button>
                      </div>
                  </motion.div>
              ))}
          </div>

          {/* Subscription Section */}
          <div className="mt-48 py-32 border-t border-border/50 text-center max-w-3xl mx-auto">
             <span className="text-primary uppercase tracking-[0.6em] font-bold text-[10px] mb-8 block">Subscription Protocol</span>
             <h3 className="text-4xl md:text-6xl font-display font-light text-foreground uppercase mb-10 leading-none">THE <span className="italic font-light text-primary ml-[-0.1em]">INTELLIGENCE</span> FEED</h3>
             <p className="text-muted-foreground text-xl font-light mb-16 italic font-display tracking-widest">"Knowledge is the most significant asset in any portfolio."</p>
             <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Private Email" 
                  className="flex-1 bg-secondary/30 border border-border/50 h-16 px-8 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 transition-luxury italic" 
                />
                <Button className="h-16 px-12 gold-gradient text-white rounded-none uppercase font-bold tracking-[0.4em] shadow-xl border-none">
                  Secure
                </Button>
             </div>
          </div>
      </section>
    </div>
  );
}
