const UserModule = (function() {
    const users = []; 

    function addUser(name) {
        users.push(name);
        console.log(`User ${name} added.`);
    }

    function listUsers() {
        console.log("Registered users:");
        users.forEach(user => console.log(user));
    }

    return {
        addUser,
        listUsers
    };
})();

UserModule.addUser("{$CurrentUser}");
UserModule.addUser("{$CurrentUser}");
UserModule.listUsers();
