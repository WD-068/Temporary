import type { EventsResponse } from '@/types';

const API_URL = import.meta.env.VITE_EVENTS_API_URL;

export const getAllEvents = async (query: string = `?page=1&limit=10`) => {
  if (!API_URL)
    throw new Error(
      'Something tells me you forgot to set the VITE_EVENTS_API_URL environment variable.'
    );

  const token = localStorage.getItem('token');
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}/events${query}`, {
    headers,
    mode: 'cors'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }
  
  return (await res.json()) as EventsResponse;
};
