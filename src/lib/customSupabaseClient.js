import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kgtpwlwlcwmhgkvkyggy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtndHB3bHdsY3dtaGdrdmt5Z2d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2MzIxMDcsImV4cCI6MjA4MzIwODEwN30._LPqMLm0kEmKFJsM3JVQFQQVL4Hu5wzb2Q5vyB7IDbI';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
