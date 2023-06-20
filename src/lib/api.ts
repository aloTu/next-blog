import qs from 'qs'
import { API_URL } from '@/constants'

/**
 * Get full Strapi URL from path
 * @param  path Path of the URL
 * @returns  Full Strapi URL
 */
export function getStrapiURL(path = '') {
  return `${API_URL || 'http://localhost:1337'}${path}`
}

export interface IStrapData<T> {
  id: number
  attributes: T
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param  path Path of the API route
 * @param  urlParamsObject URL params object, will be stringified
 * @param  options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI<T>(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  }

  // Build request URL
  const queryString = qs.stringify(urlParamsObject, { encode: false })
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ''}`
  )}`

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions)

  // Handle response
  if (!response.ok) {
    console.error(response.statusText)
    throw new Error(`An error occured please try again`)
  }
  const data = await response.json()
  return data as { data: T }
}
