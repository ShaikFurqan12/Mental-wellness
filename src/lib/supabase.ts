import { createClient } from '@supabase/supabase-js'

// Check different possible environment variable names
const supabaseUrl = 
  import.meta.env.VITE_SUPABASE_URL || 
  import.meta.env.SUPABASE_URL ||
  'https://your-project.supabase.co' // placeholder

const supabaseAnonKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  import.meta.env.SUPABASE_ANON_KEY ||
  'your-anon-key' // placeholder

// For debugging - log what environment variables are available
console.log('Available env vars:', Object.keys(import.meta.env).filter(key => key.includes('SUPABASE')))
console.log('Supabase URL:', supabaseUrl)
console.log('Supabase Key available:', !!supabaseAnonKey && supabaseAnonKey !== 'your-anon-key')

// Only create client if we have real values
if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project') || supabaseAnonKey === 'your-anon-key') {
  console.warn('⚠️ Supabase configuration missing! Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)