document.querySelector('.submit').addEventListener("click", toDo);
      document.querySelector('.clear').addEventListener("click", clearAllTask);
      document.querySelector('.allCompleted').addEventListener("click", markAllTask);
      let title = document.querySelectorAll('input')[0];
      let description = document.querySelectorAll('input')[1];
      let submitButton = document.querySelector(".submit");
      function toDo () {
        addTask(title.value, description.value);
        title.value = "";
        description.value = "";
      }
      
      function addTask (title, description) {
        let table = document.querySelector('.myTable');
        let row = table.insertRow(1);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        let cell4 = row.insertCell(4);
        cell0.innerHTML = `<input class="tick" type="checkbox">`;
        cell1.innerHTML = title;
        cell2.innerHTML = description;
        cell3.innerHTML = `<button class="danger pending btn-style text-light">Pending</button>`;
        cell4.innerHTML = `<div class="buttons"><button class="primary btn-style text-light edit">Edit</button><button class="danger text-light delete btn-style">Delete</button></div>`;
     
        
        // Add Event listener
       let checkbox = row.querySelector(`.tick`);
       let deleteButton = row.querySelector(".delete");
       let editButton = row.querySelector(".edit");
       checkbox.addEventListener("change", markAsCompleted);
       deleteButton.addEventListener("click", deleteTheTask);
       editButton.addEventListener("click", editTheTask);
      }
      
      function markAsCompleted(event) {
        let targetElement = event.target;
        let targetParent = targetElement.parentNode.parentNode;
        let pendingBoxElement = targetParent.querySelector(".pending");
        if (targetElement.checked) {
          pendingBoxElement.innerText ="Completed";
          pendingBoxElement.classList.replace("danger", "success");
        }
        else {
          pendingBoxElement.innerText ="Pending";
          pendingBoxElement.classList.replace("success", "danger");
        }
      }
      function deleteTheTask(event) {
        let targetElement = event.target;
        let targetParent = targetElement.parentNode.parentNode.parentNode;
        targetParent.remove();
      }
      
      function editTheTask(event) {
        let targetElement = event.target;
        let targetParent = targetElement.parentNode.parentNode.parentNode;
        let targetName = targetParent.childNodes[1];
        let targetDescription = targetParent.childNodes[2];
        targetName.innerText = prompt("Enter New Title");
        targetDescription.innerText = prompt("Enter New Description");
      }
      
      function clearAllTask() {
        let elementsToRemove = document.querySelectorAll("tr");
        let i = 1;
        while (i < elementsToRemove.length) {
          elementsToRemove[i++].remove();
        }
        
      }
      
      function markAllTask() {
        let targetElement = document.querySelectorAll("tr");
        for (let i = 1; i < targetElement.length; i++) {
          let elementToTick = targetElement[i].firstChild.firstChild;
          let elementToMark = targetElement[i].childNodes[3].firstChild;
          elementToMark.innerText = "Completed";
          elementToMark.classList.replace("danger","success");
          elementToTick.checked = true;
        }
      }