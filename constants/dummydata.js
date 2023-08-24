export default employeeProfile = {
    departments:
    [
        {
        id:0,
        title:'Hira Yazılım',
        DepartmentImage: require('../assets/images/logos/HiraYazilim.jpg'),
        activeProjects: ['Project Persona', 'IOS App', 'MetaYıldız Web Page', ],
        employees:
        [
            {
                id:1,
                title:'Barış Turgut',
                personalProjects: ['Project1 ',' Project2'],
                enteredDay: '01.01.2022',
                birthDay: '02.02.1998',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'baristurgut@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
                insurance: true
            },
            {
                id:2,
                title:'Bekir Palabıyık',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                birthDay: '02.02.1998',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Yazılım Geliştiricisi' ,
                email: 'bekirpalabiyik@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
            },
            {
                id:3,
                title:'Berkay Uygur',
                personalProjects: ['Project Persona', 'MetaYıldız Website'],
                enteredDay: '03.07.2023',
                birthDay: '02.02.1998',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Bilgisayar/ Elektrik-Elektronik Mühendisi' ,
                email: 'berkayuygur@metayildiz.com.tr',
                phone: '0505 009 15 68',
                address: '45 Sok.  No 27 Daire 6 Bornova/İzmir',
            },
        ]
        },
        {
        id:1,
        title:'MetaYıldız',
        DepartmentImage: require('../assets/images/logos/MetaYildiz.jpeg'),
        activeProjects: [
            {
                id:1,
                projectTitle:'Project Persona',
                teamMembers: ['Berkay Uygur', 'Berk Ersöz', 'Eslem Filiz'],
                startDate: '10.08.2023',
                dueDate: '14.08.2023',
                status: 'Bu proje Ar-Ge aşamasındadır.'
            },
            {
                id:2,
                projectTitle:'Project2',
                teamMembers: ['Berkay Uygur', 'Berk Ersöz', 'Eslem Filiz'],
                startDate: '10.08.2023',
                dueDate: '14.08.2023',
            },
            {
                id:3,
                projectTitle:'Project3',
                teamMembers: ['Berkay Uygur', 'Berk Ersöz', 'Eslem Filiz'],
                startDate: '10.08.2023',
                dueDate: '14.08.2023',
            }
        ],
        director:'Fatma Erden',
        employees:
        [
            {
                id:1,
                name:'Barış Turgut',
                personalProjects: [ 'Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'baristurgut@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
                insurance: true
            },
            {
                id:2,
                name:'Bekir Palabıyık',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'bekirpalabiyik@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
            },
            {
                id:3,
                name:'Berkay Uygur',
                personalProjects: ['Project Persona', 'MetaYıldız Website'],
                enteredDay: '03.07.2023',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Bilgisayar/ Elektrik-Elektronik Mühendisi' ,
                email: 'berkayuygur@metayildiz.com.tr',
                phone: '0505 009 15 68',
                address: '45 Sok.  No 27 Daire 6 Bornova/İzmir',
            },
        ]
        },
        {
        id:2,
        title:'TPR',
        DepartmentImage: require('../assets/images/logos/TPR.jpeg'),
        activeProjects: ['Project1', 'Project2', 'Project3', ],
        employees:
        [
            {
                id:1,
                title:'Barış Turgut',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'baristurgut@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
                insurance: true
            },
            {
                id:2,
                title:'Bekir Palabıyık',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'bekirpalabiyik@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
            },
            {
                id:3,
                title:'Berkay Uygur',
                personalProjects: ['ProjectPersona', 'MetaYıldız Website'],
                enteredDay: '03.07.2023',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Bilgisayar/ Elektrik-Elektronik Mühendisi' ,
                email: 'berkayuygur@metayildiz.com.tr',
                phone: '0505 009 15 68',
                address: '45 Sok.  No 27 Daire 6 Bornova/İzmir',
            },
        ]
        },
        {
        id:3,
        title:'Koçer Motors',
        DepartmentImage: require('../assets/images/logos/KocerMotors.jpeg'),
        activeProjects: ['Project1', 'Project2', 'Project3', ],
        employees:
        [
            {
                id:1,
                title:'Barış Turgut',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'baristurgut@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
                insurance: true
            },
            {
                id:2,
                title:'Bekir Palabıyık',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'bekirpalabiyik@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
            },
            {
                id:3,
                title:'Berkay Uygur',
                personalProjects: ['ProjectPersona', 'MetaYıldız Website'],
                enteredDay: '03.07.2023',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Bilgisayar/ Elektrik-Elektronik Mühendisi' ,
                email: 'berkayuygur@metayildiz.com.tr',
                phone: '0505 009 15 68',
                address: '45 Sok.  No 27 Daire 6 Bornova/İzmir',
            },
        ]
        },
        {
        id:4,
        title:'Sedat Ocakcı Danışmanlık',
        DepartmentImage: require('../assets/images/logos/SedatOcakciDanismanlik.jpg'),
        activeProjects: ['Project1', 'Project2', 'Project3', ],
        employees:
        [
            {
                id:1,
                title:'Barış Turgut',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'baristurgut@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
                insurance: true
            },
            {
                id:2,
                title:'Bekir Palabıyık',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'bekirpalabiyik@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
            },
            {
                id:3,
                title:'Berkay Uygur',
                personalProjects: ['ProjectPersona', 'MetaYıldız Website'],
                enteredDay: '03.07.2023',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Bilgisayar/ Elektrik-Elektronik Mühendisi' ,
                email: 'berkayuygur@metayildiz.com.tr',
                phone: '0505 009 15 68',
                address: '45 Sok.  No 27 Daire 6 Bornova/İzmir',
            },
        ]
        },
        {
        id:5,
        title:'Dolgaç Hukuk',
        DepartmentImage: require('../assets/images/logos/DolgacHukuk.png'),
        activeProjects: ['Project1', 'Project2', 'Project3', ],
        employees:
        [
            {
                id:1,
                title:'Barış Turgut',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'baristurgut@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
                insurance: true
            },
            {
                id:2,
                title:'Bekir Palabıyık',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'bekirpalabiyik@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
            },
            {
                id:3,
                title:'Berkay Uygur',
                personalProjects: ['ProjectPersona', 'MetaYıldız Website'],
                enteredDay: '03.07.2023',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Bilgisayar/ Elektrik-Elektronik Mühendisi' ,
                email: 'berkayuygur@metayildiz.com.tr',
                phone: '0505 009 15 68',
                address: '45 Sok.  No 27 Daire 6 Bornova/İzmir',
            },
        ]
        },
        {
        id:6,
        title:'Seçkinler İnşaat',
        DepartmentImage: require('../assets/images/logos/SeckinlerInsaat.png'),
        activeProjects: ['Project1', 'Project2', 'Project3', ],
        employees:
        [
            {
                id:1,
                title:'Barış Turgut',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'baristurgut@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
                insurance: true
            },
            {
                id:2,
                title:'Bekir Palabıyık',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'bekirpalabiyik@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
            },
            {
                id:3,
                title:'Berkay Uygur',
                personalProjects: ['ProjectPersona', 'MetaYıldız Website'],
                enteredDay: '03.07.2023',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Bilgisayar/ Elektrik-Elektronik Mühendisi' ,
                email: 'berkayuygur@metayildiz.com.tr',
                phone: '0505 009 15 68',
                address: '45 Sok.  No 27 Daire 6 Bornova/İzmir',
            },
        ]
        },
        {
        id:7,
        title:'Nail Pro',
        DepartmentImage: require('../assets/images/logos/NailPro.png'),
        activeProjects: ['Project1', 'Project2', 'Project3', ],
        employees:
        [
            {
                id:1,
                title:'Barış Turgut',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'baristurgut@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
                insurance: true
            },
            {
                id:2,
                title:'Bekir Palabıyık',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'bekirpalabiyik@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
            },
            {
                id:3,
                title:'Berkay Uygur',
                personalProjects: ['ProjectPersona', 'MetaYıldız Website'],
                enteredDay: '03.07.2023',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Bilgisayar/ Elektrik-Elektronik Mühendisi' ,
                email: 'berkayuygur@metayildiz.com.tr',
                phone: '0505 009 15 68',
                address: '45 Sok.  No 27 Daire 6 Bornova/İzmir',
            },
        ]
        },
        {
        id:8,
        title:'VIP Room',
        DepartmentImage: require('../assets/images/logos/VIPRoom.jpg'),
        activeProjects: ['Project1', 'Project2', 'Project3', ],
        employees:
        [
            {
                id:1,
                title:'Barış Turgut',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'baristurgut@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
                insurance: true
            },
            {
                id:2,
                title:'Bekir Palabıyık',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'bekirpalabiyik@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
            },
            {
                id:3,
                title:'Berkay Uygur',
                personalProjects: ['ProjectPersona', 'MetaYıldız Website'],
                enteredDay: '03.07.2023',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Bilgisayar/ Elektrik-Elektronik Mühendisi' ,
                email: 'berkayuygur@metayildiz.com.tr',
                phone: '0505 009 15 68',
                address: '45 Sok.  No 27 Daire 6 Bornova/İzmir',
            },
        ]
        },
        {
        id:9,
        title:'UnixCyber',
        DepartmentImage: require('../assets/images/logos/unixCyberLogo.jpg'),
        activeProjects: ['Project1', 'Project2', 'Project3', ],
        employees:
        [
            {
                id:1,
                title:'Barış Turgut',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'baristurgut@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
                insurance: true
            },
            {
                id:2,
                title:'Bekir Palabıyık',
                personalProjects: ['Project1','Project2'],
                enteredDay: '01.01.2022',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Makina Mühendisi' ,
                email: 'bekirpalabiyik@metayildiz.com.tr',
                phone: '0505 050 05 05',
                address: '33 Sok. 33 No. Daire 3  Çiğli/İzmir',
            },
            {
                id:3,
                title:'Berkay Uygur',
                personalProjects: ['ProjectPersona', 'MetaYıldız Website'],
                enteredDay: '03.07.2023',
                PersonImage: require('../assets/images/Person1.jpeg'),
                jobTitle: 'Bilgisayar/ Elektrik-Elektronik Mühendisi' ,
                email: 'berkayuygur@metayildiz.com.tr',
                phone: '0505 009 15 68',
                address: '45 Sok.  No 27 Daire 6 Bornova/İzmir',
            },
        ]
        }
    ]
    
}