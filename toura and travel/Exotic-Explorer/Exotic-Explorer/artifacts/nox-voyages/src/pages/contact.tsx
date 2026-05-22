import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Shield, Star, Lock, ArrowRight, Globe, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  destination: z.string().min(1, "Please select a destination interest"),
  package: z.string().optional(),
  travelers: z.string().min(1, "Please specify number of travelers"),
  dates: z.string().min(2, "Travel dates are required"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Please provide details about your vision")
});

const OFFICES = [
  {
    city: "Geneva",
    label: "Global HQ",
    image: "/retreats.png", // Using existing placeholder for luxury feel
    address: "100 Rue de Lausanne\nSuite 400\nGeneva 1202, Switzerland",
    phone: "+41 22 555 0199",
    hours: "9AM–7PM CET"
  },
  {
    city: "Tokyo",
    label: "Asia-Pacific",
    image: "/kyoto.png", 
    address: "Ark Hills South Tower\n1-4-5 Roppongi\nMinato-ku, Tokyo 106-0032",
    phone: "+81 3 6406 7100",
    hours: "9AM–7PM JST"
  },
  {
    city: "New York",
    label: "Americas",
    image: "/patagonia.png",
    address: "432 Park Avenue\n55th Floor\nNew York, NY 10022",
    phone: "+1 212 555 0188",
    hours: "9AM–7PM EST"
  }
];

