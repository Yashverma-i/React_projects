(async function (){
   const data= await fetch("./data.json")
    const res = await data.json();
    console.log(res); 
    let employees = res;
    let selectedEmployeeID = employees[0].id;
    let selectedEmployee = employees[0];

    const employeeList = document.querySelector(".employees__name--list")
    const employeeInfo = document.querySelector(".employees__single--list")

// selected employeee
employeeList.addEventListener("click", (e)=>{
    if(e.target.tagName === "SPAN" && selectedEmployeeID !== e.target.id){
        selectedEmployeeID = e.target.id;
        renderEmployees();
        renderSingleEmployee();
    }

   if (e.target.tagName === "I") {
    employees = employees.filter(emp => emp.id !== Number(e.target.parentNode.id));
        if(selectedEmployeeID === Number(e.target.parentNode.id)){
            selectedEmployeeID = employees[0]?.id || -1;
            selectedEmployee = employees[0] || {};
            renderSingleEmployee()
        }
    renderEmployees();
   }
})

  //   add employee 
  const createEmployee = document.querySelector(".createEmployee")
  const cross = document.querySelector(".cross")
  const addEmployee = document.querySelector(".addemployee")
  const addemployeeForm = document.querySelector(".add__employee--create")


  createEmployee.addEventListener("click", ()=>{
    addEmployee.style.display = "flex";
  })
  cross.addEventListener("click",()=>{
    addEmployee.style.display = "none";
  })

  addemployeeForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const formdata = new FormData(addemployeeForm)
    const values = [...formdata.entries()]
    console.log(values);
    addEmployee.style.display = "none";

    let empData = {};
    values.forEach((val) =>{
        empData[val[0]] = val[1];
    }); 
    empData.id = employees[employees.length - 1].id + 1;
    employees.push(empData);
    renderEmployees();
})

    const renderEmployees = () => {
        employeeList.innerHTML = "";
        employees.forEach((emp) => {
            const employee = document.createElement("span");
            employee.classList.add("employee__name--item");

            if(parseInt(selectedEmployeeID,10) === emp.id){
                employee.classList.add("selected");
                selectedEmployee = emp; 
            }
            employee.setAttribute("id", emp.id);
            employee.innerHTML = `${emp.firstname} ${emp.lastname} <i class="employeeDelete">❌</i>`;

            employeeList.append(employee)
        });
    }; 
    renderEmployees();

    const renderSingleEmployee = () =>{
        if(selectedEmployeeID === -1) {
        employeeInfo.innerHTML = "";
        return;
        }

        employeeInfo.classList.add("employee__data");
        employeeInfo.innerHTML = `
        <img src="${selectedEmployee.image_url}" height="250px" width="250px" alt="error"/><br><br>
        <span class="employee__single--heding">${selectedEmployee.firstname} ${selectedEmployee.lastname} | Age - ${selectedEmployee.age}</span><br>
        <span>Email - ${selectedEmployee.email} </span><br>
        <span>Dob - ${selectedEmployee.dob} </span> <br>
        <span>Contact Me - ${selectedEmployee.contactno} </span>`
    }
   if(renderSingleEmployee){
    renderSingleEmployee();
   }
})();

