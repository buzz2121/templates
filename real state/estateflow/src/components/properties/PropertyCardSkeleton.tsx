import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'motion/react';

export default function PropertyCardSkeleton() {
  return (
    <Card className="overflow-hidden border-none bg-white/[0.08] backdrop-blur-3xl rounded-3xl group h-full relative border border-white/10 shadow-2xl animate-pulse">
      <div className="relative aspect-[4/3] bg-white/[0.12] rounded-t-3xl" />
      <CardContent className="p-6 space-y-6">
        <div className="h-4 bg-gold-500/10 w-1/3 rounded-full" />
        <div className="h-8 bg-white/[0.12] w-3/4 rounded-lg" />
        <div className="grid grid-cols-3 gap-1 pt-6">
          <div className="h-10 bg-white/[0.08] rounded-xl" />
          <div className="h-10 bg-white/[0.08] rounded-xl" />
          <div className="h-10 bg-white/[0.08] rounded-xl" />
        </div>
        <div className="h-12 bg-gold-500/5 w-full rounded-xl" />
      </CardContent>
    </Card>
  );
}
