var days = [
    [
        ['Welcome & Introduction', 'Professor Fouad FERKOUS - University of Annaba', 'Fouad_1', ''],
        ['Computer Aided Drug Design', 'Professor Fouad FERKOUS - University of Annaba', 'Fouad_1', ''],
        ['2D & 3D- QSAR: Applications and limitations', 'Youcef Saihi – Higher School of Technological Education – Skikda', 'Youcef_1', ''],
        ['Workshops on 2D- QSAR', 'Ahmed Allali & Mohammed Brahim', 'Ahmed_1', 'Mohammed_1'],
        ['Workshops on 2D- QSAR', 'Ahmed Allali & Mohammed Brahim', 'Ahmed_1', 'Mohammed_1']
    ],
    [
        ['Introduction to Molecular Docking', 'Youcef SAIHI – Higher School of Technological Education - Skikda', 'Youcef_1', ''],
        ['Machine learning in drug design I', 'Mohammed BRAHIMI - University of Bordj Bou Arreridj', 'Mohammed_1', ''],
        ['Calculation methods in computational chemistry', 'Abdelmalek Khorief Nacereddine - Higher School of Technological Education - Skikda', 'Abdelmalek_1', ''],
        ['Workshops on molecular Docking - 1', 'Youcef SAIHI & Khairedine KRAIM', 'Youcef_1', 'Khairedine_1'],
        ['Workshops on molecular Docking - 1', 'Youcef SAIHI & Khairedine KRAIM', 'Youcef_1', 'Khairedine_1']
    ],
    [
        ['Molecular Docking: Search Algorithms and scoring functions', 'Khairedine KRAIM – Higher School of Technological Education - Skikda', 'Khairedine_1', ''],
        ['Machine learning in drug design II', 'Mohammed BRAHIMI - University of Bordj Bou Arreridj', 'Mohammed_1', ''],
        ['Introduction to Pharmacophore Hypothesis in drug design', 'Khairedine KRAIM – Higher School of Technological Education - Skikda', 'Khairedine_1', ''],
        ['Workshop on molecular docking -2', ' Youcef SAIHI & Khairedine KRAIM', 'Youcef_1', 'Khairedine_1'],
        ['Workshop on molecular docking -2', ' Youcef SAIHI & Khairedine KRAIM', 'Youcef_1', 'Khairedine_1']
    ],
    [
        ['Pharmacophore ligand/structure - based drug design', 'Khairedine KRAIM – Higher School of Technological Education - Skikda', 'Khairedine_1', ''],
        ['Machine learning in drug design III', 'Mohammed BRAHIMI - University of Bordj Bou Arreridj', 'Mohammed_1', ''],
        ['Workshop on Pharmacophore ligand - based', 'Youcef SAIHI & Khairedine KRAIM', 'Youcef_1', 'Khairedine_1'],
        ['Workshop on Pharmacophore ligand - based', 'Youcef SAIHI & Khairedine KRAIM', 'Youcef_1', 'Khairedine_1'],
        ['Workshop on Pharmacophore ligand - based', 'Youcef SAIHI & Khairedine KRAIM', 'Youcef_1', 'Khairedine_1']
    ],
    [
        ['Automating drug discovery', 'Khairedine KRAIM', 'Khairedine_1',''],
        ['Workshop on Pharmacophore structure - based', 'Youcef SAIHI & Khairedine KRAIM', 'Youcef_1', 'Khairedine_1'],
        ['Workshop on Pharmacophore structure - based', 'Youcef SAIHI & Khairedine KRAIM', 'Youcef_1', 'Khairedine_1'],
        ['Workshop on Virtual screening based on Pharmacophore', 'Youcef SAIHI & Khairedine KRAIM', 'Youcef_1', 'Khairedine_1'],
        ['Close the spring school', '', '', ''],
    ],
];
var dates = [
    ['29', 'Sunday', 'March 2020'],
    ['30', 'Monday', 'March 2020'],
    ['31', 'Tuesday', 'March 2020'],
    ['01', 'Wednesday', 'April 2020'],
    ['02', 'Thursday', 'April 2020'],
]

var currentDay = 0;

function setSection(day) {

    if (currentDay > 4) currentDay = 0;
    if (currentDay < 0) currentDay = 4;

    document.querySelector("div.day-number").innerText = dates[currentDay][0];
    document.querySelector("div.day-name").innerText = dates[currentDay][1];
    document.querySelector("div.month").innerText = dates[currentDay][2];

    const sections = document.body.getElementsByClassName('section');
    for (let index = 0; index < sections.length; index++) {
        sections[index].childNodes[1].innerText = days[currentDay][index][0];
        sections[index].childNodes[3].innerText = days[currentDay][index][1];
        sections[index].childNodes[5].childNodes[1].src = '/img/ppl/' + days[currentDay][index][2] + '.jpg';
        sections[index].childNodes[5].childNodes[3].src = '/img/ppl/' + days[currentDay][index][3] + '.jpg';
    }

    if (currentDay > 0) {
        document.getElementsByClassName('registration')[0].style.display = 'none';
        document.querySelector("#content > div.timeline.container > ul > li:nth-child(2) > div.bullet.orange").classList = 'bullet green';
    } else {
        document.getElementsByClassName('registration')[0].style.display = 'block';
        document.querySelector("#content > div.timeline.container > ul > li:nth-child(2) > div.bullet.green").classList = 'bullet orange';
    }

}
setSection(0)
