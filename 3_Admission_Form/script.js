const name = document.querySelector('#name');
const fatherName = document.querySelector('#fatherName');
const address = document.querySelector('#address');
const phoneNum = document.querySelector('#phoneNum');
const course = document.querySelector('#course');
const dob = document.querySelector('#dob')
const btn = document.querySelector('#btn');
const renderArea = document.querySelector('table');


btn.addEventListener('click', (e) => {
    e.preventDefault()

    console.log(name.value);
    
    const data = `
                    <tr>
                    <td>${name.value}</td>
                    <td>${fatherName.value}</td>
                    <td>${address.value}</td>
                    <td>${dob.value}</td>
                    <td>${phoneNum.value}</td>
                    <td>${course.value}</td>
                </tr>`
    renderArea.innerHTML += data


})
