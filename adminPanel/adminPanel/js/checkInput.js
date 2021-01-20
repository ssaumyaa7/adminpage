function checkInput(){
    var countryIdOption = document.getElementById('countryId');
    var value = countryIdOption.options[countryIdOption.selectedIndex].text;
    console.log(value);

    var stateIdOption = document.getElementById('stateId');
    var value = stateIdOption.options[stateIdOption.selectedIndex].text;
    console.log(value);
    
    var cityIdOption = document.getElementById('cityId');
    var value = cityIdOption.options[cityIdOption.selectedIndex].text;
    console.log(value);



    if ($("#countryId")[0].selectedIndex <= 0 || $("#stateId")[0].selectedIndex <= 0 || $("#cityId")[0].selectedIndex <= 0) { 
        alert("There is no option selected"); 
    } 
    else 
        alert("Option is Selected"); 
}