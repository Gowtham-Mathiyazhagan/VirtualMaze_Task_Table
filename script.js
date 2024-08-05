// table data
const data = [
  { name: "gowtham", role: "frontend developer", location: "chennai" },
  { name: "ravi", role: "backend developer", location: "covai" },
  { name: "sachin", role: "UI/UX developer", location: "thanjavur" },
  { name: "vijay", role: "java developer", location: "trivarur" },
  { name: "ram", role: "dotnet developer", location: "trichy" },
  { name: "aswin kumar", role: "game developer", location: "trichy" },
  { name: "ravichandaran", role: "python developer", location: "selam" },
  { name: "mohan", role: "flutter developer", location: "namakkal" },
  { name: "billa", role: "react native developer", location: "vellore" },
  { name: "prabhu", role: "backend developer", location: "malakottai" },
  { name: "ashik", role: "dotnet developer", location: "trichy" },
];

// selector
const tableBody = document.querySelector("#tbody");

// id only determine the which data to edit and delete
let id = null;

// function to render the table
const renderTable = () => {
  tableBody.innerHTML = "";
  data.map((val, i) => {
    let append = "";
    let inputName = `<td><input type='text' onchange="handleChangeData(event,'name')" value='${val.name}' /></td>`;
    let inputRole = `<td><input type='text' onchange="handleChangeData(event,'role')" value='${val.role}' /></td>`;
    let inputLocation = `<td><input type='text' onchange="handleChangeData(event,'location')" value='${val.location}' /></td>`;
    let editIcon = `<td><i class="fa-solid fa-pen-to-square" onclick="handleEdit(${i})"></i></td>`;
    let saveIcon = `<td><i class="fa-solid fa-floppy-disk" onclick="handleSave()"></i></td>`;
    let deleteIcon = `<td><i class="fa-solid fa-trash ${
      id !== null ? "deactive" : ""
    }" onClick="handleDelete(${i})"></i></td>`;
    append = `
		<tr>
		  <td>${i + 1}</td>
		  ${id === i ? inputName : `<td>${val.name}</td>`}
		  ${id === i ? inputRole : `<td>${val.role}</td>`}
		  ${id === i ? inputLocation : `<td>${val.location}</td>`}
		  ${id === i ? saveIcon : editIcon}
		  ${deleteIcon}
		</tr>
	  `;
    tableBody.innerHTML += append;
  });
};

// function to handle edit
const handleEdit = (i) => {
  id = i;
  renderTable();
};

// function to handle edit the data
const handleChangeData = (e, key) => {
  let value = e.target.value;
  data[id][key] = value.trim();
  renderTable();
  console.log(data);
};

// function to handle delete
const handleDelete = (index) => {
  data.splice(index, 1);
  console.log(data);
  renderTable();
};

// function to handle save
const handleSave = () => {
  id = null;
  renderTable();
};

// initial render
renderTable();
