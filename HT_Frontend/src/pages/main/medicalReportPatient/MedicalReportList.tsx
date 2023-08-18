import {
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { appointmentAPI } from '../../../api/appointmentApi'
import { call, ellipsisVertical, logoWhatsapp, time } from 'ionicons/icons'
import { useHistory } from 'react-router'
import { showNavBar } from '../../../app/auth/navBarSlice'
import { medicalReportAPI } from '../../../api/medicalReportApi'

const thumbnail: React.CSSProperties = {
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  objectFit: 'cover',
}
export type appointmentListType = {
  id: 0
  patientName: ''
  departmentName: ''
  avatar: ''
  appointmentDate: ''
  appointmentTime: ''
  status: ''
}

const MedicalReportList = () => {
  const dispatch = useAppDispatch()
  const userInfo = useAppSelector((state) => state.auth)
  const getMedicalReport = async () => {
    const { data } = await medicalReportAPI.getMedicalReport(userInfo.id)
    console.log(data)
  }

  //useEffect
  useEffect(() => {
    getMedicalReport()
    dispatch(showNavBar())
    return
  }, [])

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-padding-top ion-text-center">
              <IonLabel style={{ fontSize: '35px', fontWeight: 'bold' }}>
                <IonText>Medical Report</IonText>
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}
export default MedicalReportList
