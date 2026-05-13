import React from 'react';
import Icon from '@/components/ui/AppIcon';

const courses = [
  {
    code: 'AI-501',
    title: 'Artificial Intelligence & Machine Learning',
    level: 'UG / PG',
    desc: 'AI concepts, search algorithms, knowledge representation, supervised/unsupervised learning, and intelligent agents.',
    icon: 'CpuChipIcon',
  },
  {
    code: 'DS-502',
    title: 'Data Science & Analytics',
    level: 'PG',
    desc: 'Data preprocessing, statistical modeling, visualization, Python-based ML pipelines, and capstone project delivery.',
    icon: 'ChartBarIcon',
  },
  {
    code: 'NS-503',
    title: 'Network Security & Cybersecurity',
    level: 'UG / PG',
    desc: 'Cryptography, firewall architectures, intrusion detection systems, ethical hacking, and cloud security fundamentals.',
    icon: 'ShieldCheckIcon',
  },
  {
    code: 'DL-504',
    title: 'Deep Learning & GANs',
    level: 'PG',
    desc: 'CNN, RNN, LSTM, Transformer architectures, Generative Adversarial Networks, and real-world image generation projects.',
    icon: 'CircleStackIcon',
  },
  {
    code: 'FL-505',
    title: 'Fuzzy Logic & Genetic Algorithms',
    level: 'PG',
    desc: 'Fuzzy set theory, inference engines, rule-based systems, genetic optimization, and applications in AI and control systems.',
    icon: 'AdjustmentsHorizontalIcon',
  },
  {
    code: 'CC-506',
    title: 'Cloud Computing & AWS',
    level: 'UG / PG',
    desc: 'Cloud architecture, virtualization, AWS services (EC2, S3, CloudFront, Elastic Beanstalk), and cloud security deployment models.',
    icon: 'CloudIcon',
  },
];

const skills = [
  { name: 'Data Science & Machine Learning', level: 95 },
  { name: 'Network Security & Intrusion Detection', level: 92 },
  { name: 'Deep Learning & GANs', level: 90 },
  { name: 'Fuzzy Logic & Genetic Algorithms', level: 90 },
  { name: 'Cloud Computing & AWS', level: 82 },
  { name: 'Health Informatics & Predictive Analytics', level: 85 },
  { name: 'Research Writing & Publication', level: 95 },
  { name: 'Python / Java / C / C++', level: 88 },
];

const techTags = [
  'Python',
  'Java',
  'C',
  'C++',
  'Dart',
  'Flutter',
  'React JS',
  'Next JS',
  'Nest JS',
  'Angular JS',
  'Django',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'AWS EC2',
  'AWS S3',
  'CloudFront',
  'Elastic Beanstalk',
  'TensorFlow',
  'Keras',
  'Scikit-learn',
  'Android Dev',
  'Web Dev',
  'LaTeX',
];

export default function TeachingSkillsSection() {
  return (
    <section id="teaching" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Teaching Header */}
        <div className="grid md:grid-cols-2 items-end gap-12 mb-16 section-reveal">
          <div>
            <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              // Teaching
            </span>
            <h2 className="font-display text-section-title font-bold text-foreground">
              Courses & <span className="gradient-text-indigo">Expertise</span>
            </h2>
          </div>
          <p className="text-foreground font-medium leading-relaxed">
            Teaching undergraduate and postgraduate students across AI, data science, deep learning,
            network security, and cloud computing. Guided 500+ academic and industrial projects,
            including final semester projects for MCA and MSc IT courses (KKHSOU, IDOL, and IGNOU).
          </p>
        </div>

        {/* Courses Bento */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {courses.map((course, i) => (
            <div
              key={course.code}
              className="glass-card rounded-2xl p-7 flex flex-col gap-5 stagger-child section-reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Icon name={course.icon as 'CpuChipIcon'} size={20} className="text-accent" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold font-mono text-muted-foreground">
                    {course.code}
                  </span>
                  <p className="text-xs text-muted-foreground/60">{course.level}</p>
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-base mb-2">
                  {course.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{course.desc}</p>
              </div>
              <div className="hud-line mt-auto" />
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 section-reveal">
            <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              // Skills
            </span>
            <h2 className="font-display text-4xl font-bold text-foreground mb-6 leading-tight">
              Research & <span className="gradient-text-cyan">Technical Skills</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A blend of deep theoretical knowledge and practical engineering skills developed over
              18+ years of academic research, industrial training, and technology entrepreneurship.
            </p>
            <div className="flex flex-wrap gap-3">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 glass-card-navy rounded-lg text-xs font-bold text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 section-reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="glass-card rounded-2xl p-8 space-y-7">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs font-bold text-accent">{skill.level}%</span>
                  </div>
                  <div className="w-full h-px bg-border relative">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%`, transitionDelay: `${i * 0.08}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
