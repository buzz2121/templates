import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "wouter";
import { useState, useRef, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";

const CONTINENTS = ["All", "Asia", "Europe", "Americas", "Africa", "Oceania"];

const DESTINATIONS = [
  {
    id: 1, name: "Maldives", region: "Asia", image: "/maldives.png",
    desc: "A scattered empire of coral atolls. NOX secures overwater villas that do not appear on any booking platform.",
    climate: "Tropical", best: "Nov – Apr", highlight: "Private atoll isolation",
  },
  {
    id: 2, name: "Santorini", region: "Europe", image: "/santorini.png",
    desc: "Geological drama turned into art. Cliffside estate takeovers, private yacht charters through the Aegean.",
    climate: "Mediterranean", best: "May – Oct", highlight: "Private yacht charter",
  },
  {
    id: 3, name: "Bali", region: "Asia", image: "/bali.png",
    desc: "Fire ceremonies, jungle temples, rice fields descending into silence. Access to rites the public never witnesses.",
    climate: "Tropical", best: "Apr – Oct", highlight: "Sacred ceremony access",
  },
  {
    id: 4, name: "Patagonia", region: "Americas", image: "/patagonia.png",
    desc: "The end of the known world. Helicopter access to unmarked glaciers, estancia dinners under the Milky Way.",
    climate: "Alpine", best: "Nov – Mar", highlight: "Helicopter glacier access",
  },
  {
    id: 5, name: "Morocco", region: "Africa", image: "/morocco.png",
    desc: "Ancient medinas and vast Saharan silence. Bespoke desert camps under billions of stars.",
    climate: "Desert", best: "Oct – Apr", highlight: "Sahara private camp",
  },
  {
    id: 6, name: "Iceland", region: "Europe", image: "/iceland.png",
    desc: "The Northern Lights from a private glass cabin. Helicopter rides over active volcanoes at dawn.",
    climate: "Arctic", best: "Sep – Mar", highlight: "Aurora glass cabin",
  },
  {
    id: 7, name: "Kyoto", region: "Asia", image: "/kyoto.png",
    desc: "Seventeen centuries of civilization. Closed-door temple ceremonies, kaiseki with masters who cooked for emperors.",
    climate: "Temperate", best: "Mar – May", highlight: "Private temple access",
  },
  {
    id: 8, name: "Amalfi Coast", region: "Europe", image: "/amalfi.png",
    desc: "Limestone cliffs plunging into sapphire water. Helicopter arrivals over Positano. Vintage Riva speedboats.",
    climate: "Mediterranean", best: "May – Sep", highlight: "Riva speedboat day",
  },
  {
    id: 9, name: "Seychelles", region: "Africa", image: "/seychelles.png",
    desc: "115 islands in the Indian Ocean. Pristine beaches, giant tortoises, and water that looks computer-generated.",
    climate: "Tropical", best: "Apr – May", highlight: "Exclusive private island",
  },
  {
    id: 10, name: "Tuscany", region: "Europe", image: "/tuscany.png",
    desc: "Rolling hills of cypress and vine. Historic estate rentals, wine blending sessions, truffle hunts at dawn.",
    climate: "Mediterranean", best: "Apr – Oct", highlight: "Private winery estate",
  },
  {
    id: 11, name: "Petra", region: "Africa", image: "/petra.png",
    desc: "The rose-red city carved into Jordanian sandstone. Private dawn access before crowds, candlelit Treasury dinners.",
    climate: "Desert", best: "Mar – May", highlight: "After-hours monument access",
  },
  {
    id: 12, name: "Queenstown", region: "Oceania", image: "/queenstown.png",
    desc: "The Remarkables rise from lake shores. Heli-skiing, private lodges, Milford Sound sailing charters.",
    climate: "Alpine", best: "Jun – Aug", highlight: "Heli-ski & fjord sail",
  },
];

// Each slot: how wide the card spans (out of 12), its height, micro-rotation, and y-nudge
const COLLAGE_SLOTS = [
  { cols: "col-span-12 md:col-span-6 lg:col-span-8 row-span-4", rotate: "-0.05deg", y: 0 },
  { cols: "col-span-12 md:col-span-6 lg:col-span-4 row-span-4", rotate: "0.08deg",  y: 0 },
  { cols: "col-span-12 md:col-span-6 lg:col-span-4 row-span-3", rotate: "-0.05deg", y: 0 },
  { cols: "col-span-12 md:col-span-6 lg:col-span-4 row-span-3", rotate: "0.05deg",  y: 0 },
  { cols: "col-span-12 md:col-span-6 lg:col-span-4 row-span-3", rotate: "-0.05deg", y: 0 },
  { cols: "col-span-12 md:col-span-6 lg:col-span-4 row-span-3", rotate: "0.08deg",  y: 0 },
  { cols: "col-span-12 md:col-span-6 lg:col-span-4 row-span-3", rotate: "-0.05deg", y: 0 },
  { cols: "col-span-12 md:col-span-6 lg:col-span-4 row-span-3", rotate: "0.05deg",  y: 0 },
  { cols: "col-span-12 md:col-span-6 lg:col-span-6 row-span-2", rotate: "-0.08deg", y: 0 },
  { cols: "col-span-12 md:col-span-6 lg:col-span-6 row-span-2", rotate: "0.02deg",  y: 0 },
  { cols: "col-span-12 md:col-span-6 lg:col-span-6 row-span-3", rotate: "-0.02deg", y: 0 },
  { cols: "col-span-12 md:col-span-6 lg:col-span-6 row-span-3", rotate: "0.02deg",  y: 0 },
];

type Slot = typeof COLLAGE_SLOTS[0];

function DestinationCard({ dest, index, slot }: {
  dest: typeof DESTINATIONS[0];
  index: number;
  slot: Slot;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 300, damping: 30 });
  const glowX  = useTransform(mouseX, [-0.5, 0.5], ["10%", "90%"]);
  const glowY  = useTransform(mouseY, [-0.5, 0.5], ["10%", "90%"]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top)  / rect.height - 0.5);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 40 + slot.y }}
      animate={{ opacity: 1, y: slot.y }}
      exit={{ opacity: 0, scale: 0.93 }}
      transition={{ duration: 0.65, delay: index * 0.055 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative ${slot.cols} h-full overflow-hidden cursor-pointer group`}
      style={{ perspective: 1000, transform: `rotate(${slot.rotate}) translateY(${slot.y}px)` }}
      data-testid={`destination-card-${dest.id}`}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={dest.image}
            alt={dest.name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>

        {/* Dark gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent z-10" />

        {/* Mouse-tracking gold spotlight */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `radial-gradient(circle 220px at ${glowX.get()} ${glowY.get()}, rgba(212,175,55,0.13), transparent)`,
            }}
          />
        )}

        {/* Gold border trace on hover */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none border border-primary/0"
          animate={{ borderColor: isHovered ? "rgba(212,175,55,0.5)" : "rgba(212,175,55,0)" }}
          transition={{ duration: 0.4 }}
        />

        {/* Large watermark number */}
        <motion.div
          className="absolute top-4 right-5 z-20 font-serif text-[7rem] leading-none text-white/[0.07] select-none"
          animate={{ opacity: isHovered ? 0 : 1, x: isHovered ? 16 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {String(dest.id).padStart(2, "0")}
        </motion.div>

        {/* Region vertical text */}
        <div className="absolute top-0 left-6 z-20 h-full flex items-center pointer-events-none">
          <motion.span
            className="text-primary/40 text-[10px] uppercase tracking-[0.3em] font-light"
            style={{ writingMode: "vertical-rl" }}
            animate={{ opacity: isHovered ? 0.8 : 0.4 }}
          >
            {dest.region}
          </motion.span>
        </div>

        {/* Gold separator line that scales in on hover */}
        <motion.div
          className="absolute left-8 right-8 z-20 pointer-events-none"
          style={{ bottom: "130px", height: "1px" }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{ scaleX: isHovered ? 1 : 0.25, opacity: isHovered ? 1 : 0 }}
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-7">
          <motion.div
            animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? 10 : 0 }}
            transition={{ duration: 0.3 }}
            className="mb-2"
          >
            <span className="text-primary text-[10px] uppercase tracking-[0.25em]">{dest.highlight}</span>
          </motion.div>

          <motion.h3
            className="font-serif text-white leading-none drop-shadow-md"
            animate={{ fontSize: isHovered ? "2.6rem" : "2rem" }}
            transition={{ duration: 0.4 }}
          >
            {dest.name}
          </motion.h3>

          <motion.div
            initial={false}
            animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="text-white/60 text-sm font-light leading-relaxed mt-4 mb-5">
              {dest.desc}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-5 text-[10px] text-white/35 uppercase tracking-wider">
                <span>{dest.climate}</span>
                <span className="text-primary/30">·</span>
                <span>Best: {dest.best}</span>
              </div>
              <Link
                href={`/contact?interest=${encodeURIComponent(dest.name)}`}
                className="flex items-center gap-1 text-primary text-[10px] uppercase tracking-widest border border-primary/50 px-4 py-2 hover:bg-primary hover:text-black transition-all duration-300"
                data-testid={`inquire-${dest.id}`}
              >
                Inquire <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Destinations() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.region === activeFilter);

  return (
    <div className="min-h-screen bg-background pt-48 pb-24">
      {/* Header */}
      <div className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-gold text-xs uppercase tracking-[0.4em] font-medium block"
            >
              The World, Curated
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white uppercase mt-4 mb-6 tracking-tight"
            >
              Destinations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-zinc-400 text-sm md:text-base leading-relaxed lg:whitespace-nowrap"
            >
              Hover any card. Each destination tilts toward you — because that's what the world does when you're a NOX client.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-6 mb-14">
        <div className="flex gap-2 lg:justify-center overflow-x-auto pb-4 no-scrollbar">
          {CONTINENTS.map(c => (
            <button
              key={c}
              onClick={() => setActiveFilter(c)}
              className={`px-5 py-1.5 uppercase tracking-widest text-[10px] whitespace-nowrap transition-all duration-300 ${
                activeFilter === c
                  ? "bg-primary text-black font-semibold"
                  : "text-white/35 hover:text-white border border-white/10 hover:border-white/30"
              }`}
              data-testid={`filter-${c.toLowerCase()}`}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto text-white/20 text-[10px] uppercase tracking-widest self-center whitespace-nowrap pl-4">
            {filtered.length} destinations
          </span>
        </div>
      </div>

      {/* Irregular Collage Grid */}
      <div className="container mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-12 grid-flow-dense gap-6 md:gap-8 auto-rows-[180px]"
          >
            {filtered.map((dest, i) => {
              const slot = COLLAGE_SLOTS[i % COLLAGE_SLOTS.length];
              return (
                <DestinationCard
                  key={dest.id}
                  dest={dest}
                  index={i}
                  slot={slot}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bespoke CTA */}
      <div className="container mx-auto px-6 mt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="border border-white/8 p-16 text-center relative z-10">
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary/40" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/40" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-primary/40" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary/40" />

            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">Beyond the Map</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-6">We Build Bespoke Routes</h2>
            <p className="text-white/40 font-light max-w-xl mx-auto mb-10 leading-relaxed">
              Our network spans 87 countries and extends well beyond this list. If you can dream it, we have a contact who can arrange it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-12 py-4 bg-primary text-black tracking-widest uppercase text-xs font-semibold hover:bg-white transition-colors duration-500"
              data-testid="bespoke-cta"
            >
              Describe Your Vision <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
