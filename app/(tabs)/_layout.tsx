import useAuthStore from '@/store/auth.store';
import { Redirect, Slot } from 'expo-router';
import React from 'react';

const TabLayout = () => {
    const {isAuthenticated} = useAuthStore();
    if(!isAuthenticated) return <Redirect href={"/SignIn"} />
  return <Slot />
}

export default TabLayout