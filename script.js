count = 0;
var content = [];

function validateForm() {
    var isEmpty = false;
    var arrival = document.getElementById('arrival').value;
    var burst = document.getElementById('burst').value;

    if(arrival===""){
        alert("Please enter arrival.");
        isEmpty = true;
    } else if (burst===""){
        alert("Please enter burst.");
        isEmpty = true;
    }
    return isEmpty;
    
}

function addRow(){
    if(!validateForm()){
        count += 1; 
        var job = document.getElementById('job').value;
        var arrival = document.getElementById('arrival').value;
        var burst = document.getElementById('burst').value;
        var table = document.getElementsByTagName('table')[0];
        var newRow = table.insertRow(1);
        
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerHTML = job + count;
        cell2.innerHTML = arrival;
        cell3.innerHTML = burst;

        content.push({
            "job": job + count,
            "arrival": arrival,
            "burst": burst
        });
        var form = document.getElementById("form1").reset(); 
        console.log(content);
    }
        
}

