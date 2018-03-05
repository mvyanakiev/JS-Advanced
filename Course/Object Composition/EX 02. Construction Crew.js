function drinkingWorker(input) {

    if (input.handsShaking === true) {
        input.bloodAlcoholLevel += input.experience * input.weight * 0.1;
        input.handsShaking = false;
    }
    return input;
}



let a = drinkingWorker({
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
});

console.log(a);



