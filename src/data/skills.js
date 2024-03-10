// filterable: true will allow it to be filtered on the Projects page. Not all skills show up on projects page so this keeps it clean.
const data_skills = {
    "python":{ 
        "name": "Python",
        "color": "green-600",
        "icon": "fab fa-python",
        "level": 3,
        "filterable": true,
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
    "web_dev":{
        "name": "Web Development",
        "color": "blue-500",
        "icon": "fab fa-php",
        "level": 3,
        "filterable": true,
        "desc": {
            "en": "My current occupation started out as a full-stack web developer, before transitioning more into data integrations.",
            "it": "La mia attuale occupazione è iniziata come sviluppatore web full-stack, prima di passare più alle integrazioni di dati."
        },
        "subskills":[
            {
                "name": "PHP",
                "color": "primary",
                "level": 3,
                "desc": {
                    "en": "I graduated from IUPUI with a certificate in Web Development which had a heavy focus on Advanced PHP Development.",
                    "it": "Mi sono laureato alla IUPUI con un certificato in sviluppo web che si concentrava molto sullo sviluppo PHP avanzato."
                }
            },
            {
                "name": "HTML5 / CSS / JS",
                "color": "primary",
                "level": 3,
                "desc": {
                    "en": "I haven't settled on a particular front-end yet, but I still am great with the original languages.",
                    "it": "Non ho ancora deciso su un front-end particolare, ma sono ancora grande con le lingue originali."
                }
            },
            {
                "name": "Gatsby.js",
                "color": "primary",
                "level": 2,
                "desc": {
                    "en": "This website! I learned this new framework in 2021 to expand my horizons.",
                    "it": "Questo sito web! Ho imparato questa nuova struttura nel 2021 per espandere i miei orizzonti."
                }
            }
        ]   
    },
    "cybersecurity":{
        "name": "Cybersecurity",
        "color": "purple-400",
        "icon": "fas fa-user-secret",
        "level": 2,
        "filterable": true,
        "desc": {
            "en": "A fascinating cat-and-mouse game between the defenders and the attackers.",
            "it": "Un affascinante gioco del gatto e del topo tra i difensori e gli attaccanti."
        },
        "subskills":[
            {
                "name": "Malware Analysis",
                "color": "primary",
                "level": 1,
                "desc": {
                    "en": "Starting Dec 2021, I have setup a malware analysis lab and began to dissect and report on indicators of compromise for malware.",
                    "it": "A partire dal dicembre 2021, ho impostato un laboratorio di analisi del malware e ho iniziato a sezionare e segnalare gli indicatori di compromissione del malware."
                }
            },
            {
                "name": "Penetration Testing",
                "color": "primary",
                "level": 2,
                "desc": {
                    "en": "I am active on both TryHackMe and HackTheBox for experience in penetration testing and vulnerability scanning on simulated virtual machines.",
                    "it": "Sono attivo sia su TryHackMe che su HackTheBox per l'esperienza nei test di penetrazione e nella scansione delle vulnerabilità su macchine virtuali simulate."
                }
            }
        ]   
    },
    "sql":{
        "name": "SQL",
        "color": "purple-400",
        "icon": "fas fa-code-branch",
        "level": 3,
        "filterable": false,
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
        "level": 1,
        "filterable": false,
        "desc": {
            "en": "Learning a new language is a beautiful and thrilling experience that connects you to an entirely new set of people and cultures.",
            "it": "Imparare una nuova lingua è un'esperienza bella ed emozionante che ti connette a un insieme completamente nuovo di persone e culture."
        },
        "subskills":[
            {
                "name": "Italian",
                "color": "primary",
                "level": 1,
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
                    "en": "Basic understanding, mostly reading / writing focus",
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
        "filterable": false,
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
                    "en": "I absolutely love growing and tackling new experiences. Most recently, I have been increasing both defensive and offensive security skills such as Incident Response and Penetration Testing.",
                    "it": "Mi piace assolutamente crescere e affrontare nuove esperienze. Più di recente, ho aumentato le competenze di sicurezza sia difensive che offensive, come l'Incident Response e il Penetration Testing."
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
