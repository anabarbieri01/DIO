function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value === 'User'){ //vai mostrar apenas Usuarios para mostrar Admins tem que trocar User por Admin.
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


/* Para executar:
colocar no terminal bash do VS Code -> node script.js
*/