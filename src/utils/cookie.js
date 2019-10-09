import cookies from 'js-cookie'
const defaultToken = 'connect.sid=s%3AM0MNEu1xTCVVdDwd4ZlBrHQIQFAvxAJW.Qaj1nXg3RvCKVVOOTr3hCTBGzNJbaohZl9FG%2B7j6sxo; Path=/; HttpOnly'
/**
 * 存储tokens
 * @param {string} token
 */
export function saveToken(token = defaultToken) {
  cookies.set('token', token)
}

/**
 * 获得token
 */
export function getToken() {
  return cookies.get('token')
}

/**
 * 移除token
 */
export function removeToken() {
  cookies.remove('token')
  sessionStorage.clear()
  localStorage.clear()
}
