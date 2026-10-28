import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '@/lib/customSupabaseClient';

const SagradaFamiliaAuthContext = createContext(null);

export const SagradaFamiliaAuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setCurrentUser(session?.user ?? null);
      setLoading(false);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setCurrentUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const value = {
    currentUser,
    login,
    logout,
    isAuthenticated: !!currentUser,
    loading,
  };

  return (
    <SagradaFamiliaAuthContext.Provider value={value}>
      {!loading && children}
    </SagradaFamiliaAuthContext.Provider>
  );
};

export const useSagradaFamiliaAuth = () => {
  const context = useContext(SagradaFamiliaAuthContext);
  if (context === undefined) {
    throw new Error('useSagradaFamiliaAuth must be used within a SagradaFamiliaAuthProvider');
  }
  return context;
};