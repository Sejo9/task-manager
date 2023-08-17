import axios from "axios"

export default axios.create({
    baseURL:"https://task-manager-backend-production.up.railway.app/api/v1/tasks"
})
