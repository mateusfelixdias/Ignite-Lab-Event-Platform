import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

type Lessons = {
  id: string;
  title: string;
};

export function App() {
  const { data } = useQuery<{ lessons: Lessons[] }>(GET_LESSONS_QUERY);

  return (
  <ul>
    {data?.lessons.map((lesson) => {
      return (
        <>
          <li key={lesson.id}>{lesson.title}</li>
        </>
      )
    })}
  </ul>);
};