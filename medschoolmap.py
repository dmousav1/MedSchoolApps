import streamlit as st
import pandas as pd
import folium
from streamlit_folium import st_folium
from geopy.distance import geodesic

# Medical schools and their coordinates
medical_schools = {
    "UT Southwestern Medical School": (32.8384, -96.7836),
    "Mayo Clinic Alix School of Medicine (Arizona)": (33.5277, -111.9067),
    "Georgetown University School of Medicine": (38.9076, -77.0723),
    "University of Rochester School of Medicine and Dentistry": (43.1239, -77.6274),
    "Virginia Commonwealth University (VCU) School of Medicine": (37.5413, -77.4343),
    "Eastern Virginia Medical School (EVMS)": (36.8508, -76.2859),
    "Washington University in St. Louis (WashU) School of Medicine": (38.6367, -90.2629),
    "Icahn School of Medicine at Mount Sinai": (40.7903, -73.9529),
    "University of Virginia (UVA) School of Medicine": (38.0326, -78.5001),
    "Duke University School of Medicine": (36.0014, -78.9382),
    "Columbia University Vagelos College of Physicians and Surgeons": (40.8405, -73.9428)
}

# Average MCAT scores (example values, replace with real data if needed)
avg_mcat_scores = {
    "UT Southwestern Medical School": 518,
    "Mayo Clinic Alix School of Medicine (Arizona)": 520,
    "Georgetown University School of Medicine": 512,
    "University of Rochester School of Medicine and Dentistry": 514,
    "Virginia Commonwealth University (VCU) School of Medicine": 510,
    "Eastern Virginia Medical School (EVMS)": 509,
    "Washington University in St. Louis (WashU) School of Medicine": 521,
    "Icahn School of Medicine at Mount Sinai": 516,
    "University of Virginia (UVA) School of Medicine": 515,
    "Duke University School of Medicine": 519,
    "Columbia University Vagelos College of Physicians and Surgeons": 522
}

# 2023 US News Top Medical School rankings (example values, replace with real data if needed)
us_news_rankings = {
    "UT Southwestern Medical School": 16,
    "Mayo Clinic Alix School of Medicine (Arizona)": 6,
    "Georgetown University School of Medicine": 56,
    "University of Rochester School of Medicine and Dentistry": 34,
    "Virginia Commonwealth University (VCU) School of Medicine": 62,
    "Eastern Virginia Medical School (EVMS)": 86,
    "Washington University in St. Louis (WashU) School of Medicine": 11,
    "Icahn School of Medicine at Mount Sinai": 14,
    "University of Virginia (UVA) School of Medicine": 30,
    "Duke University School of Medicine": 3,
    "Columbia University Vagelos College of Physicians and Surgeons": 4
}

# Great Falls, Virginia coordinates
great_falls_coords = (38.9987, -77.2888)

# Create DataFrame with distance calculations
school_data = pd.DataFrame(
    [
        {
            "School": school,
            "2023 US News Ranking": us_news_rankings[school],
            "Average MCAT": avg_mcat_scores[school],
            "Distance from Great Falls, VA (miles)": round(geodesic(coords, great_falls_coords).miles, 2)
        }
        for school, coords in medical_schools.items()
    ]
)

# Streamlit app setup
st.title("Daniel Mousavi")
st.header("Medical School Interview Locations")

# Create a Folium map
map_center = (39.8283, -98.5795)  # Center of the US
m = folium.Map(location=map_center, zoom_start=4)

# Add markers
for school, coords in medical_schools.items():
    folium.Marker(
        location=coords, popup=school, icon=folium.Icon(color="blue")
    ).add_to(m)

# Display the table
st.subheader("Medical School Details")
st.dataframe(school_data, use_container_width=True)

# Display the map
st_folium(m, width=800, height=600)