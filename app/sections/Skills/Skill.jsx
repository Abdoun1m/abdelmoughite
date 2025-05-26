import React, { useState } from 'react';
import { 
    Shield, Cpu, Code, BookOpen, Network, Bug, Server, Lock,
    KeyRound, Eye, Terminal, Fingerprint, BrainCircuit, Database
} from 'lucide-react';
import { SkillBadge ,GlitchText} from '@/components/UI';

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    const categories = [
        { id: 'all', name: 'All Skills', icon: <BrainCircuit className="h-5 w-5" /> },
        { id: 'offensive', name: 'Offensive', icon: <Bug className="h-5 w-5" /> },
        { id: 'defensive', name: 'Defensive', icon: <Shield className="h-5 w-5" /> },
        { id: 'technical', name: 'Technical', icon: <Code className="h-5 w-5" /> },
        { id: 'certifications', name: 'Certifications', icon: <BookOpen className="h-5 w-5" /> },
    ];
    
    const skills = [
        // Offensive Skills
        { id: 1, name: 'Penetration Testing', level: 5, category: 'offensive', icon: <Network /> },
        { id: 2, name: 'Web Security', level: 5, category: 'offensive', icon: <Bug /> },
        { id: 3, name: 'Exploit Development', level: 4, category: 'offensive', icon: <Terminal /> },
        { id: 4, name: 'Social Engineering', level: 4, category: 'offensive', icon: <Eye /> },
        { id: 5, name: 'OSINT', level: 4, category: 'offensive', icon: <Eye /> },
        { id: 6, name: 'Reverse Engineering', level: 3, category: 'offensive', icon: <Cpu /> },
        
        // Defensive Skills
        { id: 7, name: 'Incident Response', level: 5, category: 'defensive', icon: <Shield /> },
        { id: 8, name: 'Digital Forensics', level: 4, category: 'defensive', icon: <Fingerprint /> },
        { id: 9, name: 'Threat Hunting', level: 4, category: 'defensive', icon: <Eye /> },
        { id: 10, name: 'Security Hardening', level: 5, category: 'defensive', icon: <Lock /> },
        { id: 11, name: 'Malware Analysis', level: 3, category: 'defensive', icon: <Bug /> },
        
        // Technical Skills
        { id: 12, name: 'Python', level: 5, category: 'technical', icon: <Code /> },
        { id: 13, name: 'Bash/Shell', level: 5, category: 'technical', icon: <Terminal /> },
        { id: 14, name: 'JavaScript', level: 4, category: 'technical', icon: <Code /> },
        { id: 15, name: 'C/C++', level: 3, category: 'technical', icon: <Code /> },
        { id: 16, name: 'Docker', level: 4, category: 'technical', icon: <Database /> },
        { id: 17, name: 'Network Protocols', level: 5, category: 'technical', icon: <Network /> },
        { id: 18, name: 'CI/CD Security', level: 3, category: 'technical', icon: <Lock /> },
        
        // Certifications
        { id: 19, name: 'OSCP', level: 5, category: 'certifications', icon: <Shield /> },
        { id: 20, name: 'CEH', level: 5, category: 'certifications', icon: <Bug /> },
        { id: 21, name: 'SANS GPEN', level: 5, category: 'certifications', icon: <KeyRound /> },
        { id: 22, name: 'CompTIA Security+', level: 5, category: 'certifications', icon: <Lock /> },
        { id: 23, name: 'AWS Security', level: 4, category: 'certifications', icon: <Server /> },
    ];
    
    const filteredSkills = selectedCategory === 'all' 
        ? skills 
        : skills.filter(skill => skill.category === selectedCategory);
    
    return (
        <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-cyber-black/50 to-transparent">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-mono font-bold mb-4">
                            <span className="text-cyber-neon-green">Skills</span>
                            <span className="mx-2">&</span>
                            <GlitchText text="Certifications" className="text-white" />
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-300">
                            My technical arsenal spans offensive security, defensive measures,
                            and software development - backed by industry certifications.
                        </p>
                    </div>
                    
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`
                                    px-4 py-2 rounded-md font-medium text-sm transition-all duration-300
                                    flex items-center space-x-2
                                    ${selectedCategory === category.id 
                                        ? 'bg-cyber-neon-green text-cyber-black' 
                                        : 'bg-cyber-gray/50 text-gray-300 hover:bg-cyber-gray'}
                                `}
                            >
                                {category.icon}
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>
                    
                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {filteredSkills.map((skill) => (
                            <SkillBadge 
                                key={skill.id}
                                name={skill.name}
                                level={skill.level}
                                icon={skill.icon}
                            />
                        ))}
                    </div>
                    
                    {/* Experience Timeline */}
                    <div className="mt-20">
                        <h3 className="text-2xl font-mono font-bold mb-8 text-center">Experience Timeline</h3>
                        
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-cyber-neon-green/30"></div>
                            
                            {/* Timeline Items */}
                            <div className="space-y-12">
                                {[
                                    {
                                        year: '2022-Present',
                                        title: 'Senior Security Consultant',
                                        company: 'CyberShield Solutions',
                                        description: 'Leading penetration testing engagements for Fortune 500 clients and developing security frameworks.'
                                    },
                                    {
                                        year: '2019-2022',
                                        title: 'Security Researcher',
                                        company: 'ThreatHunter Labs',
                                        description: 'Conducted vulnerability research, developed exploits, and published security advisories.'
                                    },
                                    {
                                        year: '2017-2019',
                                        title: 'Red Team Engineer',
                                        company: 'DefensePoint Security',
                                        description: 'Performed adversarial simulations and developed custom security assessment tools.'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="relative">
                                        {/* Timeline Marker */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                                            <div className="w-6 h-6 rounded-full bg-cyber-dark border-2 border-cyber-neon-green flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-cyber-neon-green animate-pulse"></div>
                                            </div>
                                        </div>
                                        
                                        {/* Content - Alternating Sides */}
                                        <div className={`
                                            ${index % 2 === 0 ? 'ml-auto pl-12 pr-4' : 'mr-auto pr-12 pl-4'} 
                                            w-full sm:w-1/2 pb-8
                                        `}>
                                            <div className="bg-cyber-gray/30 backdrop-blur-sm border border-cyber-neon-green/20 rounded-lg p-5">
                                                <div className="font-mono text-cyber-neon-green mb-1">{item.year}</div>
                                                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                                                <div className="text-cyber-neon-pink mb-3">{item.company}</div>
                                                <p className="text-gray-300 text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;