function fun(a, b) {
    suma = a + b;
    roznica = a - b;
    mnozenie = a * b;
    console.log("Wynik dodawania wynosi ", suma);
    console.log("Wynik odejmowania wynosi ", roznica);
    console.log("Wynik mnożenia wynos ", mnozenie);
    if (roznica < 0 || mnozenie < 0) {
        console.log("Wynik jest nieprawidłowy");
    }
}

fun(8, 3);