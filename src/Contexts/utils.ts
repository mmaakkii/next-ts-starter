export function createActions(actionType: string): [string, string, string] {
  return [
    `request ${actionType}`,
    `success ${actionType}`,
    `fail ${actionType}`,
  ]
}

export type REQUEST = 0
export type SUCCESS = 1
export type FAIL = 2

export const REQUEST: REQUEST = 0
export const SUCCESS: SUCCESS = 1
export const FAIL: FAIL = 2

export const responseObj = {
  success: false,
  errors: {},
  data: {},
}
