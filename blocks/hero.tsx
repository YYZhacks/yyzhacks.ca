import Event from './/event_details'

function Hero() {
  return (
    <>
      <div className="flex text-white ml-12 mt-32 gap-6 flex-wrap">
          <div className="text-white">
            <h1 className="text-3xl font-bold text-white "> YYZHacks ✈️
            </h1>
            <p className="text-lg">
              <span className="underline decoration-wavy ">
                Missauga's First High School Hackathon Since 2019
              </span>

              <br />

            </p>
            <hr className="mt-4 sm:ml-3 border-4 border-blue-500" />
           
              <Event />
</div>
        <div className="items-center">
           <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFja2F0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"  className="w-50"/>
          </div>
        </div>
        

    </>
  )
}

export default Hero
