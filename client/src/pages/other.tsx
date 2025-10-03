import NavBar from "@/components/NavBar";
import { Settings, Bell, User, HelpCircle } from "lucide-react";

export default function Other() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8" data-testid="heading-other">
          More Options
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-full p-3">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Profile</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your account settings and preferences
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                <p className="text-sm text-muted-foreground">
                  Set up alerts for new events and registration reminders
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Customize your FlowNation experience
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-full p-3">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Help & Support</h3>
                <p className="text-sm text-muted-foreground">
                  Get answers and contact our support team
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
