function areaPerimetro(alto, ancho){
    let area = alto * ancho;
    let perimetro = (2*alto) + (2*ancho);

    return area, perimetro;
}

console.log("Area y perimetro de sala: ", areaPerimetro(5, 2))