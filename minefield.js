//случайное минное поле
const roadMines = Array.from(new Array(10), () => Math.random() < 0.5); 
console.log('Road mines:', roadMines.join());

// ========== 1 solution ==========

let tankHealth = 2;
for (let i = 0; i < roadMines.length; ++i) {
	if (roadMines[i] === true && tankHealth !== 1) {
		--tankHealth;
		console.log(`танк переместился на позицию ${i+1}, танк поврежден`);
	} else if(roadMines[i] === true && tankHealth === 1) {
		console.log(`танк переместился на позицию ${i+1}, танк уничтожен` );
		break;
	} else {
		console.log(`танк переместился на позицию ${i+1}`);
	}
}

console.log('========== 2 solution ==========');
// ========== 2 solution ==========

tankHealth = 2;

for (let i = 0; i < roadMines.length; i++) {
    console.log(`Танк переместился на позицию ${i + 1}.`);
    
    if (roadMines[i] === true) {
        tankHealth--;
    
        if (tankHealth > 0) {
            console.log('Танк повреждён.');
        } else {
            console.log('Танк уничтожен.');
            break;
        }
    }
}
