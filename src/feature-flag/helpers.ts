import { activeFeatureFlags, FeatureFlag } from "./constants"

export const isFeatureFlagActive = (featureFlag: FeatureFlag) => {
  return activeFeatureFlags.includes(featureFlag)
}
