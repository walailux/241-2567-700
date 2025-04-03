const BASE_URL = 'http://localhost:8000';
window.onload = async () => {
    await loadData();
};
//1. load user ทั้งหมด จาก api ที่เตรียมไว้
//2. นำ user ทั้งหมด โหลดกลับเข้าไปใน html

const loadData = async () => {
    console.log('user page loaded');
    //1.load user ทั้งหมด จาก api ที่เตรียมไว้
    const response = await axios.get(`${BASE_URL}/users`);

    console.log(response.data);

    const userDOM = document.getElementById('user');

    //2. นำ user ทั้งหมด โหลดกลับเข้าไปใน html
    //สร้างแถวของข้อมูลในตาราง
    let htmlData = '';
    for (let i = 0; i < response.data.length; i++) {
        const user = response.data[i];
        htmlData += `
            <tr>
                <td>${user.id}</td>
                <td>${user.firstname}</td>
                <td>${user.lastname}</td>
                <td>
                    <a href='index_form.html?id=${user.id}'><button>Edit</button></a>
                    <button class='delete' data-id='${user.id}'>Delete</button>
                </td>
            </tr>
        `;
    }

    htmlData += '</div>';
    userDOM.innerHTML = htmlData;

    //3. ลบ user
    const deleteDOMs = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener('click', async (event) => {
            //ดึง id ของ user ที่ต้องการลบ
            const id = event.target.dataset.id;
            try{
                await axios.delete(`${BASE_URL}/users/${id}`);
                loadData(); //recursive function = เรียกใช้ฟังก์ชันตัวเอง
            }catch(error){
                console.log('error',error);
            }
        });
    }
}