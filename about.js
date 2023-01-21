function hideinfo() {
    phone.style.display = "block";
    addy.style.display = "none";
    rate.style.display = "none";
    avg.style.display = "none";
}

function displayinfo() {
    if (info.value == "Phone") {
        phone.style.display = "block";
        addy.style.display = "none";
        rate.style.display = "none";
        avg.style.display = "none";
    }
    if (info.value == "Address") {
        phone.style.display = "none";
        addy.style.display = "block";
        rate.style.display = "none";
        avg.style.display = "none";
    }
    if (info.value == "Rating") {
        phone.style.display = "none";
        addy.style.display = "none";
        rate.style.display = "block";
        avg.style.display = "none";
    }
    if (info.value == "Avg") {
        phone.style.display = "none";
        addy.style.display = "none";
        rate.style.display = "none";
        avg.style.display = "block";
    }
}