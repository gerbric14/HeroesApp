import { heroes } from "../data/heroes";

export const getHeroesByNAme = (name = '') => {
    
    name = name.toLocaleLowerCase().trim(); //verificar espacios en blanco 
    
    if(name.length === 0 ) return [];

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    );
}