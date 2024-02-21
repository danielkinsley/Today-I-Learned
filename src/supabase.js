import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wvzykdlecgaamltbkmxx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2enlrZGxlY2dhYW1sdGJrbXh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwMTI4NjUsImV4cCI6MjAyMzU4ODg2NX0.oCdX903gC1jP_gChfFo2zrNmdNDEr1S6KjxQRErmJKY'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;