
// Template for adding participant sections
function participantTemplate(count) {
    return `<section class="participant${count}">
     <p>Participant ${count}</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
    </section>`;
}

// add participants button functionality
const participantButton = document.querySelector("#add");

let participantCount = 1;

participantButton.addEventListener("click", function () {
    participantCount++;
    participantButton.insertAdjacentHTML("beforebegin", participantTemplate(participantCount)); 
});


// display success message after submitting form
function successTemplate(info) { 
    info = {
    name: document.getElementById("adult_name").value,
    participants: participantCount,
    totalFees: totalFees(),
    };
    return `<div class="success">
    <h2>Thank you ${info.name} for registering!</h2>
    <p>You have registered ${info.participants} participant(s) and owe ${info.totalFees} in Fees.</p>
    </div>`;
}

function submitForm(event) {
    event.preventDefault();
    const formCode = document.querySelector(".testbox");
    formCode.style.display = "none";
    const successMessage = document.createElement("div");
    successMessage.innerHTML = successTemplate(participantCount);
    document.body.appendChild(successMessage);
}
const form = document.querySelector("form");
form.addEventListener("submit", submitForm);


// Find total fees
const feeInput = document.querySelector("#fee");

function totalFees() {  
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    feeElements = [...feeElements];
    let total = 0;
    feeElements.forEach((feeElement) => {
        const feeValue = parseFloat(feeElement.value);
        if (!isNaN(feeValue)) {
            total += feeValue;
        }
    });
    return total;
}