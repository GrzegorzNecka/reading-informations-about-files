try {
    var stats = fs.statSync(path.join(__dirname, "files", "lorem1.txt"));

    console.log(stats);
} catch(e) {
    console.log(`Wystąpił błąd: ${e.message}.`);
}

