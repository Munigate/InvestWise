import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qxtzljusnyaeaxprcutp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4dHpsanVzbnlhZWF4cHJjdXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyMzQ5NTYsImV4cCI6MjA2OTgxMDk1Nn0.se-l4pHFjixEMMQQqGQuguV1rqf-DC4YD0O7nwSDZ1s';

export const supabase = createClient(supabaseUrl, supabaseKey);