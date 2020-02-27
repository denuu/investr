/**
 * Context API - Context provides a way to pass data through the component
 * tree without having to pass props down manually at every level.
 */

import { createContext, useContext } from 'react';

export const AuthContext = createContext();

/**
 * useAuth is a hook for using this context. 
 * Hooks let you use state and other React features without writing a class.
 */
export function useAuth() {
    return useContext(AuthContext);
}