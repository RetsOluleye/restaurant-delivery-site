import React from 'react'

const Home = () => {
  const image = "https://res.cloudinary.com/dwq6bgyul/image/upload/v1740673270/Group_111_fxkzja.png"
  const food1 = "https://res.cloudinary.com/dwq6bgyul/image/upload/v1740947973/Rectangle_8_taftor.png"
  const food2 = "https://res.cloudinary.com/dwq6bgyul/image/upload/v1740947560/Rectangle_8_1_r2mekc.png"
  const food3 = "https://res.cloudinary.com/dwq6bgyul/image/upload/v1740949326/Rectangle_8_p4bjpa.png"
  const menu1 = "https://res.cloudinary.com/dwq6bgyul/image/upload/v1740951653/Group_112_1_wntxxy.png"
  const menu2 = "https://res.cloudinary.com/dwq6bgyul/image/upload/v1740951722/Group_113_gfpwvz.png"
  const menu3 = "https://res.cloudinary.com/dwq6bgyul/image/upload/v1740951753/Group_114_rtwqiu.png"
  const menu4 = "https://res.cloudinary.com/dwq6bgyul/image/upload/v1740951813/Group_115_yzy88x.png"
  const menu5 = "https://res.cloudinary.com/dwq6bgyul/image/upload/v1740951833/Group_116_ra0ebz.png"
  const menu6 = "https://res.cloudinary.com/dwq6bgyul/image/upload/v1740952045/Group_117_m2j3ky.png"
  const work1 = "https://res.cloudinary.com/dwq6bgyul/image/upload/v1740953491/Group_10_1_oe8jpv.png"
  const work2 = "https://res.cloudinary.com/dwq6bgyul/image/upload/v1740953584/Group_16_thcm5a.png"

  return (
    <>
    
    
    <main className='container h-[1000vh]'>

    {/*mobile view*/}
    <div className='flex justify-center items-center md:hidden mx-5'>
    <div className='bg-[#E2E2E2] w-88 h-72 rounded-2xl text-center py-10 space-y-3 '>
      <p className='text-[#03081F] text-[15px]'>Order restaurant food, takeaway and groceries</p>
      <p className='text-[#03081F] font-bold text-3xl'>Feast Your Senses,<br /><span className='text-[#FC8A06] font-bold'> Fast and Fresh</span></p>
      <p className='text-[#03081F] text-[15px]'>Enter a postcode to see what we deliver</p>
    </div>
    </div>

    {/*Desktop View*/}
    <div className='hidden md:block md:mx-20 lg:mx-10'>
    <img src={image} alt="" />
    
    </div>

          {/*Discount section*/}
        <div className='md:hidden mt-10'>
      <div className='flex justify-between mx-7'>
    <div className='pt-2'>
            <p className='text-black font-bold'>Up to -40% Discount</p>
        </div>
      <div>
      <button className='border-2 border-[#FC8A06] rounded-full text-[#fc8a06]  '>Pizza and Fast Food</button>
      </div>
      </div>
      </div>

      
       {/*Desktop View*/}
      <div className='hidden md:block'>
        <div className='flex justify-between mt-15  mx-10'>
          
        <div className='pt-2'>
            <p className='text-black font-bold'>Up to -40% order.Nigeria deals</p>
        </div>
        <div className=''>
            <button className='text-black'>Vegan</button>
            <button className='text-black'>Sushi</button>
            <button className='border-2 border-[#FC8A06] rounded-full text-[#fc8a06]  '>Pizza and Fast Food</button>
            <button className='text-black'>Others</button>
        </div>

        </div>
        </div>



        <div className='mx-7 space-y-5 mt-7 md:flex md:justify-between md: space-x-5'>
          <div><img className='w-[350px]' src={food1} alt="" /></div>
          <div><img className='w-[350px]' src={food2} alt="" /></div>
          <div><img className='w-[350px]' src={food3} alt="" /></div>
        </div>


          {/*menu section*/}
          <div className='mt-5 mx-10'>
            <p className='text-black font-bold'>Popular Categories</p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-6 md:space-x-2 space-y-10 space-x-10 mt-7 mx-5'>
            
            <img className='w-[170px]' src={menu1} alt="" />
            <img className='w-[170px]' src={menu2} alt="" />
            <img className='w-[170px]' src={menu3} alt="" />
            <img className='w-[170px]' src={menu4} alt="" />
            <img className='w-[170px]' src={menu5} alt="" />
            <img className='w-[170px]' src={menu6} alt="" />
          </div>

          {/*work with us*/}
          <div className='space-y-5 md:flex md:justify-between lg::mx-15 pt-10 '>
            <div className='pt-10 mx-5 md:flex md:justify-between md:space-x-10 md:mx-15 lg:space-x-17 space-y-12 lg:mx-15'>
            <img className='w-[400px] md:w-[350px] lg:w-[500px] ' src={work1} alt="" />
            <img className=' w-[400px] md:w-[350px] md:h-[200px] lg:w-[500px] lg:h-[290px] ' src={work2} alt="" />
          </div>
          </div>


    </main>
    
    
    </>
  )
}

export default Home
