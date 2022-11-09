/* const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz(); */

//servidor
const nombre = () => {
    const nombres = ["Pepe", "Pancho", "Maria"];
    
    /* setTimeout(() => {
        return nombres
    }, 3000); */

    return new Promise((resolve, reject) => {
       setTimeout(() => {
        if(true){
            resolve(nombres);
        }else{
            reject("No hay nombres")
        }
            
       }, 3000)
    });
}

nombre().then();

console.log(nombres => console.log(nombres));
//console.log(nombre());

/* const url = 'https://pokeapi.co/api/v2/pokemon/1';

const pokedex = () => {
    fetch(url)
    .then((datos) => datos.json())
    .then((pokemon) => console.log(pokemon))
    .catch(error => console.log(error))
};

pokedex(); */

const obtenerNombre = async () => {

    try{
        let nombres = await nombre();
        console.log(nombres);
    }catch(error) {
        console.log(error);
}

obtenerNombre();
