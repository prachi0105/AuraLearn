// import React, { useEffect, useState } from 'react'
// import ReviewCard from './ReviewCard'
// import { useSelector } from 'react-redux';

// function ReviewPage() {
//   const [latestReview, setLatestReview] = useState([]);
//   const { allReview } = useSelector(state => state.review)

//   useEffect(() => {
//     if (allReview) {
//       setLatestReview(allReview.slice(0, 6));
//     }
//   }, [allReview])

//   return (
//     <div className='flex items-center justify-center flex-col py-20 w-full bg-transparent'>
//       <div className="text-center mb-16 px-4">
//         <h1 className='md:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--neon-blue)] via-white to-[var(--neon-purple)] mb-4 drop-shadow-[0_0_15px_rgba(188,19,254,0.3)]'>
//           Real Reviews from Real Learners
//         </h1>
//         <p className='lg:w-2/3 md:w-3/4 mx-auto text-lg text-gray-400 font-light leading-relaxed'>
//           Discover how our Virtual Courses are transforming learning experiences through real feedback from students and professionals worldwide.
//         </p>
//       </div>

//       <div className='w-full max-w-7xl flex items-center justify-center flex-wrap gap-8 px-4'>
//         {latestReview.length > 0 ? (
//           latestReview.map((item, index) => (
//             <ReviewCard key={index} rating={item.rating} image={item.user.photoUrl} text={item.comment} name={item.user.name} role={item.user.role} />
//           ))
//         ) : (
//           <p className="text-gray-500 text-xl italic">No reviews yet. Be the first to share your experience!</p>
//         )}
//       </div>
//     </div>
//   )
// }

// export default ReviewPage











import React, { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard'
import { useSelector } from 'react-redux';

function ReviewPage() {
  const [latestReview, setLatestReview] = useState([]);
  const { allReview } = useSelector(state => state.review)

  useEffect(() => {
    if (allReview) {
      setLatestReview(allReview.slice(0, 6));
    }
  }, [allReview])

  return (
    <div className='flex items-center justify-center flex-col py-24 w-full bg-[#0b0f19]'>
      
      {/* Header Section */}
      <div className="text-center mb-16 px-4">
        <h1 className='text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight'>
          Real Reviews from <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Real Learners</span>
        </h1>
        <p className='lg:w-1/2 md:w-3/4 mx-auto text-lg text-gray-400 font-light leading-relaxed'>
          Discover how our platform is transforming learning experiences through authentic feedback from our community.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className='w-full max-w-7xl flex items-center justify-center flex-wrap gap-8 px-6'>
        {latestReview.length > 0 ? (
          latestReview.map((item, index) => (
            <ReviewCard 
              key={index} 
              rating={item.rating} 
              image={item.user.photoUrl} 
              text={item.comment} 
              name={item.user.name} 
              role={item.user.role} 
            />
          ))
        ) : (
          <div className="py-20 text-center">
            <p className="text-gray-500 font-medium">No reviews yet. Be the first to share your experience!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReviewPage