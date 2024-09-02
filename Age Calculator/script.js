

        let userInput = document.getElementById("date");
        userInput.max = new Date().toISOString().split("T")[0];
        let result = document.getElementById("result");

        function calculateAge() {
            let birthdate = new Date(document.getElementById('date').value);
            let today = new Date();

            let years = today.getFullYear() - birthdate.getFullYear();
            let months = today.getMonth() - birthdate.getMonth();
            let days = today.getDate() - birthdate.getDate();

            if (days < 0) {
                months--;
                days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            }

            if (months < 0) {
                years--;
                months += 12;
            }

            result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months and <span>${days}</span> days old.`
        }
    
