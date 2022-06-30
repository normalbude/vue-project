import {Service} from './Service'
export function getConfigsByProductId(productId) {
    return Service({
        url: '/manager/getConfigsByProductId',
        params: { productId: productId }
    })
}
export function getLogin() {
    return Service({
        url: '/userInfo ',
        method: 'get'
    })
}
export function getLogin2(data) {
    return Service({
        url: '/userInfo',
        method:'get',
        data: JSON.stringify(data)
    })
}
