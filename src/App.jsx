import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Semester from "./pages/Semester";
import Subject from "./pages/Subject";
import Chapter from "./pages/Chapter";
import Resource from "./pages/Resource";
import NoteViewer from "./pages/NoteViewer";

import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";

import AddNote from "./pages/admin/AddNote";
import UploadPDF from "./pages/admin/UploadPDF";
import UploadImage from "./pages/admin/UploadImage";
import AddVideo from "./pages/admin/AddVideo";
import ManageContent from "./pages/admin/ManageContent";
import EditNote from "./pages/admin/EditNote";

/* ✅ FIXED IMPORT NAMES */
import UploadPyq from "./pages/admin/UploadPyq";
import UploadImportantQuestions from "./pages/admin/UploadImportantQuestions";

import PlacementCorner from "./pages/PlacementCorner";
import InternshipHub from "./pages/InternshipHub";
import ReportFormats from "./pages/placement/ReportFormats";
import ResumeTemplates from "./pages/placement/ResumeTemplates";
import Documents from "./pages/placement/Documents";
import InterviewPrep from "./pages/placement/InterviewPrep";
import ProjectIdeas from "./pages/placement/ProjectIdeas";
import Downloads from "./pages/placement/Downloads";
import AddPlacementResource from "./pages/admin/AddPlacementResource";
import ResourcePage from "./pages/placement/ResourcePage";
import PlacementHome from "./pages/placement/PlacementHome";
import CareerRoadmaps from "./pages/CareerRoadmaps";
import TrainingReports from "./pages/TrainingReports";
import ResumeBuilder from "./pages/ResumeBuilder";
import PlacementPreparation from "./pages/PlacementPreparation";
import InterviewQuestions from "./pages/InterviewQuestions";
import CodingPractice from "./pages/CodingPractice";
import Projects from "./pages/Projects";
import SingleNote from "./pages/SingleNote";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/semester" element={<Semester />} />
        <Route path="/subject/:semesterId" element={<Subject />} />
        <Route path="/chapters/:subjectName" element={<Chapter />} />

        <Route
          path="/notes/:subjectName/:chapterName/:resourceType"
          element={<NoteViewer />}
        />

        <Route
          path="/resources/:subjectName/:chapterName"
          element={<Resource />}
        />

        {/* AUTH */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* ADMIN UPLOAD ROUTES */}
        <Route path="/admin/add-note" element={<AddNote />} />
        <Route path="/admin/upload-pdf" element={<UploadPDF />} />
        <Route path="/admin/upload-image" element={<UploadImage />} />
        <Route path="/admin/add-video" element={<AddVideo />} />
        <Route path="/admin/manage" element={<ManageContent />} />
        <Route path="/admin/edit/:id" element={<EditNote />} />

        {/* 🚀 NEW UPLOADS */}
        <Route path="/admin/upload-pyq" element={<UploadPyq />} />
        <Route
          path="/admin/upload-important"
          element={<UploadImportantQuestions />}
        />

        {/* PLACEMENT SYSTEM */}
        <Route path="/placement-corner" element={<PlacementCorner />} />
        <Route
          path="/placement-corner/internships"
          element={<InternshipHub />}
        />
        <Route path="/internship/report-formats" element={<ReportFormats />} />
        <Route
          path="/internship/resume-templates"
          element={<ResumeTemplates />}
        />
        <Route path="/internship/documents" element={<Documents />} />
        <Route
          path="/internship/interview-prep"
          element={<InterviewPrep />}
        />
        <Route
          path="/internship/project-ideas"
          element={<ProjectIdeas />}
        />
        <Route path="/internship/downloads" element={<Downloads />} />

        <Route path="/admin/placement" element={<AddPlacementResource />} />

        <Route path="/placement" element={<PlacementHome />} />
        <Route path="/placement/:category" element={<ResourcePage />} />

        <Route
          path="/placement-corner/career-roadmaps"
          element={<CareerRoadmaps />}
        />
        <Route
          path="/placement-corner/training-reports"
          element={<TrainingReports />}
        />
        <Route
          path="/placement-corner/resume-builder"
          element={<ResumeBuilder />}
        />
        <Route
          path="/placement-corner/placement-preparation"
          element={<PlacementPreparation />}
        />
        <Route
          path="/placement-corner/interview-questions"
          element={<InterviewQuestions />}
        />
        <Route
          path="/placement-corner/coding-practice"
          element={<CodingPractice />}
        />
        <Route path="/placement-corner/projects" element={<Projects />} />
        <Route path="/note/:id" element={<SingleNote />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;