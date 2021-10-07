const data_projects = [
    {
        title: "FB Messenger Chatbot",
        skills:['js'],
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
    {
        title: "Automotive CANBus Interface",
        skills:['python', 'cybersecurity'],
        description: {
            "en": "An on-going side project of mine is to build a custom entertainment system for my mustang by working with the CANBus!",
            "it": "Un mio progetto secondario in corso è quello di costruire un sistema di intrattenimento personalizzato per la mia mustang lavorando con il CANBus!",
        },
        year: "2019",
        links: [
        {
            label: "GitHub",
            url: "https://github.com/EricTurner3/python/tree/master/obd",
        }
        ],
    },
    {
        title: "Prom Ticket Web App",
        skills:[ 'php', 'html5', 'css', 'js'],
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
        title: "Device Checkin Web App",
        skills:[ 'php', 'html5', 'css', 'js'],
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
        title: "Random Person Generator",
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
        title: "Mustang: Digital Speedometer Retrofit",
        skills:['cybersecurity'],
        description: {
            "en": "With some help of the people on Mustang6g.com, I retrofitted a new entertainment system and speedometer from a newer generation car into my 2015 Mustang! It required some programming and integration with the existing systems.",
            "it": "Con l'aiuto delle persone su Mustang6g.com, ho montato un nuovo sistema di intrattenimento e un tachimetro da un'auto di nuova generazione nella mia Mustang del 2015!",
        },
        year: "2020",
        links: [
        {
            label: "Blog Writeup",
            url: "https://blog.ericturner.it/2020/08/26/2018-mustang-technology-retrofit/",
        },
        ],
    },
    {
        title: "Pentesting CTF",
        skills:['cybersecurity'],
        description: {
            "en": "I am active on both TryHackMe and HackTheBox and have done many CTF challenges!",
            "it": "Sono attivo sia su TryHackMe che su HackTheBox e ho fatto molte sfide CTF!",
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
        title: "My Portfolio Website: 2021 Revamp",
        skills:['html5', 'css', 'js'],
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
        title: "Police Data Accessibility Project - App",
        skills:['python', 'js'],
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
        title: "Police Data Accessibility Project - ETL / Scrapers",
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
        title: "Laravel + React Devops Showcase",
        skills:['php', 'dev-ops', 'sc'],
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
        title: "Crime Analysis",
        skills:['python', 'data-analytics'],
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
    }
]
    
export default data_projects;
