
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ExternalLink, ArrowLeft, Linkedin, Mail, Github, ArrowRight, 
  Sparkles, Star, Briefcase, GraduationCap, Code, Rocket, 
  Building, Cpu, Database, Monitor 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingElement from "@/components/animations/FloatingElement";
import MovingObject from "@/components/animations/MovingObject";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import WarmOffice3D from "@/components/backgrounds/WarmOffice3D";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [elevatorPosition, setElevatorPosition] = useState<number>(0);
  const { toast } = useToast();
  
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
  };
  const [activeCategory, setActiveCategory] = useState("Product Management");

  const skillsData = {
    "Product Management": [
      "Product Strategy & Vision",
      "Market Research & Competitor Analysis",
      "Product Documentation",
      "Roadmapping",
      "Agile & Scrum Methodologies",
      "Requirements Gathering & User Stories",
      "Sprint Planning",
      "Cross-functional Collaboration",
      "Wireframing & Prototyping (Figma)",
      "A/B Testing",
    ],
    "Technical Skills": [
      "Data Visualization (Tableau)",
      "Web Application Development (HTML, CSS, JavaScript, ReactJS, Node.js, Express.js, Figma)",
      "ServiceNow (System Administration, ITSM, CSM, Scripting, Workflow, Scheduled Jobs)",
    ],
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
      
      const aboutSectionHeight = sectionRefs.about.current?.offsetHeight || 0;
      const experienceSectionTop = sectionRefs.experience.current?.offsetTop || 0;
      
      if (scrollTop >= aboutSectionHeight && scrollTop <= experienceSectionTop) {
        const elevatorProgress = (scrollTop - aboutSectionHeight) / (experienceSectionTop - aboutSectionHeight);
        setElevatorPosition(elevatorProgress);
      }
      
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-red-950 text-foreground overflow-hidden relative">
      {/* 3D Background */}
      <WarmOffice3D scroll={scrollProgress} className="z-0" />
      
      <div 
        className="fixed left-0 top-0 w-full h-screen pointer-events-none z-10"
        style={{
          opacity: elevatorPosition > 0 ? 1 : 0,
          transition: "opacity 0.5s ease"
        }}
      >
        <div className="absolute left-1/2 top-0 w-[40%] h-full -translate-x-1/2 bg-gradient-to-b from-orange-800/30 to-orange-800/5 backdrop-blur-sm rounded-lg overflow-hidden">
          <div className="absolute left-0 top-0 w-2 h-full bg-orange-400/20"></div>
          <div className="absolute right-0 top-0 w-2 h-full bg-orange-400/20"></div>
          
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i}
              className="absolute left-1 w-[calc(100%-2px)] h-[1px] bg-orange-400/30"
              style={{ top: `${i * 10}%` }}
            />
          ))}
          
          <div 
            className="absolute left-1/2 -translate-x-1/2 w-[90%] h-[30%] bg-orange-800/20 border border-orange-400/20 rounded-lg flex items-center justify-center transition-all duration-1000 ease-in-out animate-glow"
            style={{ top: `${elevatorPosition * 70}%` }}
          >
            <Briefcase className="h-16 w-16 text-orange-400/70" />
          </div>
        </div>
      </div>

      <nav className="fixed top-0 w-full bg-orange-50/80 dark:bg-orange-950/80 backdrop-blur-md z-50 border-b border-orange-200 dark:border-orange-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-orange-600 dark:text-orange-300 hover:text-orange-800 dark:hover:text-orange-100 transition-colors">
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
                    ? "text-orange-600 dark:text-orange-300" 
                    : "text-muted-foreground hover:text-orange-600 dark:hover:text-orange-300"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/ashwin-ravi-chandran/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" 
               className="hover:scale-110 transition-transform">
              <Linkedin className="h-5 w-5 text-orange-600 dark:text-orange-300 hover:text-orange-700 dark:hover:text-orange-200 transition-colors" />
            </a>
            <button onClick={copyEmail} aria-label="Email" className="hover:scale-110 transition-transform">
              <Mail className="h-5 w-5 text-orange-600 dark:text-orange-300 hover:text-orange-700 dark:hover:text-orange-200 transition-colors" />
            </button>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" 
               className="hover:scale-110 transition-transform">
              <Github className="h-5 w-5 text-orange-600 dark:text-orange-300 hover:text-orange-700 dark:hover:text-orange-200 transition-colors" />
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24 pb-16 relative z-20">
        <section ref={sectionRefs.about} className="min-h-[90vh] flex items-center py-16 md:py-24 relative">
          <div className="absolute inset-0 pointer-events-none">
            <FloatingElement className="absolute top-[40%] right-[15%] text-orange-600/20 dark:text-orange-400/20" speed="slow">
              <Building className="h-32 w-32" />
            </FloatingElement>
            <MovingObject direction="horizontal" className="absolute top-[30%] right-[10%] text-orange-600/20 dark:text-orange-400/20" speed="slow">
              <Code className="h-20 w-20" />
            </MovingObject>
            <MovingObject direction="vertical" className="absolute bottom-[20%] left-[5%] text-orange-600/20 dark:text-orange-400/20" speed="medium">
              <Rocket className="h-16 w-16" />
            </MovingObject>
          </div>
          
          <div className="animate-fade-in max-w-4xl z-10 backdrop-blur-sm bg-white/30 dark:bg-black/20 p-8 rounded-xl border border-orange-200/30 dark:border-orange-700/30">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-200 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Product Manager & ServiceNow Specialist
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <AnimatedGradientText 
                className="text-5xl md:text-7xl"
                fromColor="from-orange-700"
                viaColor="via-red-500"
                toColor="to-orange-600"
                animationDuration="10s"
              >
                Ashwin Ravichandran
              </AnimatedGradientText>
            </h1>
            <h2 className="text-2xl md:text-3xl text-orange-700 dark:text-orange-300 mb-8 opacity-85">
              Crafting digital experiences that matter
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
              Certified Product Manager with a masters in MIS and 3 years of experience in ServiceNow, Web development, Enterprise software
              development, Agile, and business process optimization. Passionate about leveraging technology to solve complex problems and improve business workflows.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 transition-all transform hover:scale-105 shadow-md">
                <a href="mailto:ashwinthemechon@gmail.com" className="flex items-center gap-2">
                  Contact Me
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-orange-300 dark:border-orange-700 text-orange-600 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900 transition-all transform hover:scale-105">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-vertical">
              <button 
                onClick={() => scrollToSection('experience')} 
                className="text-orange-600 dark:text-orange-300 opacity-80 hover:opacity-100 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section ref={sectionRefs.experience} className="py-16 min-h-screen flex flex-col justify-center relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-orange-100/50 to-transparent dark:from-orange-900/30 rounded-lg transform perspective-1000">
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-orange-200 to-orange-100 dark:from-orange-800 dark:to-orange-900 rounded-t-lg transform-gpu rotate-x-10">
                <div className="absolute top-[10%] left-[10%] w-20 h-14 bg-white/60 dark:bg-orange-950/60 rounded-sm shadow-sm"></div>
                <div className="absolute top-[15%] left-[25%] w-14 h-14 bg-orange-500/20 dark:bg-orange-500/30 rounded-full shadow-sm"></div>
                <div className="absolute top-[10%] right-[20%] w-30 h-10 bg-gray-200/60 dark:bg-gray-800/60 rounded-md shadow-sm"></div>
              </div>
            </div>
          </div>
          
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-10 relative z-10">
              <FloatingElement speed="medium">
                <Briefcase className="h-7 w-7 text-orange-500 dark:text-orange-300" />
              </FloatingElement>
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 dark:text-orange-200">Experience</h2>
            </div>
          </ScrollReveal>
          
          <div className="space-y-12 relative z-10">
            <ScrollReveal>
              <div className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-10 hover:scale-[1.01] transition-transform duration-300">
                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg shadow-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-300/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 relative z-10">CDW Technologies</h3>
                  <p className="text-orange-600/70 dark:text-orange-400 relative z-10">Oct 2022 - May 2024</p>
                  <p className="text-orange-600/70 dark:text-orange-400 relative z-10">Chennai, India</p>
                </div>
                <div className="bg-white dark:bg-orange-900/20 p-6 rounded-lg shadow-sm border border-orange-100 dark:border-orange-800 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-300/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></div>
                  <h4 className="text-lg font-medium mb-3 text-orange-700 dark:text-orange-300 relative z-10">Associate Consultant – Product Manager</h4>
                  <ul className="list-disc list-outside ml-5 space-y-3 text-orange-700/80 dark:text-orange-300/80 relative z-10">
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
                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg shadow-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-300/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 relative z-10">Infosys Limited</h3>
                  <p className="text-orange-600/70 dark:text-orange-400 relative z-10">Oct 2021 - Oct 2022</p>
                  <p className="text-orange-600/70 dark:text-orange-400 relative z-10">Chennai, India</p>
                </div>
                <div className="bg-white dark:bg-orange-900/20 p-6 rounded-lg shadow-sm border border-orange-100 dark:border-orange-800 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-300/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></div>
                  <h4 className="text-lg font-medium mb-3 text-orange-700 dark:text-orange-300 relative z-10">Systems Engineer</h4>
                  <ul className="list-disc list-outside ml-5 space-y-3 text-orange-700/80 dark:text-orange-300/80 relative z-10">
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
                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg shadow-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-300/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 relative z-10">Infosys Limited</h3>
                  <p className="text-orange-600/70 dark:text-orange-400 relative z-10">May 2021 - Oct 2021</p>
                  <p className="text-orange-600/70 dark:text-orange-400 relative z-10">Chennai, India</p>
                </div>
                <div className="bg-white dark:bg-orange-900/20 p-6 rounded-lg shadow-sm border border-orange-100 dark:border-orange-800 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-300/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></div>
                  <h4 className="text-lg font-medium mb-3 text-orange-700 dark:text-orange-300 relative z-10">Systems Engineer Trainee</h4>
                  <ul className="list-disc list-outside ml-5 space-y-3 text-orange-700/80 dark:text-orange-300/80 relative z-10">
                    <li>Completed MERN stack training, building a functional e-commerce application and succeeding 100% of project objectives.</li>
                    <li>Mastered full-stack development with React.js, Node.js, and Express.js, adopting Scrum and contributing to 2 Agile sprints.</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section ref={sectionRefs.education} className="py-16 min-h-screen flex flex-col justify-center relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-[10%] left-0 w-full h-[80%] flex">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="h-full flex-1 border-r border-orange-300/20 dark:border-orange-700/20"
                    style={{
                      background: `linear-gradient(to bottom, rgba(251, 146, 60, ${0.05 + (i % 5) * 0.01}), rgba(251, 146, 60, ${0.02 + (i % 3) * 0.01}))`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-10 relative z-10">
              <FloatingElement speed="medium">
                <GraduationCap className="h-7 w-7 text-orange-500 dark:text-orange-300" />
              </FloatingElement>
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 dark:text-orange-200">Education</h2>
            </div>
          </ScrollReveal>
          
          <div className="space-y-12 relative z-10">
            <ScrollReveal>
              <div className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-10 hover:scale-[1.01] transition-transform duration-300">
                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg shadow-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-300/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 relative z-10">University at Buffalo</h3>
                  <p className="text-orange-600/70 dark:text-orange-400 relative z-10">Expected May 2025</p>
                  <p className="text-orange-600/70 dark:text-orange-400 relative z-10">Buffalo, NY</p>
                </div>
                <div className="bg-white dark:bg-orange-900/20 p-6 rounded-lg shadow-sm border border-orange-100 dark:border-orange-800 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-300/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></div>
                  <h4 className="text-lg font-medium mb-2 text-orange-700 dark:text-orange-300 relative z-10">Master of Science, Management Information Systems</h4>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-10 hover:scale-[1.01] transition-transform duration-300">
                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg shadow-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-300/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 relative z-10">Velammal Institute of Technology</h3>
                  <p className="text-orange-600/70 dark:text-orange-400 relative z-10">Oct 2020</p>
                  <p className="text-orange-600/70 dark:text-orange-400 relative z-10">India</p>
                </div>
                <div className="bg-white dark:bg-orange-900/20 p-6 rounded-lg shadow-sm border border-orange-100 dark:border-orange-800 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-300/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></div>
                  <h4 className="text-lg font-medium mb-2 text-orange-700 dark:text-orange-300 relative z-10">Bachelor of Engineering, Mechanical Engineering</h4>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section ref={sectionRefs.projects} className="py-16 min-h-screen flex flex-col justify-center relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-50/30 to-orange-100/10 dark:from-orange-900/10 dark:to-orange-800/5">
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={`col-${i}`} className="border-l border-orange-300/10 dark:border-orange-700/10 h-full" />
                ))}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={`row-${i}`} className="border-t border-orange-300/10 dark:border-orange-700/10 w-full" />
                ))}
              </div>
              
              <FloatingElement className="absolute top-[20%] left-[10%] opacity-20" speed="slow">
                <div className="w-16 h-16 rounded-lg bg-orange-500/20"></div>
              </FloatingElement>
              <FloatingElement className="absolute top-[40%] right-[20%] opacity-20" speed="medium" delay="0.5s">
                <div className="w-24 h-24 rounded-full bg-orange-400/20"></div>
              </FloatingElement>
              <FloatingElement className="absolute bottom-[20%] left-[30%] opacity-20" speed="fast" delay="1s">
                <div className="w-20 h-20 rounded-md bg-orange-600/20"></div>
              </FloatingElement>
            </div>
          </div>
          
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-10 relative z-10">
              <FloatingElement speed="medium">
                <Code className="h-7 w-7 text-orange-500 dark:text-orange-300" />
              </FloatingElement>
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 dark:text-orange-200">Projects</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <ScrollReveal animation="fade-left">
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-br from-white to-orange-50 dark:from-orange-900/50 dark:to-orange-800/30 border-orange-100 dark:border-orange-700 h-full">
                <CardContent className="p-6 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-300/10 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500"></div>
                  <FloatingElement className="absolute -top-6 -right-6 text-orange-200 dark:text-orange-900 opacity-30" speed="slow">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400/30 to-orange-600/20"></div>
                  </FloatingElement>
                  
                  <h3 className="text-xl font-semibold mb-3 text-orange-700 dark:text-orange-300 relative z-10">Aidvoca - Legal Aid Platform</h3>
                  <p className="text-orange-700/80 dark:text-orange-300/80 mb-4 relative z-10">
                    Led the development of "Aidvoca", a legal aid platform, by defining product strategy and roadmap to improve accessibility for
                    low-income users. Conducted user research for persona development and ensured stakeholder alignment through iterative
                    prototyping in Figma.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700">Product Strategy</Badge>
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700">Figma</Badge>
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700">User Research</Badge>
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700">UX Design</Badge>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-right" delay={200}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-br from-white to-orange-50 dark:from-orange-900/50 dark:to-orange-800/30 border-orange-100 dark:border-orange-700 h-full">
                <CardContent className="p-6 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-300/10 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500"></div>
                  <FloatingElement className="absolute -top-6 -right-6 text-orange-200 dark:text-orange-900 opacity-30" speed="slow">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400/30 to-orange-600/20"></div>
                  </FloatingElement>
                  
                  <h3 className="text-xl font-semibold mb-3 text-orange-700 dark:text-orange-300 relative z-10">HR Automation System</h3>
                  <p className="text-orange-700/80 dark:text-orange-300/80 mb-4 relative z-10">
                    Led a cross-functional team to develop an HR automation system that streamlined employee onboarding, time-off requests, and performance reviews. Reduced manual processing time by 90%, saving 5 hours per week.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700">React.js</Badge>
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700">Node.js</Badge>
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700">MongoDB</Badge>
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700">Agile</Badge>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-left" delay={300}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-br from-white to-orange-50 dark:from-orange-900/50 dark:to-orange-800/30 border-orange-100 dark:border-orange-700 h-full">
                <CardContent className="p-6 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-300/10 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500"></div>
                  <FloatingElement className="absolute -top-6 -right-6 text-orange-200 dark:text-orange-900 opacity-30" speed="slow">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400/30 to-orange-600/20"></div>
                  </FloatingElement>
                  
                  <h3 className="text-xl font-semibold mb-3 text-orange-700 dark:text-orange-300 relative z-10">ServiceNow ITSM Implementation</h3>
                  <p className="text-orange-700/80 dark:text-orange-300/80 mb-4 relative z-10">
                    Managed ServiceNow ITSM implementation for a Fortune 500 client, configuring incident, problem, and change management modules. Optimized system response time by 25% and improved service reliability.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700">ServiceNow</Badge>
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700">ITSM</Badge>
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700">JavaScript</Badge>
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700">Integration</Badge>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-right" delay={400}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-br from-white to-orange-50 dark:from-orange-900/50 dark:to-orange-800/30 border-orange-100 dark:border-orange-700 h-full">
                <CardContent className="p-6 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-300/10 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500"></div>
                  <FloatingElement className="absolute -top-6 -right-6 text-orange-200 dark:text-orange-900 opacity-30" speed="slow">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400/30 to-orange-600/20"></div>
                  </FloatingElement>
                  
                  <h3 className="text-xl font-semibold mb-3 text-orange-700 dark:text-orange-300 relative z-10">E-commerce Dashboard</h3>
                  <p className="text-orange-700/80 dark:text-orange-300/80 mb-4 relative z-10">
                    Built an interactive e-commerce analytics dashboard that visualized sales data, customer behavior, and inventory metrics. Improved decision-making and boosted user engagement by 20%.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700">React.js</Badge>
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700">Redux</Badge>
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700">D3.js</Badge>
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700">REST API</Badge>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>
        <section className="skills">
        <h2 className="section-title">Skills</h2>
      <div className="skills-categories">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            className={`category-btn ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Skills List */}
      <div className="skills-list">
        {skillsData[activeCategory].map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
      </main>
    </div>
  );
};

export default Portfolio;
