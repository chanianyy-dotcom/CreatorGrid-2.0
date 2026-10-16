import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Route, Switch, useRoute } from "wouter";
import { Landing, LoginPage } from "./pages/Landing";
import Pricing from "./pages/Pricing";
import CreatorApp from "./pages/CreatorApp";
import NotFound from "./pages/NotFound";

function ContentRoute() {
  const [, params] = useRoute("/app/content/:id");
  return <CreatorApp section="content" contentId={params?.id} />;
}
function BriefRoute() {
  const [, params] = useRoute("/app/brief/:id");
  return <CreatorApp section="brief" contentId={params?.id} />;
}
function Router() {
  return <Switch>
    <Route path="/" component={Landing} />
    <Route path="/login" component={LoginPage} />
    <Route path="/pricing" component={Pricing} />
    <Route path="/app" component={() => <CreatorApp section="dashboard" />} />
    <Route path="/app/calendar" component={() => <CreatorApp section="calendar" />} />
    <Route path="/app/board" component={() => <CreatorApp section="board" />} />
    <Route path="/app/library" component={() => <CreatorApp section="library" />} />
    <Route path="/app/assets" component={() => <CreatorApp section="assets" />} />
    <Route path="/app/approvals" component={() => <CreatorApp section="approvals" />} />
    <Route path="/app/performance" component={() => <CreatorApp section="performance" />} />
    <Route path="/app/settings" component={() => <CreatorApp section="settings" />} />
    <Route path="/app/content/:id" component={ContentRoute} />
    <Route path="/app/brief/:id" component={BriefRoute} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
