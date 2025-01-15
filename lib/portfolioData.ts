export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    fullDescription?: string;
    image: string;
    techStack?: string;
    highlight?: string;
    results?: string[];
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: 'Kambo Autos',
      category: 'Websites & Apps',
      description: 'A professional website for a leading auto dealer in Uganda.',
      fullDescription: 'Kambo Autos required a modern, user-friendly website to showcase their inventory and attract more customers. We developed a responsive website with advanced search and filter options, integrated with local payment gateways for a seamless user experience.',
      image: '/kambo-autos-screenshot.png',
      techStack: 'Next.js, TypeScript, Tailwind CSS, Supabase',
      highlight: 'Optimized for mobile users and integrated with local payment gateways.',
      results: [
        'Increased online inquiries by 150%',
        'Improved user engagement, with average session duration up by 60%',
        'Streamlined inventory management process for the client'
      ]
    },
    {
      id: 2,
      title: 'E-Somero',
      category: 'Websites & Apps',
      description: 'A comprehensive learning management system for educators and students.',
      image: '/esomero-dashboard.jpg',
      techStack: 'React, Node.js, MongoDB',
      highlight: 'Fully responsive with an intuitive user interface, modeled after platforms like Udemy and NetAcad.',
    },
    {
      id: 3,
      title: 'Ask Rhona',
      category: 'Websites & Apps',
      description: 'An AI-powered chatbot for efficient customer service.',
      image: '/ask-rhona-screenshot.jpg',
      techStack: 'Python, TensorFlow, React',
      highlight: 'Innovatively integrates AI to enhance user experience.',
    },
    {
      id: 4,
      title: 'Mukono Bakers Logo Design',
      category: 'Branding, Design & Print',
      description: 'Minimalist logo design for a local bakery.',
      image: '/bakery-shop-logo-bytebasetech.webp',
    },
    {
      id: 5,
      title: 'Event Poster for Lugogo Marathon',
      category: 'Branding, Design & Print',
      description: 'Vibrant, eye-catching poster for a local charity run.',
      image: '/lugogo-marathon-bytebasetech.jpg',
    },
    {
      id: 6,
      title: 'BytebaseTech Rebranding',
      category: 'Branding, Design & Print',
      description: 'Redesigned BytebaseTech\'s branding assets.',
      image: '/bytebasetech-rebranding.avif',
      highlight: 'Includes modernized logo, business cards, and promotional materials.',
    },
    {
      id: 7,
      title: 'Residential House Plan (Entebbe)',
      category: 'Architectural Drawings',
      description: 'Detailed house plan for a modern three-bedroom residence in Entebbe.',
      image: '/residential-house-plan-bytebasetech.jpeg',
    },
    {
      id: 8,
      title: 'Commercial Plaza Design (Kampala)',
      category: 'Architectural Drawings',
      description: 'Conceptualized a functional and aesthetically pleasing commercial plaza.',
      image: '/commercial-plaza-design-bytebasetech.jpg',
    },
    {
      id: 9,
      title: 'Interior Design for Restaurants',
      category: 'Architectural Drawings',
      description: 'Created 3D renderings and floor plans for restaurant spaces.',
      image: '/restaurant-interior-design-ideas-bytebasetech.jpg',
    },
  ]
  
  export const categories = [
    'All',
    'Websites & Apps',
    'Branding, Design & Print',
    'Architectural Drawings'
  ]
  
  