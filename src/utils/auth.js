// Auth utility functions for localStorage-based authentication

export const AUTH_KEY = 'enterprisehub_auth';
export const USERS_KEY = 'enterprisehub_users';

// Get current user from localStorage
export function getCurrentUser() {
  if (typeof window === 'undefined') return null;
  
  try {
    const authData = localStorage.getItem(AUTH_KEY);
    if (!authData) return null;
    
    return JSON.parse(authData);
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

// Set current user in localStorage
export function setCurrentUser(user) {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  } catch (error) {
    console.error('Error setting current user:', error);
  }
}

// Remove current user (logout)
export function removeCurrentUser() {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(AUTH_KEY);
  } catch (error) {
    console.error('Error removing current user:', error);
  }
}

// Check if user is authenticated
export function isAuthenticated() {
  const user = getCurrentUser();
  return user !== null && user !== undefined;
}

// Get all users from localStorage
export function getAllUsers() {
  if (typeof window === 'undefined') return [];
  
  try {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error('Error getting users:', error);
    return [];
  }
}

// Save users to localStorage
export function saveUsers(users) {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users:', error);
  }
}

// Register new user
export function registerUser(email, password, fullName, company) {
  const users = getAllUsers();
  
  // Check if user already exists
  if (users.find(u => u.email === email)) {
    return { success: false, message: 'This email is already registered' };
  }
  
  // Create new user
  const newUser = {
    id: Date.now().toString(),
    email,
    password, // ใน production ควร hash password
    fullName,
    company,
    createdAt: new Date().toISOString(),
  };
  
  users.push(newUser);
  saveUsers(users);
  
  return { success: true, user: newUser };
}

// Login user
export function loginUser(email, password) {
  const users = getAllUsers();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return { success: false, message: 'Invalid email or password' };
  }
  
  // Create session user (without password)
  const sessionUser = {
    id: user.id,
    email: user.email,
    fullName: user.fullName,
    company: user.company,
  };
  
  setCurrentUser(sessionUser);
  
  return { success: true, user: sessionUser };
}

// Logout user
export function logoutUser() {
  removeCurrentUser();
}

