'use client';

import React, { useState, useMemo } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Publication {
  id: number;
  year: string;
  type: string;
  title: string;
  journal: string;
  authors: string;
  doi: string;
  url: string;
  tags: string[];
  featured: boolean;
  citations: number;
  abstract: string;
}

const publications: Publication[] = [
  {
    id: 0,
    year: '2026',
    type: 'Journal Article',
    title: 'Energy Efficient Cyber-Physical Control of Renewable Microgrids Using Edge-AI Enabled IoT and Secure Blockchain Coordination',
    journal: 'Scientific Reports (IF: 3.9)',
    authors: 'Dr. Mostaque Hassan, et al.',
    doi: '10.1038/s41598-026-50169-y',
    url: 'https://doi.org/10.1038/s41598-026-50169-y',
    tags: ['Microgrids', 'Edge-AI', 'IoT', 'Blockchain'],
    featured: true,
    citations: 0,
    abstract: 'This paper introduces an energy-efficient cyber-physical control framework for renewable microgrids, leveraging edge-AI enabled IoT devices and ensuring secure coordination through blockchain technology.',
  },
  {
    id: 1,
    year: '2025',
    type: 'Journal Article',
    title: 'CottonNet-MHA: A Model for Detecting Cotton Disease Based on Deep Learning',
    journal: 'Frontiers in Plant Science (SCIE/Scopus, IF: 4.8)',
    authors: 'Hassan, M.M.M. et al.',
    doi: '10.3389/fpls.2025.1664242',
    url: 'https://doi.org/10.3389/fpls.2025.1664242',
    tags: ['Deep Learning', 'Agriculture AI', 'CNN', 'Disease Detection'],
    featured: true,
    citations: 5,
    abstract:
      'CottonNet-MHA introduces a multi-head attention mechanism integrated into a convolutional neural network architecture for accurate detection of cotton plant diseases from leaf images. The model achieves state-of-the-art accuracy on benchmark datasets, offering a practical tool for precision agriculture and early disease intervention in cotton farming.',
  },
  {
    id: 2,
    year: '2025',
    type: 'Journal Article',
    title: 'An Improved Hybrid Feature Selection and Classification Framework for Breast Cancer Detection Using Mammography Images',
    journal: 'Ain Shams Engineering Journal (SCIE/Scopus, IF: 5.9)',
    authors: 'Hassan, M.M.M. et al.',
    doi: '10.1016/j.asej.2025.103897',
    url: 'https://doi.org/10.1016/j.asej.2025.103897',
    tags: ['Health Informatics', 'Deep Learning', 'Breast Cancer', 'Feature Selection'],
    featured: true,
    citations: 3,
    abstract:
      'This paper presents an improved hybrid feature selection and classification framework for breast cancer detection using mammography images. The framework combines advanced feature extraction techniques with ensemble classifiers to achieve high sensitivity and specificity, demonstrating significant improvements over existing methods on standard benchmark datasets.',
  },
  {
    id: 3,
    year: '2025',
    type: 'Journal Article',
    title: 'Detection And Recognition Method of Benign Skin Cancer in Dermoscopic Images using Hybrid Feature Fusion Model',
    journal: 'Cuestiones de Fisioterapia',
    authors: 'Hassan, M.M.M. et al.',
    doi: '10.48047/CU',
    url: 'https://doi.org/10.48047/CU',
    tags: ['Deep Learning', 'Health Informatics', 'Skin Cancer', 'Feature Fusion'],
    featured: false,
    citations: 2,
    abstract:
      'This study proposes a hybrid feature fusion model for the detection and recognition of benign skin cancer in dermoscopic images. The model integrates multiple feature extraction pathways to improve classification accuracy, offering a reliable computer-aided diagnosis tool for dermatology applications.',
  },
  {
    id: 4,
    year: '2025',
    type: 'Journal Article',
    title: 'A Study on Cryptographic Methods for Enhancing Cybersecurity',
    journal: 'International Journal of Mathematics and Statistics, Vol. 11, Issue 1, Art. 86',
    authors: 'Hassan, M.M.M. et al.',
    doi: '10.53555/eijms.v11i1.86',
    url: 'https://doi.org/10.53555/eijms.v11i1.86',
    tags: ['Cybersecurity', 'Cryptography', 'Network Security'],
    featured: false,
    citations: 1,
    abstract:
      'This paper provides a comprehensive study of modern cryptographic methods and their role in enhancing cybersecurity. It reviews symmetric and asymmetric encryption, hash functions, and quantum-resistant algorithms, analyzing their effectiveness against contemporary cyber threats and proposing a framework for selecting appropriate cryptographic solutions.',
  },
  {
    id: 5,
    year: '2025',
    type: 'Journal Article',
    title: 'Enhanced NIRMAL Optimizer with Damped Nesterov Acceleration: A Comparative Analysis',
    journal: 'arXiv:2508.16550v1 [cs.IR]',
    authors: 'Hassan, M.M.M. et al.',
    doi: 'arXiv:2508.16550',
    url: 'https://arxiv.org/abs/2508.16550',
    tags: ['AI', 'Optimization', 'Machine Learning'],
    featured: false,
    citations: 0,
    abstract:
      'This paper presents an enhanced NIRMAL optimizer incorporating damped Nesterov acceleration to improve convergence speed and stability in machine learning optimization tasks. A comparative analysis against standard optimizers demonstrates superior performance across multiple benchmark datasets and neural network architectures.',
  },
  {
    id: 6,
    year: '2025',
    type: 'Conference',
    title: 'Machine Learning Driven Islanding Detection using Random Forest and Scalogram',
    journal: '4th Intl. Conf. on Distributed Computing and Electrical Circuits and Electronics (ICDCECE)',
    authors: 'Hassan, M.M.M. et al.',
    doi: '10.1109/ICDCECE65353.2025.11034970',
    url: 'https://doi.org/10.1109/ICDCECE65353.2025.11034970',
    tags: ['Machine Learning', 'Random Forest', 'Power Systems', 'Islanding Detection'],
    featured: true,
    citations: 0,
    abstract:
      'This paper proposes a machine learning-driven approach for islanding detection in distributed power systems using Random Forest classifiers and scalogram-based signal analysis. The method achieves high detection accuracy with minimal non-detection zones, offering a reliable solution for smart grid protection and distributed energy resource management.',
  },
  {
    id: 7,
    year: '2025',
    type: 'Book',
    title: 'AI for Advanced Manufacturing and Industrial Applications',
    journal: 'RDG Scientific Publications',
    authors: 'Hassan, M.M.M. et al.',
    doi: 'ISBN: 978-81-986993-2-9',
    url: '#',
    tags: ['AI', 'Manufacturing', 'Industrial Applications'],
    featured: false,
    citations: 1,
    abstract:
      'This book covers the application of artificial intelligence techniques in advanced manufacturing processes, including predictive maintenance, quality control, robotic automation, and smart factory design. It bridges the gap between theoretical AI models and real-world industrial deployment scenarios.',
  },
  {
    id: 8,
    year: '2025',
    type: 'Book',
    title: 'Machine Learning and Artificial Intelligence: Multidisciplinary Concepts & Applications',
    journal: 'Academic Publication',
    authors: 'Hassan, M.M.M. et al.',
    doi: 'ISBN: 978-81-989673-3-6',
    url: '#',
    tags: ['AI', 'Machine Learning', 'Multidisciplinary'],
    featured: false,
    citations: 0,
    abstract:
      'A comprehensive academic book covering multidisciplinary concepts and applications of machine learning and artificial intelligence, spanning healthcare, agriculture, cybersecurity, and industrial domains. Designed for both researchers and practitioners seeking to apply AI/ML techniques across diverse fields.',
  },
  {
    id: 9,
    year: '2025',
    type: 'Book Chapter',
    title: 'Exploring the Future of Connectivity: A Comprehensive Review of Wireless and Optical Communications',
    journal: 'Data-Driven AI: A Multidisciplinary Approach (Routledge, ISBN: 9781041272366)',
    authors: 'Hassan, M.M.M., Barbhuyan, M.F.K., Wheeb, A.H., Ray, A.',
    doi: 'ISBN: 9781041272366',
    url: 'https://www.routledge.com',
    tags: ['Wireless', 'Optical Communications', 'AI', '5G/6G'],
    featured: false,
    citations: 3,
    abstract:
      'This chapter provides a comprehensive review of emerging wireless and optical communication technologies, examining 5G/6G architectures, photonic networks, and AI-driven optimization strategies. It explores the convergence of wireless and optical domains, highlighting future research directions and practical deployment challenges in next-generation connectivity infrastructure.',
  },
  {
    id: 10,
    year: '2025',
    type: 'Book Chapter',
    title: 'Performance Evaluation of Deep Learning and Machine Learning Methods for Prostate Cancer Detection',
    journal: 'Academic Book Chapter',
    authors: 'Hassan, M.M.M. et al.',
    doi: '',
    url: '#',
    tags: ['Deep Learning', 'Health Informatics', 'Cancer Detection'],
    featured: false,
    citations: 0,
    abstract:
      'This chapter presents a comparative performance evaluation of deep learning and machine learning methods for prostate cancer detection. Multiple architectures and feature extraction strategies are benchmarked on clinical datasets, providing actionable insights for developing robust computer-aided diagnosis systems in urology.',
  },
  {
    id: 11,
    year: '2025',
    type: 'Book Chapter',
    title: 'An Improved and Accurate Post Tagger Model for the Hindi Language',
    journal: 'Academic Book Chapter',
    authors: 'Hassan, M.M.M. et al.',
    doi: '',
    url: '#',
    tags: ['NLP', 'Hindi Language', 'POS Tagging', 'AI'],
    featured: false,
    citations: 0,
    abstract:
      'This chapter proposes an improved and accurate part-of-speech (POS) tagger model for the Hindi language, leveraging deep learning and hybrid rule-based approaches. The model demonstrates superior tagging accuracy on standard Hindi corpora, contributing to the advancement of natural language processing for low-resource Indian languages.',
  },
  {
    id: 12,
    year: '2024',
    type: 'Journal Article',
    title: 'Adopting AI in Methodological Practices: Transforming Predictive Analytics in Health Research',
    journal: 'International Journal of Medical Toxicology & Legal Medicine, Vol. 27, Issue 5, Art. 111',
    authors: 'Hassan, M.M.M. et al.',
    doi: '10.47059/ijmtlm/V27I5/111',
    url: 'https://doi.org/10.47059/ijmtlm/V27I5/111',
    tags: ['Health Informatics', 'AI', 'Predictive Analytics'],
    featured: false,
    citations: 4,
    abstract:
      'This paper explores the adoption of AI methodologies in health research, focusing on transforming predictive analytics for disease risk assessment and clinical decision support. It reviews state-of-the-art machine learning models applied to medical datasets and discusses ethical considerations, data quality challenges, and future directions for AI-driven health informatics.',
  },
  {
    id: 13,
    year: '2024',
    type: 'Journal Article',
    title: 'Predictive Modeling of Thyroid Cancer Risk and Recurrence using Machine Learning Techniques in Otolaryngology (ENT)',
    journal: 'Journal of Neonatal Surgery, Vol. 13, pp. 1624–1632',
    authors: 'Hassan, M.M.M. et al.',
    doi: '',
    url: '#',
    tags: ['Health Informatics', 'Machine Learning', 'Cancer Detection', 'Thyroid'],
    featured: false,
    citations: 6,
    abstract:
      'This study develops predictive models for thyroid cancer risk assessment and recurrence prediction using machine learning techniques. Multiple classifiers are evaluated on clinical ENT datasets, with the best-performing model achieving high accuracy and sensitivity, offering a valuable tool for early diagnosis and personalized treatment planning in otolaryngology.',
  },
  {
    id: 14,
    year: '2023',
    type: 'Journal Article',
    title: 'A Futuristic Approach for Security in Cloud Datacenters using Hybrid Algorithm',
    journal: 'Engineering Proceedings (Eng. Proc.), Vol. 59, No. 1, p. 47',
    authors: 'Chatterjee, D., Islam, N., Ray, A., Barbhuyan, M.F.K., Hassan, M.M.M.',
    doi: '10.3390/engproc2023059047',
    url: 'https://doi.org/10.3390/engproc2023059047',
    tags: ['Cloud Security', 'Hybrid Algorithm', 'Cybersecurity'],
    featured: true,
    citations: 12,
    abstract:
      'This paper proposes a hybrid security algorithm combining elliptic curve cryptography with a novel intrusion detection mechanism for cloud data centers. The approach demonstrates significant improvements in threat detection accuracy and computational efficiency compared to existing single-algorithm solutions, validated across multiple cloud deployment scenarios.',
  },
  {
    id: 15,
    year: '2023',
    type: 'Patent',
    title: 'An Apparatus Based on Deep Learning for Real-Time Object Detection and Tracking in Video Surveillance',
    journal: 'Indian Patent Office — Published',
    authors: 'Hassan, M.M.M. et al.',
    doi: 'Indian Patent — Published',
    url: '#',
    tags: ['Patent', 'Deep Learning', 'Computer Vision', 'Surveillance'],
    featured: false,
    citations: 0,
    abstract:
      'A published Indian patent covering a deep learning-based apparatus for real-time object detection and tracking in video surveillance systems. The invention introduces a novel architecture that achieves high detection accuracy and low latency, suitable for deployment in security and monitoring applications.',
  },
  {
    id: 16,
    year: '2023',
    type: 'Patent',
    title: 'Artificial Intelligence-Based Snail Capturing Agriculture Machine',
    journal: 'Indian Design Patent — Published',
    authors: 'Hassan, M.M.M. et al.',
    doi: 'Indian Design Patent — Published',
    url: '#',
    tags: ['Patent', 'AI', 'Agriculture'],
    featured: false,
    citations: 0,
    abstract:
      'A published Indian design patent for an AI-based snail capturing machine designed for agricultural use. The invention leverages computer vision and autonomous control systems to detect and capture snails in crop fields, reducing manual labor and improving crop protection efficiency.',
  },
  {
    id: 17,
    year: '2023',
    type: 'Patent',
    title: 'Compact Intrusion Detecting Cybersecurity System',
    journal: 'Indian Design Patent — Examination Report Generated',
    authors: 'Hassan, M.M.M. et al.',
    doi: 'Indian Design Patent',
    url: '#',
    tags: ['Patent', 'Cybersecurity', 'Intrusion Detection'],
    featured: false,
    citations: 0,
    abstract:
      'An Indian design patent for a compact intrusion detecting cybersecurity system. The device integrates hardware and software components to provide real-time network intrusion detection in a compact form factor, suitable for deployment in small and medium enterprise environments.',
  },
  {
    id: 18,
    year: '2023',
    type: 'Patent',
    title: 'Generation of Photo Realistic Images using GAN Network',
    journal: 'UK Design Patent — Filed',
    authors: 'Hassan, M.M.M. et al.',
    doi: 'UK Design Patent — Filed',
    url: '#',
    tags: ['Patent', 'GANs', 'Deep Learning', 'Image Generation'],
    featured: false,
    citations: 0,
    abstract:
      'A filed UK design patent for a system and method for generating photorealistic images using Generative Adversarial Networks (GANs). The invention presents novel GAN architectures and training strategies that produce high-fidelity synthetic images with applications in creative industries, data augmentation, and simulation.',
  },
  {
    id: 19,
    year: '2023',
    type: 'Patent',
    title: 'AI-Secured Biometric Crypto Wallet Device with Quantum-Resistant Firmware',
    journal: 'UK Design Patent — Filed',
    authors: 'Hassan, M.M.M. et al.',
    doi: 'UK Design Patent — Filed',
    url: '#',
    tags: ['Patent', 'AI', 'Cybersecurity', 'Blockchain', 'Quantum'],
    featured: false,
    citations: 0,
    abstract:
      'A filed UK design patent for an AI-secured biometric cryptocurrency wallet device featuring quantum-resistant firmware. The device combines biometric authentication, AI-driven threat detection, and post-quantum cryptographic algorithms to provide a highly secure solution for digital asset management.',
  },
  {
    id: 20,
    year: '2014',
    type: 'Journal Article',
    title: 'Fuzzy Classifier for IDS Alerts using Genetic Algorithm',
    journal: 'International Journal of Research in Advent Technology (IJRAT)',
    authors: 'Hassan, M.M.M.',
    doi: '',
    url: '#',
    tags: ['Intrusion Detection', 'Fuzzy Logic', 'Genetic Algorithm'],
    featured: false,
    citations: 18,
    abstract:
      'This paper presents a fuzzy classifier for intrusion detection system (IDS) alerts, optimized using a genetic algorithm for rule generation and parameter tuning. The system effectively reduces false positives while maintaining high detection rates, providing an adaptive and interpretable solution for network security monitoring.',
  },
  {
    id: 21,
    year: '2013',
    type: 'Journal Article',
    title: 'Network Intrusion Detection System using Genetic Algorithm and Fuzzy Logic',
    journal: 'International Journal of Innovative Research in Computer and Communication Engineering',
    authors: 'Hassan, M.M.M.',
    doi: '',
    url: '#',
    tags: ['Intrusion Detection', 'Genetic Algorithm', 'Fuzzy Logic', 'Network Security'],
    featured: false,
    citations: 24,
    abstract:
      'This paper presents a hybrid network intrusion detection system that combines genetic algorithms for feature selection with fuzzy logic classifiers for anomaly detection. The system demonstrates high detection rates with low false-positive rates on the KDD Cup dataset, providing an efficient and adaptive solution for real-time network security monitoring.',
  },
  {
    id: 22,
    year: '2013',
    type: 'Journal Article',
    title: 'Current Studies on Intrusion Detection System, Genetic Algorithm and Fuzzy Logic',
    journal: 'International Journal of Distributed and Parallel Systems',
    authors: 'Hassan, M.M.M.',
    doi: '',
    url: '#',
    tags: ['Intrusion Detection', 'Genetic Algorithm', 'Fuzzy Logic', 'Survey'],
    featured: false,
    citations: 15,
    abstract:
      'A comprehensive survey of current studies on intrusion detection systems, genetic algorithms, and fuzzy logic. This paper reviews the state-of-the-art approaches, identifies research gaps, and proposes directions for future work in developing more robust and adaptive network security solutions.',
  },
  {
    id: 23,
    year: '2025',
    type: 'Journal Article',
    title: 'A QR Code-Driven Mobile Application for Modernizing Library Operations: A Technical Approach',
    journal: 'Communicated (Accepted)',
    authors: 'Hassan, M.M.M. et al.',
    doi: '',
    url: '#',
    tags: ['Mobile App', 'Library Operations'],
    featured: false,
    citations: 0,
    abstract: 'A QR code-driven mobile application designed to modernize and streamline library operations using technical approaches for better asset management.',
  },
  {
    id: 24,
    year: '2025',
    type: 'Journal Article',
    title: 'Realistic Image Generation from Blurry Images using GAN Networks',
    journal: 'Communicated (Under review)',
    authors: 'Hassan, M.M.M. et al.',
    doi: '',
    url: '#',
    tags: ['GANs', 'Image Generation', 'Deep Learning'],
    featured: false,
    citations: 0,
    abstract: 'This paper proposes a GAN-based network architecture for generating realistic, high-fidelity images from blurry inputs, improving visual clarity.',
  },
  {
    id: 25,
    year: '2025',
    type: 'Journal Article',
    title: 'Empowering Women through AI: Tools for Reporting and Preventing Workplace Harassment',
    journal: 'Communicated (Under review)',
    authors: 'Hassan, M.M.M. et al.',
    doi: '',
    url: '#',
    tags: ['AI', 'Social Computing'],
    featured: false,
    citations: 0,
    abstract: 'This study presents AI-driven tools aimed at empowering women by providing secure, intelligent mechanisms for reporting and preventing workplace harassment.',
  },
  {
    id: 26,
    year: '2025',
    type: 'Journal Article',
    title: 'Energy Efficient Cyber-Physical Control of Renewable Microgrids Using Edge-AI Enabled IoT and Secure Blockchain Coordination',
    journal: 'Communicated (Under review)',
    authors: 'Hassan, M.M.M. et al.',
    doi: '',
    url: '#',
    tags: ['Edge AI', 'IoT', 'Blockchain', 'Microgrids'],
    featured: false,
    citations: 0,
    abstract: 'This research develops a cyber-physical control system for renewable microgrids that integrates Edge-AI enabled IoT and secure blockchain coordination.',
  },
  {
    id: 27,
    year: '2025',
    type: 'Journal Article',
    title: 'Feature Optimization and Classification Performance for Prostate Cancer: Deep Learning vs Machine Learning Approaches',
    journal: 'Communicated (Under review)',
    authors: 'Hassan, M.M.M. et al.',
    doi: '',
    url: '#',
    tags: ['Machine Learning', 'Deep Learning', 'Health Informatics'],
    featured: false,
    citations: 0,
    abstract: 'This paper evaluates feature optimization and classification performance for prostate cancer detection, comparing deep learning approaches against classical machine learning models.',
  },
];

