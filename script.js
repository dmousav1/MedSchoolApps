const schools = [
    { name: "UT Southwestern Medical School", lat: 32.8384, lng: -96.7836, mcat: 518, distance: 1215.4, rank: 16 },
    { name: "Mayo Clinic Alix School of Medicine (Arizona)", lat: 33.5277, lng: -111.9067, mcat: 520, distance: 1974.6, rank: 6 },
    { name: "Georgetown University School of Medicine", lat: 38.9076, lng: -77.0723, mcat: 512, distance: 15.4, rank: 56 },
    { name: "University of Rochester School of Medicine and Dentistry", lat: 43.1239, lng: -77.6274, mcat: 514, distance: 328.5, rank: 34 },
    { name: "Duke University School of Medicine", lat: 36.0014, lng: -78.9382, mcat: 519, distance: 237.2, rank: 3 }
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
                <td>${school.distance}</td>
                <td>${school.rank}</td>
            </tr>`
        );
    });

    // Initialize DataTable
    $("#schoolTable").DataTable();
});
