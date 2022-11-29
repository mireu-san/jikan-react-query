import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// axios를 사용해 react-query 로 데이터 불러오기
function App() {
  const { isLoading, error, data } = useQuery("fetchLuke", () =>
    axios("http://swapi.dev/api/people/1/")
  );
  return (
    <div className="App">
      <h1>스타워즈 API와 함께하는 React Query 예제</h1>
      {error && <div>뭔가 잘못됐군요 ...</div>}

      {isLoading ? (
        <div>루크 스카이워커의 데이터를 불러옵니다 ...</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
export default App;