const typeColors: Record<string, { badge: string; accent: string; icon: string }> = {
  'Journal Article': {
    badge: 'bg-primary/20 text-primary border-primary/30',
    accent: 'from-primary/20 to-primary/5',
    icon: 'DocumentTextIcon',
  },
  'Book Chapter': {
    badge: 'bg-secondary/30 text-secondary-foreground border-secondary/40',
    accent: 'from-secondary/20 to-secondary/5',
    icon: 'BookOpenIcon',
  },
  Book: {
    badge: 'bg-accent/20 text-accent border-accent/30',
    accent: 'from-accent/20 to-accent/5',
    icon: 'BookmarkIcon',
  },
  Conference: {
    badge: 'bg-muted text-muted-foreground border-border',
    accent: 'from-muted/40 to-muted/10',
    icon: 'PresentationChartBarIcon',
  },
  Patent: {
    badge: 'bg-accent/10 text-accent border-accent/20',
    accent: 'from-accent/10 to-accent/5',
    icon: 'ShieldCheckIcon',
  },
};

const ALL_TOPICS = ['All Topics', 'AI', 'Deep Learning', 'Cloud Security', 'Wireless', 'Health Informatics', 'Agriculture AI', 'Intrusion Detection', 'Cybersecurity', 'GANs', 'Machine Learning', 'NLP'];
const ALL_TYPES = ['All Types', 'Journal Article', 'Book Chapter', 'Book', 'Conference', 'Patent'];

