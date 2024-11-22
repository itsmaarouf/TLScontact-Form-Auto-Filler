// Data for multiple persons
var persons = [
    {
        name: "Hamza El Maarouf",
        ref: "FRA1TG20247062278",
        lastName: "el maarouf",
        firstName: "hamza",
        birth: "1995-05-15",
        passType: "ordinary_passport",
        passNum: "KB132654",
        mobile: "212607803738"
    },
    {
        name: "John Doe",
        ref: "FRA2TG20247062279",
        lastName: "doe",
        firstName: "john",
        birth: "1990-01-01",
        passType: "ordinary_passport",
        passNum: "JD132654",
        mobile: "212601234567"
    },
    {
        name: "Jane Smith",
        ref: "FRA3TG20247062280",
        lastName: "smith",
        firstName: "jane",
        birth: "1992-07-20",
        passType: "ordinary_passport",
        passNum: "JS987654",
        mobile: "212607890123"
    }
];

// Function to set values in the form
function fillForm(person) {
    function setValueAndDispatchEvent(elementId, value, eventType = 'input') {
        var element = document.getElementById(elementId);
        if (element) {
            element.value = value;
            element.dispatchEvent(new Event(eventType));
        }
    }

    var travelDate = (() => {
        var Ttime = new Date();
        Ttime.setDate(Ttime.getDate() + 30);
        var Tdate = Ttime.getDate();
        var Tmonth = Ttime.getMonth() + 1;
        var Tyear = Ttime.getFullYear();
        return `${Tyear} -${Tmonth.toString().padStart(2, '0')} -${Tdate.toString().padStart(2, '0')}`;
    })();

    setValueAndDispatchEvent('f_cai', person.ref);
    setValueAndDispatchEvent('f_pers_surnames', person.lastName);
    setValueAndDispatchEvent('f_pers_givennames', person.firstName);
    setValueAndDispatchEvent('f_pers_birth_date', person.birth, 'change');
    setValueAndDispatchEvent('passport-type', person.passType, 'change');
    setValueAndDispatchEvent('f_pass_num', person.passNum);
    setValueAndDispatchEvent('f_pers_mobile_phone', person.mobile);
    setValueAndDispatchEvent('fi_trav_origin_departure_date', travelDate, 'change');
}

// Create buttons dynamically for each person
function createButtons() {
    var container = document.createElement('div');
    container.id = "button-container";
    container.style.position = "absolute";
    container.style.top = "0px";
    container.style.left = "0px";
    container.style.width = "100%";
    container.style.backgroundColor = "#fff";
    container.style.padding = "10px";
    container.style.borderBottom = "1px solid #ddd";
    container.style.zIndex = "1000";

    persons.forEach(person => {
        var button = document.createElement('button');
        button.textContent = person.name;
        button.style.marginRight = "10px";
        button.onclick = () => fillForm(person);
        container.appendChild(button);
    });

    document.body.insertBefore(container, document.body.firstChild);

    // Adjust position on scroll
    window.addEventListener('scroll', () => {
        container.style.top = `${window.scrollY} px`;
    });
}

// Initialize buttons on page load
createButtons();