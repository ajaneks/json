async function iegutDargoetasNoApi(){//darbiba nenotiks vien aiz otras, var notikt cita laika
    let datiNoApi=await fetch('https://fakestoreapi.com/products/category/jewelery')//dati bus jagaida
    let datiJson=datiNoApi.json //datu iegusana
    console.log(datiJson)
}