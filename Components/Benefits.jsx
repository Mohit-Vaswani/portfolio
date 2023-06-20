const Benefits = () => {
    return (
        <div className="w-full h-screen dark-blue-bg2 relative flex align-top justify-center flex-col gap-10 text-center py-10 px-10">
            <div className="horizontal-line absolute top-0"></div>
            <h2 className="text-6xl">Benefits</h2>
            <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
                <div className="h-56 grid-box">
                    <p>Simple Test 1</p>
                </div>
                <div className="col-start-3 h-56 grid-box">
                    <p>Simple Test 2</p>
                </div>
                <div className=" h-56 grid-box">
                    <p>Simple Test 3</p>
                </div>
                <div className=" h-56 grid-box">
                    <p>Simple Test 4</p>
                </div>
                <div className="row-start-1 col-start-2 col-span-2 h-56 grid-box">
                    <p>Simple Test 5</p>
                </div>
            </div>
            <div className="horizontal-line absolute top-0"></div>
        </div>
    )
}

export default Benefits