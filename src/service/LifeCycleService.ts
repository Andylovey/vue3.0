import { get } from "@/config/request.config";

interface GetLifeCycleDataModelParams {
    page?: number
    page_size?: number
}

export function getLifeCycleDataService(params: GetLifeCycleDataModelParams) {
    return get('/api/lifecycle/list', params).then(res => {
        return res.data
    })
}