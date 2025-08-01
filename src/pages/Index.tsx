import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Play,
  MapPin,
  Calendar,
  Code,
  Database,
  Smartphone,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "ABFRL Brand Apps",
      description:
        "Developed and maintained brand-specific e-commerce mobile applications for Louis Philippe, Van Heusen, and Peter England (6 apps on Play Store and App Store). Managed app hosting, compliance, unit testing, and third-party SDK integrations.",
      tech: ["React Native", "Redux", "Firebase", "Analytics SDKs", "Jest"],
      github: "",
      demo: "",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "ABFRL Super App",
      description:
        "Leading development of unified multi-brand e-commerce platform integrating 7 brands into single React Native application. Designed scalable architecture with dynamic microsites, unified cart/checkout flows, and CodePush OTA updates.",
      tech: ["React Native", "TypeScript", "Redux Toolkit", "CodePush", "Justpay"],
      github: "",
      demo: "",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Herb Aurora",
      description:
        "Full-stack e-commerce platform for 100% natural Tamil herbal skincare products. Features OTP authentication, product catalog, cart management, Razorpay integration, order tracking, and mobile-first responsive design.",
      tech: ["Next.js", "TypeScript", "Firebase", "Razorpay", "SCSS"],
      github: "",
      demo: "",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    },
  ];

  const skills = [
    // Frontend
    { name: "HTML", icon: "🌐", category: "Frontend" },
    { name: "CSS", icon: "🎨", category: "Frontend" },
    { name: "JavaScript", icon: "🟨", category: "Frontend" },
    { name: "TypeScript", icon: "🔷", category: "Frontend" },
    { name: "React.js", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "▲", category: "Frontend" },
    { name: "SCSS", icon: "💅", category: "Frontend" },
    { name: "Tailwind", icon: "🎯", category: "Frontend" },
    { name: "Redux Toolkit", icon: "🔄", category: "Frontend" },
    { name: "Zustand", icon: "🐻", category: "Frontend" },
    
    // Mobile Development
    { name: "React Native", icon: "📱", category: "Mobile Development" },
    { name: "iOS Development", icon: "🍎", category: "Mobile Development" },
    { name: "Android Development", icon: "🤖", category: "Mobile Development" },
    { name: "Mobile Application Development", icon: "📲", category: "Mobile Development" },
    
    // Backend & APIs
    { name: "Node.js", icon: "🟢", category: "Backend & APIs" },
    { name: "Express.js", icon: "🚀", category: "Backend & APIs" },
    { name: "MongoDB", icon: "🍃", category: "Backend & APIs" },
    { name: "Firebase", icon: "🔥", category: "Backend & APIs" },
    
    // Analytics
    { name: "CleverTap", icon: "📊", category: "Analytics" },
    { name: "Adobe", icon: "🔴", category: "Analytics" },
    { name: "Google Analytics", icon: "📈", category: "Analytics" },
    { name: "AppsFlyer", icon: "✈️", category: "Analytics" },
    { name: "Adjust", icon: "⚙️", category: "Analytics" },
    
    // Tools & Others
    { name: "Git", icon: "📝", category: "Tools & Others" },
    { name: "GitHub", icon: "🐙", category: "Tools & Others" },
    { name: "GitLab", icon: "🦊", category: "Tools & Others" },
    { name: "Jest", icon: "🃏", category: "Tools & Others" },
    { name: "Vite", icon: "⚡", category: "Tools & Others" },
    { name: "VS Code", icon: "💻", category: "Tools & Others" },
    { name: "Cursor", icon: "🖱️", category: "Tools & Others" },
    { name: "Vercel", icon: "▲", category: "Tools & Others" },
    { name: "Zira", icon: "🎫", category: "Tools & Others" },
    { name: "Agile Development", icon: "🔄", category: "Tools & Others" },
    { name: "API Integration", icon: "🔗", category: "Tools & Others" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-green-600">Danies SDM</div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Contact
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <span
                  className={`block h-0.5 w-6 bg-gray-600 transition-all ${
                    isMenuOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-gray-600 mt-1 transition-all ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-gray-600 mt-1 transition-all ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-green-600 transition-colors py-2"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-green-600 transition-colors py-2"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-green-600 transition-colors py-2"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="text-gray-700 hover:text-green-600 transition-colors py-2"
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-green-600 transition-colors py-2"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                DS
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 animate-fade-in">
              Danies SDM
            </h1>

            <h2
              className="text-2xl md:text-3xl text-green-600 font-semibold mb-6 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              React Native Developer | Full Stack Mobile & Web Engineer
            </h2>

            <p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              I build smooth, high-performance mobile apps with React Native,
              combining 3+ years of experience with cutting-edge technologies to
              deliver exceptional user experiences.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg rounded-full"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=400&fit=crop"
                  alt="Developer workspace"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-600">Based in India</span>
                <Calendar className="h-5 w-5 text-green-600 ml-6 mr-2" />
                <span className="text-gray-600">3+ Years Experience</span>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate React Native developer with over 3 years of
                experience building high-quality mobile applications. Currently
                working at <strong className="text-green-600">ABFRL</strong>, I
                specialize in creating seamless cross-platform mobile
                experiences that delight users and drive business growth.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise spans the entire mobile development lifecycle, from
                initial concept and design to deployment and maintenance. I'm
                particularly skilled in integrating complex APIs, implementing
                real-time features, and optimizing app performance for scale.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <Smartphone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Mobile Apps</div>
                  <div className="text-sm text-gray-600">10+ Projects</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <Code className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Clean Code</div>
                  <div className="text-sm text-gray-600">Best Practices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in
              React Native development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white hover:-translate-y-2"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-green-100 text-green-800 hover:bg-green-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1 border-green-600 text-green-600 hover:bg-green-50">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                      <Play className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group p-6 bg-gray-50 rounded-xl hover:bg-green-50 hover:shadow-lg transition-all duration-300 text-center hover:-translate-y-1"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-600">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <div className="w-20 h-1 bg-white mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Ready to bring your mobile app idea to life? Let's discuss your
              project!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="mailto:daniesm.work@gmail.com" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <Mail className="h-8 w-8 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-green-100">daniesm.work@gmail.com</p>
              </div>
            </a>

            <a href="https://github.com/Danies24" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <Github className="h-8 w-8 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-green-100">@Danies24</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/danies-sdm/" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <Linkedin className="h-8 w-8 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-green-100">@danies-sdm</p>
              </div>
            </a>

            <a href="https://wa.me/8248365737" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <div className="h-8 w-8 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-2xl">
                  💬
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-green-100">Chat Now</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold text-green-400 mb-2">
                Danies SDM
              </div>
              <p className="text-gray-400">
                React Native Developer | Full Stack Mobile Engineer
              </p>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/Danies24"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/danies-sdm/"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:daniesm.work@gmail.com"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Danies SDM. All rights reserved. Built with React ,Vite &
              Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
