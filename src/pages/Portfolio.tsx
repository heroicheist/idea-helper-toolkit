
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowLeft, Linkedin, Mail, Github, ArrowRight, Sparkles, Star, Briefcase, GraduationCap, Code, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingElement from "@/components/animations/FloatingElement";
import MovingObject from "@/components/animations/MovingObject";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const { toast } = useToast();
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

  const copyEmail = () => {
    navigator.clipboard.writeText("ashwinthemechon@gmail.com");
    toast({
      title: "Email copied to clipboard",
      description: "Ready to paste anywhere you need!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-950 text-foreground overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingElement className="absolute top-[20%] left-[5%] opacity-20" speed="slow">
          <div className="w-40 h-40 rounded-full bg-blue-300/20 backdrop-blur-sm"></div>
        </FloatingElement>
        <FloatingElement className="absolute bottom-[30%] right-[8%] opacity-20" delay="1s" speed="medium">
          <div className="w-32 h-32 rounded-full bg-blue-400/20 backdrop-blur-sm"></div>
        </FloatingElement>
        <FloatingElement className="absolute top-[60%] left-[15%] opacity-20" delay="0.5s" speed="fast">
          <div className="w-24 h-24 rounded-full bg-blue-500/20 backdrop-blur-sm"></div>
        </FloatingElement>
        
        <MovingObject direction="horizontal" className="absolute top-[40%] left-[70%] opacity-20" speed="slow">
          <div className="w-16 h-16 rounded-full bg-blue-600/30 backdrop-blur-sm"></div>
        </MovingObject>
        <MovingObject direction="vertical" className="absolute top-[80%] left-[30%] opacity-20" speed="medium">
          <div className="w-16 h-16 rounded-full bg-blue-600/30 backdrop-blur-sm"></div>
        </MovingObject>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-blue-950/80 backdrop-blur-md z-50 border-b border-blue-200 dark:border-blue-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {Object.keys(sectionRefs).map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium capitalize transition-all transform hover:scale-105 ${
                  activeSection === section 
                    ? "text-blue-600 dark:text-blue-300" 
                    : "text-muted-foreground hover:text-blue-600 dark:hover:text-blue-300"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/ashwin-ravi-chandran/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" 
               className="hover:scale-110 transition-transform">
              <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 transition-colors" />
            </a>
            <button onClick={copyEmail} aria-label="Email" className="hover:scale-110 transition-transform">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 transition-colors" />
            </button>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" 
               className="hover:scale-110 transition-transform">
              <Github className="h-5 w-5 text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 transition-colors" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <section ref={sectionRefs.about} className="min-h-[90vh] flex items-center py-16 md:py-24 relative">
          <div className="absolute inset-0 pointer-events-none">
            <MovingObject direction="horizontal" className="absolute top-[30%] right-[10%] text-blue-600/20 dark:text-blue-400/20" speed="slow">
              <Code className="h-20 w-20" />
            </MovingObject>
            <MovingObject direction="vertical" className="absolute bottom-[20%] left-[5%] text-blue-600/20 dark:text-blue-400/20" speed="medium">
              <Rocket className="h-16 w-16" />
            </MovingObject>
          </div>
          
          <div className="animate-fade-in max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Product Manager & ServiceNow Specialist
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <AnimatedGradientText className="text-5xl md:text-7xl">
                Ashwin Ravichandran
              </AnimatedGradientText>
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-700 dark:text-blue-300 mb-8 opacity-85">
              Crafting digital experiences that matter
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
              Certified Product Manager with a masters in MIS and 3 years of experience in ServiceNow, Web development, Enterprise software
              development, Agile, and business process optimization. Passionate about leveraging technology to solve complex problems and improve business workflows.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-105 shadow-md">
                <a href="mailto:ashwinthemechon@gmail.com" className="flex items-center gap-2">
                  Contact Me
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all transform hover:scale-105">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-vertical">
              <button 
                onClick={() => scrollToSection('experience')} 
                className="text-blue-600 dark:text-blue-300 opacity-80 hover:opacity-100 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={sectionRefs.experience} className="py-16 min-h-screen flex flex-col justify-center">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-10">
              <FloatingElement speed="medium">
                <Briefcase className="h-7 w-7 text-blue-500 dark:text-blue-300" />
              </FloatingElement>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 dark:text-blue-200">Experience</h2>
            </div>
          </ScrollReveal>
          
          <div className="space-y-12">
            <ScrollReveal>
              <div className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-10 hover:scale-[1.01] transition-transform duration-300">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg shadow-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-300/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 relative z-10">CDW Technologies</h3>
                  <p className="text-blue-600/70 dark:text-blue-400 relative z-10">Oct 2022 - May 2024</p>
                  <p className="text-blue-600/70 dark:text-blue-400 relative z-10">Chennai, India</p>
                </div>
                <div className="bg-white dark:bg-blue-900/20 p-6 rounded-lg shadow-sm border border-blue-100 dark:border-blue-800 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-300/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></div>
                  <h4 className="text-lg font-medium mb-3 text-blue-700 dark:text-blue-300 relative z-10">Associate Consultant – Product Manager</h4>
                  <ul className="list-disc list-outside ml-5 space-y-3 text-blue-700/80 dark:text-blue-300/80 relative z-10">
                    <li>Implemented ServiceNow roadmap for Enterprise clients to elevate digital experience, worked in Script Includes, Client Scripts, Business Rules, and Workflows in ITSM and VRM modules, optimized system response time by 25%, elevated service reliability.</li>
                    <li>Led requirement-gathering with stakeholders, managed product backlog, and conducted User Acceptance Testing (UAT) to refine workflows and test custom configurations.</li>
                    <li>Worked on incident and problem management modules, ensuring seamless workflow, and system performance. Led Configuration planning for ServiceNow Implementation to align business needs and improve operational efficiency.</li>
                    <li>Led development of HR automation tools, defined product vision and roadmaps to streamline HR workflows, worked on feature prioritization, attained a 90% improvement in efficiency, and cut manual processing time from 5 hours to under 15 minutes per week of HR tasks, using a tech stack of Node.js, React, and JavaScript.</li>
                    <li>Facilitated business unit support by mentoring 8+ interns, executed recruitment interviews.</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-10 hover:scale-[1.01] transition-transform duration-300">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg shadow-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-300/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 relative z-10">Infosys Limited</h3>
                  <p className="text-blue-600/70 dark:text-blue-400 relative z-10">Oct 2021 - Oct 2022</p>
                  <p className="text-blue-600/70 dark:text-blue-400 relative z-10">Chennai, India</p>
                </div>
                <div className="bg-white dark:bg-blue-900/20 p-6 rounded-lg shadow-sm border border-blue-100 dark:border-blue-800 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-300/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></div>
                  <h4 className="text-lg font-medium mb-3 text-blue-700 dark:text-blue-300 relative z-10">Systems Engineer</h4>
                  <ul className="list-disc list-outside ml-5 space-y-3 text-blue-700/80 dark:text-blue-300/80 relative z-10">
                    <li>Constructed dynamic dashboard application with better coding standards, collaborated with an 8-member product team with cross-functional team communication to launch 10+ new features using React.js, Redux, and Axios, boosting user engagement by 20%.</li>
                    <li>Developed customer onboarding application with multiple data validation, reducing data entry errors across forms by 70%.</li>
                    <li>Optimized API integration through asynchronous programming, decreased errors by 30%, and enhanced user experience.</li>
                    <li>Collaborated with a Scrum team to ensure timely delivery of features, fostering continuous improvement and enhancing product outcomes through iterative sprints.</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-10 hover:scale-[1.01] transition-transform duration-300">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg shadow-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-300/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 relative z-10">Infosys Limited</h3>
                  <p className="text-blue-600/70 dark:text-blue-400 relative z-10">May 2021 - Oct 2021</p>
                  <p className="text-blue-600/70 dark:text-blue-400 relative z-10">Chennai, India</p>
                </div>
                <div className="bg-white dark:bg-blue-900/20 p-6 rounded-lg shadow-sm border border-blue-100 dark:border-blue-800 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-300/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></div>
                  <h4 className="text-lg font-medium mb-3 text-blue-700 dark:text-blue-300 relative z-10">Systems Engineer Trainee</h4>
                  <ul className="list-disc list-outside ml-5 space-y-3 text-blue-700/80 dark:text-blue-300/80 relative z-10">
                    <li>Completed MERN stack training, building a functional e-commerce application and succeeding 100% of project objectives.</li>
                    <li>Mastered full-stack development with React.js, Node.js, and Express.js, adopting Scrum and contributing to 2 Agile sprints.</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Education Section */}
        <section ref={sectionRefs.education} className="py-16 min-h-screen flex flex-col justify-center">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-10">
              <FloatingElement speed="medium">
                <GraduationCap className="h-7 w-7 text-blue-500 dark:text-blue-300" />
              </FloatingElement>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 dark:text-blue-200">Education</h2>
            </div>
          </ScrollReveal>
          
          <div className="space-y-12">
            <ScrollReveal>
              <div className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-10 hover:scale-[1.01] transition-transform duration-300">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg shadow-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-300/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 relative z-10">University at Buffalo</h3>
                  <p className="text-blue-600/70 dark:text-blue-400 relative z-10">Expected May 2025</p>
                  <p className="text-blue-600/70 dark:text-blue-400 relative z-10">Buffalo, NY</p>
                </div>
                <div className="bg-white dark:bg-blue-900/20 p-6 rounded-lg shadow-sm border border-blue-100 dark:border-blue-800 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-300/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></div>
                  <h4 className="text-lg font-medium mb-2 text-blue-700 dark:text-blue-300 relative z-10">Master of Science, Management Information Systems</h4>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-10 hover:scale-[1.01] transition-transform duration-300">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg shadow-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-300/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 relative z-10">Velammal Institute of Technology</h3>
                  <p className="text-blue-600/70 dark:text-blue-400 relative z-10">Oct 2020</p>
                  <p className="text-blue-600/70 dark:text-blue-400 relative z-10">India</p>
                </div>
                <div className="bg-white dark:bg-blue-900/20 p-6 rounded-lg shadow-sm border border-blue-100 dark:border-blue-800 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-300/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></div>
                  <h4 className="text-lg font-medium mb-2 text-blue-700 dark:text-blue-300 relative z-10">Bachelor of Engineering, Mechanical Engineering</h4>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={sectionRefs.projects} className="py-16 min-h-screen flex flex-col justify-center">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-10">
              <FloatingElement speed="medium">
                <Code className="h-7 w-7 text-blue-500 dark:text-blue-300" />
              </FloatingElement>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 dark:text-blue-200">Projects</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal animation="fade-left">
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-br from-white to-blue-50 dark:from-blue-900/50 dark:to-blue-800/30 border-blue-100 dark:border-blue-700 h-full">
                <CardContent className="p-6 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-300/10 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500"></div>
                  <FloatingElement className="absolute -top-6 -right-6 text-blue-200 dark:text-blue-900 opacity-30" speed="slow">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/30 to-blue-600/20"></div>
                  </FloatingElement>
                  
                  <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300 relative z-10">Aidvoca - Legal Aid Platform</h3>
                  <p className="text-blue-700/80 dark:text-blue-300/80 mb-4 relative z-10">
                    Led the development of "Aidvoca", a legal aid platform, by defining product strategy and roadmap to improve accessibility for
                    low-income users. Conducted user research for persona development and ensured stakeholder alignment through iterative
                    prototyping in Figma.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700">Product Strategy</Badge>
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700">Figma</Badge>
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700">User Research</Badge>
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700">Prototyping</Badge>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-right" delay={200}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-br from-white to-blue-50 dark:from-blue-900/50 dark:to-blue-800/30 border-blue-100 dark:border-blue-700 h-full">
                <CardContent className="p-6 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-300/10 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500"></div>
                  <FloatingElement className="absolute -bottom-6 -left-6 text-blue-200 dark:text-blue-900 opacity-30" speed="slow" delay="0.5s">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/30 to-blue-600/20"></div>
                  </FloatingElement>
                  
                  <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300 relative z-10">Project M&M - Process Improvement</h3>
                  <p className="text-blue-700/80 dark:text-blue-300/80 mb-4 relative z-10">
                    Led the "Project M&M" initiative using the DMAIC methodology to improve process efficiency. Conducted root cause analysis,
                    developed a data-driven process improvement plan, and implemented control strategies to address customer complaints on product
                    packaging and quality.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700">DMAIC Methodology</Badge>
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700">Process Improvement</Badge>
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700">Root Cause Analysis</Badge>
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700">Stakeholder Management</Badge>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={sectionRefs.skills} className="py-16 min-h-screen flex flex-col justify-center">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-10">
              <FloatingElement speed="medium">
                <Star className="h-7 w-7 text-blue-500 dark:text-blue-300" />
              </FloatingElement>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 dark:text-blue-200">Skills & Certifications</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-10">
            <ScrollReveal animation="fade-right">
              <div className="bg-white dark:bg-blue-900/20 p-6 rounded-lg shadow-sm border border-blue-100 dark:border-blue-800 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-300/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <h3 className="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-300 relative z-10">Product Management Skills</h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {["Product Strategy & Vision", "Market Research", "Competitor Analysis", "Product Documentation", "Road Mapping", "Agile & Scrum", "Requirements Gathering", "User Stories", "Sprint Planning", "Cross-functional Collaboration", "Wireframing", "Prototyping (Figma)", "A/B Testing"].map((skill, index) => (
                    <Badge 
                      key={skill} 
                      className="py-1.5 px-3 text-sm bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors"
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        animation: "scale-in 0.5s ease-out forwards",
                        opacity: 0
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="bg-white dark:bg-blue-900/20 p-6 rounded-lg shadow-sm border border-blue-100 dark:border-blue-800 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-300/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <h3 className="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-300 relative z-10">Technical Skills</h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {["ServiceNow", "ITSM", "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "Tableau", "Figma"].map((skill, index) => (
                    <Badge 
                      key={skill} 
                      className="py-1.5 px-3 text-sm bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors"
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        animation: "scale-in 0.5s ease-out forwards",
                        opacity: 0
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mt-10 mb-6 text-blue-700 dark:text-blue-300 relative z-10">Certifications</h3>
                <div className="space-y-4 relative z-10">
                  <div className="p-4 bg-blue-50/50 dark:bg-blue-900/30 rounded-lg transform transition-transform hover:scale-[1.01] border border-blue-100 dark:border-blue-800">
                    <h4 className="font-medium text-blue-700 dark:text-blue-300">Certified Scrum Product Owner (CSPO)</h4>
                    <p className="text-blue-600/70 dark:text-blue-400">Scrum Alliance (Nov. 2024)</p>
                  </div>
                  <div className="p-4 bg-blue-50/50 dark:bg-blue-900/30 rounded-lg transform transition-transform hover:scale-[1.01] border border-blue-100 dark:border-blue-800">
                    <h4 className="font-medium text-blue-700 dark:text-blue-300">Certified System Administrator (CSA)</h4>
                    <p className="text-blue-600/70 dark:text-blue-400">ServiceNow (Mar. 2023)</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-10 mb-6 text-blue-700 dark:text-blue-300 relative z-10">Awards & Recognition</h3>
                <ul className="list-disc list-outside ml-5 space-y-2 text-blue-700/80 dark:text-blue-300/80 relative z-10">
                  <li>Appreciated by VP for Hackathon at CDW on creating a ServiceNow module for its cost-saving potential.</li>
                  <li>Received Spot Award for exceptional performance on working with multiple deliverables at a time at CDW.</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300">Ashwin Ravichandran</h2>
              <p className="text-blue-600/70 dark:text-blue-400">Product Manager & ServiceNow Specialist</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/ashwin-ravi-chandran/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 transition-colors flex items-center gap-2 hover:scale-105 transform transition-transform">
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <button onClick={copyEmail} className="text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 transition-colors flex items-center gap-2 hover:scale-105 transform transition-transform">
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </button>
              <a href="tel:7166120408" className="text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 transition-colors hover:scale-105 transform transition-transform">
                (716) 612-0408
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-blue-600/70 dark:text-blue-400">
            <p>© {new Date().getFullYear()} Ashwin Ravichandran. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
