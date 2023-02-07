export function calculateTotal(grades) {
    return grades
        .map(grade => grade < 50 ? grade + 15 : grade)
        .filter(grade => grade >= 50)
        .reduce((total, grade) => total + grade, 0);
}