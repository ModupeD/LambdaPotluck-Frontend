export const listPotlucks = () => {
    return JSON.parse(window.localStorage.getItem('potlucks') || '[]');
};

export const getPotluck = (id) => {
    return listPotlucks().find(p=>p.id === parseInt(id)) || {};
}

export const createPotluck = (potluck) => {
    const potlucks = listPotlucks();
    window.localStorage.setItem('potlucks', JSON.stringify([...potlucks, potluck]));
}

export const editPotluck = (potluck) => {
    const potlucks = listPotlucks().map(p=>{
        return p.id === potluck.id ? potluck : p;
    });
    window.localStorage.setItem('potlucks', JSON.stringify(potlucks));
}