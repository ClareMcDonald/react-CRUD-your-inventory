import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });
        
  return response.user;
   
}

export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}

export async function getRestaurants() {
  const response = await client
    .from('restaurants')
    .select();
  
  return checkError(response);
}

export async function createRestaurant(restaurant) {
  const response = await client
    .from('restaurants')
    .insert([restaurant]);
  
  return checkError(response);
}

export async function getRestaurant(id) {
  const response = await client
    .from('restaurants')
    .select()
    .match({ id })
    .single();
  
  return checkError(response);
}

export async function updateRestaurant(id, updatedRestaurant) {
  const response = await client
    .from('restaurants')
    .update(updatedRestaurant)
    .match({ id });
  
  return checkError(response);
}

export async function deleteRestaurant(id) {
  const response = await client
    .from('restaurants')
    .delete()
    .match({ id });
  
  return checkError(response);
}