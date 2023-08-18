import axios from "../utils/axios/AxiosHandlers"

export const medicalReportAPI = {
  getMedicalReport: async (id:any) => {
    return await axios.get(`/admin/patientMedicalReport/${id}`)
  },
  
}