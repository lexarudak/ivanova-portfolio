import { LoaderFunction } from "react-router-dom"
import { About, SkillsData, WorkExperienceData } from "../../shared/types"
interface ProjectService {
  (): {
    getAbout: LoaderFunction<About>
    setAbout: (about: string) => Promise<{ about: string }>
    setSkills: (skills: SkillsData) => Promise<{ skills: SkillsData }>
    deleteExperience: (
      id: string,
    ) => Promise<{ id: string; experienceOrder: string }>
    saveExperienceOrder: (order: string[]) => Promise<{ order: string[] }>
    updateExperience: (
      experience: WorkExperienceData,
    ) => Promise<WorkExperienceData>
  }
}

const headers = { "Content-Type": "application/json" }

export const aboutService: ProjectService = () => {
  const ORIGIN = `${import.meta.env.VITE_APP_API_URL}/about`

  return {
    async getAbout() {
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

    async setSkills(skills: SkillsData) {
      const res = await fetch(`${ORIGIN}/skills`, {
        method: "POST",
        headers,
        body: JSON.stringify({ skills }),
      })
      const data: { skills: SkillsData } = await res.json()

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

    async deleteExperience(id: string) {
      const res = await fetch(`${ORIGIN}/experience/${id}`, {
        method: "DELETE",
      })
      const data: { id: string; experienceOrder: string } = await res.json()

      return data
    },

    async saveExperienceOrder(newOrder: string[]) {
      const res = await fetch(`${ORIGIN}/experience/order`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ newOrder }),
      })
      const data: { experienceOrder: string } = await res.json()

      console.log(data)

      return { order: data?.experienceOrder.split(",") || "" }
    },
  }
}
