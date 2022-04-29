function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value === 'User'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Luca', 'Admin');
usuarios.set('Ana', 'Admin');
usuarios.set('Claudia', 'User');

console.log(getAdmins(usuarios));
