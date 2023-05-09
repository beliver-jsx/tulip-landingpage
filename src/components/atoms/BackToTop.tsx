const BackToTop = () => {
    const scrollToTop = () => {
        window?.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="pb-[15rem] mt-[15rem]">
            <OutlineText onClick={scrollToTop} text="Back To Top" classNames="
            

            4xl:text-[10rem]
                        3xl:text-[112px]
                        2xl:text-[112px]
                        xl:text-[96px]
                        lg:text-[96px]
                        md:text-[80px]
                        text-[52px]
                        
                        font-[800]
            
            
            text-center cursor-pointer w-full" />
            <p className="text-center text-sm text-gray"> ©️2023 - Richard William</p>
            <p className="text-center text-sm text-gray mt-2 mb-10">Made with ❣️ by Deepak Vishwakarma</p>
            <p className="text-center text-sm text-gray">Thanks for scrolling!</p>
        </div>
    )
}
export default BackToTop


import OutlineText from "../Animation/OutlineText"