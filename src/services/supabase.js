import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sbyemjkgnoozpzuhdtxm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNieWVtamtnbm9venB6dWhkdHhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4NjY5NDcsImV4cCI6MjAyMjQ0Mjk0N30.rrwpUI4qc6YXGpXDfcor8lmGAw7h-3ijNvPB-GM4iUs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
