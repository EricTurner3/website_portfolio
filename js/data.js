/* Website Data for Handlebars Templating. Similar to a database, this a quick way to change my portfolio info without needing SQL! */
var context = { 
    nav:{
        items:[
            {name:'Biography', icon:'fa-user', location:'#profile'},
            {name:'Education', icon:'fa-user-graduate', location:'#education'},
            {name:'Work Experience', icon:'fa-user-tie', location:'#work'},
            {name:'Skills', icon:'fa-wrench', location:'#skills'},
            {name:'Projects', icon:'fa-tasks', location:'#projects'},
            {name:'Interests', icon:'fa-umbrella-beach', location:'#interests'},
            {name:'Contact', icon:'fa-phone', location:'#contact'}
        ]
    },
    about: {
        name: "Eric Turner",
        title: "Systems Integration Developer",
        location: "Indianapolis, IN",
        //Note this does NOT pull for the contact section at the bottom. That info is at the bottom of this file
        contact:[
            {type:'Email', prefix:'mailto:', data:'me@ericturner.it'}
        ]
    },
    biography:{
        title: "Full Stack Developer",
        image: "https://ericturner.it/views/assets/images/me.jpg",
        show_image: false, // decide to show my image or not
        description: "As an Integration Developer, I create applications and experiences to connect multiple existing systems together into one hub for ease-of-use and efficiency. I discovered my passion for full-stack development in college and I realized I loved creating experiences from the ground up to increase efficiency and data integrity across the board. I was given an excellent employment opportunity at my former school district to really let my talents and creativity shine."
    },
    sections:[
        {
            setup: {id: "education", icon:"fa-user-graduate", title: "Education"},
            items:[
                {
                    title: 'Core 40 Diploma', 
                    icon:'./img/jobs/warren.png', 
                    place:'Warren Central High School', 
                    location:'Indianapolis, IN', 
                    start_date: '2011-08', 
                    end_date: '2015-05',
                    more_info: 'https://wchs.warren.k12.in.us',
                    desc: "I began to really delve into technology in high school, I was part of robotics for a year, and learned Visual Basic, Java and HTML/CSS. I also worked up to be the Center Snare of the Drumline and also the Technology Officer / Webmaster for the National Honor Society."
                },
                { 
                    title: 'Certificate in Web Development', 
                    icon:'./img/education/iupui.png', 
                    place:'IUPUI', 
                    location:'Indianapolis, IN', 
                    start_date: '2016-01', 
                    end_date: '2018-05',
                    desc: "I was undecided between doing web development or data management in college, so I decided to do both tracks. My certificate in web development covered HTML, CSS, and Beginner - Advanced PHP programming. This track was the one that I truly fell in love with and later gave me an opportunity for employment."
                },
                {
                    title: 'Bachelors in Information Technology',
                    icon:'./img/education/iupui.png', 
                    place:'IUPUI', 
                    location:'Indianapolis, IN', 
                    start_date: '2016-01', 
                    end_date: '2018-12',
                    desc: "My diploma from IUPUI came from Purdue University; Besides web development, I loved working with data and analytics. Notable courses and work included Big Data Analytics using Hadoop, Python and R; Database Administration; Database Programming; 3 Terms of Project Management."
                }
            ]
        },
        {
            setup: {id: "work", icon:"fa-user-tie", title: "Work Experience"},
            items:[
                {
                    title: 'Summer Technology Assistant', 
                    icon:'./img/jobs/warren.png', 
                    place:'MSD Warren', 
                    location:'Indianapolis, IN', 
                    start_date: '2017-05-08', 
                    end_date: '2017-08',
                    desc: 'For IUPUI, I needed to fulfill an internship credit, I chose to go back to my former school district and help out in technology. I performed data entry, data cleanup, and mass device setup and cleanup.'
                },
                {
                    title: 'Tech Support I', 
                    icon:'./img/jobs/warren.png', 
                    place:'MSD Warren', 
                    location:'Indianapolis, IN', 
                    start_date: '2017-08', 
                    end_date: '2018-06',
                    desc: 'I was hired on part-time to continue my career in the MSD of Warren Township; I was assigned three buildings in our district to complete technology work orders which could include: troubleshooting a multitude of devices from laptop, projector, smart board, iPad, or chromebook; pickup of broken devices for repair, help students at the high school with ChromeDesk.'
                },
                {
                    title: 'Systems Integration Developer', 
                    icon:'./img/jobs/warren.png', 
                    place:'MSD Warren', 
                    location:'Indianapolis, IN', 
                    start_date: '2018-06', 
                    end_date: 'Present',
                    desc: 'Near the ending of my schooling, I was more proficient in creating applications. I was promoted to this position to create custom-built applications that could integrate with our already existing student information system, asset manager, and ticketing system. These apps would vary between internal-use tech department tools, to full district-wide adoption. I built a custom API, and tracking system to be able to monitor and debug issues. Efficiency, ease-of-use and simplicity are my building blocks for my applications and I use these blocks to maintain data integrity for the tech department but give staff a great experience when they need to perform their operations. [The header image at the top of this page on desktop shows screenshots of some of the apps I have developed].'
                }
            ]
        }
    ],
    skillset: [
        {
            title: "Development",
            skills: [
                {title: 'HTML5, CSS3, JS', proficiency: 5},
                {title: 'PHP', proficiency: 5},
                {title: 'Bootstrap Framework', proficiency: 5},
                {title: 'PHP', proficiency: 5},
                {title: 'jQuery', proficiency: 5},
                {title: 'SQL Server 2012+', proficiency: 5},
                {title: 'Model View Controller', proficiency: 5},
                {title: 'Project Management', proficiency: 4},
                {title: 'Wordpress', proficiency: 4},
                {title: 'Linux/Unix CLI', proficiency: 4},
                {title: 'MySQL', proficiency: 4},
                {title: 'Python', proficiency: 4},
                {title: 'Data Analytics', proficiency: 3},
                {title: 'Laravel', proficiency: 3},
                {title: 'React', proficiency: 2}
            ]
        },
        {
            title: "Languages",
            skills: [
                {title: 'English (Fluent)', proficiency: 5},
                {title: 'Italian (Livello A2)', proficiency: 2}
            ]
        },
        {
            title: "Tools",
            skills: [
                {title: 'Visual Studio Code', proficiency: 5},
                {title: 'macOS', proficiency: 5},
                {title: 'Windows', proficiency: 5},
                {title: 'Filezilla / FTP', proficiency: 3},
                {title: 'Linux', proficiency: 4},
                {title: 'Git', proficiency: 4},
                {title: 'Postman', proficiency: 4},
                {title: 'Adobe Photoshop', proficiency: 3},

            ]
        }
    ],
    projects:[
        // the tags need to be in the main.js file so they can generate a color
        // only items with showcase: True will appear on the main screen, others will display on the master page
        {title: 'Random Person Generator', showcase: true, tags:['python'], img:'./img/projects/code.png', url:'https://blog.ericturner.it/2019/03/24/random-person-generator-python/'},
        {title: 'Parallax Web Demo', showcase: true, tags:['php', 'web'], img:'./img/projects/parallax.png', url:'https://blog.ericturner.it/2019/10/08/parallax-scrolling-website/'},
        {title: 'Prom Ticket System', showcase: true, tags:['php', 'web'], img:'./img/projects/prom.png', url:'https://blog.ericturner.it/2019/03/05/prom-tickets-web-app/'},
        {title: 'Digital Cluster Retrofit', showcase: true, tags:['automotive'], img:'./img/projects/digitaldash.JPG', url:'https://blog.ericturner.it/2020/08/26/2018-mustang-technology-retrofit/'},
        {title: 'TryHackMe: Kenobi', shocase:true, tags:['cybersecurity'], url:'https://blog.ericturner.it/2021/03/22/tryhackme-kenobi/'},
        {title: '2019-2020 Portfolio Website', shocase:true, tags:['php', 'web'], url:'https://2020.ericturner.it'}
    ],
    interests:[
        {
            title:'Genealogy', 
            desc:'I\'ve been fascinated with tracing my family lineage since 2010. I go through phases of hard research for a few weeks then back off for a bit and revisit later. Currently have over 1200 people in my Ancestry family tree! Here are some of my favorite resources:',
            related: [
                {title:'Ancestry', img:'./img/interests/ancestry.png', desc:'My main site!'},
                {title:'Fold3', img:'./img/interests/fold3.png', desc:'Great for Military Records'}
            ]
        },
        {
            title:'Gaming',
            desc:'First started gaming in 2003 with the Nintendo Gamecube. I was, for the most part, a console gamer. I have played on DS, Gameboy, Switch, Xbox 360, PS4, Xbox One, and recently I made the switch to almost exclusively PC Gaming! These are some of my favorite games / franchises:',
            related:[
                {title:'Assassin\'s Creed', img:'./img/interests/ac.jpg', desc:'Have always been a fan of the historical settings and open world gameplay of Assassin\'s Creed! My favorite franchise!'},
                {title:'The Elder Scrolls', img:'./img/interests/elderscrolls.jpg', desc:'Oblivion, Skyrim and ESO are fantastic games with endless possibilities!'},
                {title:'Minecraft', img:'./img/interests/minecraft.jpg', desc:'I\'ve played since the beta in 2011! Endless possibilities, and a fantastic tool for all ages in creativity (and with mods, programming!)'}
            ]
        },
        {
            title:'Mustangs',
            desc:'I thought about putting my interest as "cars", however, I know deep down my true passion is with the Ford Mustang. I\'ve been fascinated by mustangs since 2004, picked up my first V6 mustang in 2016 and my first V8 mustang in 2018!',
            related:[
                {title:'Gen 6: S550', img:'./img/interests/mustang_square.png', desc:'The 6th Generation, S550 Platform takes my #1 pick as this is my current vehicle. The body lines and interior are fantastic!'},
                {title:'Gen 4: New Edge', img:'./img/interests/newedge.jpg', desc:'The New Edge SN95 was the car that made me super interested with mustangs. Maybe one day I can get one in the very rare MystiChrome color!'},
                {title:'1969 Mach 1', img:'./img/interests/mach1.png', desc:'I also enjoy the first generation, especially the 1969 Mach 1!'}
            ]
        }

    ],
    contact:{
        notes: 'If you would like to get in contact with me, use one of the outlets below!',
        methods: [
            {title: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/ericturner31'},
            {title: 'Email', icon: 'fas fa-envelope', url:'mailto:me@ericturner.it'}
        ]
        
    }
    

};