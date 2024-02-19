import React, { useMemo, useState } from 'react'

const Hooksmomo = () => {
    const [data, setData] = useState(2);
    const [meta, setMeta] = useState(10);

    const useMemoUpdate = useMemo(function useMemoData() {
        console.log('useMemoData')
        return data * 2
    },[data])


    return (
        <div>
            <h2>{data}</h2>
            <h2>{meta}</h2>
            <h2>{useMemoUpdate}</h2>
            <button onClick={() => setData(data * 3)}>Update Data</button>
            <button onClick={() => setMeta(meta + 10)}>Update Meta</button>
        </div>
    )
}
//  Application perfomance enhance to be use this hooks
export default Hooksmomo
