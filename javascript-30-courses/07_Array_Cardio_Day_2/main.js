(function () {
    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2020 },
    ];

    const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123423 },
        { text: 'Nice Nice Nice!', id: 542328 },
    ];

    // Array.some()
    const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

    // const isAdult = people.some(function (person) {
    //     const currentYear = (new Date()).getFullYear();
    //     if (currentYear - person.year >= 19) {
    //         return true;
    //     }
    // });

    console.log({ isAdult });

    // Array.every()
    const allAdult = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);

    // const allAdult = people.every(function (person) {
    //     const currentYear = (new Date()).getFullYear();
    //     if (currentYear - person.year >= 19) {
    //         return true;
    //     }
    // });

    console.log({ allAdult });

    // Array.find()
    const comment = comments.find(comment => comment.id === 2039842);

    // const comment = comments.find(function (comment) {
    //     if (comment.id === 2039842) {
    //         return true;
    //     }
    // });

    console.log(comment);

    // Array.findIdex()

    const index = comments.findIndex(comment => comment.id === 2039842);
    console.log(index);

    // delete 
    // comments.splice(index, 1);
    // console.table(comments);

    // delete
    const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
    ];
    console.table(newComments);
    console.table(comments);
})();