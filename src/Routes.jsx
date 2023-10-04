import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DataScience = React.lazy(() => import("pages/DataScience"));
const HR = React.lazy(() => import("pages/HR"));
const BDA = React.lazy(() => import("pages/BDA"));
const DevOps = React.lazy(() => import("pages/DevOps"));
const Masterinjavascript = React.lazy(() => import("pages/Masterinjavascript"));
const PlacementguaranteeMernstackdevelopment = React.lazy(() =>
  import("pages/PlacementguaranteeMernstackdevelopment"),
);
const PlacementguaranteeFullstackdevelopmentOne = React.lazy(() =>
  import("pages/PlacementguaranteeFullstackdevelopmentOne"),
);
const PlacementguaranteeFullstackdevelopment = React.lazy(() =>
  import("pages/PlacementguaranteeFullstackdevelopment"),
);
const RefundPolicy = React.lazy(() => import("pages/RefundPolicy"));
const Formthinkwhtcommunity = React.lazy(() =>
  import("pages/Formthinkwhtcommunity"),
);
const Resetpassword = React.lazy(() => import("pages/Resetpassword"));
const Applyasamentorpage = React.lazy(() => import("pages/Applyasamentorpage"));
const MentorpageOne = React.lazy(() => import("pages/MentorpageOne"));
const ThinkWhtCommunity = React.lazy(() => import("pages/ThinkWhtCommunity"));
const FAQS = React.lazy(() => import("pages/FAQS"));
const PrivacyPolicy = React.lazy(() => import("pages/PrivacyPolicy"));
const Termsconditions = React.lazy(() => import("pages/Termsconditions"));
const Applyform = React.lazy(() => import("pages/Applyform"));
const CampusHiring = React.lazy(() => import("pages/CampusHiring"));
const EducatorsTwo = React.lazy(() => import("pages/EducatorsTwo"));
const BlogsOne = React.lazy(() => import("pages/BlogsOne"));
const Blogs = React.lazy(() => import("pages/Blogs"));
const Login = React.lazy(() => import("pages/Login"));
const Signup = React.lazy(() => import("pages/Signup"));
const Placement = React.lazy(() => import("pages/Placement"));
const Campusambassadorpage = React.lazy(() =>
  import("pages/Campusambassadorpage"),
);
const ApplyasamentorpageOne = React.lazy(() =>
  import("pages/ApplyasamentorpageOne"),
);
const Booknowchoosedatepage = React.lazy(() =>
  import("pages/Booknowchoosedatepage"),
);
const Mentorpage = React.lazy(() => import("pages/Mentorpage"));
const Mentorshippage = React.lazy(() => import("pages/Mentorshippage"));
const UIUXContestpage = React.lazy(() => import("pages/UIUXContestpage"));
const UIUXContestpageOne = React.lazy(() => import("pages/UIUXContestpageOne"));
const Hackathonpage = React.lazy(() => import("pages/Hackathonpage"));
const HackathonpageOne = React.lazy(() => import("pages/HackathonpageOne"));
const Contactuspage = React.lazy(() => import("pages/Contactuspage"));
const Aboutuspage = React.lazy(() => import("pages/Aboutuspage"));
const Digitalmarketingpage = React.lazy(() =>
  import("pages/Digitalmarketingpage"),
);
const DSApage = React.lazy(() => import("pages/DSApage"));
const ReactJSpage = React.lazy(() => import("pages/ReactJSpage"));
const Javapage = React.lazy(() => import("pages/Javapage"));
const GoogleCloudpage = React.lazy(() => import("pages/GoogleCloudpage"));
const AngularJSpage = React.lazy(() => import("pages/AngularJSpage"));
const Flutterdevelopmentpage = React.lazy(() =>
  import("pages/Flutterdevelopmentpage"),
);
const Backenddevelopmentpage = React.lazy(() =>
  import("pages/Backenddevelopmentpage"),
);
const Frontenddevelopmentpage = React.lazy(() =>
  import("pages/Frontenddevelopmentpage"),
);
const UIUXpage = React.lazy(() => import("pages/UIUXpage"));
const LandingpageOne = React.lazy(() => import("pages/LandingpageOne"));
const Certification = React.lazy(() => import("pages/Certification"));
const Courses = React.lazy(() => import("pages/Courses"));
const Completeprofile = React.lazy(() => import("pages/Completeprofile"));
const LandingpageTwo = React.lazy(() => import("pages/LandingpageTwo"));
const Landingpage = React.lazy(() => import("pages/Landingpage"));
const LandingpageFour = React.lazy(() => import("pages/LandingpageFour"));
const LandingpageThree = React.lazy(() => import("pages/LandingpageThree"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/landingpagethree" element={<LandingpageThree />} />
          <Route path="/landingpagefour" element={<LandingpageFour />} />
          <Route path="/landingpage" element={<Landingpage />} />
          <Route path="/landingpagetwo" element={<LandingpageTwo />} />
          <Route path="/completeprofile" element={<Completeprofile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/landingpageone" element={<LandingpageOne />} />
          <Route path="/uiuxpage" element={<UIUXpage />} />
          <Route
            path="/frontenddevelopmentpage"
            element={<Frontenddevelopmentpage />}
          />
          <Route
            path="/backenddevelopmentpage"
            element={<Backenddevelopmentpage />}
          />
          <Route
            path="/flutterdevelopmentpage"
            element={<Flutterdevelopmentpage />}
          />
          <Route path="/angularjspage" element={<AngularJSpage />} />
          <Route path="/googlecloudpage" element={<GoogleCloudpage />} />
          <Route path="/javapage" element={<Javapage />} />
          <Route path="/reactjspage" element={<ReactJSpage />} />
          <Route path="/dsapage" element={<DSApage />} />
          <Route
            path="/digitalmarketingpage"
            element={<Digitalmarketingpage />}
          />
          <Route path="/aboutuspage" element={<Aboutuspage />} />
          <Route path="/contactuspage" element={<Contactuspage />} />
          <Route path="/hackathonpageone" element={<HackathonpageOne />} />
          <Route path="/hackathonpage" element={<Hackathonpage />} />
          <Route path="/uiuxcontestpageone" element={<UIUXContestpageOne />} />
          <Route path="/uiuxcontestpage" element={<UIUXContestpage />} />
          <Route path="/mentorshippage" element={<Mentorshippage />} />
          <Route path="/mentorpage" element={<Mentorpage />} />
          <Route
            path="/booknowchoosedatepage"
            element={<Booknowchoosedatepage />}
          />
          <Route
            path="/applyasamentorpageone"
            element={<ApplyasamentorpageOne />}
          />
          <Route
            path="/campusambassadorpage"
            element={<Campusambassadorpage />}
          />
          <Route path="/placement" element={<Placement />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogsone" element={<BlogsOne />} />
          <Route path="/educatorstwo" element={<EducatorsTwo />} />
          <Route path="/campushiring" element={<CampusHiring />} />
          <Route path="/applyform" element={<Applyform />} />
          <Route path="/termsconditions" element={<Termsconditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route path="/thinkwhtcommunity" element={<ThinkWhtCommunity />} />
          <Route path="/mentorpageone" element={<MentorpageOne />} />
          <Route path="/applyasamentorpage" element={<Applyasamentorpage />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route
            path="/formthinkwhtcommunity"
            element={<Formthinkwhtcommunity />}
          />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route
            path="/placementguaranteefullstackdevelopment"
            element={<PlacementguaranteeFullstackdevelopment />}
          />
          <Route
            path="/placementguaranteefullstackdevelopmentone"
            element={<PlacementguaranteeFullstackdevelopmentOne />}
          />
          <Route
            path="/placementguaranteemernstackdevelopment"
            element={<PlacementguaranteeMernstackdevelopment />}
          />
          <Route path="/masterinjavascript" element={<Masterinjavascript />} />
          <Route path="/devops" element={<DevOps />} />
          <Route path="/bda" element={<BDA />} />
          <Route path="/hr" element={<HR />} />
          <Route path="/datascience" element={<DataScience />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
