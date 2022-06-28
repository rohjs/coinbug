import useSWR from 'swr'
import axios from 'lib/axios'

export default function List({ title }: { title: number }) {
  const { data } = useSWR('/coins/list', fetcher, {
    suspense: true,
  })

  return (
    <div>
      <h1>{title}</h1>
      {JSON.stringify(data[0].symbol)}
      <hr />
      {JSON.stringify(data[1].symbol)}
      <hr />
      {JSON.stringify(data[10].symbol)}
    </div>
  )
}

function fetcher() {
  return axios.get('/coins/list').then((res) => {
    console.log('done')
    console.log(1, res.data?.data?.total_market_cap?.btc)
    console.log(1, res.data?.data?.total_market_cap?.usd)
    return res.data
  })
}
