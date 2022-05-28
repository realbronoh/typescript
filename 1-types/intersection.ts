{
  /**
   * Intersection Types: &
   * 타입을 모두 만족해야 함!
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    Id: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.Id, person.work);
  }

  internWork({
    name: "jinh",
    score: 1,
    Id: 123,
    work: () => console.log("work!"),
  });
}
