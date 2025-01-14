const schools = [
    { name: "UT Southwestern Medical School", lat: 32.8384, lng: -96.7836, mcat: 518, interviewRate: "14.08%", acceptanceRate: "4.20%", rank: 16 },
    { name: "Mayo Clinic Alix School of Medicine (Arizona)", lat: 33.5277, lng: -111.9067, mcat: 520, interviewRate: "13.81%", acceptanceRate: "1.96%", rank: 6 },
    { name: "Georgetown University School of Medicine", lat: 38.9076, lng: -77.0723, mcat: 512, interviewRate: "6.94%", acceptanceRate: "1.25%", rank: 56 },
    { name: "University of Rochester School of Medicine and Dentistry", lat: 43.1239, lng: -77.6274, mcat: 514, interviewRate: "10.13%", acceptanceRate: "1.68%", rank: 34 },
    { name: "Virginia Commonwealth University (VCU) School of Medicine", lat: 37.5413, lng: -77.4343, mcat: 510, interviewRate: "10.81%", acceptanceRate: "2.61%", rank: 62 },
    { name: "Eastern Virginia Medical School (EVMS)", lat: 36.8508, lng: -76.2859, mcat: 509, interviewRate: "11.1%", acceptanceRate: "2.11%", rank: 86 },
    { name: "Washington University in St. Louis (WashU) School of Medicine", lat: 38.6367, lng: -90.2629, mcat: 521, interviewRate: "18.47%", acceptanceRate: "2.18%", rank: 11 },
    { name: "Icahn School of Medicine at Mount Sinai", lat: 40.7903, lng: -73.9529, mcat: 516, interviewRate: "8.36%", acceptanceRate: "1.41%", rank: 14 },
    { name: "University of Virginia (UVA) School of Medicine", lat: 38.0326, lng: -78.5001, mcat: 515, interviewRate: "11.11%", acceptanceRate: "2.78%", rank: 30 },
    { name: "Duke University School of Medicine", lat: 36.0014, lng: -78.9382, mcat: 519, interviewRate: "7.51%", acceptanceRate: "1.40%", rank: 3 },
    { name: "Columbia University Vagelos College of Physicians and Surgeons", lat: 40.8405, lng: -73.9428, mcat: 522, interviewRate: "10.84%", acceptanceRate: "1.92%", rank: 4 },
    { name: "University of Chicago Pritzker School of Medicine", lat: 41.7894, lng: -87.6044, mcat: 519, interviewRate: "9.78%", acceptanceRate: "1.81%", rank: 17 },
    { name: "Cleveland Clinic Lerner College of Medicine", lat: 41.5020, lng: -81.6197, mcat: 517, interviewRate: "14.90%", acceptanceRate: "1.50%", rank: 25 },
    { name: "Harvard Medical School", lat: 42.3632, lng: -71.0942, mcat: 519, interviewRate: "11.00%", acceptanceRate: "2.30%", rank: 1 }

];

// Initialize Leaflet Map
const map = L.map("map").setView([39.8283, -98.5795], 4);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Add Markers to the Map
schools.forEach(school => {
    L.marker([school.lat, school.lng]).addTo(map)
        .bindPopup(`<b>${school.name}</b><br>Average MCAT: ${school.mcat}<br>US News Ranking: ${school.rank}`);
});

// Populate the Table
$(document).ready(function () {
    const tableBody = $("#tableBody");
    schools.forEach(school => {
        tableBody.append(
            `<tr>
                <td>${school.name}</td>
                <td>${school.mcat}</td>
                <td>${school.interviewRate}</td>
                <td>${school.acceptanceRate}</td>
                <td>${school.rank}</td>
            </tr>`
        );
    });

    // Initialize DataTable
    $("#schoolTable").DataTable();
});