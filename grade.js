function calculateGrade() {


    let userPercentage = document.getElementById("percentage").value;
    userPercentage = Number(userPercentage);

    let suggestion = "Your Grade is: ";

    if (userPercentage > 100) {
        suggestion+=("invalid percentage");

    } else if (userPercentage >= 90 && userPercentage <= 100) {
        suggestion+=("A++");

    } else if (userPercentage >= 80 && userPercentage < 90) {
        suggestion+=("A1");

    } else if (userPercentage >= 70 && userPercentage < 80) {
        suggestion+=("A");

    } else if (userPercentage >= 60 && userPercentage < 70) {
        suggestion+=("B");

    } else if (userPercentage >= 50 && userPercentage < 60) {
        suggestion+=("C");

    } else if (userPercentage >= 40 && userPercentage < 50) {
        suggestion+=("D");

    } else if (userPercentage >= 33 && userPercentage < 40) {
        suggestion+=("E");

    } else if (userPercentage >= 0) {
        suggestion+=("your Failed");

    } else {
        suggestion+=("invalid percentage");
    }



    document.querySelector("#title").innerHTML = suggestion
}