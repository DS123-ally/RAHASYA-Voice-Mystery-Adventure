-- SADAK: Leaderboard and User Stats RPC (#12)
-- Run in Supabase Dashboard → SQL Editor to enable Leaderboard functionality

CREATE OR REPLACE FUNCTION public.get_user_stats()
RETURNS TABLE (
  rank bigint,
  total_xp bigint,
  cities_covered bigint
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  WITH user_stats AS (
    SELECT
      user_id,
      COALESCE(SUM(xp), 0) as total_xp,
      COUNT(district_id) as cities_covered
    FROM public.district_progress
    GROUP BY user_id
  ),
  ranked_stats AS (
    SELECT
      user_id,
      total_xp,
      cities_covered,
      RANK() OVER (ORDER BY total_xp DESC) as rank
    FROM user_stats
  )
  SELECT rank, total_xp, cities_covered
  FROM ranked_stats
  WHERE user_id = auth.uid();
$$;
