const data = [];
let last_id = 0;

// lista todo
export const findAll = () => {
    return data;
};

// Buscard por id
export const findOne = (id) => {
    const user = data.find((u) => u.id === Number(id));
    return user;
}

// crear
export const store = (user) => {
    //user.id = data.length + 1;
    user.id = last_id + 1;
    data.push(user);
    last_id = user.id;
}

//update

export const update = (id, user) => {
    const index = data.findIndex((u) => u.id === Number(id));

    data[index] = {
        ...data[index],
        ...user,
    };
};

//remove

export const remove = (id) => {
    const users = data.filter((u) => u.id !== Number(id));
    // Limpiar array
    data.length = 0;
    data.push(...users);
}