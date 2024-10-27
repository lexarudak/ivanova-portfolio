export const FEATURE_FLAG = {
  MOCK_DATA: "use-mock-data-ff",
  EDIT_BLOCK: "hold-edit-button",
}

export const activeFeatureFlags = [
  FEATURE_FLAG.MOCK_DATA,
  FEATURE_FLAG.EDIT_BLOCK,
]

export type FeatureFlag = string
