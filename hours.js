function hide_days() {
    sun.style.display = "block";
    mon.style.display = "none";
    tue.style.display = "none";
    wed.style.display = "none";
    thu.style.display = "none";
    fri.style.display = "none";
    sat.style.display = "none";
}

function changeHrs() {
    if (hrs.value == "Sunday") {
        sun.style.display = "block";
        mon.style.display = "none";
        tue.style.display = "none";
        wed.style.display = "none";
        thu.style.display = "none";
        fri.style.display = "none";
        sat.style.display = "none";
    }
    if (hrs.value == "Monday") {
        sun.style.display = "none";
        mon.style.display = "block";
        tue.style.display = "none";
        wed.style.display = "none";
        thu.style.display = "none";
        fri.style.display = "none";
        sat.style.display = "none";
    }
    if (hrs.value == "Tuesday") {
        sun.style.display = "none";
        mon.style.display = "none";
        tue.style.display = "block";
        wed.style.display = "none";
        thu.style.display = "none";
        fri.style.display = "none";
        sat.style.display = "none";
    }
    if (hrs.value == "Wednesday") {
        sun.style.display = "none";
        mon.style.display = "none";
        tue.style.display = "none";
        wed.style.display = "block";
        thu.style.display = "none";
        fri.style.display = "none";
        sat.style.display = "none";
    }
    if (hrs.value == "Thursday") {
        sun.style.display = "none";
        mon.style.display = "none";
        tue.style.display = "none";
        wed.style.display = "none";
        thu.style.display = "block";
        fri.style.display = "none";
        sat.style.display = "none";
    }
    if (hrs.value == "Friday") {
        sun.style.display = "none";
        mon.style.display = "none";
        tue.style.display = "none";
        wed.style.display = "none";
        thu.style.display = "none";
        fri.style.display = "block";
        sat.style.display = "none";
    }
    if (hrs.value == "Saturday") {
        sun.style.display = "none";
        mon.style.display = "none";
        tue.style.display = "none";
        wed.style.display = "none";
        thu.style.display = "none";
        fri.style.display = "none";
        sat.style.display = "block";
    }
}