import NavBar from "../../components/NavBar";

export default function Other() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Other Features</h1>
        <p className="text-muted-foreground">Under Construction - Additional features coming soon!</p>
      </div>
    </div>
  );
}
