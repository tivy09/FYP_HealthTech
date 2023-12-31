import {
  IonTabs,
  IonTabBar,
  IonRouterOutlet,
  IonIcon,
  IonTabButton,
  IonLabel,
} from '@ionic/react'
import { Redirect, Route, useHistory } from 'react-router'
import ProtectedRoute from '../../components/ProtectedRoute'
import HomePageDoctor from '../../pages/tabs/HomePageDoctor'
import SettingPage from '../../pages/tabs/SettingPage'
import AllMedicinePage from '../../pages/main/medicine/MedListPage'
import MedicineDetailPage from '../../pages/main/medicine/MedDetailPage'
import MedCatListPage from '../../pages/main/medicineCategory/MedCatListPage'
import {
  personCircleOutline,
  home,
  calendarClear,
  timeSharp,
  medicalSharp,
  paperPlaneOutline,
} from 'ionicons/icons'
import ProfilePage from '../../pages/tabs/ProfilePage'
import { useAppSelector } from '../../app/hooks'
import HomePagePatient from '../../pages/tabs/HomePagePatient'
import ViewAppointmentPage from '../../pages/main/appointmentDoctor/ViewAppointmentPage'
import AppointmentDetailPage from '../../pages/main/appointmentDoctor/AppointmentDetailPage'
import TimetablePage from '../../pages/main/timetableDoctor/TimetablePage'
import MedicalReportList from '../../pages/main/medicalReportPatient/MedicalReportList'

const PrivateRoutes = () => {
  ///change page
  const history = useHistory()

  //call slice data
  const navBarInfo = useAppSelector((state) => state.navBar)
  const userInfo = useAppSelector((state) => state.auth)
  console.log(navBarInfo.showNav)
  console.log(userInfo.type)
  return (
    <>
      <IonTabs>
        <IonRouterOutlet>
          <ProtectedRoute exact path="/homeDoctor" component={HomePageDoctor} />
          <ProtectedRoute
            exact
            path="/homePatient"
            component={HomePagePatient}
          />
          <ProtectedRoute exact path="/setting" component={SettingPage} />
          {/* medicine route */}
          <ProtectedRoute exact path="/medicine" component={AllMedicinePage} />
          <ProtectedRoute
            exact
            path="/medicineDetail/:id"
            component={MedicineDetailPage}
          />
          {/* medicine category route */}
          <ProtectedRoute
            exact
            path="/medicineCat"
            component={MedCatListPage}
          />

          {/* user profile route */}
          <ProtectedRoute exact path="/profile" component={ProfilePage} />

          {/* appointment module - doctor */}

          <ProtectedRoute
            exact
            path="/appointmentDoctor"
            component={ViewAppointmentPage}
          />
          <ProtectedRoute
            exact
            path="/appointmentDoctor/:id"
            component={AppointmentDetailPage}
          />

          {/* timetable - doctor */}
          <ProtectedRoute
            exact
            path="/timetableDoctor"
            component={TimetablePage}
          />
          {/* medical report */}
          <ProtectedRoute
            exact
            path="/medicalReport"
            component={MedicalReportList}
          />

          {/* patient */}

          {userInfo.type === '3' || '4' ? (
            <Route>
              <Redirect to="/homeDoctor" />
            </Route>
          ) : (
            <Route>
              <Redirect to="/homePatient" />
            </Route>
          )}
        </IonRouterOutlet>
        {/* doctor */}

        {/* nurse */}
        {/* {(navBarInfo.showNav === true && userInfo.type === '4') ||
          (navBarInfo.showNav === true && userInfo.type === '3' && (
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/homeDoctor">
                <IonIcon icon={home} />
              </IonTabButton>
              <IonTabButton tab="timetableDoctor" href="/timetableDoctor">
                <IonIcon icon={timeSharp} />
              </IonTabButton>
              <IonTabButton tab="appointmentDoctor" href="/appointmentDoctor">
                <IonIcon icon={calendarClear} />
              </IonTabButton>
            </IonTabBar>
          ))} */}
        {navBarInfo.showNav === true ? (
          <IonTabBar slot="bottom">
            <IonTabButton
              tab="home"
              href={userInfo.type === '5' ? '/homePatient' : '/homeDoctor'}
            >
              <IonIcon icon={home} />
            </IonTabButton>
            <IonTabButton tab="timetableDoctor" href="/timetableDoctor">
              <IonIcon icon={timeSharp} />
            </IonTabButton>
            <IonTabButton tab="appointmentDoctor" href="/appointmentDoctor">
              <IonIcon icon={calendarClear} />
            </IonTabButton>
          </IonTabBar>
        ) : (
          <IonTabBar></IonTabBar>
        )}

        {/* patient */}
        {/* {navBarInfo.showNav === true && userInfo.type === '5' ? (
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/homePatient">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="timetableDoctor" href="/timetableDoctor">
              <IonIcon icon={timeSharp} />
              <IonLabel>Appointment</IonLabel>
            </IonTabButton>
            <IonTabButton tab="medicalReport" href="/medicalReport">
              <IonIcon icon={paperPlaneOutline} />
              <IonLabel>Medical Report</IonLabel>
            </IonTabButton>
          </IonTabBar>
        ) : (
          <IonTabBar></IonTabBar>
        )} */}
      </IonTabs>

      {/* bottom tabbar */}
    </>
  )
}

export default PrivateRoutes
