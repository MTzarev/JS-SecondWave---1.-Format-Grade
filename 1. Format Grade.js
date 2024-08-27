function formatGrade(grade) {
    let result = "";
    if (grade < 3.00) {
        console.log(`Fail (2)`)
    } else if (grade >= 3.00 && grade < 3.50) {
        result = `Poor`;
        console.log(`${result} (${grade.toFixed(2)})`);
    } else if (grade >= 3.50 && grade < 4.50) {
        result = `Good`;
        console.log(`${result} (${grade.toFixed(2)})`);
    }
    else if (grade >= 4.50 && grade < 5.50) {
        result = `Very good`;
        console.log(`${result} (${grade.toFixed(2)})`);
    } else if (grade >= 5.50) {
        result = `Excellent`;
        console.log(`${result} (${grade.toFixed(2)})`);
    }
}
formatGrade(3.99);
