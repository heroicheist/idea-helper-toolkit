
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowLeft, Linkedin, Mail, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section in sectionRefs) {
        const ref = sectionRefs[section as keyof typeof sectionRefs].current;
        if (ref && scrollPosition >= ref.offsetTop && scrollPosition < (ref.offsetTop + ref.offsetHeight)) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs].current;
    if (ref) {
      window.scrollTo({
        top: ref.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {Object.keys(sectionRefs).map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium capitalize transition-colors ${
                  activeSection === section 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/ashwin-ravi-chandran/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="mailto:ashwinthemechon@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <section ref={sectionRefs.about} className="py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Ashwin Ravichandran</h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Product Manager & ServiceNow Specialist
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mb-10">
            Certified Product Manager with a masters in MIS and 3 years of experience in ServiceNow, Web development, Enterprise software
            development, Agile, and business process optimization. Passionate about leveraging technology to solve complex problems and improve business workflows.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="mailto:ashwinthemechon@gmail.com">
                Contact Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={sectionRefs.experience} className="py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Experience</h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-10">
              <div>
                <h3 className="text-xl font-semibold">CDW Technologies</h3>
                <p className="text-muted-foreground">Oct 2022 - May 2024</p>
                <p className="text-muted-foreground">Chennai, India</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">Associate Consultant – Product Manager</h4>
                <ul className="list-disc list-outside ml-5 space-y-3 text-muted-foreground">
                  <li>Implemented ServiceNow roadmap for Enterprise clients to elevate digital experience, worked in Script Includes, Client Scripts, Business Rules, and Workflows in ITSM and VRM modules, optimized system response time by 25%, elevated service reliability.</li>
                  <li>Led requirement-gathering with stakeholders, managed product backlog, and conducted User Acceptance Testing (UAT) to refine workflows and test custom configurations.</li>
                  <li>Worked on incident and problem management modules, ensuring seamless workflow, and system performance. Led Configuration planning for ServiceNow Implementation to align business needs and improve operational efficiency.</li>
                  <li>Led development of HR automation tools, defined product vision and roadmaps to streamline HR workflows, worked on feature prioritization, attained a 90% improvement in efficiency, and cut manual processing time from 5 hours to under 15 minutes per week of HR tasks, using a tech stack of Node.js, React, and JavaScript.</li>
                  <li>Facilitated business unit support by mentoring 8+ interns, executed recruitment interviews.</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-10">
              <div>
                <h3 className="text-xl font-semibold">Infosys Limited</h3>
                <p className="text-muted-foreground">Oct 2021 - Oct 2022</p>
                <p className="text-muted-foreground">Chennai, India</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">Systems Engineer</h4>
                <ul className="list-disc list-outside ml-5 space-y-3 text-muted-foreground">
                  <li>Constructed dynamic dashboard application with better coding standards, collaborated with an 8-member product team with cross-functional team communication to launch 10+ new features using React.js, Redux, and Axios, boosting user engagement by 20%.</li>
                  <li>Developed customer onboarding application with multiple data validation, reducing data entry errors across forms by 70%.</li>
                  <li>Optimized API integration through asynchronous programming, decreased errors by 30%, and enhanced user experience.</li>
                  <li>Collaborated with a Scrum team to ensure timely delivery of features, fostering continuous improvement and enhancing product outcomes through iterative sprints.</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-10">
              <div>
                <h3 className="text-xl font-semibold">Infosys Limited</h3>
                <p className="text-muted-foreground">May 2021 - Oct 2021</p>
                <p className="text-muted-foreground">Chennai, India</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">Systems Engineer Trainee</h4>
                <ul className="list-disc list-outside ml-5 space-y-3 text-muted-foreground">
                  <li>Completed MERN stack training, building a functional e-commerce application and succeeding 100% of project objectives.</li>
                  <li>Mastered full-stack development with React.js, Node.js, and Express.js, adopting Scrum and contributing to 2 Agile sprints.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section ref={sectionRefs.education} className="py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Education</h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-10">
              <div>
                <h3 className="text-xl font-semibold">University at Buffalo</h3>
                <p className="text-muted-foreground">Expected May 2025</p>
                <p className="text-muted-foreground">Buffalo, NY</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Master of Science, Management Information Systems</h4>
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-10">
              <div>
                <h3 className="text-xl font-semibold">Velammal Institute of Technology</h3>
                <p className="text-muted-foreground">Oct 2020</p>
                <p className="text-muted-foreground">India</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Bachelor of Engineering, Mechanical Engineering</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={sectionRefs.projects} className="py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Aidvoca - Legal Aid Platform</h3>
                <p className="text-muted-foreground mb-4">
                  Led the development of "Aidvoca", a legal aid platform, by defining product strategy and roadmap to improve accessibility for
                  low-income users. Conducted user research for persona development and ensured stakeholder alignment through iterative
                  prototyping in Figma.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Product Strategy</Badge>
                  <Badge>Figma</Badge>
                  <Badge>User Research</Badge>
                  <Badge>Prototyping</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Project M&M - Process Improvement</h3>
                <p className="text-muted-foreground mb-4">
                  Led the "Project M&M" initiative using the DMAIC methodology to improve process efficiency. Conducted root cause analysis,
                  developed a data-driven process improvement plan, and implemented control strategies to address customer complaints on product
                  packaging and quality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>DMAIC Methodology</Badge>
                  <Badge>Process Improvement</Badge>
                  <Badge>Root Cause Analysis</Badge>
                  <Badge>Stakeholder Management</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={sectionRefs.skills} className="py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Skills & Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-6">Product Management Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="py-1.5 px-3 text-sm">Product Strategy & Vision</Badge>
                <Badge className="py-1.5 px-3 text-sm">Market Research</Badge>
                <Badge className="py-1.5 px-3 text-sm">Competitor Analysis</Badge>
                <Badge className="py-1.5 px-3 text-sm">Product Documentation</Badge>
                <Badge className="py-1.5 px-3 text-sm">Road Mapping</Badge>
                <Badge className="py-1.5 px-3 text-sm">Agile & Scrum</Badge>
                <Badge className="py-1.5 px-3 text-sm">Requirements Gathering</Badge>
                <Badge className="py-1.5 px-3 text-sm">User Stories</Badge>
                <Badge className="py-1.5 px-3 text-sm">Sprint Planning</Badge>
                <Badge className="py-1.5 px-3 text-sm">Cross-functional Collaboration</Badge>
                <Badge className="py-1.5 px-3 text-sm">Wireframing</Badge>
                <Badge className="py-1.5 px-3 text-sm">Prototyping (Figma)</Badge>
                <Badge className="py-1.5 px-3 text-sm">A/B Testing</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="py-1.5 px-3 text-sm">ServiceNow</Badge>
                <Badge className="py-1.5 px-3 text-sm">ITSM</Badge>
                <Badge className="py-1.5 px-3 text-sm">HTML</Badge>
                <Badge className="py-1.5 px-3 text-sm">CSS</Badge>
                <Badge className="py-1.5 px-3 text-sm">JavaScript</Badge>
                <Badge className="py-1.5 px-3 text-sm">React.js</Badge>
                <Badge className="py-1.5 px-3 text-sm">Node.js</Badge>
                <Badge className="py-1.5 px-3 text-sm">Express.js</Badge>
                <Badge className="py-1.5 px-3 text-sm">Tableau</Badge>
                <Badge className="py-1.5 px-3 text-sm">Figma</Badge>
              </div>
              
              <h3 className="text-xl font-semibold mt-10 mb-6">Certifications</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Certified Scrum Product Owner (CSPO)</h4>
                  <p className="text-muted-foreground">Scrum Alliance (Nov. 2024)</p>
                </div>
                <div>
                  <h4 className="font-medium">Certified System Administrator (CSA)</h4>
                  <p className="text-muted-foreground">ServiceNow (Mar. 2023)</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mt-10 mb-6">Awards & Recognition</h3>
              <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                <li>Appreciated by VP for Hackathon at CDW on creating a ServiceNow module for its cost-saving potential.</li>
                <li>Received Spot Award for exceptional performance on working with multiple deliverables at a time at CDW.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-xl font-bold">Ashwin Ravichandran</h2>
              <p className="text-muted-foreground">Product Manager & ServiceNow Specialist</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/ashwin-ravi-chandran/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:ashwinthemechon@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </a>
              <a href="tel:7166120408" className="text-muted-foreground hover:text-primary transition-colors">
                (716) 612-0408
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Ashwin Ravichandran. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
