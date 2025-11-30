import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword'
import UserType from './components/UserType'
import AthleteOnboarding from './components/AthleteOnboarding'
import AthleteStory from './components/AthleteStory'
import AthletePalmares from './components/AthletePalmares'
import AthleteObjectifs from './components/AthleteObjectifs'
import AthleteFinancement from './components/AthleteFinancement'
import AthleteServices from './components/AthleteServices'
import AthleteCalendrier from './components/AthleteCalendrier'
import AthleteStatistiques from './components/AthleteStatistiques'
import AthleteCollaborations from './components/AthleteCollaborations'
import AthleteDocuments from './components/AthleteDocuments'
import AthleteDashboard from './components/AthleteDashboard'
import AthleteMessages from './components/AthleteMessages'
import AthleteSearch from './components/AthleteSearch'
import AthleteSupport from './components/AthleteSupport'
import AthleteProfile from './components/AthleteProfile'
import EnterpriseDashboard from './components/EnterpriseDashboard'
import EnterpriseMessages from './components/EnterpriseMessages'
import EnterpriseSupport from './components/EnterpriseSupport'
import EnterpriseSearch from './components/EnterpriseSearch'
import LandingPage from './components/LandingPage'
import ImagePreloader from './components/ImagePreloader'

function App() {
  return (
    <BrowserRouter>
      <ImagePreloader />
      <div className="h-screen w-screen">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/user-type" element={<UserType />} />
          <Route path="/athlete-onboarding" element={<AthleteOnboarding />} />
          <Route path="/athlete-story" element={<AthleteStory />} />
          <Route path="/athlete-palmares" element={<AthletePalmares />} />
          <Route path="/athlete-objectifs" element={<AthleteObjectifs />} />
          <Route path="/athlete-financement" element={<AthleteFinancement />} />
          <Route path="/athlete-services" element={<AthleteServices />} />
          <Route path="/athlete-calendrier" element={<AthleteCalendrier />} />
          <Route path="/athlete-statistiques" element={<AthleteStatistiques />} />
          <Route path="/athlete-collaborations" element={<AthleteCollaborations />} />
          <Route path="/athlete-documents" element={<AthleteDocuments />} />
          <Route path="/athlete-dashboard" element={<AthleteDashboard />} />
          <Route path="/athlete-messages" element={<AthleteMessages />} />
          <Route path="/athlete-search" element={<AthleteSearch />} />
          <Route path="/athlete-support" element={<AthleteSupport />} />
          <Route path="/athlete-profile" element={<AthleteProfile />} />
          <Route path="/enterprise-dashboard" element={<EnterpriseDashboard />} />
          <Route path="/enterprise-messages" element={<EnterpriseMessages />} />
          <Route path="/enterprise-support" element={<EnterpriseSupport />} />
          <Route path="/enterprise-search" element={<EnterpriseSearch />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

