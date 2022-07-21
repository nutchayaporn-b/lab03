import axios from 'axios'

export async function getStudents(){
    return axios.get('https://dv-student-backend-2019.appspot.com/students').then(res => res.data)
}