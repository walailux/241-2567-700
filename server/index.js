const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();

const port = 8000;
app.use(bodyParser.json());

let users = [];

let conn = null;
const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8830
    });
}

/* 1.GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
   2.POST /users สำหรับสร้าง users ใหม่บันทึกเข้าไป
   3.GET /users/:id สำหรับดึง users รายคนออกมา
   4.PUT /users/:id สำหรับแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
   5.DELETE /users/:id สำหรับลบ users รายคน (ตาม id ที่บันทึกเข้าไป) 
*/

// path = GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users', async (req, res) => {
    const result = await conn.query('SELECT * FROM users')
    res.json(result[0])
});

// path = POST /users สำหรับสร้าง users ใหม่บันทึกเข้าไป
app.post('/users', async (req, res) => {
    let user = req.body;
    const results = await conn.query('INSERT INTO users SET ?', user)
    console.log('results', results);
    res.json({
        message: 'Create user successfully',
        data: results[0]
    })
})

// path = GET /users/:id สำหรับ users รายคนออกมา 
app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    // หา index ของ user ที่มี id ตามที่ระบุ
    let selectedIndex = users.findIndex(user => user.id == id);
    res.json(users[selectedIndex]);
});

// path = PUT /users/:id ใช้สำหรับแก้ไขข้อมูล user ที่มี id ตามที่ระบุ
app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    let selectedIndex = users.findIndex(user => user.id == id);

    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;
    users[selectedIndex].age = updateUser.age || users[selectedIndex].age;
    users[selectedIndex].gender = updateUser.gender || users[selectedIndex].gender;

    res.json({
        message: 'Update user successfully',
        data: {
            user: updateUser,
            indexUpdated: selectedIndex
        }
    });
});

// path = DELETE /users/:id ใช้สำหรับลบข้อมูล user ที่มี id ตามที่ระบุ
app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    let selectedIndex = users.findIndex(user => user.id == id);

    users.splice(selectedIndex, 1);
    res.json({
        message: 'Delete user successfully',
        indexDeleted: selectedIndex
    });
});

app.listen(port, async (req, res) => {
    await initMySQL()
    console.log('Http Server is running on port ' + port);
});