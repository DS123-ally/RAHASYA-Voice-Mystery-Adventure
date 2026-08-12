"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function LeaderboardStats() {
  const [stats, setStats] = useState<{ rank: number; total_xp: number; cities_covered: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const supabase = createClient();
    
    async function fetchStats() {
      try {
        const { data, error } = await supabase.rpc("get_user_stats");
        if (cancelled) return;
        
        if (!error && data && data.length > 0) {
          setStats(data[0]);
        } else {
          setStats({ rank: 0, total_xp: 0, cities_covered: 0 });
        }
      } catch (err) {
        if (!cancelled) {
          setStats({ rank: 0, total_xp: 0, cities_covered: 0 });
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    
    fetchStats();
    
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading || !stats) {
    return <div className="h-10 w-24 animate-pulse rounded-base bg-secondary-background" />;
  }

  return (
    <div className="flex items-center gap-3 text-sm" title="Your Global Leaderboard Stats">
      <Badge variant="neutral" className="flex h-9 items-center gap-1.5 px-3 py-1 text-sm font-heading">
        <Trophy size={16} className="text-yellow-500" strokeWidth={2.5} />
        {stats.rank > 0 ? `Rank #${stats.rank}` : "Unranked"}
      </Badge>
      <div className="flex flex-col text-xs text-foreground/80 leading-tight">
        <span className="font-heading text-foreground">{stats.total_xp} XP</span>
        <span>{stats.cities_covered} Cities</span>
      </div>
    </div>
  );
}