const BENEFITS = [
  { icon: Shield, title: "Iron-Clad NDA", desc: "Every consultation is protected by a global confidentiality framework." },
  { icon: Clock, title: "24h Response", desc: "A NOX Regional Director will contact you personally within one business day." },
  { icon: Star, title: "Director Access", desc: "No automated systems or assistants. Direct access to our decision makers." },
];

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      destination: "",
      package: "",
      travelers: "",
      dates: "",
      budget: "",
      message: ""
    }
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    toast({
      title: "Inquiry Received",
      description: "A NOX Director will contact you personally within 24 hours.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-black selection:bg-primary selection:text-black">

      {/* ── IMMERSIVE HERO ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-10" />
          <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-10" />
          <img src="/hero.png" alt="Contact NOX" className="w-full h-full object-cover opacity-50 scale-105" />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-primary uppercase tracking-[0.4em] text-xs font-medium mb-6 block">The First Step</span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-serif font-bold text-white mb-8 tracking-tighter">
              Private Inquiry
            </h1>
            <p className="text-white/40 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              We do not accept every application. We only accept the ones we can execute perfectly. 
              Your journey starts with a conversation.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex justify-center z-20">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-20 bg-gradient-to-b from-primary/0 via-primary to-primary/0" 
          />
        </div>
      </section>

      {/* ── GLOBAL ACCESS POINTS ── */}
      <section className="py-32 relative bg-black">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <span className="text-primary uppercase tracking-[0.3em] text-xs mb-4 block">Global Presence</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white">Our Access Points</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OFFICES.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group relative h-[450px] overflow-hidden border border-white/10 hover:border-primary/40 transition-colors duration-700 bg-white/[0.03]"
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={office.image} 
                    alt={office.city} 
                    className="w-full h-full object-cover opacity-80 grayscale group-hover:scale-110 group-hover:opacity-100 transition-all duration-[2s]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                  <span className="text-primary text-[10px] uppercase tracking-[0.3em] mb-3 block opacity-60">{office.label}</span>
                  <h3 className="text-3xl font-serif text-white mb-6 group-hover:text-primary transition-colors">{office.city}</h3>
                  
                  <div className="space-y-4 text-white/40 text-sm font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <p className="whitespace-pre-line leading-relaxed">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <p>{office.phone}</p>
                    </div>
                    <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <p className="uppercase tracking-widest text-[10px]">{office.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-8 right-8 z-10 w-10 h-10 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN INQUIRY INTERFACE ── */}
      <section className="py-32 relative bg-black border-t border-white/5 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Left Column: Context & Trust */}
            <div className="lg:col-span-5 space-y-16">
              <div>
                <span className="text-primary uppercase tracking-[0.3em] text-xs mb-6 block">The Standard</span>
                <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">
                  Your Journey Architected From Zero.
                </h2>
                <p className="text-white/50 text-lg font-light leading-relaxed mb-10">
                  Our directors review every inquiry personally. We do not use automation for our client relationships. Expect a thoughtful, human response.
                </p>
                <div className="space-y-8">
                  {BENEFITS.map((b) => (
                    <div key={b.title} className="flex gap-6 items-start group">
                      <div className="w-12 h-12 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors">
                        <b.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-white font-serif text-lg mb-1">{b.title}</h4>
                        <p className="text-white/30 text-sm font-light leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-dark p-8 border border-primary/20 relative">
                <div className="absolute -top-3 -left-3">
                  <div className="w-8 h-8 bg-black border border-primary/30 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <p className="text-white/60 italic font-serif text-lg leading-relaxed mb-6">
                  "Confidentiality is not a feature; it is our foundation. Your identity and plans are protected by the same framework we use for heads of state."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-primary/50" />
                  <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">Sebastian Noir, Founder</span>
                </div>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative glass-dark p-8 md:p-16 border-t border-primary relative shadow-2xl"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-32 h-[2px] bg-primary shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
                
                <div className="mb-12">
                  <span className="text-primary uppercase tracking-[0.3em] text-[10px] mb-2 block">Application Portal</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-white">Inquiry Protocol</h3>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/40 uppercase tracking-widest text-[10px]">Full Identity *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your full name"
                                className="bg-transparent border-0 border-b border-white/10 text-white focus-visible:ring-0 focus-visible:border-primary rounded-none h-12 px-0 placeholder:text-white/10 transition-all"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500/80 text-[10px] mt-1" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/40 uppercase tracking-widest text-[10px]">Direct Channel *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your@email.com"
                                className="bg-transparent border-0 border-b border-white/10 text-white focus-visible:ring-0 focus-visible:border-primary rounded-none h-12 px-0 placeholder:text-white/10 transition-all"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500/80 text-[10px] mt-1" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="destination"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/40 uppercase tracking-widest text-[10px]">Region of Interest *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-transparent border-0 border-b border-white/10 text-white focus:ring-0 rounded-none h-12 px-0">
                                  <SelectValue placeholder="Select Destination" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-black border-white/10 text-white">
                                {["Maldives", "Santorini", "Bali", "Patagonia", "Morocco", "Iceland", "Kyoto", "Amalfi", "Seychelles", "Bespoke"].map(d => (
                                  <SelectItem key={d} value={d.toLowerCase()}>{d}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="travelers"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/40 uppercase tracking-widest text-[10px]">Party Size *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-transparent border-0 border-b border-white/10 text-white focus:ring-0 rounded-none h-12 px-0">
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-black border-white/10 text-white">
                                <SelectItem value="1">Solo</SelectItem>
                                <SelectItem value="2">Couple</SelectItem>
                                <SelectItem value="3-5">Small Party</SelectItem>
                                <SelectItem value="6+">Private Group</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="dates"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/40 uppercase tracking-widest text-[10px]">Window of Travel *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Autumn 2025"
                                className="bg-transparent border-0 border-b border-white/10 text-white focus-visible:ring-0 focus-visible:border-primary rounded-none h-12 px-0 placeholder:text-white/10 transition-all"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/40 uppercase tracking-widest text-[10px]">Budget Parameters *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-transparent border-0 border-b border-white/10 text-white focus:ring-0 rounded-none h-12 px-0">
                                  <SelectValue placeholder="Select Range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-black border-white/10 text-white">
                                {["$10k-$25k", "$25k-$50k", "$50k-$100k", "$100k+"].map(b => (
                                  <SelectItem key={b} value={b}>{b}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/40 uppercase tracking-widest text-[10px]">The Vision & Special Requirements *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe what you seek to experience..."
                              className="bg-white/5 border border-white/10 text-white focus-visible:ring-1 focus-visible:ring-primary rounded-none min-h-[140px] p-4 placeholder:text-white/10 transition-all"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full bg-primary text-black rounded-none py-8 tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-700 font-bold text-xs glow-gold group"
                      >
                        Initiate Consultation <ArrowRight className="ml-3 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                      </Button>
                      <div className="mt-8 flex flex-col items-center gap-3">
                        <div className="flex items-center gap-2 text-white/20 text-[10px] uppercase tracking-widest">
                          <CheckCircle2 className="w-3 h-3 text-primary/40" />
                          <span>Direct Director Assignment Guaranteed</span>
                        </div>
                        <p className="text-white/20 text-[9px] uppercase tracking-[0.2em] text-center max-w-xs leading-relaxed">
                          Correspondence is end-to-end encrypted under Swiss data privacy standards.
                        </p>
                      </div>
                    </div>
                  </form>
                </Form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMMERSIVE CLOSING ── */}
      <section className="py-40 relative bg-black border-t border-white/5 noise-bg overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-primary uppercase tracking-[0.3em] text-[10px] mb-8 font-semibold">The Response Protocol</p>
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-10 tracking-tight leading-[1.1]">
              Human-First, Always.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-20">
              <div className="border-l border-primary/30 pl-8">
                <span className="text-primary font-serif text-4xl block mb-4">24h</span>
                <p className="text-white/40 text-sm font-light leading-relaxed">Guaranteed response from a Regional Director, regardless of time zone.</p>
              </div>
              <div className="border-l border-primary/30 pl-8">
                <span className="text-primary font-serif text-4xl block mb-4">Zero</span>
                <p className="text-white/40 text-sm font-light leading-relaxed">Automated messages, chatbots, or generic templates used in communication.</p>
              </div>
              <div className="border-l border-primary/30 pl-8">
                <span className="text-primary font-serif text-4xl block mb-4">1:1</span>
                <p className="text-white/40 text-sm font-light leading-relaxed">Personalized director assignment that stays with you throughout your journey.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
