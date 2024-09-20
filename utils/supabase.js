import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://mhlqxdkyjsalwdyrpomd.supabase.co";
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1obHF4ZGt5anNhbHdkeXJwb21kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2NDI0MTgsImV4cCI6MjA0MjIxODQxOH0.kDhX1NoEehkKN7Sh3segy_Ml0acPTCFZKvTrXQFIbCw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
