const data = [];

// lista todo
export const findAll = () => {
    return data;
};

// Buscard por id
export const findOne = (id) => {
    const user = data.find((u) => u.id === Number(id));
}

// crear
export const store = (user) => {
    user.id = data.length + 1;
    data.push(user);
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