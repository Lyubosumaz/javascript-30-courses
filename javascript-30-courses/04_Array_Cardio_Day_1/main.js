(function () {
    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    ];

    const people = ['Back, Glenn', 'Becker, Carl', 'Becket, Samuel', 'Beddoes, Mick',
        'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
        'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
        'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas',
        'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
        'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
        'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Stave', 'Billings, Josh', 'Biondo, Frank',
        'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
    ];

    // Array.protorype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

    // const fifteen = inventors.filter(function (inventor) {
    //     if (inventor.year >= 1500 && inventor.year < 1600) {
    //         return true; // keep it!
    //     }
    // });

    console.table(fifteen);

    // Array.protorype.map()
    // 2. Give us an array of the first and last names
    const fullNames = inventors.map(inventor => (`${inventor.first} ${inventor.last}`));

    // const fullNames = inventors.map(function (inventor) {
    //     return inventor.first + ' ' + inventor.last;
    // });

    console.log(fullNames);

    // Array.protorype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

    // const ordered = inventors.sort(function (firstPerson, secondPerson) {
    //     if (firstPerson.year > secondPerson.year) {
    //         return 1;
    //     } else {
    //         return -1;
    //     }
    // });

    console.table(ordered);

    // Array.protorype.reduce()
    // 4. How many years did all inventors live?
    const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);

    console.log(totalYears)

    // 5. Sort the inventors by years lived

    const oldest = inventors.sort(function (firstPerson, secondPerson) {
        const lestGuy = firstPerson.passed - firstPerson.year;
        const nextGuy = secondPerson.passed - secondPerson.year;
        return lestGuy > nextGuy ? -1 : 1;
    });

    console.table(oldest)

    // 6. Sort the people alphabetically by last name

    const alphabetically = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? 1 : -1;
    });

    console.log(alphabetically)

    // 7. Sum up the instances of each of these

    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

    const transportation = data.reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 0;
        }
        obj[item]++;
        return obj
    }, {});

    console.log(transportation);
})();