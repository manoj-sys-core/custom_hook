import UseFetch from "./UseFetch";

const FetchData = () => {
  const [data] = UseFetch("https://api.npoint.io/9045c260b1565daa9e15");
  const [poses] = UseFetch("https://api.npoint.io/4459a9a10e43812e1152");
  return (
    <div className="list_data_main">
      <h1 className="usefetch_heading">Use Fetch Custom Hook</h1>
      <ul>
        {data &&
          data.map((item, index) => (
            <li key={index}>
              <h1>{item?.name}</h1>
              <img src={item.image} alt="data" width="200" />
              <h2>{item?.benifits}</h2>
              <h3>{item?.importance}</h3>
            </li>
          ))}
      </ul>
      <ol>
        {poses.map((item) => (
          <li key={item?.id}>
            <h1>{item?.name}</h1>
            <h2>{item?.benefits}</h2>
            <h3>{item?.time_duration}</h3>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FetchData;
