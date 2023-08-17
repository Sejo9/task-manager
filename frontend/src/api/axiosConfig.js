import axios from "axios"

export default axios.create({
    baseURL:"task-manager-backend-production.up.railway.app/api/v1/tasks"
})
