export async function getUsers(URL) {
    try {
        const response = await fetch(`${URL}`);
        const users = await response.json();

        const selectedUsers = users.map(user => ({
            name: user.name,
            avatar: user.avatar,
            role: user.role
        }));

        console.log(selectedUsers);
    } catch (error) {
        console.error("Error fetching users: ", error);
    }
}
//En construccion