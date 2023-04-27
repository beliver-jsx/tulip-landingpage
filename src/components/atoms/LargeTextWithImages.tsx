interface largeTextWithImages {
    heading: string,
    discription: string,
    first_image_url: string,
    second_image_url: string
}

const LargeTextWithImages: React.FC<largeTextWithImages> = ({ heading, discription, first_image_url, second_image_url }) => {
    return (
        <div className=' border-red-500'>
            <h1 className='outline-text text-xl' >{heading}</h1>
            <p className='text-lg  text-gray'>{discription}</p>
            <div className='relative h-[800px] mt-[3rem]'>
                <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1682343160245-354923696ce6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60")' }} className='w-[60%] bg-red-500 h-[500px] absolute top-0 right-0 bg-no-repeat bg-cover bg-center'></div>
                <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1682347641333-b9080bfe7af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60")' }} className='w-[60%] bg-purple-500 h-[500px] absolute  left-0 bottom-[0px] bg-no-repeat bg-cover bg-center'></div>
            </div>
        </div>
    )
}

export default LargeTextWithImages