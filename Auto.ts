export interface IAuto{
    Id : number;
    Modelo : string;
    Marca : string;
    Anio : number;
    Precio : number;
}

export function totalAutos(autos : IAuto[]): number{
    let contador = 0;
    autos.forEach((p)=>{
        contador = contador + 1;
    })

    return contador;
}