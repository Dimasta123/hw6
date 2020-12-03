const students = [
  {
    name: 'Tanya',
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: 'Victor',
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: 'Anton',
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];


const getSubjects = (student) => {
    let subjectArr = Object.keys(student?.subjects);
    subjectArr = subjectArr.map((subjName) => {
        return (subjName[0].toUpperCase() + subjName.slice(1).toLowerCase()).replaceAll("_"," ");
    })
    return subjectArr;
};
console.log(getSubjects(students[0]));


const getAverageMark = (student) => {
   const averageArr = Object.values(student?.subjects).flat(Infinity);
   // console.log(averageArr);
   return parseFloat((averageArr.reduce((total, mark) => total + mark,0) / averageArr.length).toFixed(2));
}
console.log(getAverageMark(students[0]));

const getStudentsInfo = (student) =>
 { return {
   course : student?.course,
   name : student?.name,
   averageMark : getAverageMark(student)
 }

};
console.log(getStudentsInfo(students[1]));

const getStudentsNames = (students) => {
  const studentsNames = Object.keys(students).reduce((studentsNames, i) => {
    return [...studentsNames, Object.values(students[i].name).join('')];
  }, []);

  return studentsNames.sort();
};
console.log(getStudentsNames(students));
const getBestStudent = (students => {
  const studentsObj = {...students};
  const studentsAverageMarks = Object.values(studentsObj).map((e, i) => {
    return getAverageMark(students[i]);
  });
  const indexOfBestAverageMark = studentsAverageMarks.indexOf(Math.max(...studentsAverageMarks));

  return Object.values(studentsObj[indexOfBestAverageMark].name).join("");
});
console.log(getBestStudent(students));

const calculateWordLetters = (words) => {
return words.toLowerCase().split('').reduce((total, letter, i, arr) => {
    total[letter] = arr.filter(letterInArr => letterInArr === letter).length;
    return total;
}, {});
};
console.log(calculateWordLetters("adasdasdasdasdasdasdsadasdasfsgfsdfg"));
