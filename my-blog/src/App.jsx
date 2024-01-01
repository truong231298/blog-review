
import blogImage from './assets/illustration-article.svg'
import faceImage from './assets/image-avatar.webp'


function App() {

  return (
    <main className='min-h-screen flex items-center justify-center bg-yellow-400 p-8'>
      {/*shadow card*/}
      <section className='relative group'>
        {/*Image card*/}
        <div className='relative bg-white p-4 rounded-2xl border border-black flex flex-col gap-4 max-w-[365px] z-20'>
          <img src={blogImage} alt="" className='rounded-lg' />
          {/*heading*/}
          <div className='text-black bg-yellow-400 rounded px-3 py-1 text-base w-fit font-bold '>Learning</div>
          {/*date*/}
          <p className='text-sm font-semibold text-gray-700'> Published 21 Dec 2023</p>

          {/*paragrap*/}
          <h1 className='text-2xl font-bold cursor-pointer hover:text-yellow-400'>HTML & CSS foundations</h1>
          <p className='text-gray-500'>These languages are the backbone of every website, defining structure, content, and presentation.

            Greg Hooper</p>
          {/*name*/}
          <div className='flex items-center gap-4'>

            <img className='h-8 w-8' src={faceImage} alt="" />
            <p className='font-bold text-sm'>Greg Hooper</p>
          </div>
        </div>
        <div className="absolute rounded-2xl bg-black h-full w-full z-10 top-2 left-2 group-hover:top-4 group-hover:left-4 transition-all">

        </div>
      </section>


    </main>
  )
}

export default App
