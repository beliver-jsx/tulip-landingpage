import OutlineText from "../Animation/OutlineText"
const BackToTop = () => {
    const scrollToTop = () => {
        window?.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className=" flex items-center justify-center flex-col h-screen border-2 border-transparent  ">
            <OutlineText onClick={scrollToTop} text="Back to top" classNames=" 
             4xl:text-h1-4xl 3xl:text-h1-3xl 2xl:text-h1-2xl xl:text-h1-xl lg:text-h1-lg md:text-h1-md text-h1-sm font-extrabold text-center cursor-pointer w-full" />
            <p className="text-center text-sm text-gray"> ©️2023 - Richard William</p>
            <p className="text-center text-sm text-gray mt-2 mb-10">Made with ❣️ by Deepak Vishwakarma</p>
            <p className="text-center text-sm text-gray">Thanks for scrolling!</p>
        </div>
    )
}
export default BackToTop

