const BASE_URL = 'http://localhost:8000';
let mode = 'CREATE'; // Default mode
let selectedID = '';

window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log('id', id);
    if (id) {
        mode = 'EDIT';
        selectedID = id;

        //1. Fetch user data to edit
        try {
            const response = await axios.get(`${BASE_URL}/users/${id}`);
            console.log('data', response.data);
            const user = response.data;

            //2. Populate the form fields with user data
            document.querySelector("input[name=firstname]").value = user.firstname;
            document.querySelector("input[name=lastname]").value = user.lastname;
            document.querySelector("input[name=email]").value = user.email;
            document.querySelector("input[name=phone]").value = user.phone;
            document.querySelector("input[name=age]").value = user.age;
            document.querySelector("input[name=birthdate]").value = user.birthdate ? new Date(user.birthdate).toISOString().split('T')[0] : '';
            document.querySelector("textarea[name='address']").value = user.address;
            document.querySelector("select[name=education]").value = user.education;
            document.querySelector("input[name=major]").value = user.major;
            document.querySelector("textarea[name='description']").value = user.description;

            // Set gender
            let genderDOMs = document.querySelectorAll("input[name=gender]");
            for (let i = 0; i < genderDOMs.length; i++) {
                if (genderDOMs[i].value === user.gender) {
                    genderDOMs[i].checked = true;
                }
            }

        } catch (error) {
            console.log('error', error);
        }
    }
}

const validateData = (userData) => {
    let errors = [];
    if (!userData.firstName) errors.push('กรุณากรอกชื่อ');
    if (!userData.lastName) errors.push('กรุณากรอกนามสกุล');
    if (!userData.email) errors.push('กรุณากรอกอีเมล');
    if (!userData.phone) errors.push('กรุณากรอกเบอร์โทรศัพท์');
    if (!userData.birthdate) errors.push('กรุณากรอกวันเกิดในรูปแบบ YYYY-MM-DD');
    if (!userData.age) errors.push('กรุณากรอกอายุ');
    if (!userData.gender) errors.push('กรุณาเลือกเพศ');
    if (!userData.address) errors.push('กรุณากรอกที่อยู่');
    if (!userData.education) errors.push('กรุณาเลือกระดับการศึกษา');
    if (!userData.major) errors.push('กรุณากรอกสาขาวิชาที่สนใจ');
    return errors;
};

const submitData = async () => {
    let firstNameDOM = document.querySelector("input[name=firstname]");
    let lastNameDOM = document.querySelector("input[name=lastname]");
    let emailDOM = document.querySelector("input[name=email]");
    let phoneDOM = document.querySelector("input[name=phone]");
    let ageDOM = document.querySelector("input[name=age]");
    let genderDOM = document.querySelector("input[name=gender]:checked") || {};
    let addressDOM = document.querySelector("textarea[name='address']");
    let educationDOM = document.querySelector("select[name='education']");
    let majorDOM = document.querySelector("input[name=major]");
    let descriptionDOM = document.querySelector("textarea[name='description']");
    let messageDOM = document.getElementById('message');

    try {
        let birthdateDOM = document.querySelector("input[name=birthdate]");

        let userData = {
            firstName: firstNameDOM.value,
            lastName: lastNameDOM.value,
            email: emailDOM.value,
            phone: phoneDOM.value,
            age: ageDOM.value,
            birthdate: birthdateDOM.value, 
            gender: genderDOM.value,
            address: addressDOM.value,
            education: educationDOM.value,
            major: majorDOM.value,
            description: descriptionDOM.value
        };


        const errors = validateData(userData);
        if (errors.length > 0) {
            throw {
                message: "กรุณากรอกข้อมูลให้ครบถ้วน",
                message: " ",
                errors: errors
            };
        }

        let message = 'บันทึกข้อมูลเรียบร้อย';
        if (mode === 'CREATE') {
            const response = await axios.post(`${BASE_URL}/users`, userData);
            console.log('response', response.data);
        } else {
            const response = await axios.put(`${BASE_URL}/users/${selectedID}`, userData);
            message = 'แก้ไขข้อมูลเรียบร้อย';
            console.log('response', response.data);
        }

        messageDOM.innerText = message;
        messageDOM.className = "message success";

    } catch (error) {
        console.log('error message', error.message);
        console.log('error', error.errors);

        let htmlData = '<div>';
        htmlData += '<div>' + error.message + '</div>';
        htmlData += '<ul>';

        for (let i = 0; i < error.errors.length; i++) {
            htmlData += '<li>' + error.errors[i] + '</li>';
        }
        htmlData += '</ul>';
        htmlData += '</div>';

        messageDOM.innerHTML = htmlData;
        messageDOM.className = 'message danger';
    }
}
