
const data_skills = {
    "python":{ 
        "name": "Python",
        "color": "green-400",
        "icon": "fab fa-python",
        "level": 3,
        "desc": {
            "en": "Python is one of my favorite languages! I have used it for several years in projects ranging from Web Dev to Data Science.",
            "it": "Python è uno dei miei linguaggi preferiti! L'ho usato per diversi anni in progetti che vanno dallo sviluppo web alla scienza dei dati."
        },
        "subskills":[
            {
                "name": "Django",
                "color": "primary",
                "level": 1,
                "desc": {
                    "en": "I started learning Django in 2021, as part of a volunteer project.",
                    "it": "Ho iniziato a imparare Django nel 2021, come parte di un progetto di volontariato."
                }
            },
            {
                "name": "Pandas",
                "color": "primary",
                "level": 2,
                "desc": {
                    "en": "I love using Pandas for loading csvs and manipulating them for ETL or data science.",
                    "it": "Mi piace usare Pandas per caricare i csv e manipolarli per i processi ETL (estrazione/transformazione/caricamento) o la scienza dei dati."
                }
            }
        ]   
    },
    "php":{
        "name": "PHP",
        "color": "blue-400",
        "icon": "fab fa-php",
        "level": 3,
        "desc": {
            "en": "PHP is my preferred back-end web language!",
            "it": "PHP è il mio linguaggio web back-end preferito!"
        },
        "subskills":[
            {
                "name": "Model-View-Controller Architecture",
                "color": "primary",
                "level": 3,
                "desc": {
                    "en": "Since college, I have used a custom MVC framework in developing many of my web applications.",
                    "it": "Fin dal college, ho usato un framework MVC personalizzato nello sviluppo di molte delle mie applicazioni web."
                }
            },
            {
                "name": "Laravel",
                "color": "primary",
                "level": 1,
                "desc": {
                    "en": "Laravel is an industry-leading PHP framework that I have worked with in a learning capacity.",
                    "it": "Laravel è un framework PHP leader del settore con il quale ho lavorato in una capacità di apprendimento."
                }
            },
            {
                "name": "Composer",
                "color": "primary",
                "level": 2,
                "desc": {
                    "en": "Composer is a great tool in managing dependencies for PHP projects",
                    "it": "Composer è un grande strumento nella gestione delle dipendenze per i progetti PHP."
                }
            }
        ]   
    },
    "html5":{
        "name": "HTML5",
        "color": "red-400",
        "icon": "fab fa-html5",
        "level": 3,
        "desc": {
            "en": "HTML5 is the current foundation of the web today",
            "it": "HTML5 è la base attuale del web oggi"
        },
        "subskills":[
            {
                "name": "Bootstrap",
                "color": "primary",
                "level": 3,
                "desc": {
                    "en": "I am a huge fan of the Bootstrap framework for a fast start to a new site.",
                    "it": "Sono un grande fan del framework Bootstrap per un inizio veloce di un nuovo sito."
                }
            },
        ]   
    },
    "css":{
        "name": "CSS",
        "color": "blue-500",
        "icon": "fab fa-css3-alt",
        "level": 3,
        "desc": {
            "en": "CSS is the makeup palette of the web.",
            "it": "I CSS sono la tavolozza di trucco del web."
        },
        "subskills":[
            {
                "name": "Tailwind CSS",
                "color": "primary",
                "level": 3,
                "desc": {
                    "en": "I love using Tailwind CSS, it is chocked full of features to get off the ground quickly!",
                    "it": "Mi piace usare Tailwind CSS, è pieno di funzioni per partire rapidamente!"
                }
            },
        ]   
    },
    "js":{
        "name": "JavaScript",
        "color": "yellow-400",
        "icon": "fab fa-js",
        "level": 3,
        "desc": {
            "en": "Javascript is a robust web language with amazing capabilities.",
            "it": "Javascript è un linguaggio web robusto con capacità sorprendenti."
        },
        "subskills":[
            {
                "name": "jQuery",
                "color": "primary",
                "level": 3,
                "desc": {
                    "en": "jQuery is an amazing framework with lots of extensibility.",
                    "it": "jQuery è un framework incredibile con un sacco di estensibilità."
                }
            },
            {
                "name": "React",
                "color": "primary",
                "level": 1,
                "desc": {
                    "en": "React is an industry-leading UI framework, it is one of my focuses for 2021.",
                    "it": "React è un framework leader del settore, è uno dei miei nuovi obiettivi per il 2021."
                }
            },
            {
                "name": "Node.JS",
                "color": "primary",
                "level": 1,
                "desc": {
                    "en": "I have a little experience with using Node.JS, mostly for chatbots.",
                    "it": "Ho un po' di esperienza nell'uso di Node.JS, soprattutto per i chatbot."
                }
            }
        ]   
    },
    "testing":{
        "name": "Unit Testing",
        "color": "blue-300",
        "icon": "fas fa-vial",
        "level": 1,
        "desc": {
            "en": "Unit Testing is very important in a larger-scale program to ensure everything works properly.",
            "it": "I test unitari sono molto importanti in un programma su larga scala per assicurare che tutto funzioni correttamente."
        },
        "subskills":[
            {
                "name": "Jest + Enzyme",
                "color": "primary",
                "level": 1,
                "desc": {
                    "en": "A solid combination of tools for testing React components",
                    "it": "Una solida combinazione di strumenti per testare i componenti React"
                }
            },
            {
                "name": "PHPUnit",
                "color": "primary",
                "level": 1,
                "desc": {
                    "en": "Probably the most popular PHP testing suite available.",
                    "it": "Probabilmente la più popolare suite di test PHP disponibile."
                }
            },
            {
                "name": "PyTest",
                "color": "primary",
                "level": 1,
                "desc": {
                    "en": "One of the best python testing frameworks.",
                    "it": "Uno dei migliori framework di test in python."
                }
            }
        ]   
    },
    "dev-ops":{
        "name": "DevOps",
        "color": "pink-300",
        "icon": "fas fa-code",
        "level": 1,
        "desc": {
            "en": "A set of practices that revolutionizes the development process.",
            "it": "Un insieme di pratiche che rivoluziona il processo di sviluppo."
        },
        "subskills":[
            {
                "name": "CI / CD",
                "color": "primary",
                "level": 1,
                "desc": {
                    "en": "Continous Integration / Continous Deployment is a pipeline that allows automation, integration, testing and deployment of apps.",
                    "it": "Continous Integration / Continous Deployment è una pipeline che permette di automatizzare, integrare, testare e distribuire le app."
                }
            },
            {
                "name": "GitHub Actions",
                "color": "primary",
                "level": 1,
                "desc": {
                    "en": "I've been using GitHub Actions for building a pipeline with DevOps practices in mind",
                    "it": "Ho usato GitHub Actions per costruire una pipeline con pratiche DevOps in mente"
                }
            }
        ]   
    },
    "sc":{
        "name": "Source Control",
        "color": "purple-500",
        "icon": "fas fa-code-branch",
        "level": 3,
        "desc": {
            "en": "Unit Testing is the bread and butter of the dev-ops toolkit. It is one of my main focuses for 2021!",
            "it": "I test unitari sono il pane e il burro del toolkit dev-ops. È uno dei miei obiettivi principali per il 2021!"
        },
        "subskills":[
            {
                "name": "Git + GitHub",
                "color": "primary",
                "level": 3,
                "desc": {
                    "en": "My favorite of the source control systems, the command line is powerful and the web interface makes it easy to navigate repositories!",
                    "it": "Il mio preferito tra i sistemi di controllo dei sorgenti, la linea di comando è potente e l'interfaccia web rende facile la navigazione dei repository!"
                }
            },
            {
                "name": "Azure DevOps",
                "color": "primary",
                "level": 2,
                "desc": {
                    "en": "For work, I launched a custom DevOps server for our built applications.",
                    "it": "Per lavoro, ho lanciato un server DevOps personalizzato per le nostre applicazioni costruite."
                }
            }
        ]   
    },
    "cybersecurity":{
        "name": "Cybersecurity",
        "color": "yellow-500",
        "icon": "fas fa-user-secret",
        "level": 2,
        "desc": {
            "en": "A fascinating cat-and-mouse game between the defenders and the attackers.",
            "it": "Un affascinante gioco del gatto e del topo tra i difensori e gli attaccanti."
        },
        "subskills":[
            {
                "name": "Automotive CANBus",
                "color": "primary",
                "level": 1,
                "desc": {
                    "en": "The CANBus is a networking protocol in which the automobile communicates to all of it's modules. It is one of my side projects to hack into the CANBus and read/write custom commands.",
                    "it": "Il CANBus è un protocollo di rete in cui l'automobile comunica con tutti i suoi moduli. È uno dei miei progetti collaterali per entrare nel CANBus e leggere/scrivere comandi personalizzati."
                }
            },
            {
                "name": "TryHackMe",
                "color": "primary",
                "level": 2,
                "desc": {
                    "en": "I have been using TryHackMe for experience in Privilege Escalation, Cryptography, Exploitation, Web Hacking and more. I have completed two certificates with them.",
                    "it": "Ho usato TryHackMe per fare esperienza in Privilege Escalation, Crittografia, Exploitation, Web Hacking e altro. Ho completato due certificati con loro."
                }
            }
        ]   
    },
    "sql":{
        "name": "SQL",
        "color": "purple-400",
        "icon": "fas fa-code-branch",
        "level": 3,
        "desc": {
            "en": "Most modern architectures rely on some sort of database backend.",
            "it": "Le architetture moderne si basano su una sorta di database backend."
        },
        "subskills":[
            {
                "name": "SQL Server + SSIS Packages",
                "color": "primary",
                "level": 3,
                "desc": {
                    "en": "My main SQL architecture. I am experienced in creating SSIS packages with Visual Studio for ETL processes.",
                    "it": "La mia principale architettura SQL. Ho esperienza nella creazione di pacchetti SSIS con Visual Studio per i processi ETL."
                }
            },
            {
                "name": "MySQL",
                "color": "primary",
                "level": 2,
                "desc": {
                    "en": "MySQL was the first db architecture that I used. Very similar to SQL Server with some slight nuances.",
                    "it": "MySQL è stata la prima architettura db che ho usato. Molto simile a SQL Server con alcune piccole sfumature."
                }
            }
        ]   
    },
    "lang":{
        "name": "Language",
        "color": "green-400",
        "icon": "fas fa-language",
        "level": 2,
        "desc": {
            "en": "Learning a new language is a beautiful and thrilling experience that connects you to an entirely new set of people and cultures.",
            "it": "Imparare una nuova lingua è un'esperienza bella ed emozionante che ti connette a un insieme completamente nuovo di persone e culture."
        },
        "subskills":[
            {
                "name": "Italian",
                "color": "primary",
                "level": 2,
                "desc": {
                    "en": "I have been learning Italian for the past few years! I am at a conversational level, with more proficiency towards reading / writing.",
                    "it": "Sto imparando l'italiano negli ultimi anni. Sono ad un livello di conversazione, con più competenza verso la lettura/scrittura."
                }
            },
            {
                "name": "Spanish",
                "color": "primary",
                "level": 1,
                "desc": {
                    "en": "I had Spanish for many years during 2-12 grade. It is very similar to Italian in some aspects!",
                    "it": "Ho avuto lo spagnolo per molti anni durante i 2-12 anni. È molto simile all'italiano in alcuni aspetti!"
                }
            }
        ]   
    },
    "soft":{
        "name": "Soft Skills",
        "color": "yellow-200",
        "icon": "fas fa-user-tie",
        "level": 0,
        "desc": {
            "en": "Some skills are not as easily quantifiable but still important. Here are my top 3.",
            "it": "Alcune competenze non sono così facilmente quantificabili, ma sono comunque importanti. Ecco i miei 3 migliori."
        },
        "subskills":[
            {
                "name": "Willingness to Learn",
                "color": "primary",
                "level": 0,
                "desc": {
                    "en": "I absolutely love growing and tackling new experiences. 2021 is the year of honing my skills in React, Unit Testing and DevOps.",
                    "it": "Mi piace assolutamente crescere e affrontare nuove esperienze. Il 2021 è l'anno dell'affinamento delle mie competenze in React, Unit Testing e DevOps."
                }
            },
            {
                "name": "Problem Solving",
                "color": "primary",
                "level": 0,
                "desc": {
                    "en": "Programming can be like solving a puzzle. I love when you discover something new and need to find a solution!",
                    "it": "Programmare può essere come risolvere un puzzle. Adoro quando scopri qualcosa di nuovo e devi trovare una soluzione!"
                }
            },
            {
                "name": "Effective Communication",
                "color": "primary",
                "level": 0,
                "desc": {
                    "en": "One thing I love doing alongside coding is documentation. Creating detailed docs is a fantastic toolset that enhances everyone's experience around a product.",
                    "it": "Una cosa che amo fare insieme alla codifica è la documentazione. Creare documenti dettagliati è un set di strumenti fantastico che migliora l'esperienza di tutti intorno a un prodotto."
                }
            }
        ]   
    },
    
}

export default data_skills;
