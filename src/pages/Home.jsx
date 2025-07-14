import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Background EFfects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                {/* Hero Section */}
                <HeroSection />
            </main>

            {/* Footer */}
        </div>
    );
};