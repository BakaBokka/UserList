const initialState = {
  users: [
    {
      "id": 1,
      "name": "Amabelle Barnbrook",
      "email": "abarnbrook0@dedecms.com",
      "gender": "Male",
      "avatar": "https://robohash.org/sequiquidemsint.jpg?size=100x100&set=set1",
      "job": "Associate Professor",
      "skills": "Copy Editing",
      "company": "Stanton-Jenkins",
      "department": "Marketing"
    }, {
      "id": 2,
      "name": "Patrica Firk",
      "email": "pfirk1@topsy.com",
      "gender": "Female",
      "avatar": "https://robohash.org/modimollitiadolor.jpg?size=100x100&set=set1",
      "job": "Software Test Engineer II",
      "skills": "User Interface Design",
      "company": "Hayes, Koss and Strosin",
      "department": "Support"
    }, {
      "id": 3,
      "name": "Isaac Slimmon",
      "email": "islimmon2@walmart.com",
      "gender": "Female",
      "avatar": "https://robohash.org/debitisnatusquaerat.jpg?size=100x100&set=set1",
      "job": "Data Coordiator",
      "skills": "Football",
      "company": "Stamm, Pfannerstill and Swift",
      "department": "Marketing"
    }, {
      "id": 4,
      "name": "Nerissa Minucci",
      "email": "nminucci3@artisteer.com",
      "gender": "Female",
      "avatar": "https://robohash.org/etinet.jpg?size=100x100&set=set1",
      "job": "Product Engineer",
      "skills": "GPS",
      "company": "Ziemann, Jakubowski and Feil",
      "department": "Legal"
    }, {
      "id": 5,
      "name": "Launce Clissell",
      "email": "lclissell4@deliciousdays.com",
      "gender": "Male",
      "avatar": "https://robohash.org/magnirerumconsequatur.jpg?size=100x100&set=set1",
      "job": "Sales Associate",
      "skills": "Electricity",
      "company": "O'Kon, Osinski and Macejkovic",
      "department": "Support"
    }, {
      "id": 6,
      "name": "Renee Spaducci",
      "email": "rspaducci5@people.com.cn",
      "gender": "Female",
      "avatar": "https://robohash.org/repudiandaepraesentiumdolores.jpg?size=100x100&set=set1",
      "job": "Sales Associate",
      "skills": "VMI",
      "company": "Gottlieb Inc",
      "department": "Engineering"
    }, {
      "id": 7,
      "name": "Josselyn Melbourn",
      "email": "jmelbourn6@instagram.com",
      "gender": "Female",
      "avatar": "https://robohash.org/autnecessitatibusodit.jpg?size=100x100&set=set1",
      "job": "Administrative Officer",
      "skills": "Ufile",
      "company": "Conroy, Torphy and Howe",
      "department": "Human Resources"
    }, {
      "id": 8,
      "name": "Kevina Baumann",
      "email": "kbaumann7@usa.gov",
      "gender": "Male",
      "avatar": "https://robohash.org/cumquequaeratsed.jpg?size=100x100&set=set1",
      "job": "Research Assistant I",
      "skills": "Observation",
      "company": "Grant LLC",
      "department": "Human Resources"
    }, {
      "id": 9,
      "name": "Rubia Beauvais",
      "email": "rbeauvais8@prnewswire.com",
      "gender": "Female",
      "avatar": "https://robohash.org/cupiditatereprehenderitasperiores.jpg?size=100x100&set=set1",
      "job": "Social Worker",
      "skills": "Ion",
      "company": "Stamm-Beahan",
      "department": "Services"
    }, {
      "id": 10,
      "name": "Vonny Prichard",
      "email": "vprichard9@weibo.com",
      "gender": "Female",
      "avatar": "https://robohash.org/doloreminimaut.jpg?size=100x100&set=set1",
      "job": "Engineer IV",
      "skills": "ZeroMQ",
      "company": "Huel-Block",
      "department": "Engineering"
    }, {
      "id": 11,
      "name": "Mort Ferfulle",
      "email": "mferfullea@army.mil",
      "gender": "Female",
      "avatar": "https://robohash.org/cumanimiest.jpg?size=100x100&set=set1",
      "job": "Chief Design Engineer",
      "skills": "vBlock",
      "company": "Koelpin, Krajcik and Cruickshank",
      "department": "Business Development"
    }, {
      "id": 12,
      "name": "Harmonia Jaram",
      "email": "hjaramb@ed.gov",
      "gender": "Male",
      "avatar": "https://robohash.org/inquiconsequatur.jpg?size=100x100&set=set1",
      "job": "Structural Analysis Engineer",
      "skills": "RMX",
      "company": "Glover Group",
      "department": "Legal"
    }, {
      "id": 13,
      "name": "Venita Fielder",
      "email": "vfielderc@jiathis.com",
      "gender": "Female",
      "avatar": "https://robohash.org/afacilisquaerat.jpg?size=100x100&set=set1",
      "job": "Occupational Therapist",
      "skills": "Therapeutic Massage",
      "company": "Lockman, Lang and Turcotte",
      "department": "Training"
    }, {
      "id": 14,
      "name": "Cornell Fellon",
      "email": "cfellond@prweb.com",
      "gender": "Female",
      "avatar": "https://robohash.org/cupiditatesolutaveritatis.jpg?size=100x100&set=set1",
      "job": "GIS Technical Architect",
      "skills": "Digital Illustration",
      "company": "Leffler LLC",
      "department": "Services"
    }, {
      "id": 15,
      "name": "Aristotle Styles",
      "email": "astylese@europa.eu",
      "gender": "Male",
      "avatar": "https://robohash.org/eumsitmolestiae.jpg?size=100x100&set=set1",
      "job": "Mechanical Systems Engineer",
      "skills": "Secretarial Skills",
      "company": "Hickle-O'Conner",
      "department": "Business Development"
    }, {
      "id": 16,
      "name": "Teri Ferrarese",
      "email": "tferraresef@etsy.com",
      "gender": "Male",
      "avatar": "https://robohash.org/estexplicaboperferendis.jpg?size=100x100&set=set1",
      "job": "Recruiter",
      "skills": "Tenacious Work Ethic",
      "company": "Mayer Inc",
      "department": "Training"
    }, {
      "id": 17,
      "name": "Reta Phipson",
      "email": "rphipsong@ucoz.com",
      "gender": "Female",
      "avatar": "https://robohash.org/doloremquiaplaceat.jpg?size=100x100&set=set1",
      "job": "Structural Engineer",
      "skills": "UF/DF",
      "company": "Cormier-Fritsch",
      "department": "Support"
    }, {
      "id": 18,
      "name": "Enriqueta Rottger",
      "email": "erottgerh@umich.edu",
      "gender": "Female",
      "avatar": "https://robohash.org/velperspiciatisperferendis.jpg?size=100x100&set=set1",
      "job": "Analyst Programmer",
      "skills": "American Politics",
      "company": "Ullrich, Grady and Lebsack",
      "department": "Engineering"
    }, {
      "id": 19,
      "name": "Margarethe Lubeck",
      "email": "mlubecki@posterous.com",
      "gender": "Male",
      "avatar": "https://robohash.org/quasiestvoluptate.jpg?size=100x100&set=set1",
      "job": "Chemical Engineer",
      "skills": "Curating",
      "company": "Schaden-Koss",
      "department": "Product Management"
    }, {
      "id": 20,
      "name": "Chantalle Domerque",
      "email": "cdomerquej@columbia.edu",
      "gender": "Male",
      "avatar": "https://robohash.org/inciduntvoluptatemrerum.jpg?size=100x100&set=set1",
      "job": "Quality Engineer",
      "skills": "Social Media Marketing",
      "company": "Predovic Inc",
      "department": "Support"
    }
  ],
};

const reducer = (state = initialState, action) => {
 switch (action.type) {
   case "USERS_LOADED":
     return {
      users: action.payload
     };
     default:
     return state;
 }
};

export default reducer;
