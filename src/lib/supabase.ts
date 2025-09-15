import { createClient } from '@supabase/supabase-js'

// Check different possible environment variable names
const supabaseUrl = 
  import.meta.env.VITE_SUPABASE_URL || 
  import.meta.env.SUPABASE_URL

const supabaseAnonKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  import.meta.env.SUPABASE_ANON_KEY

// For debugging - log what environment variables are available
console.log('Available env vars:', Object.keys(import.meta.env).filter(key => key.includes('SUPABASE')))
console.log('Supabase URL:', supabaseUrl)
console.log('Supabase Key available:', !!supabaseAnonKey)

// Only create client if we have real values
let supabase: any = null

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
  console.warn('⚠️ Supabase configuration missing! Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.')
  // Create a mock supabase object for development
  supabase = {
    auth: {
      signUp: () => Promise.resolve({ error: { message: 'Supabase not configured' } }),
      signInWithPassword: () => Promise.resolve({ error: { message: 'Supabase not configured' } }),
      signOut: () => Promise.resolve({ error: null }),
      getUser: () => Promise.resolve({ data: { user: null } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
    }
  }
}

export { supabase }