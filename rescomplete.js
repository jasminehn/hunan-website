function load_data() {
    thanks.innerHTML = "Your reservation is scheduled for " + sessionStorage.res_date + " at " + sessionStorage.res_time + " for a party of " + sessionStorage.num_ppl + ". We will contact you at " + sessionStorage.phone_num + ".";
    soon.innerHTML = "See you soon, " + sessionStorage.full_name + "!";
}