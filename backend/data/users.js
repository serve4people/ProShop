import bcrypt from "bcryptjs";
const users = [
    {
        name :"Admin user",
        email :"admin@example.com",
        password: bcrypt.hashSync('123456',11) ,
        isAdmin:true,
    },
    {
        name :"John Doe",
        email :"john@example.com",
        password: bcrypt.hashSync('123456',11),
    
    },
    {
        name :"Jack Doe",
        email :"jack@example.com",
        password:bcrypt.hashSync('123456',11),
    
    },
]
export default users;