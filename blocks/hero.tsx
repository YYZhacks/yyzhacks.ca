import Event from './/event_details'

function Hero() {
  return (
    <>
      <div className="flex text-white ml-12 mt-24 gap-6 flex-wrap">
          <div className="text-white">
            <h1 className="text-3xl font-bold text-white "> YYZHacks ✈️
            </h1>
            <p className="text-lg">
              <span className="underline decoration-wavy ">
                Missauga's First High School Hackathon Since 2019
              </span>

              <br />

            </p>
            <hr className="mt-4 md:ml-3 border-4 border-blue-500" />
           
              <Event />
</div>
        <div className="items-center">
           <img src="assemble.png"  className="w-50"/>
          </div>
        </div>
        

    </>
  )
}

export default Hero

