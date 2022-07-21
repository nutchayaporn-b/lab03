import apiClient from './apiClient'
export async function getEvent(){
    return await apiClient.get('events').then(res => res.data)
}