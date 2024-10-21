import { useMemo } from "react"
import { FeatureFlag } from "./constants"
import { isFeatureFlagActive } from "./helpers"

export const useFeature = (featureFlag: FeatureFlag) => {
  return useMemo(() => {
    return isFeatureFlagActive(featureFlag)
  }, [featureFlag])
}
