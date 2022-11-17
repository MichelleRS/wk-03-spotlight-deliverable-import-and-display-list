const SUPABASE_URL = 'https://qibydbafeplthyrhkgog.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpYnlkYmFmZXBsdGh5cmhrZ29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwOTIsImV4cCI6MTk4MzY4NDA5Mn0.NrtQcuaIUkk_9z8xEvXMdOg-GqBQaeDdi3tGUQcDCQc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// shows
export async function fetchShows() {
    // ask Supabase to send us shows object
    const response = await client.from('shows').select('*');
    // return the shows object data to be used in renderShows(show)
    return response.data;
}

// movies
export async function fetchMovies() {
    const response = await client.from('movies').select('*');
    return response.data;
}
