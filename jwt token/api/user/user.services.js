const pool = require("../../config/database");


module.exports ={
    create: (data, callBack) =>{
        pool.query(
            `insert into registration(firstName,lastName,gender, email, password, number)
                values(?,?,?,?,?,?)`,
                [
                    data.first_name,
                    data.last_name,
                    data.gender,
                    data.email,
                    data.password,
                    data.number

                ],
                (error, results, fields) => {
                    if (error){
                    callBack(error);
                    }
                    return callBack(null, results);
                }
        );
    },
    getUsers: callBack => {
        pool.query(
            `select id,firstName,lastName,gender,email,password,number from registration`,
        [],
        (error, results,fields) =>{
            if(error){
            return callBack(error);
            }
            return callBack(null, results);
        }
        );
    },
    getUsersByUserId: (id, callBack) => {
        pool.query(
            `select id,firstName,lastName,gender,email,number from registration where id = ?`,
        [id],
        (error, results,fields) =>{
            if(error){
             callBack(error);
            }
            return callBack(null, results[0]);
        }
        );
    },
    updateUser: (data, callBack) => {
            pool.query(
                `update registration set firstName=?,lastName=?,gender=?,email=?,password=?,number=? where id = ?`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, results,fields) =>{
                 if(error){
                 callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteUser: (data, callBack) => {
            pool.query(
                `delete from registration where id = ?`,
            [data.id],
            (error, results,fields) =>{
                 if(error){
                 return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUserEmail:(email,callBack) =>{
        pool.query(
            `SELECT * FROM registration WHERE email = ?`,
            [email],
            (error, results, fields) =>{
                if(error) {
                 return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }

};