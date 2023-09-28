let submitBtn = document.getElementById("sendMessege");
submitBtn.addEventListener("click", () => {
    let userName = document.getElementById("name");
    let email_Input = document.getElementById("emain_Input");
    let textarea = document.getElementById("textarea");
    if (email_Input.value === "") {
        email_Input.value = "Please enter your email before submit";
        email_Input.style.color = "red";
        setTimeout(() => {
            email_Input.value = "";
            email_Input.style.color = "black";
        }, 2000);
    }
    if (userName.value === "") {
        userName.value = "Please enter your Name before submit";
        userName.style.color = "red";
        setTimeout(() => {
            userName.value = "";
            userName.style.color = "black";

        }, 2000);
    }
    else {
        const url = `http://localhost:9000`
        const payload = {
            name: userName.value,
            email: email_Input.value,
            message: textarea.value
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify the content type (JSON in this example)
                // Add any additional headers if needed
            },
            body: JSON.stringify(payload) // Convert the data to JSON format
        }).then(response => {
            console.log(response.ok);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the response as JSON
        }).then(data => {
            // Handle the response data
            console.log(data);
            if (data.message === "Success") {
                let formSuccess = document.querySelector(".formSuccess");
                formSuccess.style.display = "flex";
                setTimeout(() => {
                    formSuccess.style.display = "none";
                }, 2000);
                userName.value = "";
                email_Input.value = "";
                formSuccess.value = "";
                textarea.value = "";
            }
            else {
                console.log("Something went wrong");
            }
        }).catch(error => {
            // Handle errors
            console.error('There was a problem with the fetch operation:', error);
        });





    }

})