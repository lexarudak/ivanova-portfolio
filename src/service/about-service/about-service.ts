import { getMockedResponse } from "../../shared/helpers"
import {
  About,
  ExperienceData,
  ImageInfo,
  ServiceProps,
  SkillsData,
  TitleValueData,
  WorkExperienceData,
} from "../../shared/types"
import { MOCKED_ABOUT } from "./mock"
interface ProjectService {
  (props?: ServiceProps): {
    getAbout: () => Promise<About>
    setAbout: (about: string) => Promise<{ about: string }>
    updateLocation: (location: string) => Promise<{ location: string }>
    setSkills: (skills: SkillsData) => Promise<{ skills: SkillsData }>
    updateLanguages: (
      languages: TitleValueData,
    ) => Promise<{ languages: TitleValueData }>
    deleteExperience: (
      id: string,
    ) => Promise<{ id: string; experienceOrder: string }>
    deleteEducation: (
      id: string,
    ) => Promise<{ id: string; educationOrder: string }>
    saveExperienceOrder: (order: string[]) => Promise<{ order: string[] }>
    saveEducationOrder: (order: string[]) => Promise<{ order: string[] }>
    updateExperience: (
      experience: WorkExperienceData,
    ) => Promise<WorkExperienceData>
    updateEducation: (education: ExperienceData) => Promise<ExperienceData>
    updateImage: (image: ImageInfo) => Promise<{ image: ImageInfo }>
  }
}

const headers = { "Content-Type": "application/json" }

export const aboutService: ProjectService = props => {
  const ORIGIN = `${import.meta.env.VITE_APP_API_URL}/about`

  return {
    async getAbout() {
      if (props?.useMockData) {
        return getMockedResponse<About>(MOCKED_ABOUT)
      }
      const res = await fetch(ORIGIN)
      const data = await res.json()

      return data
    },

    async setAbout(about: string) {
      const res = await fetch(ORIGIN, {
        method: "POST",
        headers,
        body: JSON.stringify({ about }),
      })
      const data: { about: string } = await res.json()

      return data
    },

    async updateImage(image: ImageInfo) {
      const res = await fetch(`${ORIGIN}/image`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ image }),
      })
      const data: { image: ImageInfo } = await res.json()

      return data
    },

    async updateLocation(location: string) {
      const res = await fetch(`${ORIGIN}/location`, {
        method: "POST",
        headers,
        body: JSON.stringify({ location }),
      })
      const data: { location: string } = await res.json()

      return data
    },

    async setSkills(skills: SkillsData) {
      const res = await fetch(`${ORIGIN}/skills`, {
        method: "POST",
        headers,
        body: JSON.stringify({ skills }),
      })
      const data: { skills: SkillsData } = await res.json()

      return data
    },

    async updateLanguages(languages: TitleValueData) {
      const res = await fetch(`${ORIGIN}/lang`, {
        method: "POST",
        headers,
        body: JSON.stringify({ languages }),
      })
      const data: { languages: TitleValueData } = await res.json()

      return data
    },

    async updateExperience(experience: WorkExperienceData) {
      const res = await fetch(`${ORIGIN}/experience`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ experience }),
      })
      const data: WorkExperienceData = await res.json()

      return data
    },

    async updateEducation(education: ExperienceData) {
      const res = await fetch(`${ORIGIN}/education`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ education }),
      })
      const data: ExperienceData = await res.json()

      return data
    },

    async deleteExperience(id: string) {
      const res = await fetch(`${ORIGIN}/experience/${id}`, {
        method: "DELETE",
      })
      const data: { id: string; experienceOrder: string } = await res.json()

      return data
    },

    async deleteEducation(id: string) {
      const res = await fetch(`${ORIGIN}/education/${id}`, {
        method: "DELETE",
      })
      const data: { id: string; educationOrder: string } = await res.json()

      return data
    },

    async saveExperienceOrder(newOrder: string[]) {
      const res = await fetch(`${ORIGIN}/experience/order`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ newOrder }),
      })
      const data: { experienceOrder: string } = await res.json()

      return { order: data?.experienceOrder.split(",") || "" }
    },

    async saveEducationOrder(newOrder: string[]) {
      const res = await fetch(`${ORIGIN}/education/order`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ newOrder }),
      })
      const data: { educationOrder: string } = await res.json()

      return { order: data?.educationOrder.split(",") || "" }
    },
  }
}
