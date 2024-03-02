import { createFileRoute } from '@tanstack/react-router'
import { Mail } from 'lucide-react'
import { LockKeyhole } from 'lucide-react'
export const Route = createFileRoute('/login')({
  component: Login,
})

export default function Login() {
  return (
    <>
      <section
        className='
      flex flex-col items-center justify-center h-screen sm:h-screen'
      >
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-24'>
          <figure className='xl:block hidden'>
            <img src='/Image.png' alt='logo-image' />
          </figure>
          <form
            className='w-full sm:w-[613px] h-auto sm:h-[616px] border border-[#E4E7E9] shadow-md rounded-[20px] p-[20px] sm:p-[40px] relative'
            action=''
          >
            <img className='block m-auto' src='/Logo & Text.png' alt='' />
            <h3 className='text-sad font-bold text-[24px]'>Login</h3>
            <div className='flex flex-col'>
              <label className='margin-label text-sad'>Email</label>
              <div className='absolute-icons left-[35px] sm:left-[55px] top-[182px] sm:top-[202px] transform -translate-y-1/2 text-[#8B8E99]'>
                <Mail />
              </div>
              <input
                className='input-border'
                id='email'
                type='email'
                placeholder='jhondoe@gmail.com'
              />
            </div>
            <div className='flex flex-col'>
              <label className='margin-label text-sad'>Password</label>
              <div className='absolute-icons left-[35px] sm:left-[55px] top-[270px] sm:top-[290px] transform -translate-y-1/2 text-sad'>
                <LockKeyhole />
              </div>
              <input
                className='input-border'
                id='password'
                type='password'
                placeholder='Enter your password'
              />
            </div>
            <p className='text-center text-[#3858D6] font-semibold text-base mt-[15px] mb-[15px]'>
              Forgot password?
            </p>
            <button className='block m-auto bg-[#3858D6] w-full sm:w-[535px] h-[44px] text-white font-bold rounded-[8px]'>
              Login
            </button>
          </form>
        </div>
      </section>
      <footer className='w-full bg-black py-4 mt'>
        <p className='text-[#727272]'>
          @copyrigth - Todos los derechos reservado
        </p>
      </footer>
    </>
  )
}
