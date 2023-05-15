### use

- await과 유사한 프로미스를 인자로 받는 새로운 React 함수
- Next.js에서는 `use`와 `fetch`를 같이 쓰는 것을 권장하지 않는다. (링크)['https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#use-in-client-components']

### useEffect

- useEffect의 경우 CSR에서만 쓸 수 있다. 따라서 이를 쓰려면 'use client' 명시가 필요하다.
