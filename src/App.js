import React, {useState} from 'react';
import './App.css';
import useFetchJobs from './components/useFetchJobs.component'
import { Container } from 'react-bootstrap';
import JobsPagination from './components/JobsPagination'
import Job from './components/Job';
import SearchForm from './components/SearchForm';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(3);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e){
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams(preParams => {
      return {...preParams, [param]: value}
    })
  }

  return (
    <Container className="my-3">
      <h1 className="mb-4">Github Jobs</h1>
      <SearchForm params = {params} onParamChange ={handleParamChange}/>
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
      {loading && <h1>loading...</h1>}
      {error && <h1>Error, try refreshing</h1>}
      {jobs.map(job => (
        <Job key ={job.id} job = {job} />
      ))}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
    </Container>
  );
}

export default App;