export default function ResearchSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [selectedTopic, setSelectedTopic] = useState('All Topics');
  const [selectedType, setSelectedType] = useState('All Types');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => Number(b) - Number(a));
    return ['All Years', ...uniqueYears];
  }, []);

  const filtered = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        searchQuery === '' ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesYear = selectedYear === 'All Years' || pub.year === selectedYear;
      const matchesTopic = selectedTopic === 'All Topics' || pub.tags.includes(selectedTopic);
      const matchesType = selectedType === 'All Types' || pub.type === selectedType;
      return matchesSearch && matchesYear && matchesTopic && matchesType;
    });
  }, [searchQuery, selectedYear, selectedTopic, selectedType]);

  const featured = publications.filter((p) => p.featured);
  const displayList = showAll ? filtered : filtered.slice(0, 5);
  const totalCitations = publications.reduce((sum, p) => sum + p.citations, 0);

  const toggleAbstract = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="research" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 items-end gap-12 mb-16 section-reveal">
          <div>
            <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              // Research
            </span>
            <h2 className="font-display text-section-title font-bold text-foreground">
              Publications &amp;{' '}
              <span className="gradient-text-indigo">Research</span>
            </h2>
          </div>
          <div>
            <p className="text-foreground font-medium leading-relaxed mb-4">
              Peer-reviewed journals (SCIE/Scopus), book chapters, conference proceedings, and filed patents spanning AI, deep learning, cloud security, and health informatics.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-accent">{publications.length}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Works</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{totalCitations}+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Citations</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{featured.length}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Featured</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Publications */}
        <div className="mb-16 section-reveal">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 block">
            Featured Publications
          </span>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((pub, i) => {
              const colors = typeColors[pub.type] ?? { badge: 'bg-muted text-muted-foreground border-border', accent: 'from-muted/40 to-muted/10', icon: 'DocumentTextIcon' };
              const isExpanded = expandedId === pub.id;
              return (
                <div
                  key={pub.id}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col section-reveal stagger-child"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Card top accent bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${colors.accent}`} />
                  <div className="p-7 flex flex-col flex-1">
                    {/* Type + Year */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${colors.badge}`}>
                        {pub.type}
                      </span>
                      <span className="text-xs font-bold text-muted-foreground bg-muted px-2 py-1 rounded-md">
                        {pub.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-base font-semibold text-foreground leading-snug mb-2">
                      {pub.title}
                    </h3>

                    {/* Authors */}
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">{pub.authors}</p>

                    {/* Journal */}
                    <p className="text-xs text-accent/80 font-medium mb-4">{pub.journal}</p>

                    {/* Abstract (expandable) */}
                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-48' : 'max-h-0'}`}>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4 border-l-2 border-accent/40 pl-3">
                        {pub.abstract}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {pub.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {/* Citations */}
                        {pub.citations > 0 && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Icon name="AcademicCapIcon" size={13} className="text-accent" />
                            {pub.citations} citations
                          </span>
                        )}
                        {/* Abstract toggle */}
                        <button
                          onClick={(e) => toggleAbstract(pub.id, e)}
                          className="flex items-center gap-1 text-xs text-accent hover:text-foreground transition-colors font-medium"
                        >
                          {isExpanded ? (
                            <>
                              <Icon name="ChevronUpIcon" size={13} />
                              Hide
                            </>
                          ) : (
                            <>
                              <Icon name="ChevronDownIcon" size={13} />
                              Abstract
                            </>
                          )}
                        </button>
                      </div>
                      {/* DOI Link */}
                      {pub.url && pub.url !== '#' && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-bold text-accent hover:text-foreground transition-colors"
                          title="Open DOI / External Link"
                        >
                          DOI <Icon name="ArrowTopRightOnSquareIcon" size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Search + Filters */}
        <div className="glass-card rounded-2xl p-6 mb-8 section-reveal">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Icon name="MagnifyingGlassIcon" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by title, author, keyword…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-muted/50 border border-border rounded-xl pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/60 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="XMarkIcon" size={14} />
                </button>
              )}
            </div>

            {/* Year filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-muted/50 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent/60 transition-colors cursor-pointer"
            >
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>

            {/* Topic filter */}
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="bg-muted/50 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent/60 transition-colors cursor-pointer"
            >
              {ALL_TOPICS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            {/* Type filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-muted/50 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent/60 transition-colors cursor-pointer"
            >
              {ALL_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Active filter chips */}
          {(selectedYear !== 'All Years' || selectedTopic !== 'All Topics' || selectedType !== 'All Types' || searchQuery) && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground">Active filters:</span>
              {searchQuery && (
                <span className="flex items-center gap-1 text-xs bg-accent/10 text-accent border border-accent/20 px-2.5 py-1 rounded-full">
                  &ldquo;{searchQuery}&rdquo;
                  <button onClick={() => setSearchQuery('')}><Icon name="XMarkIcon" size={11} /></button>
                </span>
              )}
              {selectedYear !== 'All Years' && (
                <span className="flex items-center gap-1 text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full">
                  {selectedYear}
                  <button onClick={() => setSelectedYear('All Years')}><Icon name="XMarkIcon" size={11} /></button>
                </span>
              )}
              {selectedTopic !== 'All Topics' && (
                <span className="flex items-center gap-1 text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full">
                  {selectedTopic}
                  <button onClick={() => setSelectedTopic('All Topics')}><Icon name="XMarkIcon" size={11} /></button>
                </span>
              )}
              {selectedType !== 'All Types' && (
                <span className="flex items-center gap-1 text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full">
                  {selectedType}
                  <button onClick={() => setSelectedType('All Types')}><Icon name="XMarkIcon" size={11} /></button>
                </span>
              )}
              <button
                onClick={() => { setSearchQuery(''); setSelectedYear('All Years'); setSelectedTopic('All Topics'); setSelectedType('All Types'); }}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors ml-1 underline underline-offset-2"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* All Publications List */}
        <div className="section-reveal">
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              All Publications
              <span className="ml-2 text-accent">({filtered.length})</span>
            </span>
            <a
              href="https://scholar.google.co.in/citations?user=rkI0qWgAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-accent hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              Google Scholar <Icon name="ArrowTopRightOnSquareIcon" size={12} />
            </a>
          </div>

          {filtered.length === 0 ? (
            <div className="glass-card rounded-2xl p-12 text-center">
              <Icon name="MagnifyingGlassIcon" size={32} className="text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground text-sm">No publications match your filters.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedYear('All Years'); setSelectedTopic('All Topics'); setSelectedType('All Types'); }}
                className="mt-3 text-xs text-accent hover:text-foreground transition-colors underline underline-offset-2"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="glass-card rounded-2xl overflow-hidden">
              {displayList.map((pub, i) => {
                const colors = typeColors[pub.type] ?? { badge: 'bg-muted text-muted-foreground border-border', accent: 'from-muted/40 to-muted/10', icon: 'DocumentTextIcon' };
                const isExpanded = expandedId === pub.id;
                return (
                  <div
                    key={pub.id}
                    className={`group ${i < displayList.length - 1 ? 'border-b border-border' : ''}`}
                  >
                    <div className="flex items-start gap-5 px-7 py-5 hover:bg-primary/5 transition-colors">
                      {/* Year */}
                      <span className="text-xs font-bold text-muted-foreground w-10 flex-shrink-0 pt-0.5">
                        {pub.year}
                      </span>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug mb-1">
                          {pub.title}
                        </p>
                        <p className="text-xs text-muted-foreground mb-0.5">{pub.authors}</p>
                        <p className="text-xs text-muted-foreground/60">{pub.journal}</p>

                        {/* Expandable abstract */}
                        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40 mt-3' : 'max-h-0'}`}>
                          <p className="text-xs text-muted-foreground leading-relaxed border-l-2 border-accent/40 pl-3">
                            {pub.abstract}
                          </p>
                        </div>

                        {/* Actions row */}
                        <div className="flex items-center gap-4 mt-2">
                          {/* Citations */}
                          {pub.citations > 0 && (
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Icon name="AcademicCapIcon" size={12} className="text-accent" />
                              {pub.citations} citations
                            </span>
                          )}
                          {/* Abstract toggle */}
                          <button
                            onClick={(e) => toggleAbstract(pub.id, e)}
                            className="flex items-center gap-1 text-xs text-accent hover:text-foreground transition-colors font-medium"
                          >
                            {isExpanded ? (
                              <><Icon name="ChevronUpIcon" size={12} /> Hide abstract</>
                            ) : (
                              <><Icon name="ChevronDownIcon" size={12} /> Show abstract</>
                            )}
                          </button>
                          {/* DOI */}
                          {pub.url && pub.url !== '#' && (
                            <a
                              href={pub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1 text-xs font-bold text-accent hover:text-foreground transition-colors"
                            >
                              <Icon name="ArrowTopRightOnSquareIcon" size={12} />
                              Open DOI
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Type badge */}
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold border flex-shrink-0 ${colors.badge}`}>
                        {pub.type}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Show more / less */}
              {filtered.length > 5 && (
                <div className="px-7 py-4 border-t border-border bg-muted/20">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-foreground transition-colors"
                  >
                    {showAll ? (
                      <><Icon name="ChevronUpIcon" size={14} /> Show less</>
                    ) : (
                      <><Icon name="ChevronDownIcon" size={14} /> Show all {filtered.length} publications</>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
