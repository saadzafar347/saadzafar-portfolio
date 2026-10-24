import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://fngbobjtnamnuimwzfze.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_Yyi6kwDfzwKUIM6b_fkY9Q_k37RxixF";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
