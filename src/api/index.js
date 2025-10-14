/**
 * 导出所有的接口请求函数
 */
import base from './base'
import req from './req'
/**
 * 获取分类列表
 * @returns 
 */
export const getCategoryList=()=>req.get(base.categoryUrl);