// Ordered from most recent to oldest, add new projects to the top
// the skills comes from /data/skills.js. In order to have the filter on the Projects page, the skill needs "filterable": true.
const data_projects = [
    {
        title: "IBM Malware Analysis & Intro to Assembly",
        type: "Certificate",
        skills:['cybersecurity'],
        description: {
            "en": "Through capture the flag activities, demos and hands-on reverse engineering, I applied skills for malware analysis and the fundamentals of Assembly. Mar 2024.",
            "it":"",
        },
        year: "2024",
        links: [
            {
                label: "View Certificate",
                url: "https://www.coursera.org/account/accomplishments/verify/27HF2YBYLJGU",
            },
            {
                label: "About the Certificate",
                url: "https://www.coursera.org/learn/malware-analysis-and-assembly"
            }
        ],
    },
    {
        title: "EC-Council Computer Hacking Forensic Investigator (CHFI)",
        type: "Certification",
        skills:['cybersecurity'],
        description: {
            "en": "I completed the certification requirements for the CHFI exam in Nov 2023.",
            "it":"",
        },
        year: "2023",
        links: [
            {
                label: "View Certificate",
                url: "/files/ECC-CHFI.pdf",
            },
            {
                label: "About the Certification",
                url: "https://www.eccouncil.org/train-certify/computer-hacking-forensic-investigator-chfi/"
            }
        ],
    },
    {
        title: "CompTIA - Cybersecurity Analyst+",
        type: "Certification",
        skills:['cybersecurity'],
        description: {
            "en": "I completed the certification requirements for the CySA+ exam in Feb 2023.",
            "it":"",
        },
        year: "2023",
        links: [
            {
                label: "View Certificate",
                url: "/files/comptia-cysa.pdf",
            },
            {
                label: "About the Certification",
                url: "https://www.comptia.org/certifications/cybersecurity-analyst"
            }
        ],
    },
    {
        title: "Defensive Security Labs",
        type: "Project",
        skills:['cybersecurity'],
        description: {
            "en": "I currently am using Blue Team Labs Online to gain further experience with key blue team skills such as Incident Response, Digital Forensics, Reverse Engeering, OSINT and more!",
            "it":"Sto usando Blue Team Labs Online per acquisire ulteriore esperienza con le competenze chiave del blue team come Incident Response, Digital Forensics, Reverse Engeering, OSINT e altro!",
        },
        year: "2022",
        links: [
            {
                label: "Blog Writeups",
                url: "https://blog.ericturner.it/category/cybersecurity-hacking/blue-team-labs-online/",
            },
            {
                label: "BTLO Profile",
                url: "https://blueteamlabs.online/public/user/50f95231a04620abe9f20a"
            }
        ],
    },
    {
        title: "Malware Analysis Lab",
        type: "Project",
        skills:['cybersecurity'],
        description: {
            "en": "I built a custom malware analysis lab using Virtual Machines running REMnux and Win10. It features a custom VPN and many tools for analyzing and looking for IOCs of malware samples",
            "it":"Ho costruito un laboratorio di analisi malware personalizzato utilizzando macchine virtuali che eseguono REMnux e Win10. Dispone di una VPN personalizzata e di molti strumenti per analizzare e cercare gli IOC dei campioni di malware",
        },
        year: "2021",
        links: [
            {
                label: "Blog Writeups",
                url: "https://blog.ericturner.it/category/malware-analysis/",
            }
        ],
    },
    {
        title: "CompTIA - PenTest+",
        type: "Certification",
        skills:['cybersecurity'],
        description: {
            "en": "I completed the certification requirements for the PenTest+ exam in Sep 2021.",
            "it":"",
        },
        year: "2021",
        links: [
            {
                label: "View Certificate",
                url: "/files/comptia-pentest.pdf",
            },
            {
                label: "About the Certification",
                url: "https://www.comptia.org/certifications/pentest"
            }
        ],
    },
    {
        title: "CompTIA - Security+",
        type: "Certification",
        skills:['cybersecurity'],
        description: {
            "en": "I completed the certification requirements for the CySA+ exam in Aug 2021.",
            "it":"",
        },
        year: "2021",
        links: [
            {
                label: "View Certificate",
                url: "/files/comptia-security.pdf",
            },
            {
                label: "About the Certification",
                url: "https://www.comptia.org/certifications/security"
            }
        ],
    },
    {
        title: "Crime Analysis",
        type: "Project",
        skills:['python'],
        description: {
            "en": "Crime & Intelligence Analysis using and GIS, Python, Excel",
            "it":"Analisi del crimine e dell'intelligence utilizzando e GIS, Python, Excel",
        },
        year: "2021",
        links: [
            {
                label: "GitHub",
                url: "https://github.com/EricTurner3/CrimeAnalysis",
            }
        ],
    },
    {
        title: "Laravel + React Devops Showcase",
        type: "Project",
        skills:['web_dev'],
        description: {
            "en": "This project was a fantastic learning experience for me! I learned how to use composer, php artisan & git command line tools; Jest + enzyme for React component unit-testing; PHPUnit for Laravel API unit-testing; GitHub Actions to build a custom pipeline and push a release!",
            "it": "Questo progetto è stato una fantastica esperienza di apprendimento per me! Ho imparato ad usare composer, php artisan e git; Jest + enzyme per il test unitario dei componenti di React; PHPUnit per il test unitario delle API di Laravel; GitHub Actions per costruire una pipeline personalizzata e spingere un rilascio!",
        },
        year: "2021",
        links: [
            {
                label: "GitHub Release",
                url: "https://github.com/EricTurner3/react-devops-showcase/releases/tag/v1-alpha",
            },
            {
                label: "GitHub Repo",
                url: "https://github.com/EricTurner3/react-devops-showcase/",
            },
            {
                label: "Blog Writeups",
                url: "https://blog.ericturner.it/category/projects/react-devops-showcase/",
            }
        ],
        
    },
    {
        title: "Police Data Accessibility Project - ETL / Scrapers",
        type: "Project",
        skills:['python'],
        description: {
            "en": "For the same org, I also was one of the contributers for some scrapers (CityProtect) and the main contributor for an automated ETL process for loading data into DoltHub!",
            "it":"Per la stessa organizzazione, sono stato anche uno dei collaboratori per alcuni scrapers (CityProtect) e il principale collaboratore per un processo ETL automatizzato per caricare i dati in DoltHub!",
        },
        year: "2021",
        links: [
            {
                label: "GitHub",
                url: "https://github.com/Police-Data-Accessibility-Project/PDAP-Scrapers",
            }
        ],
    },
    {
        title: "Police Data Accessibility Project - App",
        type: "Project",
        skills:['python'],
        description: {
            "en": "One of my volunteer projects, I worked on the initial construction of the PDAP Django app which is used for displaying agencies and status for US Police Agencies!",
            "it": "Uno dei miei progetti di volontariato, ho lavorato alla costruzione iniziale dell'app PDAP Django che viene utilizzata per visualizzare le agenzie e lo stato delle agenzie di polizia degli Stati Uniti!",
        },
        year: "2021",
        links: [
            {
                label: "PDAP GitHub",
                url: "https://github.com/Police-Data-Accessibility-Project/PDAP-app",
            },
            {
                label: "My GitHub",
                url: "https://github.com/EricTurner3/pdap-intake-ui",
            }
        ],
    },
    {
        title: "My Portfolio Website: 2021 Revamp",
        type: "Project",
        skills:['web_dev'],
        description: {
            "en": "This website! Built with React, Gatsby JS, Tailwind CSS, and more!",
            "it": "Questo sito web! Costruito con React, Gatsby JS, Tailwind CSS, e altro ancora!",
        },
        year: "2021",
        links: [
        {
            label: "GitHub",
            url: "https://github.com/EricTurner3/website_portfolio",
        }
        ],
    },
    {
        title: "Penetration Testing Labs",
        type: "Project",
        skills:['cybersecurity'],
        description: {
            "en": "I am active on both TryHackMe and HackTheBox and have done many challenges, machines and even a fortress!",
            "it": "Sono attivo sia su TryHackMe che su HackTheBox e ho fatto molte sfide, macchine e anche una fortezza!",
        },
        year: "2021",
        links: [
        {
            label: "Blog Posts",
            url: "https://blog.ericturner.it/category/cybersecurity-hacking/",
        },
        {
            label: "TryHackMe",
            url: "https://tryhackme.com/p/cyberic",
        },
        {
            label: "HackTheBox",
            url: "https://app.hackthebox.eu/profile/677503",
        }
        ],
    },
    {
        title: "Random Person Generator",
        type: "Project",
        skills:[ 'python'],
        description: {
            "en": "A Python Script that generates a plethora of details for a non-existent person",
            "it": "Uno script Python che genera informazioni su una persona casuale (non esistente).",
        },
        year: "2020",
        links: [
        {
            label: "GitHub",
            url: "https://github.com/EricTurner3/python/tree/master/random_person_generator",
        },
        {
            label: "Blog Writeup",
            url: "https://blog.ericturner.it/2019/03/24/random-person-generator-python/",
        },
        ],
    },
    {
        title: "Device Checkin Web App",
        type: "Project",
        skills:[ 'web_dev'],
        description: {
            "en": "Also at work, I created another PHP MVC website that integrated with our SIS and Asset Manager to facilitate teachers checking in their student's devices at the end of the year.",
            "it":"Ho creato un altro sito web PHP MVC che si è integrato con il nostro SIS e Asset Manager per facilitare agli insegnanti il controllo dei dispositivi dei loro studenti alla fine dell'anno.",
        },
        year: "2019",
        links: [
        {
            label: "Blog Writeup",
            url: "hhttps://blog.ericturner.it/2019/03/05/end-of-year-device-check-in-app/",
        },
        ],
    },
    {
        title: "Prom Ticket Web App",
        type: "Project",
        skills:[ 'web_dev'],
        description: {
            "en": "For the school district, I created a web interface in PHP w/ Bootstrap to help sell tickets, check-in at the event and help tally up votes for prom king and queen!",
            "it": "Per il mio lavoro, ho creato un'interfaccia web in PHP con Bootstrap per aiutare a vendere i biglietti, fare il check-in all'evento e contare i voti per il re e la regina del ballo!",
        },
        year: "2019",
        links: [
        {
            label: "Blog Writeup",
            url: "https://blog.ericturner.it/2019/03/05/prom-tickets-web-app/",
        },
        ],
    },
    
    {
        title: "FB Messenger Chatbot",
        type: "Project",
        skills:['web_dev'],
        description: {
            "en": "Although no longer active, I made a chatbot in Node.JS to help us decide where to go to dinner! It was pre-populated with some restaurants based on our interests.",
            "it": "Anche se non è più attivo, ho creato un chatbot in Node.JS per aiutarci a decidere dove andare a cena! Era pre-popolato con alcuni ristoranti basati sui nostri interessi.",
        },
        year: "2018",
        links: [
        {
            label: "GitHub",
            url: "https://github.com/EricTurner3/restaurant-picker-bot",
        },
        ],
    },
    
]
    
export default data_projects;
